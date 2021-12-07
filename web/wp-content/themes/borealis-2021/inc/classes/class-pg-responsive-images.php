<?php
/**
 *
 * This is a class to handle responsive images.
 *
 * @package pg-wp-starter
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

/**
 * Responsive Image Functionality.
 */
class PG_Responsive_Images {
    /**
     * Takes in arguments used when registering and rendering srcset/size of images.
     *
     * Breakpoints should be passed from largest to smallest.
     *
     * @param array  $sizes the desired size at the specific breakpoint.
     * @param string $namespace if registering a new image size, defines the default namespace.
     * @param string $crop when registering a new image size, defines whether or not to crop the image.
     */
    public function __construct( $sizes = array(), $namespace = null, $crop = true ) {
        $this->sizes     = $sizes;
        $this->namespace = $namespace;
        $this->crop      = $crop;
    }
    /**
     * Defines the current breakpoints. Used when creating the size string.
     *
     * @return array $breakpoints the current breakpoints used in the site's css.
     */
    private function get_breakpoints() {
        $breakpoints = array(
            'xxl' => '1590',
            'xl'  => '1440',
            'lg'  => '996',
            'md'  => '768',
            'sm'  => '544',
            'xs'  => '420',
        );
        return $breakpoints;
    }
    /**
     * Checks whether or not string is empty in order to include/exclude comma.
     *
     * @param string $current the current "sizes" string.
     * @param string $addition the string being added to the end of the "sizes" string.
     *
     * @return string $current the "sizes" string updated with the new information.
     */
    public function update_string( $current, $addition ) {
        if ( strlen( $current ) > 0 ) {
            $current .= ', ' . $addition;
            return $current;
        }
        $current .= $addition;
        return $current;
    }

    /**
     * Function to get the "sizes" string for the responsive image.
     *
     * @return string $sizes a full string for the sizes used for responsive images.
     */
    public function get_sizes() {
        $breakpoints = $this->get_breakpoints();
        $sizes       = '';
        foreach ( $this->sizes as $key => $size ) {
            if ( isset( $breakpoints[ $key ] ) && ! empty( $breakpoints[ $key ] ) ) {
                $addition = '(min-width: ' . $breakpoints[ $key ] . 'px) ' . $size . 'px';
                $sizes    = $this->update_string( $sizes, $addition );
            }
        }
        if ( isset( $this->sizes['default'] ) ) {
            $addition = $this->sizes['default'] . 'px';
            $sizes    = $this->update_string( $sizes, $addition );
        }
        return $sizes;
    }
    /**
     * Functon to register new image sizes.
     */
    public function add_image_sizes() {
        foreach ( $this->sizes as $breakpoint => $value ) {
            $breakpoints = $this->get_breakpoints();
            $name        = 'default' !== $breakpoint ? $this->namespace . '-' . $breakpoint : $this->namespace;
            $width       = isset( $value['width'] ) && ! empty( $value['width'] ) ? $value['width'] : $breakpoints[ $breakpoint ];
            $height      = isset( $value['height'] ) && ! empty( $value['height'] ) ? $value['height'] : $value;
            add_image_size( $name, $width, $height, $this->crop );
        }
    }
}
