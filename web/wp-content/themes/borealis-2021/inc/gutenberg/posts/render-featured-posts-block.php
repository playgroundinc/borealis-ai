<?php
/**
 *
 * Render Featured Posts Block
 *
 * @package Borealis
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
        $namespace . '/featured-posts-container',
        array(
            'render_callback' => 'pg_render_featured_posts_block',
        )
    );
}

if ( ! function_exists( 'pg_render_featured_posts_block' ) ) {
    /**
     * Render out Featured Posts block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_featured_posts_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        $fields     = array(
            'columns' => '12',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        $full = intval($attributes->columns) === 12;
        ?> 
            <div class="container md:flex pt-22">
                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                    <div class="<?php echo $full ? esc_attr('basis-full') : esc_attr('basis-1/2 md:pr-3 md:nth-child-2:pl-3 md:nth-child-2:pr-0 nth-child-2:pt-12 md:nth-child-2:pt-0') ?>">
                        <?php echo pg_render_featured_post($inner_block, $full); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php
        return ob_get_clean();
    }
}
