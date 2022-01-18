<?php
/**
 *
 * Render Callout Container
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
        $namespace . '/callout-container',
        array(
            'render_callback' => 'pg_render_callout_container_block',
            'script' => 'carousel',
        )
    );
}

if ( ! function_exists( 'pg_render_callout_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_callout_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'columns' => '3',
            'description' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'callout-column-slider';
        ob_start();
        ?>
            <div>
                <?php if (!empty($attributes->title)): ?>            
                    <h2 class="heading_one mb-xs-2"><?php echo esc_html($attributes->title) ?></h2>
                    <?php if (!empty($attributes->description)): ?>
                        <?php echo wpautop($attributes->description); ?>
                    <?php endif; ?>
                <?php endif; ?>
                <div>
                    <div class="row">
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php 
                                $classes = 'col-lg-' . $attributes->columns;
                                $classes .= intval($index) + 1 > 12 / intval($attributes->columns) ?  ' mt-lg-10' : '';
                            ?>
                            <div class="<?php echo esc_attr($classes) ?>">
                                <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
