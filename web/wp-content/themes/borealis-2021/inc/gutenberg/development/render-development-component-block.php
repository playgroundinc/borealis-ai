<?php
/**
 *
 * Render Development Component
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
        $namespace . '/development-component',
        array(
					'render_callback' => 'trmc_render_development_component_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_development_component_block' ) ) {
    /**
     * Render out development column block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_development_component_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        ob_start();
        ?>
            <div class="custom-component">
                <div class="container container-fluid">
                    <div class="row">
                    <?php
                        foreach($block['innerBlocks'] as $inner_block) {
                        echo wp_kses(render_block( $inner_block ), 'post');
                        }
                    ?>
                </div>
            </div>

            </div>
        <?php
        return ob_get_clean();
    }
}
