<?php 
/**
 * The template for outputting all single news release pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */
get_header();

$news_release_pages = get_pages(array(
    'meta_key' => '_wp_page_template',
    'meta_value' => 'page-news-releases.php'
));
$news_release_url = !empty($news_release_pages) ? get_permalink($news_release_pages[0]->ID) : false;
?>

<div>
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
    <?php if (!empty($news_release_url)): ?>
        <div class="container container--single container-fluid pv-xs-13 animated-element">     
            <a class="pv-xs-2 link--plain" href="<?php echo esc_url_raw($news_release_url); ?>"><?php esc_html_e('Back to News Releases', 'trmc') ?></a>
        </div>
    <?php endif; ?>
</div>
<?php 
get_footer();
?>
