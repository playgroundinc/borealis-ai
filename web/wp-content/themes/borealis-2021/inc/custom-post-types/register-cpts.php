<?php
/**
 *  Custom Post Types
 *
 * Add custom meta to all Pages.
 *
 * @package WordPress
 * @subpackage trimac
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

require get_template_directory() . '/inc/custom-post-types/research-blogs-cpt.php';
require get_template_directory() . '/inc/custom-post-types/publications-cpt.php';
require get_template_directory() . '/inc/custom-post-types/news-cpt.php';
require get_template_directory() . '/inc/custom-post-types/leadership-cpt.php';
require get_template_directory() . '/inc/custom-post-types/author-cpt.php';


if (!function_exists( 'pg_register_custom_post_types' )) {
	/**
	 * Calls the individual functions to render the custom post types.
	*/
	function pg_register_custom_post_types() {
		pg_register_research_blog_cpt();
		pg_register_publications_cpt();
		pg_register_news_cpt();
		pg_register_leadership_cpt();
		pg_register_author_cpt();
	}
}

// adding the function to the Wordpress init.
add_action( 'init', 'pg_register_custom_post_types');