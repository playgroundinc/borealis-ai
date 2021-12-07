<?php
/**
 *
 * Render Form Input Row Block
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
        $namespace . '/input-row',
        array(
			'render_callback' => 'trmc_render_form_input_row_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_form_input_row_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_form_input_row_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
			'split' => 'half'
        );
        $splits = array(
            'half' => array(
                'col-md-6',
                'col-md-6',
            ),
            'two-thirds' => array(
                'col-md-8',
                'col-md-4'
            ),
            'three-quarters' => array(
                'col-md-9',
                'col-md-3'
            )
        );  
    
        $attributes = pg_get_attributes( $attrs, $fields ); 
        $classes = $splits[$attributes->split];
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="row form-row">
                <?php 
                    foreach($block['innerBlocks'] as $index => $inner_block) {
                ?>
                <div class="<?php echo esc_attr($classes[$index % 2]); ?>">
                    <?php   echo wp_kses(render_block( $inner_block ), $allowed_html); ?>
                </div>
                        <?php
                    }
                ?>
            </div>
        <?php
        return ob_get_clean();
    }
}
