<?php
/**
 *
 * Mobile Square Images
 *
 * Registers mobile square as an image size for mobile.
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'pg_add_mobile_square_image_sizes' ) ) {
    /**
     * Defines the arguments and creates a new instance of the responsive images class.
     */
    function pg_add_mobile_square_image_sizes() {
        $breakpoints     = array(
            'xs'      => '420',
            'default' => array(
                'width'  => '600',
                'height' => '600',
            ),
        );
        $carousel_images = new PG_Responsive_Images( $breakpoints, 'mobile-square', true );
        $carousel_images->add_image_sizes();
    }
}
