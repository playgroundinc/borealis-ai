<?php
/**
 *
 * Render Callout Container
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
        $namespace . '/callout-container',
        array(
            'render_callback' => 'trmc_render_callout_container_block',
            'script' => 'carousel',
        )
    );
}

if ( ! function_exists( 'trmc_render_callout_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_callout_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'columns' => '3',
            'description' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'callout-column-slider';
        ob_start();
        ?>
            <div class="custom-component">
                <div class="container container-fluid callout-container animated-element">
                    <?php if (!empty($attributes->title)): ?>
                        <div class="mb-lg-9 mb-xs-5 pl-xs-0 pl-xl-5 fc-xl-50">                        
                            <h2 class="heading_one mb-xs-2"><?php echo esc_html($attributes->title) ?></h2>
                            <?php if (!empty($attributes->description)): ?>
                                <?php echo wpautop($attributes->description); ?>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                    <div class="hide-xs show-lg">
                        <div class="row">
                            <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                                <?php 
                                    $classes = 'col-lg-' . $attributes->columns;
                                    $classes .= intval($index) + 1 > 12 / intval($attributes->columns) ?  ' mt-lg-10' : '';
                                ?>
                                <div class="<?php echo esc_attr($classes) ?>">
                                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <div class="hide-lg">
                        <section 
                            id="<?php echo esc_attr($id); ?>"
                            class="slider slider--links" 
                            aria-roledescription="carousel"
                            <?php echo !empty($attributes->title) ? esc_html('aria-label="' .$attributes->title .'"') : null ?>
                        >
                            <div class="slider-block" aria-live="polite">
                                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                                    <?php 
                                        $fields     = array(
                                            'caption'   => '',
                                            'image_alt' => '',
                                            'image_id' => '',
                                            'image_url' => '',
                                        );
                                        $breakpoints = pg_get_regular_sizes();
                                        $attributes = pg_get_attributes( $inner_block['attrs'], $fields );
                                        $srcset = wp_get_attachment_image_srcset($attributes->image_id, 'custom-img');
                                        $placeholder_srcset = wp_get_attachment_image_srcset($attributes->image_id, 'thumbnail');
                                        $placeholder = wp_get_attachment_image_url($attributes->image_id, 'thumbnail');
                                        $image = wp_get_attachment_image_url($attributes->image_id, 'custom-img');
                                        $square_set = wp_get_attachment_image_srcset($attributes->image_id, 'mobile-square');
                                    ?>
                                    <?php  if (!empty($image)): ?>
                                        <div class="slide" aria-roledescription="slide" data-caption="<?php echo !empty($attributes->caption) ? esc_attr($attributes->caption) : esc_attr($attributes->image_alt); ?>">
                                            <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                        </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                            <div class="slider-block__controls mt-xs-3 bottom-xs flex">
                                <div class="fg-xs-1 end-xs flex">
                                    <div class="fg-xs-1 fg-sm-0 flex middle-xs end-xs">
                                        <?php $prev_icon = pg_render_icon('arrow-left')?>
                                        <button class="slider-block__button slider-block__prev" aria-label="<?php esc_attr_e('Previous slide', 'trmc') ?>" aria-controls="<?php echo esc_attr($id)?>"> <?php echo wp_kses($prev_icon, $allowed_html); ?></button>
                                        <?php $next_icon = pg_render_icon('arrow') ?>
                                        <button class="slider-block__button slider-block__next ml-xs-3" aria-label="<?php esc_attr_e('Next slide', 'trmc'); ?>" aria-controls="<?php echo esc_attr($id)?>"><?php echo wp_kses($next_icon, $allowed_html); ?></button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                
            </div>
        <?php
        return ob_get_clean();
    }
}
