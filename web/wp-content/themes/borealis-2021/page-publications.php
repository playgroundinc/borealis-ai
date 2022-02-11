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
<main id="content">
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
    $query = sanitize_text_field(wp_unslash($_GET['q'])) ?? null;
    $research_areas = pg_get_query_values($_GET, 'research-areas');
    $args = pg_generate_query('publications', $query, array('research-areas' => $research_areas));
    $Query = new WP_Query($args);
    ?>
    <?php if (!empty($query) and !empty($Query->posts)) : ?>
        <div class="container pt-8 text-shade-black-400">
            <p class="h3 py-10">Results for <?php echo esc_html($query) ?></p>
        </div>
    <?php elseif (!empty($query) and empty($Query->posts)) : ?>
        <div class="container pt-8 text-shade-black-400">
            <p class="h3 py-10">No results found for <?php echo esc_html($query) ?></p>
        </div>
    <?php endif; ?>
    <?php
    $research_areas = pg_get_query_values($_GET, 'research-areas');

    $args = pg_generate_query('publications', $query, array('research-areas' => $research_areas));
    $Query = new WP_Query($args);
    if (!empty($Query->posts)) : // Empty Query check. 
    ?>
        <div class="load-more-results">
            <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
            <ul class="posts-listing border-shade-grey-500 border-t" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages) ?>" data-query="<?php echo esc_attr($query) ?>" data-posttype="publications">
                <?php foreach ($Query->posts as $post) : // Start of Query loop 
                ?>
                    <li class="border-b border-shade-grey-500">
                        <?php echo pg_generate_publication_result($post, $research_areas); ?>
                    </li>
                <?php endforeach;  // End of Query Loop 
                ?>
            </ul>
            <div class="container">
                <button class="<?php echo intval($Query->max_num_pages) > 1 ? '' : 'hidden' ?> block h4 pt-10 pb-8 text-center w-full load-more"><?php echo esc_html('Load More Publications') ?></button>
            </div>
        </div>
    <?php endif; ?>
    <?php wp_reset_query(); ?>
</main>
<?php
get_footer();
