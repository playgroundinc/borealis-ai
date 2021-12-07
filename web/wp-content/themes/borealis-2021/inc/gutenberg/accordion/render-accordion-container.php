<?php
/**
 *
 * Render Accordion Container Block
 *
 * @package pg-wp-starter
 * @subpackage trimac
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
        $namespace . '/accordion',
        array(
            'render_callback' => 'trmc_render_accordion_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_accordion_block' ) ) {
    /**
     * Render out accordion block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function trmc_render_accordion_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'anchor_id'    => '',
            'bg_color' => 'white',
            'description' => '',
            'title'        => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        // Adding these attributes as container classes.
        $anchor = isset( $attributes->anchor_id ) && ! empty( $attributes->anchor_id ) ? trmc_slugify( $attributes->anchor_id ) : false;
        $allowed_html = pg_allowed_html();
        ob_start();
    ?>
        <div <?php echo ! empty( $anchor ) ? 'id="' . esc_attr( $anchor ) . '" ' : ''; ?> class="component-container custom-component <?php echo $attributes->bg_color !== 'white' ? esc_attr('pv-xs-15 block--' . $attributes->bg_color) : esc_attr('block--' . $attributes->bg_color );?>">
            <div class="container container-fluid">
                <div class="row center-xs">
                    <div class="col-xs-12 animated-element">
                        <?php if ( ! empty( $attributes->title ) ) : ?>
                            <div class="mb-xs-7 fc-xl-50 fc-lg-70 fc-xs-100">
                                <h2 class="heading_two mb-xs-0">
                                    <?php echo wp_kses( $attributes->title,$allowed_html ); ?>
                                </h2>
                                <?php if (!empty($attributes->description)): ?>
                                    <div class="mt-xs-2">
                                        <?php echo wp_kses(wpautop($attributes->description), $allowed_html); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="accordion-block animated-element br-xs pt-xs-1 pb-xs-5 ph-xs-5 ba-xs-grey-lt">
                            <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                                <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php
        return ob_get_clean();
    }
}