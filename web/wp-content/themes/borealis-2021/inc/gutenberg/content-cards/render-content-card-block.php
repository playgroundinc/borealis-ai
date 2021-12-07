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
            'render_callback' => 'trmc_render_content_card_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_content_card_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_content_card_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_alt' => '',
            'image_id' => '',
            'image_url' => '',
            'title' => '',
            'link_href' => '',
            'link_text' => __('Learn More', 'trmc'),
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        if (!empty($attributes->image_id)) {
            $image_src = wp_get_attachment_image_src($attributes->image_id, 'full');
        }
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="content-card__single animated-element ba-xs-grey-lt br-xs-lg pv-xs-5 ph-xs-3 ph-md-4 mh-xs-auto ml-lg-0 mt-xs-4 mt-lg-0 mr-lg-7 fg-xs-0 flex col-xs">
                <div class="icon icon-xl">
                    <?php if (!empty($image_src)): ?>
                        <img src="<?php echo esc_url_raw($image_src[0]); ?>" alt="">
                    <?php endif; ?>
                </div>
                <div class="content-card__content mt-xs-4 fg-xs-1">
                    <?php if (!empty($attributes->title)): ?>
                        <h3 class="heading_three mb-xs-0"><?php echo wp_kses($attributes->title, $allowed_html) ?></h3>
                    <?php endif; ?>
                    <?php if (!empty($block['innerBlocks'])): ?>
                        <div <?php echo !empty($attributes->title) ? esc_html("class=mt-xs-2") : null; ?>>
                            <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                                <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
                <?php if (!empty($attributes->link_text) && !empty($attributes->link_href)): ?>
                    <div class="mt-xs-4 content-card__btn">
                        <a href="<?php echo esc_url_raw($attributes->link_href)?>" class="btn btn--secondary"><?php echo esc_html($attributes->link_text); ?></a>
                    </div>
                <?php endif; ?>        
            </div>
        <?php
        return ob_get_clean();
    }
}
