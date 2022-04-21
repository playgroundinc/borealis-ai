<?php

/**
 *
 * Custom Video Block
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/custom-video',
        array(
            'render_callback' => 'pg_render_custom_video_block',
        )
    );
}

if (!function_exists('pg_render_custom_video_block')) {
    /**
     * Render custom video block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function pg_render_custom_video_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $fields       = array(
            'video_url' => '',
            'video_alt' => '',
            'video_id'  => '',
            'image_url' => '',
            'image_alt' => '',
            'image_id'  => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $allowed_html = pg_allowed_html();
        ob_start();
?>
        <div id="<?php echo $attributes->anchor_id ?>" class="custom-component nestable animated-element component-padding video-tabbable custom-video">
            <div class="flex w-full justify-end <?php echo is_singular(['research-blogs', 'news']) ? '' : 'container' ?>">
                <div class="w-full tb:<?php echo is_singular(['research-blogs', 'news']) ? 'w-full' : 'w-8/12' ?> custom-video-panel">
                    <div class="md:min-h-[350px] tb:min-h-[400px] lg:min-h-[540px] relative video-block rounded-large overflow-hidden pt-video md:pt-video-md lg:pt-video-lg">
                        <?php if (!empty($attributes->image_url)) : ?>
                            <div class="bg-cover bg-center absolute inset-0 z-10 video-block__overlay transition-all duration-400" style="background-image: url(<?php echo esc_url_raw($attributes->image_url) ?>)">
                                <a class="block w-full h-full video-block__overlay__button" href="#" aria-label="<?php echo esc_attr('Play video') ?>">
                                    <div class="flex w-full h-full items-center justify-center">
                                        <span class="text-shade-white-400 paragraph-lg md:h2-desktop">
                                            <?php
                                            $icon = pg_render_icon('video-play');
                                            echo wp_kses($icon, $allowed_html);
                                            ?>
                                        </span>
                                        <p class="sr-only"><?php echo esc_html('Play video') ?></p>
                                    </div>
                                </a>
                            </div>
                        <?php endif; ?>
                        <div class="flex w-full h-full justify-start tb:justify-center items-center absolute inset-0 bg-shade-black-400">
                            <video class="h-full w-full max-h-full" tabindex="-1" class="video" controls playsinline poster="<?php echo esc_url_raw($attributes->image_url) ?>" src="<?php echo esc_url_raw($attributes->video_url); ?>" type="video/mp4">
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
