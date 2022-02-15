<?php

/**
 *
 * Render Page Strip
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
        $namespace . '/icon-list-container-block',
        array(
            'render_callback' => 'pg_render_icon_list_container_block',
        )
    );
}

if (!function_exists('pg_render_icon_list_container_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_icon_list_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
            'description' => '',
            'icon' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <section aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="">
            <div class="py-23">
                <div class="container flex flex-col tb:flex-row">
                    <?php if (!empty($attributes->title)) : ?>
                        <div class="w-full mb-10 tb:mb-0 tb:w-2/6">
                            <h3 class="h3"><?php echo esc_html($attributes->title) ?></h3>
                        </div>
                    <?php endif; ?>
                    <div class="w-full tb:w-4/6">
                        <?php if (!empty($attributes->description)) : ?>
                            <div>
                                <p class="paragraph"><?php echo esc_html($attributes->description) ?></p>
                            </div>
                        <?php endif; ?>
                        <ul class="flex flex-wrap mt-10 flex-col md:flex-row">
                            <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                                <?php $inner_block['icon'] = $attributes->icon; ?>

                                <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
<?php
        return ob_get_clean();
    }
}
