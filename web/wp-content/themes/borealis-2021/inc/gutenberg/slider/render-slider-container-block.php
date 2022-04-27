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
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/carousel',
        array(
            'render_callback' => 'pg_render_slider_container_block',
            'script'          => 'carousel',
        )
    );
}

if (!function_exists('pg_render_slider_container_block')) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_slider_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
            'link' => '',
            'anchor_id'    => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? sanitize_key(pg_slugify($attributes->title)) : 'carousel--1';
        ob_start();
        if (!empty($block['innerBlocks'])) :
?>
            <div id="<?php echo $attributes->anchor_id ?>" class="custom-component animated-element no-background-padding slider">
                <div class="container">
                    <div class="md:flex slider">
                        <div class="md:w-4/12 shrink-0 md:pr-4 flex flex-col">
                            <div class="flex flex-col grow justify-between">
                                <div>
                                    <?php if (!empty($attributes->title)) : ?>
                                        <h2 class="h3 tb:h3-desktop"><?php echo $attributes->title ?></h2>
                                    <?php endif; ?>
                                    <?php if (!empty($attributes->link)) : // Start of Link check 
                                    ?>
                                        <a href="<?php echo esc_attr($attributes->link) ?>" class="text-link py-2">View All</a>
                                    <?php endif; // End of Link check 
                                    ?>
                                </div>
                                <div class="slider-block__controls py-14 md:py-0">
                                    <div class="flex">
                                        <div class="">
                                            <?php $prev_icon = pg_render_icon('arrow-left') ?>
                                            <button class="slider-block__button pr-2 slider-block__prev icon--lg disabled:text-shade-grey-400" disabled="true" aria-label="<?php esc_attr_e('Previous slide', 'trmc') ?>" aria-controls="<?php echo esc_attr($id) ?>"><?php echo wp_kses($prev_icon, $allowed_html); ?></button>
                                            <?php $next_icon = pg_render_icon('arrow') ?>
                                            <button class="slider-block__button pl-2 slider-block__next icon--lg disabled:text-shade-grey-400" aria-label="<?php esc_attr_e('Next slide', 'trmc') ?>" aria-controls="<?php echo esc_attr($id) ?>"><?php echo wp_kses($next_icon, $allowed_html); ?></button>
                                        </div>
                                        <div class="ml-15 slider-block__count middle-xs flex">
                                            <p class="h4 text-shade-grey-500">
                                                <span class="slider-block__count__current">1</span>
                                                <?php echo esc_html('/'); ?>
                                                <span class="slider-block__count__total"></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="<?php echo esc_attr($id); ?>" class="relative w-full pt-72 overflow-hidden border-r border-color-shade-grey-500" aria-roledescription="carousel" <?php echo !empty($attributes->title) ? esc_html('aria-label="' . $attributes->title . '"') : null ?>>
                            <ul class="slider-block flex absolute inset-0 transition-slider duration-500" aria-live="polite">
                                <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                                    <?php echo pg_render_news_slide($inner_block) ?>
                                <?php endforeach; ?>
                            </ul>
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
