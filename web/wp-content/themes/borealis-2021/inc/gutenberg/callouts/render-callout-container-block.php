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
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/callout-container',
        array(
            'render_callback' => 'pg_render_callout_container_block',
            'script' => 'carousel',
        )
    );
}

if (!function_exists('pg_render_callout_container_block')) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_callout_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'title' => '',
            'image_id' => 0,
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();
        $image = $attributes->image_id && intval($attributes->image_id) > 0 ? wp_get_attachment_image_url($attributes->image_id, 'full') : get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg';
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div class="custom-component component-dark py-20 bg-cover bg-center animated-element" style="background-image: url(<?php echo esc_url_raw($image) ?>)">
            <div class="container">
                <div class="text-shade-white-400 md:flex justify-between">
                    <div class="basis-1/3 shrink-0 pr-8">
                        <h2 class="h3"><?php echo ($attributes->title) ?></h2>
                    </div>
                    <div class="basis-7/12 shrink-0 mt-8 md:mt-0">
                        <?php if ($attributes->description && strlen($attributes->description) > 0) : ?>
                            <p class="paragraph"><?php echo wp_kses($attributes->description, $allowed_html) ?></p>
                        <?php endif; ?>
                    </div>
                </div>
                <ul class="mt-25 md:mt-24 md:flex flex-wrap">
                    <?php foreach ($block['innerBlocks'] as $index => $inner_block) : ?>
                        <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>


<?php
        return ob_get_clean();
    }
}
