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
            $taxonomies = array(array('name' => 'research-areas'), array('name'=> 'conferences'));
            $taxonomies_array = array();
            foreach ($taxonomies as $taxonomy) {
                $taxonomy['active'] = (strpos($_SERVER['REQUEST_URI'], $taxonomy['name']) !== false) ? true : false;
                $taxonomy['label'] = ucwords(str_replace('-', ' ', $taxonomy['name']));
                array_push($taxonomies_array, $taxonomy);
            }
            echo pg_generate_search_bar($query, $taxonomies_array); 
        ?>
    </main>
<?php
get_footer();
