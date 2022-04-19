<?php
/**
 *
 * Render Spacer Block
 *
 * @package Borealis AI
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if ( function_exists( 'register_block_type' ) ) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/spacer',
        array(
            'render_callback' => 'pg_render_spacer_block',
        )
    );
}

if ( ! function_exists( 'pg_render_spacer_block' ) ) {
    /**
     * Render out spacer block.
     *
     */
    function pg_render_spacer_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;

        ob_start();
        ?>
            <div class="h-3.125 bg-white"></div>
        <?php
        return ob_get_clean();
    }
}
