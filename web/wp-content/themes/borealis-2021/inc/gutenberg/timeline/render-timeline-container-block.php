<?php
/**
 *
 * Render Timeline Container
 *
 * @package Trimac
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if ( function_exists( 'register_block_type' ) ) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/timeline-container',
        array(
            'render_callback' => 'trmc_render_timeline_container_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_timeline_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_timeline_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="custom-component pv-xs-5">
                <div class="container container-fluid">
                    <?php if (!empty($attributes->title)): ?>
                        <div class="fc-xl-50 fc-lg-70 fc-xs-100 copy--center mh-xs-auto mb-xs-15">
                            <h2 class="heading_one animated-element"><?php echo esc_html($attributes->title); ?></h2>
                        </div>
                    <?php endif ;?>
                    <ul>
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                        <?php endforeach; ?>                
                    </ul>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
