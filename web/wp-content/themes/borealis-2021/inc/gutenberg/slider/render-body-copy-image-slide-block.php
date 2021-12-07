<?php
/**
 *
 * Render Image Slide Block
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
        $namespace . '/body-copy-image-slide',
        array(
            'render_callback' => 'trmc_render_body_copy_image_slide_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_body_copy_image_slide_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_body_copy_image_slide_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'caption'   => '',
            'image_alt' => '',
            'image_id' => '',
            'image_url' => '',
        );
        $breakpoints = pg_get_regular_sizes();
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $image = wp_get_attachment_image_url($attributes->image_id, 'body-copy');
        $placeholder = wp_get_attachment_image_url($attributes->image_id, 'thumbnail');

        ob_start();
        if (!empty($image)): 
        ?>
            <div class="slide flex middle-xs" aria-roledescription="slide" data-caption="<?php echo !empty($attributes->caption) ? esc_attr($attributes->caption) : esc_attr($attributes->image_alt); ?>">
                <picture>
                    <img class="lazy" data-src="<?php echo esc_url_raw($image); ?>" src="<?php echo esc_attr($placeholder)?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                </picture>
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
