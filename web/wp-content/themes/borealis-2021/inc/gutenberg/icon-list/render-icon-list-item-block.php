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
        $namespace . '/icon-list-item-block',
        array(
            'render_callback' => 'pg_render_icon_list_item_block',
        )
    );
}

if (!function_exists('pg_render_icon_list_item_block')) {
    /**
     * Render out icon list item block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_icon_list_item_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'subtitle' => '',
            'copy' => '',
            'image_url' => '',
            'image_alt' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <li class="flex mb-12 w-full md:w-6/12 pr-8" aria-labelledby="<?php echo esc_html(pg_slugify($attributes->subtitle)) ?>">
            <?php if (!empty($attributes->image_url) and $block["icon"]) : ?>
                <img class="mr-10 h-13" src="<?php echo esc_html($attributes->image_url) ?>" alt="<?php echo esc_html($attributes->image_alt) ?>">
            <?php endif; ?>
            <?php if (!empty($attributes->subtitle)) : ?>
                <p class="paragraph" id="<?php echo esc_html($attributes->subtitle) ?>" class=""><?php echo $attributes->subtitle ?></p>
            <?php endif; ?>
            <?php if (!empty($attributes->copy)) : ?>
                <p class="paragraph" id="<?php echo esc_html($attributes->copy) ?>" class=""><?php echo esc_html($attributes->copy) ?></p>
            <?php endif; ?>
        </li>
<?php
        return ob_get_clean();
    }
}
