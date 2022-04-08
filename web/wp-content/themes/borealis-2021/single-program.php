<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
$hero_video = get_post_meta($post->ID, 'hero_video_id', true);
$applications_open = get_post_meta($post->ID, 'applications_open', true);
$applications_closed_copy = get_post_meta($post->ID, 'applications_closed_copy', true);
$video = wp_get_attachment_url($hero_video);
$image = get_the_post_thumbnail_url($post->ID);
if (!isset($image) || !strlen($image) > 0) {
    $image = get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg';
}
$allowed_html = pg_allowed_html();
?>
<main id="main-content" class="main-content">
    <?php if (isset($video) && strlen($video) > 0) : ?>
        <div class="mb-14">
            <div class="container relative video-block rounded-large overflow-hidden pt-video md:pt-video-md lg:pt-video-lg lg:min-h-[435px] pb-25">
                <?php if (!empty($image)) : ?>
                    <div class="bg-cover bg-center absolute inset-0 z-10 video-block__overlay transition-all duration-400" style="background-image: url(<?php echo esc_url_raw($image) ?>)">
                        <a class="block w-full h-full video-block__overlay__button" href="#" aria-label="<?php echo esc_attr('Play video') ?>">
                            <div class="flex w-full h-full items-center justify-center">
                                <span class="text-shade-white-400 paragraph-lg md:h2-desktop">
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
                <div class="flex w-full h-full justify-center items-center absolute inset-0 bg-shade-grey-50">
                    <video class="h-full max-h-full" tabindex="-1" class="video" controls playsinline poster="<?php echo esc_url_raw($image) ?>">
                        <source src="<?php echo esc_url_raw($video); ?>" type="video/mp4">
                    </video>
                </div>
            </div>
            <?php if (!boolval($applications_open)) : ?>
                <div class="flex justify-end container">
                    <div class="md:basis-3/4 bg-alert-error-400 text-shade-white-400 py-9 px-6">
                        <div class="flex justify-center items-center"><span aria-hidden="true" class="h3"><?php echo pg_render_icon('applications-closed') ?></span>
                            <p class="grow text-center pl-8 paragraph"><?php echo isset($applications_closed_copy) && strlen($applications_closed_copy) > 0 ? esc_html($applications_closed_copy) : esc_html($post->post_title . ' submission is closed'); ?></p>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    <?php endif; ?>
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
    ?>
    <?php
            the_content();
        endwhile;
    endif;
    ?>
</main>
<?php
get_footer();
