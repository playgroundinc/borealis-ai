<?php

/**
 *
 * Render Callout Column
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
        $namespace . '/callout-column',
        array(
            'render_callback' => 'pg_render_callout_column_block',
        )
    );
}

if (!function_exists('pg_render_callout_column_block')) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_callout_column_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'link' => '',
            'subtitle' => '',
            'title' => ''
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();
?>
        <li class="w-full tb:basis-card tb:mb-0 mb-7">
            <a href="<?php echo esc_url_raw($attributes->link) ?>" class="block backdrop rounded-large min-h-[224px] md:min-h-[244px] flex flex-col">
                <div class="text-shade-white-400 h3 py-4 px-5" aria-hidden="true">
                    <?php echo pg_render_icon('callout'); ?>
                </div>
                <div class="grow flex flex-col justify-end text-right px-9 py-7">
                    <p class="h4 text-shade-white-400"><?php echo $attributes->title; ?></p>
                    <p class="paragraph text-shade-white-400 pt-4"><?php echo $attributes->subtitle; ?></p>
                </div>
            </a>
        </li>
<?php
        return ob_get_clean();
    }
}
