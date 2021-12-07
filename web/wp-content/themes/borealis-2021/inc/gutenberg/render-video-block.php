<?php
/**
 *
 * Video Block
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'trmc_render_video_block' ) ) {
    /**
     * Render image and text block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function trmc_render_video_block( $block_content, $block ) {
        $fields       = array(
            'image_url' => '',
            'image_alt' => '',
            'image_id'  => '',
            'caption'   => '',
        );
        $attributes   = pg_get_attributes( $block, $fields );
        $allowed_html = pg_allowed_html();
        $image = wp_get_attachment_image_url($attributes->image_id, 'custom-img');
        ob_start();
        ?>
        <div class="custom-component" >
            <div class="container container-fluid animated-element">
                <div class="video-block <?php echo ! empty( $image ) ? esc_attr( 'video-block--custom' ) : null; ?>">
                <?php if ( ! empty( $image ) ) : ?>
                    <div class="video-block__overlay flex middle-xs center-xs" style="background-image: url(<?php echo esc_url_raw($image) ?>)">
                    <a href="#" class="video-block__overlay__button flex middle-xs center-xs fg-xs-1" aria-label="<?php esc_attr_e('Play video', 'trmc')?>">
                        <div class="video-block__play-btn flex middle-xs pv-xs-1 ph-xs-2 fg-xs-0">
                            <span class="video-block__overlay__icon">
                                <?php 
                                    $icon = pg_render_icon('play'); 
                                    echo wp_kses($icon, $allowed_html);
                                ?>
                            </span>
                            <p class="pl-xs-2 heading_four"><?php esc_html_e('Play video', 'trmc') ?></p>                            
                        </div>
                    </a>
                </div>
                <?php endif; ?>
                <div class="video-block__content flex middle-xs center-xs">
                    <?php echo wp_kses( $block_content, $allowed_html ); ?>
                </div>
            </div>
            <?php if ( ! empty( $attributes->caption ) ) : ?>
                <div class="video-block__caption mt-xs-3 ph-md-5">
                    <p class="caption"><?php echo esc_html( $attributes->caption ); ?></p>
                </div>
            <?php endif; ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
