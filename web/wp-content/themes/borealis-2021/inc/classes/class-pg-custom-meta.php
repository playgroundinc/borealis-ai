<?php
/**
 *
 * Custom Metadata
 *
 * Add custom meta to all Pages.
 *
 * @package pg-wp-starter
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

/**
 * Meta Class
 *
 * @category    Class
 * @package     pg-wp-starter
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */
class PG_Custom_Meta {
    function __construct($meta_data, $post_type = 'post') {
        $this->meta_data = $meta_data;
        $this->post_type = $post_type;
        $this->meta_fields = array(
            'richtext' => array(
                'type'              => 'string',
                'single'            => true,
                'sanitize_callback' => 'wp_kses_post',
            ),
            'text'     => array(
                'type'              => 'string',
                'single'            => true,
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'url'      => array(
                'type'              => 'string',
                'single'            => true,
                'sanitize_callback' => 'esc_url_raw',
            ),
            'email'    => array(
                'type'              => 'string',
                'single'            => true,
                'sanitize_callback' => 'sanitize_email',
            ),
            'boolean'  => array(
                'type'              => 'boolean',
                'single'            => true,
                'sanitize_callback' => 'rest_sanitize_boolean',
            ),
            'date'     => array(
                'type'              => 'string',
                'single'            => true,
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'number' => array(
                'type' => 'number',
                'single' => true,
                'sanitize_callback' => 'sanitize_text_field',
            ),
            'multiple' => array(
                'type'              => 'string',
                'single'            => false,
                'sanitize_callback' => 'wp_kses_post',
            ),
        );
    }
    
    /**
     * Add a custom metabox.
     */
    function register_custom_meta() {
        if (!empty($this->meta_data)) {
            foreach ( $this->meta_data as $key => $field_type ) {
                register_meta(
                    $this->post_type,
                    $key,
                    array(
                        'show_in_rest'      => true,
                        'type'              => $this->meta_fields[ $field_type ]['type'],
                        'single'            => $this->meta_fields[ $field_type ]['single'],
                        'sanitize_callback' => $this->meta_fields[ $field_type ]['sanitize_callback'],
                        'auth_callback'     => function() {
                            return current_user_can( 'edit_posts' );
                        },
                    )
                );
            }
        }
    }

    function register_custom_post_meta() {
        if (!empty($this->meta_data)) {
            foreach ( $this->meta_data as $key => $field_type ) {
                register_post_meta(
                    $this->post_type,
                    $key,
                    array(
                        'show_in_rest'      => true,
                        'type'              => $this->meta_fields[ $field_type ]['type'],
                        'single'            => $this->meta_fields[ $field_type ]['single'],
                        'sanitize_callback' => $this->meta_fields[ $field_type ]['sanitize_callback'],
                        'auth_callback'     => function() {
                            return current_user_can( 'edit_posts' );
                        },
                    )
                );
            }
        }
    }
}


