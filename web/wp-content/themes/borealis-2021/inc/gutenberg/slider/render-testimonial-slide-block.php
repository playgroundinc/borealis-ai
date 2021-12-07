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
        $namespace . '/testimonial-slide',
        array(
            'render_callback' => 'trmc_render_testimonial_slide_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_testimonial_slide_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_testimonial_slide_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'company' => '', 
            'image_id' => 0, 
            'image_alt' => '', 
            'image_url' => '', 
            'speaker' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        if (!empty($attributes->image_id)) {
            $image = wp_get_attachment_image_url($attributes->image_id, 'mobile-square');
            $placeholder = wp_get_attachment_image_url($attributes->image_id, 'thumbnail');
        }


        ob_start();
        ?>
            <div class="slide flex col-xs end-xs center-md" aria-roledescription="slide">
                <div>
                    <div class="testimonial-slide__quote fc-xs-70 mh-xs-auto">
                        <div class="testimonial-slide__icon">
                            <?php echo pg_render_icon('quote', true); ?>
                        </div>
                        <?php 
                            foreach ( $block['innerBlocks'] as $inner_block ) {
                                echo wp_kses( render_block( $inner_block ), 'post' );
                            }
                        ?>
                    </div>
                </div>
                <div class="testimonial-slide__details ml-xs-auto">
                    <div class="flex mt-xs-5 fc-xs-40">
                        <?php if (!empty($image)): ?>
                            <div class="mr-xs-2">
                                <img class="testimonial-slide__avatar lazy" data-src="<?php echo esc_url_raw($image); ?>" src="<?php echo esc_url_raw($placeholder) ?>" <?php echo !empty($attributes->image_alt) ? esc_html('alt=' . $attributes->image_alt) : null ?>>
                            </div>
                        <?php endif; ?>
                        <div class="testimonial-slide__speaker">
                            <?php if (!empty($attributes->speaker)): ?>
                                <p class="heading_five"><?php echo esc_html($attributes->speaker); ?></p>
                            <?php endif; ?>
                            <?php if (!empty($attributes->company)): ?>
                                <p class="subtitle <?php echo !empty($attributes->speaker) ? esc_attr('mt-xs-1') : null ?>"><?php echo esc_html($attributes->company); ?></p>
                            <?php endif; ?>
                        </div>
                    </div>


                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
