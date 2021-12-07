<?php
/**
 *
 * Render Logo Block
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
        $namespace . '/logo',
        array(
            'render_callback' => 'trmc_render_logo_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_logo_block' ) ) {
    /**
     * Render out logo block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_logo_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_id' => null,
            'image_alt' => '',
            'image_url' => '',
            'link' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $placeholder = wp_get_attachment_image_url($attributes->image_id, 'thumbnail');
        ob_start();
        if (!empty($image)):
            ?>
                <?php if (!empty($attributes->link)): ?>
                    <a class="logo-block__single fc-xs-50 fc-md-25 copy--center pv-xs-3 ph-xs-3 pr-md-6 pl-md-0 ph-lg-3 block-link" href="<?php echo esc_url_raw($attributes->link); ?>" <?php echo !empty($attributes->image_alt) ? esc_html('aria-label=' . $attributes->image_alt) : null; ?>>
                        <img 
                            class="lazy"
                            data-src="<?php echo esc_url_raw($image)?>"
                            src="<?php echo esc_url_raw($placeholder) ?>"
                            <?php echo !empty($attributes->image_alt) ? esc_html('alt=' . $attributes->image_alt) : null; ?>
                        >
                    </a>
                <?php else: ?>
                    <div class="logo-block__single fc-xs-50 fc-md-25 copy--center pv-xs-3 ph-xs-3 pr-md-6 pl-md-0 ph-lg-3">
                        <img 
                            class="lazy"
                            data-src="<?php echo esc_url_raw($image)?>"
                            src="<?php echo esc_url_raw($placeholder) ?>"
                            <?php echo !empty($attributes->image_alt) ? esc_html('alt=' . $attributes->image_alt) : null; ?>
                        >
                    </div>

                <?php endif?>
            <?php
        endif;
        return ob_get_clean();
    }
}
