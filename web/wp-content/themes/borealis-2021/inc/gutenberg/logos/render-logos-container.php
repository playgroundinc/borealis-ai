<?php
/**
 *
 * Render Logos Container
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
        $namespace . '/logos-container',
        array(
            'render_callback' => 'trmc_render_logos_container_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_logos_container_block' ) ) {
    /**
     * Render out logos container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_logos_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'bg_color' => 'white',
            'description' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="custom-component <?php echo esc_attr('block--' . $attributes->bg_color); ?>">
                <div class="container container-fluid animated-element">
                    <div class="logo-block__container <?php echo $attributes->bg_color !== 'white' ? esc_attr('pv-xs-12') : null ?>">
                        <div class="flex middle-xs">
                            <div class="ph-lg-5 fc-xl-50 fc-lg-40 fc-xs-100">
                                <?php if (!empty($attributes->title)): ?>
                                    <h2 class="heading_one mb-xs-0 fc-md-50 fc-lg-100"><?php echo wp_kses($attributes->title, $allowed_html); ?></h2>
                                <?php endif; ?>
                                <?php if (!empty($attributes->description)): ?>
                                    <div class="<?php echo !empty($attributes->title) ? esc_attr('mt-xs-2 fc-md-70 fc-lg-100') : esc_attr('fc-md-70 fc-lg-100') ?>">
                                        <?php echo wp_kses(wpautop($attributes->description), $allowed_html); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="ph-xl-5 mt-xs-3 mt-lg-0 fc-xl-50 fc-lg-60 fc-xs-100 flex col-xs">
                                <div class="flex middle-xs fg-xs-1">
                                    <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
