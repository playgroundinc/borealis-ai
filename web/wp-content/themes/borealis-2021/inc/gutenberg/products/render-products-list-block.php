<?php

/**
 *
 * Render Products Container
 *
 * @package Borealis
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
        $namespace . '/product-container',
        array(
            'render_callback' => 'pg_render_products_container_block',
        )
    );
}

if (!function_exists('pg_render_products_container_block')) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_products_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'background_color' => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();

        ob_start();
?>
        <div id="<?php echo $attributes->anchor_id ?>" class="custom-component component-padding product-list <?php echo $attributes->background_color ?>">
            <div class="container pb-10 animated-element">
                <?php if (!empty($attributes->title)) : ?>
                    <h2 class="h3 text-shade-grey-700"><?php echo $attributes->title ?></h2>
                <?php endif; ?>
            </div>
            <ul class="border-t border-color-shade-grey-700">
                <?php foreach ($block['innerBlocks'] as $index => $inner_block) : ?>
                    <?php echo pg_render_products_item($inner_block, $attributes->link) ?>
                <?php endforeach; ?>
            </ul>
        </div>
<?php
        return ob_get_clean();
    }
}
