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
$title = get_the_title($post->ID);
$publication_date = get_post_meta($post->ID, 'publication_date', true);
$authors = get_post_meta($post->ID, 'authors', true);
$url = get_permalink($post->ID);
?>
<?php if (isset($hero_image_url) && !empty($hero_image_url)) : ?>
    <div aria-hidden="true" class="pt-100 mt-19 bg-cover bg-no-repeat bg-center" style="background-image: url(<?php echo esc_url_raw($hero_image_url) ?>)"></div>
<?php endif; ?>
<main class="main-content container single-publication">
</main>

<?php
get_footer();