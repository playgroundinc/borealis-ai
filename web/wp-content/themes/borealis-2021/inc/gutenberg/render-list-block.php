<?php

/**
 *
 * Gutenberg core/list block
 *
 * @package pg-wp-starter
 * @subpackage borealisai
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if (!function_exists('pg_render_list_block')) {
    /**
     * Render core/list gutenberg block with appropriate styling.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function pg_render_list_block($block_content, $block)
    {
        ob_start();
?>
        <div class="custom-component nestable animated-element container flex flex-col tb:flex-row">
            <div class="w-full tb:w-4/12"></div>
            <div class="w-full flex flex-col tb:w-8/12 my-8 list-disc core-list text-shade-black-400 paragraph">
                <?php echo $block['innerContent'][0] ?>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
