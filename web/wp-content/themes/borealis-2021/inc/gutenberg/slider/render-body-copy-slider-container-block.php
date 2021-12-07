<?php
/**
 *
 * Render Slider
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
        $namespace . '/body-copy-carousel',
        array(
            'render_callback' => 'trmc_render_body_copy_slider_container_block',
            'script'          => 'carousel',
        )
    );
}

if ( ! function_exists( 'trmc_render_body_copy_slider_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_body_copy_slider_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'carousel--1';
        ob_start();
        if (!empty($block['innerBlocks'])):
            ?>
                <div class="mt-xs-7 body-copy__block animated-element">
                    <div>
                        <div 
                            id="<?php echo esc_attr($id); ?>"
                            class="slider" 
                            aria-roledescription="carousel"
                            <?php echo !empty($attributes->title) ? esc_html('aria-label="' .$attributes->title .'"') : null ?>
                        >
                            <div class="slider-block slider-block--body-copy" aria-live="polite">
                                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                                    <?php if ($inner_block['blockName'] === 'core/video'): ?>
                                        <div class="slide" data-caption="<?php echo !empty($inner_block['attrs']['caption']) ? esc_attr($inner_block['attrs']['caption']) : null ?>">
                                            <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                        </div>
                                    <?php else: ?>
                                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                            <div class="slider-block__controls mt-xs-2">
                                <p class="caption slider-block__caption"></p>
                                <div class="fg-xs-1 end-xs flex mt-xs-2 mt-sm-1 mt-lg-0">
                                    <div class="fg-xs-0 flex middle-xs">
                                        <?php $prev_icon = pg_render_icon('arrow-left')?>
                                        <button class="slider-block__button slider-block__prev link--arrow" aria-label="<?php esc_attr_e('Previous slide', 'trmc') ?>" aria-controls="<?php echo esc_attr($id)?>"><?php echo wp_kses($prev_icon, $allowed_html); ?></button>
                                        <?php $next_icon = pg_render_icon('arrow')?>
                                        <button class="slider-block__button slider-block__next ml-xs-3 link--arrow" aria-label="<?php esc_attr_e('Next slide', 'trmc') ?>" aria-controls="<?php echo esc_attr($id)?>"><?php echo wp_kses($next_icon, $allowed_html); ?></button>
                                    </div>
                                    <div class="fg-xs-0 ml-xs-3 slider-block__count middle-xs flex">
                                        <div class="slider-block__count__current heading_five">01</div>
                                        <div class="slider-block__count__percentage"><span class="slider-block__count__percentage--active"></span></div>
                                        <div class="slider-block__count__total heading_five mt-xs-0"></div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php
            endif;
        return ob_get_clean();
    }
}
