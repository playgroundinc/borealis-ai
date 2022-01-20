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
            echo pg_generate_search_bar($query); 
        ?>
    </div>
<?php
get_footer();
