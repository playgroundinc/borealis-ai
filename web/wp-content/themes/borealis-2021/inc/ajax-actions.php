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

 // Send emails
add_action( 'wp_ajax_send_email', 'pg_verify_email_request' );
add_action( 'wp_ajax_nopriv_send_email', 'pg_verify_email_request' );
