<?php
/**
 *
 * Render Body Copy Block
 *
 * @package Trimac
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
        $namespace . '/body-copy',
        array(
            'render_callback' => 'trmc_render_body_copy_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_body_copy_block' ) ) {
    /**
     * Render out cognito embed block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_body_copy_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        ob_start();
        ?> 
            <div class="custom-component container container--single body-copy">
                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                <?php endforeach; ?>
            </div>
        <?php
        return ob_get_clean();
    }
}
