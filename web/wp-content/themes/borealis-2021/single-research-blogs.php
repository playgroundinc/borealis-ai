<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
?>
    <div class="research-blog-sidebar">
       <?php echo pg_generate_blog_sidebar($post->ID); ?>
    </div>
    <div class="page__content">
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
<?php
get_footer();

