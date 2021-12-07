<?php
/**
 *
 * Render Development Block
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
        $namespace . '/development',
        array(
            'render_callback' => 'trmc_render_development_block',
            'script'          => 'development-blocks',
        )
    );
}

if ( ! function_exists( 'trmc_render_development_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_development_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
            'container' => false,
            'custom_component' => false,
            'eyebrow' => false,
            'headline' => false,
            'heading_one' => false,
            'heading_two' => false,
            'heading_three' => false,
            'heading_four' => false,
            'heading_five' => false,
            'heading_six' => false,
            'paragraph' => false,
            'caption' => false,
            'btn' => false, 
        );
        $attributes = pg_get_attributes( $attrs, $fields ); 
        ob_start();
        ?>
            <div class="development-block">
                <?php
                    foreach($block['innerBlocks'] as $inner_block) {
                        echo wp_kses(render_block( $inner_block ), 'post');
                    }
                ?> 
                <div class="development-block__controls custom_component">
                <div class="container container-fluid">
                    <h2 class="heading_two copy--center">Development Controls</h2>
                    <p class="copy--center">Currently showing styles for breakpoint: <span id="development-block__breakpoint" style="font-weight: bold;"></span></p>

                    <?php 
                        foreach ($attributes as $key=>$attr) {  
                            if ($attr) {
                                switch($key) {
                                    case 'container': 
                                        $input_obj = new Development_Inputs($key, array('maxWidth' => 'px','width' => '%',), 'numeric');
                                    break;
                                    case 'custom_component':
                                        $input_obj = new Development_Inputs($key, array('marginTop' => array('px', 'vw', '%')), 'numeric');
                                    break;
                                    default: 
                                        $input_obj = new Development_Inputs($key);
                                    break;
                                }
                                $input = $input_obj->get_input();
                                echo $input;
                            }
                        }
                    ?>
                </div>
            </div>      
        </div>
    <?php
        return ob_get_clean();
    }
}
