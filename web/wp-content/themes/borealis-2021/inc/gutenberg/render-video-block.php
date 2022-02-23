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

if ( ! function_exists( 'pg_render_video_block' ) ) {
    /**
     * Render image and text block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function pg_render_video_block( $block_content, $block ) {
        $fields       = array(
            'image_url' => '',
            'image_alt' => '',
            'image_id'  => '',
            'caption'   => '',
        );
        $attributes   = pg_get_attributes( $block, $fields );
        $allowed_html = pg_allowed_html();
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        ob_start();
        ?>
        <div class="custom-component">
            <div class="container relative video-block rounded-large overflow-hidden pt-video md:pt-video-md">
                <?php if ( ! empty( $image ) ) : ?>
                    <div class="bg-cover bg-center absolute inset-0 z-10 video-block__overlay transition-all duration-400" style="background-image: url(<?php echo esc_url_raw($image) ?>)">
                        <a class="block w-full h-full video-block__overlay__button" href="#" aria-label="<?php echo esc_attr('Play video')?>">
                            <div class="flex w-full h-full items-center justify-center">
                                <span class="text-shade-white-400 paragraph-lg md:h2">
                                    <?php 
                                        $icon = pg_render_icon('play'); 
                                        echo wp_kses($icon, $allowed_html);
                                    ?>
                                </span>
                                <p class="sr-only"><?php echo esc_html('Play video') ?></p>                            
                            </div>
                        </a>
                    </div>
                <?php endif; ?>
                <div class="flex w-full h-full justify-center items-center absolute inset-0 bg-shade-grey-100">
                    <?php echo $block['innerContent'][0] ?>
                </div>
                <?php if ( ! empty( $attributes->caption ) ) : ?>
                    <p><?php echo esc_html( $attributes->caption ); ?></p>
                <?php endif; ?>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
