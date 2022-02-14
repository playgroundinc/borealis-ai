<?php
/**
 *  Custom Taxonomies
 *
 * Add custom taxonomy
 *
 * @package WordPress
 * @subpackage Borealis
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

require get_template_directory() . '/inc/custom-taxonomies/research-areas-taxonomy.php';
require get_template_directory() . '/inc/custom-taxonomies/content-type-taxonomy.php';


if (!function_exists( 'pg_register_custom_taxonomies' )) {
	/**
     * Calls the individual functions to render the custom post types.
     */
	function pg_register_custom_taxonomies() {
                pg_register_research_area_taxonomy();
                pg_register_content_type_taxonomy();
	}
}

// adding the function to the Wordpress init.
add_action( 'init', 'pg_register_custom_taxonomies');