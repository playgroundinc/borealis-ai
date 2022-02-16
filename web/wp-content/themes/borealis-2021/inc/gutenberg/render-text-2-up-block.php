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
        $namespace . '/text-2-up',
        array(
            'render_callback' => 'pg_render_text_2_up_block',
        )
    );
}

if (!function_exists('pg_render_text_2_up_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_text_2_up_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'copy' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        ob_start();

        if (!empty($attributes->copy)) :
?>
            <p class="paragraph pr-10">
                <?php echo $attributes->copy ?>
            </p>
<?php
        endif;
        return ob_get_clean();
    }
}
