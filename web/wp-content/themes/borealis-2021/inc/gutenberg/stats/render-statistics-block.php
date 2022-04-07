<?php

/**
 *
 * Render Graphic Page Strip
 *
 * @package Borealis AI
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
        $namespace . '/statistics',
        array(
            'render_callback' => 'pg_render_statistics_block',
        )
    );
}

if (!function_exists('pg_render_statistics_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_statistics_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'copy' => '',
            'stat' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();

        if (!empty($attributes->stat)) :
?>
            <div class="mb-10 md:mb-0">
                <p class="h1 md:h1-desktop mb-4 md:mb-12"> <?php echo $attributes->stat ?></p>
                <p class="paragraph md:pr-20">
                    <?php echo $attributes->copy ?>
                </p>
            </div>
<?php
        endif;
        return ob_get_clean();
    }
}
