<?php
/**
 *
 * Render Content Card
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
        $namespace . '/content-card',
        array(
            'render_callback' => 'pg_render_content_card_block',
        )
    );
}

if ( ! function_exists( 'pg_render_content_card_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_content_card_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_alt' => '',
            'image_id' => '',
            'image_url' => '',
            'title' => '',
            'link_href' => '',
            'link_text' => 'Learn More',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        if (!empty($attributes->image_id)) {
            $image_src = wp_get_attachment_image_src($attributes->image_id, 'full');
        }
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div>
                <?php if (!empty($image_src)): ?>
                    <img src="<?php echo esc_url_raw($image_src[0]); ?>" alt="">
                <?php endif; ?>
                <div>
                    <?php if (!empty($attributes->title)): ?>
                        <h3><?php echo wp_kses($attributes->title, $allowed_html) ?></h3>
                    <?php endif; ?>
                    <?php if (!empty($block['innerBlocks'])): ?>
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
                <?php if (!empty($attributes->link_text) && !empty($attributes->link_href)): ?>
                    <a href="<?php echo esc_url_raw($attributes->link_href)?>"><?php echo esc_html($attributes->link_text); ?></a>
                <?php endif; ?>        
            </div>
        <?php
        return ob_get_clean();
    }
}
