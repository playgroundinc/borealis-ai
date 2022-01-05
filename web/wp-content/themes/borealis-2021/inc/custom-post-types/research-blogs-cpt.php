<?php 

if (!function_exists('pg_register_research_blog_cpt')) {
    /**
     * Creates a Location Custom Post Type with a services custom taxonomy and custom metadata
     */
    function pg_register_research_blog_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Research_Blogs_CPT = new PG_Custom_Post_Type('research-blogs', 'Research Blog', 'Research Blogs', array('icon' => 'dashicons-category', 'has_archive' => 'false', 'template' => [ [$namespace . '/research-blog-meta-block'], [ $namespace . '/body-copy']]));
        $Research_Blogs_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'publication_date' => 'text',
        );
        $Research_Blogs_CPT->register_meta($meta_values);
    }
}

if (!function_exists('pg_handle_research_blog_save')) {
    /**
     * Since all News Releases are sorted by this key, this function sets today's date as the default. 
     * 
     * @param int $post_id the id for the current post.
     */
    function pg_handle_research_blog_save($post_id) {
        $date = get_post_meta($post_id, 'publication_date');
        if (empty($date)) {
            $date = date('Y/m/d');
            update_post_meta($post_id, 'publication_date', $date);
        }
    }
}
if (!function_exists('pg_save_post_callback')) {
    /**
     * Default function for all post saves.
     * 
     * @param int $post_id the id for the current post.
     * @param object $post a WP_Object of the post.
     * @param boolean $update whether or not this is an update.
     */
    function pg_save_post_callback($post_id, $post, $update){
        if ($post->post_type === 'research-blogs'){
            // We're only interested in setting the metavalue by default right now.
            if ($update) {
                return;
            }
            pg_handle_research_blog_save($post_id);
        }
    }
}


add_action('save_post','pg_save_post_callback', 10, 3);