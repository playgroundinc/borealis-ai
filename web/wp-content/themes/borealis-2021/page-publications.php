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
            );
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
            if (!empty($Query->posts)): // Empty Query check. 
                
        ?>
        <ul>
            <?php foreach ($Query->posts as $post): // Start of Query loop ?>
                <?php 
                    $allowed_html = pg_allowed_html();
                    $url = get_permalink($post->ID);
                    $terms = get_the_terms($post->ID, 'research-areas');
                    if (!empty($terms)) {
                        $terms = array_map(
                            function($term) use ($research_areas) {
                                if (!empty($research_areas)) {
                                    $match = array_search(strval($term->term_id), $research_areas);
                                    if ($match !== false) {
                                        return '<span class="text-primary-electric-blue-400">' . $term->name . '</span>';
                                    }
                                }
                                return $term->name;
                            }, 
                            $terms
                        );
                        $terms_string = implode(', ', $terms);
                    }
                ?>
                <li class="border-b border-shade-grey-500">
                    <a href="<?php echo esc_attr($url)?>" class="py-5 block">
                        <div class="container">
                            <div class="flex items-center">
                                <div class="grow">
                                   <p class="paragraph"><?php echo esc_html($post->post_title) ?></p>
                                   <?php if (isset($terms_string) && $terms_string !== ''): // Start of Terms String check ?>
                                        <p class="mt-3 text-shade-grey-700">
                                            <?php echo wp_kses($terms_string, $allowed_html) ?>
                                        </p>
                                    <?php endif; // End of Terms String check ?>
                                </div>
                                <p class="paragraph-sm text-shade-grey-700"><?php echo esc_html('Publication'); ?></p>
                            </div>
                        </div>
                    </a>
                </li>
            <?php endforeach; // End of Query Loop ?>
        </ul>
        <?php endif; // End of Empty Query check ?> 
    </main>
<?php
get_footer();
