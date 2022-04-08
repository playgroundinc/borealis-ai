<?php

/**
 *
 * Render Logos Container
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
        $namespace . '/logos-container',
        array(
            'render_callback' => 'pg_render_logos_container_block',
        )
    );
}

if (!function_exists('pg_render_logos_container_block')) {
    /**
     * Render out logos container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_logos_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'copy' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div class="bg-shade-grey-100 w-full custom-component animated-element component-dark">
            <div class="container flex justify-between pt-7 md:pt-14 tb:flex-row flex-col">
                <div class="w-full tb:w-3/12">
                    <?php if (!empty($attributes->title)) : ?>
                        <h2 class="h3 mb-8 pr-10"><?php echo wp_kses($attributes->title, $allowed_html); ?></h2>
                    <?php endif; ?>
                    <?php if (!empty($attributes->copy)) : ?>
                        <p class="paragraph mb-8">
                            <?php echo ($attributes->copy); ?>
                        </p>
                    <?php endif; ?>
                </div>
                <div class="w-full tb:w-8/12">
                    <?php foreach ($block['innerBlocks'] as $index => $inner_block) : ?>
                        <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
