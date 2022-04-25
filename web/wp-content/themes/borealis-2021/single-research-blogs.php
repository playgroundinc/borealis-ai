<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
$thumbnail_id = get_post_thumbnail_id( $post->ID );
$alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true); 

$title = get_the_title($post->ID);
$publication_date = get_post_meta($post->ID, 'publication_date', true);
$authors = get_post_meta($post->ID, 'authors', true);
$url = get_permalink($post->ID);

function getbaseurl($url)
{

    $domain = parse_url($url, PHP_URL_HOST);
    return $domain;
}
?>
<?php if (!empty($thumbnail_id)) : ?>
  <div class="container">
  <div class="mt-19">
    <?php the_post_thumbnail( 'full', array( 'alt' => $alt ) );?>
  </div>
</div>
<?php endif; ?>
<main class="main-content container research-blog">
    <?php echo pg_generate_blog_sidebar_cite($post->ID); ?>
    <div class="pt-14 tb:flex">
        <aside class="tb:w-1/6 md:mb-6">
            <?php if (
                isset($authors) && !empty($authors)
                && isset($publication_date) && !empty($publication_date)
                && isset($title) && !empty($title)
                && isset($url) && !empty($url)
            ) : ?>
                <div class="hidden tb:block sidebar">
                    <ul class="research-blog-sidebar pb-4 border-solid border-b border-black max-w-sidebar mb-6">
                        <?php echo pg_generate_blog_sidebar($post->ID); ?>
                    </ul>
                    <div class="flex justify-between w-6/12 tb:w-full">
                        <div class="flex cursor-pointer text-3xl open-cite" id="open-cite">
                            <?php echo pg_render_icon('cite') ?>
                            <button class="ml-2 paragraph-sm">Cite</button>
                        </div>
                        <div>
                            <?php echo pg_generate_blog_share($post->ID); ?>
                        </div>
                    </div>
                    <div id="share-modal" class="share-modal hidden rounded-large text-shade-grey-700 paragraph-sm mt-6 tb:ml-19 bg-shade-grey-100 flex flex-col justify-center items-start">
                        <ul class="w-full">
                            <li>
                                <a class="block p-5" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo getbaseurl($url) ?>/?shareSlug%3D<?php echo $url ?>" target="_blank" rel="noopener noreferrer">
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
                </div>
                <div class="tb:hidden block sidebar">
                    <div class="flex items-center accordion-block relative">
                        <button class="paragraph text-shade-black-400 flex justify-between items-center accordion-row__header py-3 w-full" aria-controls="accordion-menu" aria-label="Expand or collapse accordion menu for blog sidebar table of contents and ability to share and cite the blog post" aria-expanded="false">Contents<span class="icon icon-md ml-2"><?php echo pg_render_icon('chevron') ?></span></button>
                    </div>
                    <div id="accordion-menu" class="tb:hidden slide-toggle mb-16 sidebar-accordion" role="region" aria-labelledby="accordion-menu">
                        <ul class="research-blog-sidebar pb-4 border-solid border-b border-black max-w-sidebar mb-6">
                            <?php echo pg_generate_blog_sidebar($post->ID); ?>
                        </ul>
                        <div class="flex justify-between w-8/12 md:w-6/12 tb:w-full">
                            <div class="flex cursor-pointer text-3xl open-cite" id="open-cite">
                                <?php echo pg_render_icon('cite') ?>
                                <button class="ml-2 paragraph-sm">Cite</button>
                            </div>
                            <div>
                                <?php echo pg_generate_blog_share($post->ID); ?>
                            </div>
                        </div>
                        <div id="share-modal" class="share-modal hidden rounded-large text-shade-grey-700 paragraph-sm mt-6 tb:ml-19 flex flex-col justify-center items-start">
                            <ul class="w-full">
                                <li>
                                    <a class="block py-5 md:p-5" href="https://www.linkedin.com/shareArticle?mini=true&url=https://dev-borealis-ai.pantheonsite.io/?shareSlug%3D<?php echo $url ?>" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a class="pb-5 pl-0 md:pl-5 block twitter-share-button" href="http://twitter.com/share?text=Hiring across all teams: research, product, engineering, and more! Check out this role with Borealis AI.&url=<?php echo $url ?>" target="_blank" rel="noopener noreferrer">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </aside>
        <div class="page__content tb:w-5/6">
            <div class="mx-auto tb:w-5/6">
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
