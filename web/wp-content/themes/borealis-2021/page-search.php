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
            echo pg_generate_search_bar($query, $taxonomies); 
        ?>
    </div>
<?php
get_footer();
