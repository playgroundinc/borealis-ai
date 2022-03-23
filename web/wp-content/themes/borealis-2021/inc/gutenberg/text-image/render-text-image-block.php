<?php

/**
 *
 * Render Text & Image Block
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
        $namespace . '/text-image-block',
        array(
            'render_callback' => 'pg_render_text_image_block',
        )
    );
}

if (!function_exists('pg_render_text_image_block')) {
    /**
     * Render out text and image block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_text_image_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_id' => 0,
            'image_alt' => '',
            'image_id_mobile' => 0,
            'image_alt_mobile' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $image_mobile = wp_get_attachment_image_url($attributes->image_id_mobile, 'full');

        ob_start();

        if (!empty($image)) :
?>
            <img class="w-full rounded-large hidden md:block" src="<?php echo $image ?>" alt="<?php echo $attributes->image_alt ?>">
            <img class="w-full rounded-large block md:hidden" src="<?php echo $image_mobile ?>" alt="<?php echo $attributes->image_alt_mobile ?>">

<?php
        endif;
        return ob_get_clean();
    }
}
