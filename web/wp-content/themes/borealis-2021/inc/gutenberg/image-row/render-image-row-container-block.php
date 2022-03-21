<?php

/**
 *
 * Render Image Row Container Block
 *
 * @package Borealis AI
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
        $namespace . '/image-row-container',
        array(
            'render_callback' => 'pg_render_image_row_container_block',
        )
    );
}

if (!function_exists('pg_render_image_row_container_block')) {
    /**
     * Render out image row container block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_image_row_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <div class="custom-component component-dark animated-element my-10">
            <div aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="flex flex-col md:flex-row justify-between gap-6">
                <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                    <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                <?php endforeach; ?>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
