<?php
/**
 *
 * Render Image + Text Block
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
        $namespace . '/image-text',
        array(
            'render_callback' => 'trmc_render_image_text_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_image_text_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_image_text_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'anchor_id' => null,
            'bg_color' => 'white',
            'image_id' => null,
            'image_alt' => '',
            'reverse' => false,
            'title'        => '',

        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $image_url = null;
        if (!empty($attributes->image_id)) {
            $image_url = wp_get_attachment_image_src($attributes->image_id, 'full');
            $placeholder_url = wp_get_attachment_image_src($attributes->image_id, 'thumbnail');
        }
        $allowed_html = pg_allowed_html();
        ob_start();
        if (!empty($image_url)):
        ?>
            <div class="custom-component <?php echo $attributes->bg_color !== 'white' ? esc_attr('pv-xs-15 block--' . $attributes->bg_color) : esc_attr('block--' . $attributes->bg_color );?>">
                <div class="container container-fluid animated-element">
                    <div class="flex image-text-block between-lg col-xs-reverse btn--left br-xs-lg <?php echo $attributes->reverse ? esc_attr('row-lg-reverse') : esc_attr('row-lg') ?>">
                        <div class="pv-lg-7 ph-lg-7 ph-md-6 ph-xs-3 fc-xs-100 fc-lg-50 flex col-xs center-lg mt-xs-3 mt-md-5 mt-lg-0">                        
                            <?php if (!empty($attributes->title)): ?>
                                <h2 class="heading-two-xs heading-one-lg mb-xs-2"><?php echo esc_html($attributes->title); ?></h2>
                                <?php 
                                    $hr = pg_render_decoration('slant');
                                    echo wp_kses($hr, $allowed_html);
                                ?>
                            <?php endif; ?>
                            <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                                <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                            <?php endforeach; ?>
                            
                        </div>
                        <div class="slanted fc-xs-100 fc-lg-50 fc-xl-40">
                            <img class="lazy" data-src="<?php echo esc_attr($image_url[0])?>" src="<?php echo esc_url_raw($placeholder_url[0])?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null; ?>">
                        </div>

                    </div>
                </div>
                
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
