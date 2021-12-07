<?php
/**
 *
 * Render Image List Container
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
        $namespace . '/image-list-container',
        array(
            'render_callback' => 'trmc_render_image_list_container_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_image_list_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_image_list_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'bg_color' => 'white',
            'reverse' => false,
            'image_id' => null,
            'image_alt' => '', 
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        if (!empty($attributes->image_id)) {
            $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        }
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="custom-component pv-xs-5 <?php echo esc_attr('block--'. $attributes->bg_color) ?>">
                <div class="container container-fluid animated-element">
                    <div class="image-list__container ph-xl-5">
                        <div>
                            <div class="flex col-xs col-xs-reverse middle-md <?php echo $attributes->reverse ? esc_attr('row-lg-reverse image-list--reverse') : esc_attr('row-lg'); ?>">
                                <div class="fc-xl-40 fc-lg-50 fc-xs-100 mt-xs-7 mt-lg-0 <?php echo $attributes->reverse ? esc_attr('ml-lg-7') : esc_attr('mr-lg-7'); ?>">
                                    <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                    <?php endforeach; ?>                
                                </div>                    
                                <div class="fc-xl-60 fc-lg-50 fc-xs-100">
                                    <?php if (!empty($image)): ?>
                                        <div style="background-image: url(<?php echo esc_url_raw($image) ?>)" class="image-list__image br-xs-lg"></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        <?php
        return ob_get_clean();
    }
}
