<?php
/**
 *
 * Render Image Block
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
        $namespace . '/custom-image',
        array(
            'render_callback' => 'pg_render_image_block',
        )
    );
}

if ( ! function_exists( 'pg_render_image_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_image_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'caption' => '',
            'image_id' => null,
            'image_alt' => '',
            'image_url' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $placholder = wp_get_attachment_image_url($attributes->image_id);
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="animated-element mt-10">
                <div class="image-block rounded-large overflow-hidden">
                    <picture class="image-block__img lazy">
                        <img class="lazy" data-src="<?php echo esc_url_raw($image)?>" src="<?php echo esc_url_raw($placholder)?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                    </picture>
                </div>
                <?php if (!empty($attributes->caption) || !empty($attributes->image_alt)): ?>
                    <p class="paragraph-sm mt-8 text-shade-grey-700"><?php echo !empty($attributes->caption) ? esc_html($attributes->caption) : esc_html($attributes->image_alt); ?></p>
                <?php endif; ?>
            </div>
        <?php
        return ob_get_clean();
    }
}
