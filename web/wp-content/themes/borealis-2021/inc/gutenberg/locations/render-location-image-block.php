<?php

/**
 *
 * Render Location Image Block
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
        $namespace . '/location-image',
        array(
            'render_callback' => 'pg_render_location_image_block',
        )
    );
}

if (!function_exists('pg_render_location_image_block')) {
    /**
     * Render out location image block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_location_image_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_id' => 0,
            'image_alt' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
        if (!empty($attributes->image_id)) {
            $image_src = wp_get_attachment_image_src($attributes->image_id, 'full');
        }

        if (!empty($attributes->image_id)) :
?>
            <?php if (!empty($image_src)) : ?>
                <img src="<?php echo esc_url_raw($image_src[0]); ?>" alt="<?php echo !empty($attributes->image_alt) ? $attributes->image_alt : 'image from location' ?>">
            <?php endif; ?>
<?php
        endif;
        return ob_get_clean();
    }
}
