<?php
/**
 *
 * Carousel Images
 *
 * Registers custom image sizes
 *
 * @package pg-wp-starter
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'pg_add_custom_image_sizes' ) ) {
    /**
     * Defines the arguments and creates a new instance of the responsive images class.
     */
    function pg_add_custom_image_sizes() {
        $sizes = array(
            'xl'      => '498',
            'lg'      => '344',
            'md'      => '265',
            'default' => array(
                'width'  => '1590',
                'height' => '550',
            ),
        );
        /**
         * Arguments:
         *
         * - The breakpoints for which we want to add an image size (width is defined by the breakpoint set as key, height is defined by the value).
         * - The namespace for the custom image sizes (will add '-{breakpoint} to the image size, e.g. 'custom-img-lg').
         * - Whether or not to crop this image. Passing true will default to a center crop.
         */
        $carousel_images = new PG_Responsive_Images( $sizes, 'custom-img', true );
        /**
         * Actually adds all the required image sizes.
         */
        $carousel_images->add_image_sizes();
    }
}

if ( ! function_exists( 'pg_get_regular_sizes' ) ) {
    /**
     * Add regular image sizes.
     */
    function pg_get_regular_sizes() {
        $sizes            = array(
            'xl'      => '1440',
            'lg' => '996',
            'md' => '768',
            'default' => '1590',
        );
        return $sizes;
    }
}
