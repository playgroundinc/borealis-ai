<?php 
if ( ! function_exists( 'pg_load_more_results' ) ) {
    /**
     * Verify the nonce 
     */
    function pg_load_more_results() {
        $nonce    = isset( $_POST['load_more'] ) && ! empty( $_POST['load_more'] ) ? sanitize_key( wp_unslash( $_POST['load_more'] ) ) : false;
        if ( ! $nonce || ! wp_verify_nonce( $nonce, 'load-more-nonce' ) ) {
            wp_send_json_error(
                array(
                    'text' => __( 'This action is not allowed', 'cpr' ),
                )
            );
            die();
        }
        $query = json_decode(wp_unslash($_POST['query']));
        $page = intval(wp_unslash($_POST['page']));
        $display_count = 12;
        $offset = ( $page - 1 ) * $display_count;
        $query->page = $page; 
        $query->offset = $offset;

        // wp_send_json(array('status' => $query, 'markup' => json_encode($markup)), 200);
        $posts = new WP_Query($query);
        $markup = array_map(
            function($post) {
                return pg_generate_publication_result($post);
            },
            $posts->posts
        );
        wp_send_json(array('status' => 'success', 'markup' => json_encode($markup)), 200);
    }
}
