<?php
/**
 * Template Name: News Releases
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

get_header();

$current_lang = pg_current_lang();
$allowed_html = pg_allowed_html();
$format = $current_lang === 'en' ? 'F d, Y' : 'd F Y';

$page_var = 1;
if (!empty($_GET['pno'])) {
    $page_var = intval(wp_unslash($_GET['pno']));
}
$current_page = intval($page_var) > 0 ? intval($page_var) : 1;

$args = array(
    'post_type' => 'news-releases',
    'posts_per_page' => 10,
    'suppress_filters'=> 0 ,
    'paged' => $current_page,
    'order' => 'DESC',
    'orderby' => 'meta_value',
    'meta_key' => 'news_release_date'
);
$active_site = get_current_blog_id();
$site_news_releases_query = new WP_Query($args);
$site_news_releases = $site_news_releases_query->posts;
$total_pages = $site_news_releases_query->max_num_pages;
$Pagination = new PG_Pagination($current_page, $total_pages);

wp_reset_postdata();
wp_reset_query();
?>
<div>
    <div class="news-releases custom-component">
        <div class="container container-fluid">
            <ul>
                <?php foreach($site_news_releases as $news_release): ?>
                    <?php
                        $fields = array('news_release_date' => ''); 
                        $news_release_meta = pg_get_meta_values($news_release->ID, $fields);
                        $permalink = get_permalink($news_release->ID);
                        $date = !empty($news_release_meta['news_release_date']) ? date_i18n($format, strtotime($news_release_meta['news_release_date'])) : date_i18n($format, strtotime($news_release->post_date)); 
                    ?>
                    <li class="bb-xs-grey-lt mb-xs-3 animated-element">
                        <a class="pv-xs-3 block-link link--plain" href="<?php echo esc_url_raw($permalink); ?>">
                            <div class="flex between-xs middle-md col-xs row-md">
                                <div class="news-release__details">
                                    <p class="heading_four"><?php echo esc_html($news_release->post_title); ?></p>
                                    <p class="pt-xs-2 label label--lc copy--dark"><?php esc_html_e('Published on', 'trmc'); ?> <?php echo esc_html($date); ?></p>
                                </div>
                                <p class="heading_five pl-md-5 pt-xs-4 pt-md-0 fs-xs-0"><?php esc_html_e('View Article', 'trmc'); ?></p>
                            </div>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
            <?php 
                $pagination_links = $Pagination->get_pagination_links(); 
                echo wp_kses($pagination_links, $allowed_html); 
            ?>
        </div>
    </div>
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
