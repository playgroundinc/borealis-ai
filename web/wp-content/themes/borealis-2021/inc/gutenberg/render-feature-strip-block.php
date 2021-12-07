<?php
/**
 *
 * Render Feature Strip
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
        $namespace . '/feature-strip',
        array(
            'render_callback' => 'trmc_render_feature_strip_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_feature_strip_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_feature_strip_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
            'image_id' => '',
            'image_url' => '',
            'image_alt' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        if (!empty($attributes->image_id)) {
            $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        }
        ob_start();
        if (!empty($image)): 
        ?>
            <div class="custom-component feature-strip block--grey">
                <div class="container container-fluid flex even-xs animated-element">
                    <div class="fc-xl-40 pt-xs-3 flex fc-xs-100 fg-xs-0 feature-strip__image-container">
                        <div class="feature-strip__circle"></div>
                        <div class="feature-strip__image" style="background-image: url(<?php echo esc_url_raw( $image ) ?>)" ></div>
                    </div>
                    <div class="feature-strip__content pv-xs-3 pv-sm-7 mt-lg-0 fc-xl-40 fc-xs-100 fg-xs-0 flex col-xs center-xs">
                        <?php if (!empty($attributes->title)): ?>
                            <h2 class="heading_two heading-one-lg mb-xs-2"><?php echo esc_html($attributes->title) ?></h2>
                            <?php 
                                $hr = pg_render_decoration('slant');
                                echo wp_kses($hr, $allowed_html);
                            ?>
                        <?php endif; ?>                
                        <?php 
                            foreach ( $block['innerBlocks'] as $inner_block ) {
                                echo wp_kses( render_block( $inner_block ), 'post' );
                            }
                        ?>
                    </div>
                    
                </div>
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
