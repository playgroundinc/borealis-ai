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
?>
    <?php if (isset($hero_image_url) && !empty($hero_image_url)): ?>
        <div aria-hidden="true" class="pt-100 mt-19 bg-cover bg-no-repeat bg-center" style="background-image: url(<?php echo esc_url_raw($hero_image_url) ?>)"></div>
    <?php endif; ?>
    <main class="main-content container research-blog">
        <?php echo pg_generate_blog_sidebar_cite($post->ID); ?>
        <div class="pt-14 flex">
            <aside class="w-1/6">
                <!-- MAYBE MOVE THIS BORDER SO THE CITE CAN GO IN HERE OR MAKE ITS OWN FUCNTION -->
                <div class="research-blog-sidebar pb-4 border-solid border-b border-black max-w-sidebar mb-6">
                    <?php echo pg_generate_blog_sidebar($post->ID); ?>
                </div>
                <div class="flex cursor-pointer" id="open-cite">
                    <svg class="icon-cite w-6 h-6" aria-labelledby="icon-cite">
                        <title id="icon-cite"></title>
                        <use xlink:href="#icon-cite"></use>
                    </svg>
                    <button class="ml-2 paragraph-sm">Cite</button>
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

