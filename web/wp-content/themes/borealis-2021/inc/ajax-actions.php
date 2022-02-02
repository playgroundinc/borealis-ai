<?php 
/**
 *
 * Ajax Actions
 *
 * Sets routes for calls to WP Admin Ajax.
 *
 * @package WordPress
 * @subpackage trimac
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Load More Results
add_action( 'wp_ajax_load_more', 'pg_load_more_results' );
add_action( 'wp_ajax_nopriv_load_more', 'pg_load_more_results' );
