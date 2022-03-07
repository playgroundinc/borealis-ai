<?php 

if (!function_exists('pg_register_program_cpt')) {
    /**
     * Creates an Program Custom Post Type with custom metadata
     */
    function pg_register_program_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Program_CPT = new PG_Custom_Post_Type('program', 'Program', 'Programs', array('icon' => 'dashicons-admin-links', 'has_archive' => 'false', 'template' => [ [$namespace . '/program-meta-block']]));
        $Program_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'applications_open' => 'boolean',
            'video_id' => 'number',
            'applications_closed_copy' => 'text'
        );
        $Program_CPT->register_meta($meta_values);
    }
}
