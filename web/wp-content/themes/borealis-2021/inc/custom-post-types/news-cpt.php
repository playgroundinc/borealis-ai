<?php 

if (!function_exists('pg_register_news_cpt')) {
    /**
     * Creates a Location Custom Post Type with a services custom taxonomy and custom metadata
     */
    function pg_register_news_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $News_CPT = new PG_Custom_Post_Type('news', 'News', 'News', array('icon' => 'dashicons-category', 'has_archive' => 'false', 'template' => [ [$namespace . '/news-meta-block']]));
        $News_CPT->register();
        $News_CPT->register_tags('research-area', 'Research-area', 'Research-areas');

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'publication_date' => 'text',
            'description' => 'text',
            'source_publication' => 'text',
            'authors' => 'text',
            'external_link' => 'text',
            'image_alt' => 'text',
            'image_url' => 'text',
            'image_id' => 'text',
        );
        $News_CPT->register_meta($meta_values);
    }
}

if (!function_exists('pg_handle_news_save')) {
    /**
     * Since all News are sorted by this key, this function sets today's date as the default. 
     * 
     * @param int $post_id the id for the current post.
     */
    function pg_handle_news_save($post_id) {
        $date = get_post_meta($post_id, 'publication_date');
        if (empty($date)) {
            $date = date('Y/m/d');
            update_post_meta($post_id, 'publication_date', $date);
        }
    }
}

add_action('save_post','pg_handle_news_save', 10, 3);