<?php

/**
 *
 * Render Statistics Container block
 *
 * @package Borealis
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
        $namespace . '/statistics-container',
        array(
            'render_callback' => 'pg_render_statistics_container_block',
        )
    );
}

if (!function_exists('pg_render_statistics_container_block')) {
    /**
     * Render out statistics container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_statistics_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'description' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <section class="bg-primary-navy-400 text-shade-white-400">
            <div class="container flex md:pt-16 md:pb-20 py-10 tb:flex-row flex-col">
                <div class="w-full tb:w-4/12">
                    <?php if (!empty($attributes->title)) : ?>
                        <h3 class="h3 mb-8"><?php echo esc_html($attributes->title) ?></h3>
                    <?php endif; ?>
                    <?php if (!empty($attributes->description)) : ?>
                        <h4 class="h4 mb-8"><?php echo esc_html($attributes->description) ?></h4>
                    <?php endif; ?>
                </div>
                <div class="w-full tb:w-7/12 flex md:flex-row flex-col">
                    <?php
                    foreach ($block['innerBlocks'] as $inner_block) {
                        echo wp_kses(render_block($inner_block), 'post');
                    }
                    ?>
                </div>
            </div>
        </section>
<?php
        return ob_get_clean();
    }
}
