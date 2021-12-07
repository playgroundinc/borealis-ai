<?php
/**
 * Template Name: Search Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

get_header();

$query = "";
if (isset($_GET['q'])) {
    $query = sanitize_text_field(wp_unslash($_GET['q']));
}

$allowed_html = pg_allowed_html();

$page_var = 1;
if (!empty($_GET['pno'])) {
    $page_var = intval(wp_unslash($_GET['pno']));
}
$current_page = intval($page_var) > 0 ? intval($page_var) : 1;

$args = array(
    'posts_per_page' => 10,
    'suppress_filters' => 0,
    'paged' => $current_page,
    'page' => $current_page,
    's' => $query,
);

$search_query = new WP_Query($args);

$total_pages = $search_query->max_num_pages;
$Pagination = new PG_Pagination($current_page, $total_pages);

?>
    <div class="page__content">
        <div class="custom-component search">
            <div class="container container-fluid">
                <?php get_search_form() ?>
                <?php  if ($query !== ''): ?>
                    <div class="search__results mt-xs-9">
                        <h2 class="heading_three search__results__title animated-element"><?php esc_html_e('Search Results', 'trmc') ?></h2>
                        <?php 
                        if ( $search_query->have_posts() ) : 
                            ?>
                                <ul>
                                <?php
                                    $count = 0;
                                    while ( $search_query->have_posts() ) : 
                                        $search_query->the_post();
                                        $template = get_page_template_slug($post->ID);
                                        if ($template === 'page-search.php') {
                                            continue;
                                        }
                                ?>
                                    <li class="pt-xs-3 animated-element">
                                        <a class="block-link link--plain pv-xs-2" href="<?php echo esc_url_raw(get_the_permalink()); ?>" aria-labelledby="<?php echo esc_attr('search-result-label__' . $count) ?>" aria-describedby="<?php echo esc_attr('search-result__' . $count) ?>">
                                            <p id="<?php echo esc_attr('search-result__' . $count) ?>" class="heading_four"><?php echo esc_html(the_title()); ?></p>
                                            <p id="<?php echo esc_attr('search-result-label__' . $count) ?>" class="search__form__faux-link label"><?php esc_html_e('Read more', 'trmc'); ?></p>
                                        </a>
                                    </li>
                                    <?php $count = $count + 1; ?>
                                <?php endwhile; ?>
                                </ul>
                                <?php 
                                    $pagination_links = $Pagination->get_pagination_links(); 
                                    echo wp_kses($pagination_links, $allowed_html); 
                                ?>
                            <?php 
                        else: 
                            ?> 
                                <p class="heading_four"><?php echo esc_html('No Results Found', 'trmc')?></p>
                            <?php
                        endif;
                        ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
<?php
get_footer();
