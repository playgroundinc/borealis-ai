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

require get_template_directory() . '/inc/custom-post-types/news-releases-cpt.php';

if ( ! function_exists( 'pg_register_custom_post_types' ) ) {
	/**
     * Calls the individual functions to render the custom post types.
     */
	function pg_register_custom_post_types() {
        pg_register_press_release_cpt();
	}

}

// adding the function to the Wordpress init.
add_action( 'init', 'pg_register_custom_post_types');