<?php
/**
 * Template Name: Search Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

get_header();

?>
    <div>
        <?php      
            $query = sanitize_text_field(wp_unslash($_GET['q'])) ?? null;
            $taxonomies = array(array('name' => 'research-areas'), array('name'=> 'conferences'));
            $taxonomies_array = array();
            foreach ($taxonomies as $taxonomy) {
                $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
                $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
                array_push($taxonomies_array, $taxonomy);
            }
            echo pg_generate_search_bar_main($query, $taxonomies_array); 
        ?>
         <?php
            $search_query = pg_get_query_values($_GET, 'q')[0]; 
            $query_args = array( 's' => $search_query );
            $Query = new WP_Query( $query_args );
            if (!empty($Query->posts)): 
        ?>
        <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
        <ul class="posts-listing border-shade-grey-500 border-t" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages)?>" data-query="<?php echo esc_attr($query)?>" data-posttype="publications">
            <!-- <?php foreach ($Query->posts as $post): // Start of Query loop ?>
                <li class="border-b border-shade-grey-500">
                    <?php echo pg_generate_publication_result($post, $search_query); ?>
                </li>
            <?php endforeach; ?> -->
        </ul>
        <div class="container">
            <button class="<?php echo intval($Query->max_num_pages) > 1 ? '' : 'hidden' ?> block h4 pt-10 pb-8 text-center w-full load-more"><?php echo esc_html('Load More Search Results') ?></button>
        </div>
        <?php endif;?>
        <?php wp_reset_query(); ?>
    </div>
<?php
get_footer();
