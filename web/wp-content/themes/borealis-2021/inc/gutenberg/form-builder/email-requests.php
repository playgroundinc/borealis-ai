<?php
/**
 *
 * Email Requests
 *
 * Handles sending emails from forms.
 *
 * @package WordPress
 * @subpackage choice-reit
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

if ( ! function_exists( 'trmc_send_email' ) ) {
    /**
     * Sends email using wp_mail.
     *
     * @param string $to the email address to which the email is being sent. Pulled from the form.
     * @param string $subject the name of the form from which this email was sent.
     * @param string $message the email message.
     */
    function trmc_send_email( $to, $subject, $message ) {
        $success = wp_mail( $to, $subject, $message );
        if ( $success ) {
            wp_send_json_success( array( 'success' => true ), 200 );
            die();
        }
        wp_send_json_error( array( 'text' => $success ) );
        die();
    }
}

if (!function_exists('trmc_compose_email_body')) {
    function trmc_compose_email_body($email_object) {
        $body = "<table><tr><th>Field</th><th>Value</th></tr>";
        foreach ($email_object as $key => $value) {
            $field_name = pg_deslugify($key);
            $body .= '<tr><td>' . $field_name . '</td><td>' . $value . '<td></tr>';
        }
        $body .= "</table>";
        return $body;
    }
}

if ( ! function_exists( 'trmc_compose_email' ) ) {
    /**
     * Uses form details to compose email.
     *
     * @param object $email_object the fields pulled from the post object.
     */
    function trmc_compose_email( $email_details, $email_object ) {
        $subject = 'New submission from ' . $email_details['title'] . ' form';
        $header = '<p><strong>Form Name:</strong> ' . $email_details['title'] . '</p>';
        $header .= '<p><strong>Site:</strong> ' . $email_details['site'] . '</p>';
        $body = trmc_compose_email_body($email_object);
        $message = $header . $body;
        $to      = !empty($email_details['destination']) ? $email_details['destination'] : false;
        if ($to) {
            trmc_send_email( $to, $subject, $message);
        }
    }
}

if (!function_exists('trmc_sanitize_fields')) {
    function trmc_sanitize_fields($post, $key, $type = null) {
        if (isset($post[$key]) && is_array($post[$key])) {
            $post[$key] = implode($post[$key], ', ');
        }
        switch($type) {
            case 'email': 
                $sanitized_value = isset( $post[$key] ) && ! empty( $post[$key] ) ? filter_var( wp_unslash( $post[$key] ), FILTER_SANITIZE_EMAIL ) : false;
            break;
            case 'url':
                $sanitized_value = isset( $post[$key] ) && ! empty( $post[$key] ) ? esc_url_raw( wp_unslash( $post[$key] ) ) : false;
            break;
            default: 
                $sanitized_value   = isset( $post[$key] ) && ! empty( $post[$key] ) ? sanitize_textarea_field( wp_unslash( $post[$key] ) ) : false; 
            break;
        }
        return $sanitized_value;
    }
}

if ( ! function_exists( 'trmc_build_email_object' ) ) {
    /**
     * Builds the email object by sanitizing fields on the post object.
     *
     * @param array $post the post object.
     */
    function trmc_build_email_object( $post ) {
        $email_details                 = array();
        $email_object = array();
        $fields = array('destination' => 'email', 'site' => 'url', 'title' => 'string');
        foreach( $fields as $key => $type) {
            $email_details[$key] = trmc_sanitize_fields($post, $key, $type);
        }
        foreach ($post as $key => $value) {
            if (!array_key_exists($key, $email_details) && $key !== 'action' && $key !== 'nonce' && $key !== 'username') {
                $email_object[$key] = trmc_sanitize_fields($post, $key);
            }
        }
        trmc_compose_email($email_details, $email_object);
    }
}

if ( ! function_exists( 'trmc_verify_email_request' ) ) {
    /**
     * Verify the nonce and
     */
    function trmc_verify_email_request() {
        $nonce    = isset( $_POST['nonce'] ) && ! empty( $_POST['nonce'] ) ? sanitize_key( wp_unslash( $_POST['nonce'] ) ) : false;
        $honeypot = ! empty( $_POST['username'] ) ? filter_var( wp_unslash( $_POST['username'] ), FILTER_SANITIZE_STRING ) : false;
        if ( ! $nonce || ! wp_verify_nonce( $nonce, 'send_email' ) ) {
            wp_send_json_error(
                array(
                    'text' => __( 'This action is not allowed', 'trmc' ),
                )
            );
            die();
        }
        // Check the honey pot.
        if ( $honeypot ) {
            wp_send_json_error(
                array(
                    'text' => __( 'Hmm, something strange is going on...', 'trmc' ),
                )
            );
            die();
        }
        trmc_build_email_object( $_POST );
    }
}

add_filter( 'wp_mail_content_type', 'trmc_set_content_type' );

if ( ! function_exists( 'trmc_set_content_type' ) ) {
    /**
     * Sets content type on emails to be "text/html"
     *
     * @param string $content_type the current content type for emails.
     */
    function trmc_set_content_type( $content_type ) {
        return 'text/html';
    }
}
