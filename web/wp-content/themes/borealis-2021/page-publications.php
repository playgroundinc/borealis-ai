<?php
/**
 * Template Name: Publications Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

get_header();

?>
    <main id="main-content">
        <?php      
            $query = sanitize_text_field(wp_unslash($_GET['q'])) ?? null;
            $taxonomies = array(array('name' => 'research-areas'));
            $taxonomies_array = array();
            foreach ($taxonomies as $taxonomy) {
                $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
                $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
                array_push($taxonomies_array, $taxonomy);
            }
            echo pg_generate_search_bar($query, $taxonomies_array); 
        ?>
        <?php
            $research_areas = pg_get_query_values($_GET, 'research-areas');

            $args = array(
                'post_type' => 'publications',
                'posts_per_page' => 12,
                'paged' => 1,
            );
            if ($query) {
                $args['s'] = $query;
            }
            if (!empty($research_areas)) {
                $args['tax_query'] = array(
                    'relation' => 'OR',
                    array(
                        'taxonomy' => 'research-areas',
                        'field'    => 'id',
                        'terms'    => $research_areas,
                    ),
                );
            }
            $Query = new WP_Query($args);
            wp_reset_query();
            if (!empty($Query->posts)): // Empty Query check. 
        ?>
        <ul class="posts-listing" data-page="1" data-total="<?php echo esc_attr($Query->max_num_pages)?>" data-query="<?php echo esc_attr(json_encode($args))?>">
            <?php foreach ($Query->posts as $post): // Start of Query loop ?>
                <li class="border-b border-shade-grey-500">
                    <?php echo pg_generate_publication_result($post); ?>
                </li>
            <?php   endforeach;  // End of Query Loop ?>
        </ul>
        <?php if (intval($Query->max_num_pages) > 1): ?>
            <div class="container">
                <button class="block h4 pt-10 pb-8 text-center w-full load-more"><?php echo esc_html('Load More Publications') ?></button>
            </div>
        <?php endif;?>
        <?php endif; // End of Empty Query check ?> 
    </main>
<?php
get_footer();
