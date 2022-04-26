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
        $namespace . '/logos-subsection',
        array(
            'render_callback' => 'pg_render_logos_subsection_block',
        )
    );
}

if (!function_exists('pg_render_logos_subsection_block')) {
    /**
     * Render out logos subsection block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_logos_subsection_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div class="flex flex-col">
            <?php if (!empty($attributes->title)) : ?>
                <h2 class="paragraph-lg lg:paragraph-lg-desktop logo-lineheight my-8 tb:mb-8 tb:mt-0"><?php echo wp_kses($attributes->title, $allowed_html); ?></h2>
            <?php endif; ?>
            <div class="inline-flex flex-row mb-10 md:mb-23 flex-wrap justify-between md:justify-start gap-y-8 md:gap-y-15">
                <?php foreach ($block['innerBlocks'] as $index => $inner_block) : ?>
                    <?php echo wp_kses(render_block($inner_block), $allowed_html); ?>
                <?php endforeach; ?>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
