<?php
/**
 *
 * Render Page Strip
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
        $namespace . '/page-strip',
        array(
            'render_callback' => 'pg_render_page_strip_block',
        )
    );
}

if ( ! function_exists( 'pg_render_page_strip_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_page_strip_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
            'bg_color' => 'white'
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        ?>
            <div class="custom-component animated-element">
                <div class="container container-fluid animated-element">
                    <div class="page-strip mt-15 flex middle-xs center-xs ph-md-5 ph-lg-3 pv-md-12 pv-xs-7 ph-xs-3 br-xs-lg <?php echo esc_attr('block--' . $attributes->bg_color) ?>">
                        <div class="fc-md-100 fc-lg-70 fc-xl-50 ph-md-5 ph-lg-0 copy--center">
                            <?php if (!empty($attributes->title)): ?>
                                <h2 class="heading_two heading-one-lg mb-xs-0"><?php echo esc_html($attributes->title) ?></h2>
                            <?php endif; ?>                
                            <?php 
                                foreach ( $block['innerBlocks'] as $inner_block ) {
                                    echo wp_kses( render_block( $inner_block ), 'post' );
                                }
                            ?>
                        </div>
                    </div>
                    
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
