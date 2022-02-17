<?php

/**
 * Template Name: Blog Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

get_header();

?>
<main id="content">
    <?php
        $query = sanitize_text_field(wp_unslash($_GET['q'])) ?? null;
        $post_type = sanitize_text_field(wp_unslash($_GET['posttype'])) ?? 'all';
        $post_type = $post_type !== '' ? $post_type : 'all';
        $taxonomies = array(array('name' => 'content-type'), array('name' => 'research-areas'));
        $taxonomies_array = array();
        foreach ($taxonomies as $taxonomy) {
            $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
            $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
            array_push($taxonomies_array, $taxonomy);
        }
        $tab_array = [
            "news" => array(
                'title' => 'News',
                'id' => 'news',
            ),
            "research" => array(
                'title' => 'Research',
                'id' => 'research-blogs',
            ),
        ];
        echo pg_generate_search_bar($query, $taxonomies_array, $tab_array, $post_type);

        $research_areas = pg_get_query_values($_GET, 'research-areas');

        $args = $post_type !== 'all' ? pg_generate_query($post_type, $query, array('research-areas' => $research_areas)) : pg_generate_query(array('news', 'research-blogs'), $query, array('research-areas' => $research_areas));
        $Query = new WP_Query($args);
    ?>
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
    <div class="load-more-results">
        <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
        <ul class="posts-listing" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages) ?>" data-query="<?php echo esc_attr($query) ?>" data-posttype="<?php echo esc_attr($post_type) ?>">
            <?php foreach ($Query->posts as $post) : // Start of Query loop 
            ?>
                <li class="border-b border-shade-grey-500">
                    <?php echo pg_generate_blog_result($post, $research_areas); ?>
                </li>
            <?php endforeach;  // End of Query Loop 
            ?>
        </ul>
        <div class="container">
            <button class="<?php echo intval($Query->max_num_pages) > 1 ? '' : 'hidden' ?> block h4 pt-10 pb-8 text-center w-full load-more"><?php echo esc_html('Load More Posts') ?></button>
        </div>
    </div
<?php wp_reset_query(); ?>
<?php
get_footer();
