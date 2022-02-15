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
        $post_type = sanitize_text_field(wp_unslash($_POST['post_type']));
        if ($post_type === 'all') {
            $post_type = array('news', 'research-blogs');
        }
        $query = sanitize_text_field(wp_unslash($_POST['query']));
        $page = intval(wp_unslash($_POST['page']));
        $taxonomies = json_decode(wp_unslash($_POST['params']));
        $args = pg_generate_query($post_type, $query, $taxonomies, $page, 10);
        $posts = new WP_Query($args);
        $taxonomies_array = get_object_vars($taxonomies);
        $markup = array_map(
            function($post) use ($taxonomies_array) {
                if ($post->post_type === 'news' || $post->post_type === 'research-blogs') {
                    return pg_generate_blog_result($post, $taxonomies_array['research-areas']);
                }
                return pg_generate_publication_result($post, $taxonomies_array['research-areas']);
            },
            $posts->posts
        );
        wp_reset_query();
        wp_send_json(array('status' => 'success', 'posts' => $posts->posts, 'markup' => json_encode($markup), 'total' => $posts->max_num_pages), 200);
    }
}
