<?php
/**
 *
 * Register Image Sizes
 *
 * Registers all of the new sets of custom image sizes.
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'pg_register_custom_image_sizes' ) ) {
    /**
     * Calls the appropriate functions to register new image sizes.
     */
    function pg_register_custom_image_sizes() {
        add_image_size( 'team-member', 310, 410, true );
    }
}

add_action( 'after_setup_theme', 'pg_register_custom_image_sizes' );