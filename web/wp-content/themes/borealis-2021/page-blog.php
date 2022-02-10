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
<div>
    <?php
    $query = sanitize_text_field(wp_unslash($_GET['q'])) ?? null;
    $taxonomies = array(array('name' => 'research-areas'), array('name' => 'content-type'));
    $taxonomies_array = array();
    foreach ($taxonomies as $taxonomy) {
        $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
        $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
        array_push($taxonomies_array, $taxonomy);
    }
    echo pg_generate_search_bar($query, $taxonomies_array);
    ?>
    <?php
    $tab_array = [
        "page" => array(
            'title' => 'Page',
            'id' => 'page',
        ),
        "publications" => array(
            'title' => 'Publications',
            'id' => 'publications',
        ),
        "research" => array(
            'title' => 'Research',
            'id' => 'research-blogs',
        ),
        "news" => array(
            'title' => 'News',
            'id' => 'news',
        ),
    ];

    $search_query = pg_get_query_values($_GET, 'q')[0];
    $research_areas = pg_get_query_values($_GET, 'research-areas');
    ?>
    <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
    <div class="container pt-8 text-shade-black-400">
        <?php
        $has_results = [];
        foreach ($tab_array as $inner_block => $element) {
            reset($tab_array);
            $title = $element['title'];
            $id = $element['id'];

            $research_areas = pg_get_query_values($_GET, 'research-areas');
            $args = pg_generate_query($id, $query, array('research-areas' => $research_areas), 1, 5);
            $Query = new WP_Query($args);
            if (!empty($Query->posts)) {
                array_push($has_results, true);
            } else {
                array_push($has_results, false);
            }
        }
        ?>
        <?php if (!empty($search_query) and in_array(true, $has_results)) : ?>
            <p class="h3 py-10">Results for <?php echo esc_html($search_query) ?></p>
        <?php elseif (!empty($search_query)) : ?>
            <p class="h3 py-10">No results found for <?php echo esc_html($search_query) ?></p>
        <?php endif; ?>
    </div>
    <section id="search-nav" class="tab-container">
        <div role="tablist" aria-orientation="horizontal" class="flex container">
            <?php
            foreach ($tab_array as $inner_block => $element) {
                reset($tab_array);
                $title = $element['title'];
                $id = $element['id'];

                $research_areas = pg_get_query_values($_GET, 'research-areas');
                $args = pg_generate_query($id, $query, array('research-areas' => $research_areas), 1, 9);
                $Query = new WP_Query($args);

                if (empty($Query->posts)) {
                    unset($tab_array[$id]);
                };

                if (!empty($Query->posts)) {
                    if ($inner_block === key($tab_array)) {
                        echo '<button class="paragraph text-primary-navy-400 mr-10 md-mr-20 pb-5 border-b border-b-4 border-primary-electric-purple-400" role="tab" aria-selected="true" id="' . $id . '-tab" aria-controls="' . $id . '-content-panel">' . $title . '</button>';
                    } else {
                        echo '<button class="paragraph text-primary-navy-400 mr-10 md-mr-20 pb-5 border-b border-b-0 border-primary-electric-purple-400" role="tab" aria-selected="false" id="' . $id . '-tab" aria-controls="' . $id . '-content-panel">' . $title . '</button>';
                    }
                }
            }
            ?>
        </div>
        <?php
        foreach ($tab_array as $inner_block => $element) {
            reset($tab_array);
            $title = $element['title'];
            $id = $element['id'];

            $research_areas = pg_get_query_values($_GET, 'research-areas');
            $args = pg_generate_query($id, $query, array('research-areas' => $research_areas), 1, 9);
            $Query = new WP_Query($args);


            if ($inner_block === key($tab_array)) { ?>
                <div class="block load-more-results" id="<?php echo $id ?>-content-panel" role="tabpanel" aria-labelledby="<?php echo $id ?>-tab">
                    <?php
                    if (!empty($Query->posts)) : // Empty Query check. 
                    ?>
                        <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
                        <ul class="posts-listing border-shade-grey-500 border-t" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages) ?>" data-query="<?php echo esc_attr($query) ?>" data-posttype="<?php echo esc_attr($id) ?>">
                            <?php foreach ($Query->posts as $post) : // Start of Query loop 
                            ?>
                                <li class="last:border-b-0 border-b border-shade-grey-500">
                                    <?php echo pg_generate_main_search_result($post, $research_areas, $id); ?>
                                </li>
                            <?php endforeach;  // End of Query Loop 
                            ?>
                        </ul>
                        <div class="container">
                            <button class="<?php echo intval($Query->max_num_pages) > 1 ? '' : 'hidden' ?> block h4 pt-10 pb-8 text-center w-full load-more"><?php echo 'Load More ' . $title ?></button>
                        </div>
                    <?php endif; ?>
                    <?php wp_reset_query(); ?>
                </div>
            <?php } else { ?>
                <div class="hidden load-more-results" id="<?php echo $id ?>-content-panel" role="tabpanel" aria-labelledby="<?php echo $id ?>-tab">
                    <?php
                    if (!empty($Query->posts)) : // Empty Query check. 
                    ?>
                        <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
                        <ul class="posts-listing border-shade-grey-500 border-t" data-page="1" data-research-areas="<?php echo esc_attr(implode(',', $research_areas)) ?>" data-total="<?php echo esc_attr($Query->max_num_pages) ?>" data-query="<?php echo esc_attr($query) ?>" data-posttype="publications">
                            <?php foreach ($Query->posts as $post) : // Start of Query loop 
                            ?>
                                <li class="last:border-b-0 border-b border-shade-grey-500">
                                    <?php echo pg_generate_main_search_result($post, $research_areas, $id); ?>
                                </li>
                            <?php endforeach;  // End of Query Loop 
                            ?>
                        </ul>
                        <div class="container">
                            <button class="<?php echo intval($Query->max_num_pages) > 1 ? '' : 'hidden' ?> block h4 pt-10 pb-8 text-center w-full load-more"><?php echo 'Load More ' . $title ?></button>
                        </div>
                    <?php endif; ?>
                    <?php wp_reset_query(); ?>
                </div>
            <?php } ?>
        <?php

        }
        ?>
    </section>
    <div class="border-b border-shade-grey-500"></div>
</div>
<?php
get_footer();
