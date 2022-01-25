<?php 

if (!function_exists('pg_register_author_cpt')) {
    /**
     * Creates an Author Custom Post Type with custom metadata
     */
    function pg_register_author_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Author_CPT = new PG_Custom_Post_Type('author', 'Author', 'Authors', array('icon' => 'dashicons-edit', 'has_archive' => 'false', 'template' => [ [$namespace . '/author-meta-block']]));
        $Author_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'external_link' => 'text'
        );
        $Author_CPT->register_meta($meta_values);
    }
}
