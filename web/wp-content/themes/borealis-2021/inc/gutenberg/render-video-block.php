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
        $image = wp_get_attachment_image_url($attributes->image_id, 'custom-img');
        ob_start();
        ?>
        <div>
            <?php if ( ! empty( $image ) ) : ?>
                <div style="background-image: url(<?php echo esc_url_raw($image) ?>)">
                    <a href="#" aria-label="<?php esc_attr('Play video')?>">
                        <div>
                            <span>
                                <?php 
                                    $icon = pg_render_icon('play'); 
                                    echo wp_kses($icon, $allowed_html);
                                ?>
                            </span>
                            <p><?php esc_html('Play video') ?></p>                            
                        </div>
                    </a>
                </div>
            <?php endif; ?>
            <div>
                <?php echo wp_kses( $block_content, $allowed_html ); ?>
            </div>
            <?php if ( ! empty( $attributes->caption ) ) : ?>
                <p><?php echo esc_html( $attributes->caption ); ?></p>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }
}
