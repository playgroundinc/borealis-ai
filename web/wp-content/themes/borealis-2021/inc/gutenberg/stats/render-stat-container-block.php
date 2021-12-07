<?php
/**
 *
 * Render Stat Container
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
        $namespace . '/stats-container',
        array(
            'render_callback' => 'trmc_render_stats_container_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_stats_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_stats_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'callout-column-slider';
        ob_start();
        ?>
            <div class="custom-component statistic-block">
                <div class="container container-fluid animated-element">
                    <?php if (!empty($attributes->title)): ?>
                        <div class="mb-xl-14 mb-xs-5 fc-xl-50">                        
                            <h2 class="heading_one m-xs-0"><?php echo wp_kses($attributes->title, $allowed_html) ?></h2>
                            <?php if (!empty($attributes->description)): ?>
                                <div class="mt-xs-3">
                                    <?php echo wpautop($attributes->description); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                    <div class="flex statistic-block__container">
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
