<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
$hero_image_url = get_the_post_thumbnail_url($post->ID, 'full');
$allowed_html = pg_allowed_html();
?>
<div aria-hidden="true" class="pt-115 bg-cover bg-no-repeat bg-center" style="background-image: url(<?php echo isset($hero_image_url) && !empty($hero_image_url) ? esc_url_raw($hero_image_url) : get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg'; ?>)"></div>
<main id="main-content" class="main-content pt-8 md:pt-0">
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
