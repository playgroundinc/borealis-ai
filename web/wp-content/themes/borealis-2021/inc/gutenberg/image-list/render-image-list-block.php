<?php
/**
 *
 * Render Image List Block
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
        $namespace . '/image-list',
        array(
            'render_callback' => 'trmc_render_image_list_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_image_list_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_image_list_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'image_id' => null,
            'image_alt' => '', 
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        if (!empty($attributes->image_id)) {
            $image_src = wp_get_attachment_image_src($attributes->image_id, 'full');
        }
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="image-list__single">
                <?php if (!empty($image_src)): ?>
                    <img src="<?php echo esc_url_raw($image_src[0]); ?>" alt="<?php echo esc_attr($attributes->image_alt) ?>">
                <?php endif; ?>
                <?php if (!empty($attributes->title)): ?>
                    <h3 class="heading_three mb-xs-0 <?php echo !empty($image_src) ? esc_attr('mt-xs-2') : null; ?>"><?php echo wp_kses($attributes->title, $allowed_html)?></h3>
                <?php endif; ?>
                <div class="copy--body <?php echo !empty($attributes->title) || !empty($image_src) ? esc_attr('mt-xs-2') : null; ?>" >
                    <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                    <?php endforeach; ?>      
                </div>     
            </div>
        <?php
        return ob_get_clean();
    }
}
