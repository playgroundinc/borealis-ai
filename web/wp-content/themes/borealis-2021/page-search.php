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
    $taxonomies = array(array('name' => 'research-areas'));
    $taxonomies_array = array();
    foreach ($taxonomies as $taxonomy) {
        $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
        $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
        array_push($taxonomies_array, $taxonomy);
    }
    echo pg_generate_search_bar_main($query, $taxonomies_array);
    ?>
    <?php
    $tab_array = [
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
    // TODO: Do we want to search any and all post types, or just the three pub, res, news
    // $args = pg_generate_query('publications', $search_query, array('research-areas' => $research_areas));
    // $argsPub = pg_generate_query('publications', $search_query, array('research-areas' => $research_areas));
    // $argsResearchBlogs = pg_generate_query('research-blogs', $search_query, array('research-areas' => $research_areas));
    // $argsNews = pg_generate_query('news', $search_query, array('research-areas' => $research_areas));
    // $Query = new WP_Query($args);
    // $QueryResearchBlogs = new WP_Query($argsResearchBlogs);
    // $QueryNews = new WP_Query($argsNews);

    // if (!empty($Query->posts)) :
    ?>
    <button class="refresh-results hidden"><?php echo esc_html('Refresh Results') ?></button>
    <div class="container pt-8 text-shade-black-400">
        <?php if (!empty($search_query)) : ?>
            <p class="h3 py-10">Results for <?php echo esc_html($search_query) ?></p>
        <?php endif; ?>
    </div>
    <section id="search-nav" class="tab-container container">
        <div role="tablist" aria-orientation="horizontal" class="w-5/12">
            <?php
            foreach ($tab_array as $inner_block => $element) {
                reset($tab_array);
                $title = $element['title'];
                $id = $element['id'];

                if ($inner_block === key($tab_array)) {
                    echo '<button class="paragraph text-primary-navy-400 mr-20 pb-5 border-b border-b-4 border-primary-electric-purple-400" role="tab" aria-selected="true" id="' . $id . '-tab" aria-controls="' . $id . '-content-panel">' . $title . '</button>';
                } else {
                    echo '<button class="paragraph text-primary-navy-400 mr-20 pb-5 border-b border-b-0 border-primary-electric-purple-400" role="tab" aria-selected="false" id="' . $id . '-tab" aria-controls="' . $id . '-content-panel">' . $title . '</button>';
                }
            }
            ?>
        </div>
        <?php
        foreach ($tab_array as $inner_block => $element) {
            reset($tab_array);
            $title = $element['title'];
            $id = $element['id'];

            if ($inner_block === key($tab_array)) { ?>
                <div class="block" id="<?php echo $id ?>-content-panel" role="tabpanel" aria-labelledby="<?php echo $id ?>-tab">
                    <?php
                    $research_areas = pg_get_query_values($_GET, 'research-areas');
                    $args = pg_generate_query($id, $query, array('research-areas' => $research_areas));
                    $Query = new WP_Query($args);
                    if (!empty($Query->posts)) : // Empty Query check. 
                    ?>
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
                    <?php else : ?>
                        <div class="pt-8 text-shade-black-400">
                            <p class="h3 py-10">No results found for <?php echo esc_html($search_query) ?></p>
                        </div>
                    <?php endif; ?>
                    <?php wp_reset_query(); ?>
                </div>
            <?php } else { ?>
                <div class="hidden" id="<?php echo $id ?>-content-panel" role="tabpanel" aria-labelledby="<?php echo $id ?>-tab">
                    <?php
                    $research_areas = pg_get_query_values($_GET, 'research-areas');

                    $args = pg_generate_query($id, $query, array('research-areas' => $research_areas));
                    $Query = new WP_Query($args);
                    if (!empty($Query->posts)) : // Empty Query check. 
                    ?>
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
                    <?php else : ?>
                        <div class="pt-8 text-shade-black-400">
                            <p class="h3 py-10">No results found for <?php echo esc_html($search_query) ?></p>
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
