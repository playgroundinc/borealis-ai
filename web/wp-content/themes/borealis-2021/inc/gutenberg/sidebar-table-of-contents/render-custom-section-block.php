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
        $namespace . '/custom-section-block',
        array(
            'render_callback' => 'pg_render_custom_section_block',
        )
    );
}

function clean($string) {
    $string = str_replace(' ', '-', $string);
    return preg_replace('/[^A-Za-z0-9\-]/', '', $string);
}

if ( ! function_exists( 'pg_render_custom_section_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_custom_section_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );

        // function clean($string) {
        //     $string = str_replace(' ', '-', $string);
        //     return preg_replace('/[^A-Za-z0-9\-]/', '', $string);
        // }

        ob_start();
        ?>
            <div id="<?php echo esc_html(clean($attributes->title)) ?>" class="custom-component">
                <div class="container container-fluid animated-element">
                    <div class="page-strip flex middle-xs center-xs ph-md-5 ph-lg-3 pv-md-12 pv-xs-7 ph-xs-3 br-xs-lg">
                        <div class="fc-md-100 fc-lg-70 fc-xl-50 ph-md-5 ph-lg-0 copy--center">
                            <?php if (!empty($attributes->title)): ?>
                                <h2 class="heading_two heading-one-lg mb-xs-0 text-2xl"><?php echo esc_html(clean($attributes->title)) ?></h2>
                            <?php endif; ?>
                        </div>
                    </div>

                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}