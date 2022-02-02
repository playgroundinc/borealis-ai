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
$post   = get_post($id);
$url = $post->guid;
?>
<?php if (isset($hero_image_url) && !empty($hero_image_url)) : ?>
    <div aria-hidden="true" class="pt-100 mt-19 bg-cover bg-no-repeat bg-center" style="background-image: url(<?php echo esc_url_raw($hero_image_url) ?>)"></div>
<?php endif; ?>
<main class="main-content container research-blog">
    <?php echo pg_generate_blog_sidebar_cite($post->ID); ?>
    <div class="pt-14 flex">
        <aside class="w-1/6 max-w-sidebar">
            <ul class="research-blog-sidebar pb-4 border-solid border-b border-black mb-6">
                <?php echo pg_generate_blog_sidebar($post->ID); ?>
            </ul>
            <div class="flex justify-between">
                <div class="w-22 flex cursor-pointer text-3xl" id="open-cite">
                    <?php echo pg_render_icon('cite') ?>
                    <button class="ml-2 paragraph-sm">Cite</button>
                </div>
                <div>
                    <?php echo pg_generate_blog_share($post->ID); ?>
                </div>
            </div>
            <div id="share-modal" class="hidden rounded-large text-shade-grey-700 paragraph-sm mt-6 ml-19 bg-shade-grey-100 flex flex-col justify-center items-start">
                <ul class="w-full">
                    <li> 
                        <a class="block p-5" href="https://www.linkedin.com/shareArticle?mini=true&url=https://dev-borealis-ai.pantheonsite.io/?shareSlug%3D<?php echo $url ?>" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li> 
                        <a class="pb-5 pl-5 block twitter-share-button" href="http://twitter.com/share?text=Hiring across all teams: research, product, engineering, and more! Check out this role with Borealis AI.&url=<?php echo $url ?>" target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <div class="page__content w-5/6">
            <div class="mx-auto w-5/6">
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
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
