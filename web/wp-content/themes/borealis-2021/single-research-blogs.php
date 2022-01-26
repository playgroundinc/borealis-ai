<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
$hero_image_url = get_the_post_thumbnail_url($post->ID, 'full')
?>
    <?php if (isset($hero_image_url) && !empty($hero_image_url)): ?>
        <div aria-hidden="true" class="pt-100 mt-19 bg-cover bg-no-repeat bg-center" style="background-image: url(<?php echo esc_url_raw($hero_image_url) ?>)"></div>
    <?php endif; ?>
    <main class="main-content container">
        <div class="pt-14 flex">
            <aside class="w-1/6">
                <div class="research-blog-sidebar">
                    <?php echo pg_generate_blog_sidebar($post->ID); ?>
                </div>
            </aside>
            <div class="page__content w-5/6">
                <div class="mx-auto w-5/6">
                    <?php 
                    if ( have_posts() ) : 
                        while ( have_posts() ) : 
                            the_post();
                        ?>
                        <?php
                            the_content();
                        endwhile;
                    endif;
                    ?>
                </div>
            </div>
        </div>
    </main>

<?php
get_footer();

