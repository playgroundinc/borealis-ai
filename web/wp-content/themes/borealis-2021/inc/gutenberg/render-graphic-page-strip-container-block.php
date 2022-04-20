<?php

/**
 *
 * Render Page Strip
 *
 * @package Trimac
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/page-strip-graphic-container',
        array(
            'render_callback' => 'pg_render_graphic_page_strip_container_block',
        )
    );
}

if (!function_exists('pg_render_graphic_page_strip_container_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_graphic_page_strip_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
            'column_amount' => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <div id="<?php echo $attributes->anchor_id ?>" class="graphic-page-strip custom-component component-dark animated-element">
            <?php if (!empty($attributes->column_amount === 'three')) : ?>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-6/12">
                        <?php echo wp_kses(render_block($block['innerBlocks'][0]), $allowed_html); ?>
                    </div>
                    <div class="w-full md:w-6/12 h-full">
                        <?php echo wp_kses(render_block($block['innerBlocks'][1]), $allowed_html); ?>
                        <?php echo wp_kses(render_block($block['innerBlocks'][2]), $allowed_html); ?>
                    </div>
                </div>
            <?php else : ?>
                <div aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="flex flex-col md:flex-row">
                    <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                        <div class="w-full md:w-6/12">
                            <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
<?php
        return ob_get_clean();
    }
}
