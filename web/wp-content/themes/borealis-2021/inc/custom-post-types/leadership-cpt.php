<?php 

if (!function_exists('pg_register_leadership_cpt')) {
    /**
     * Creates a Leadership Custom Post Type with custom metadata
     */
    function pg_register_leadership_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Leadership_CPT = new PG_Custom_Post_Type('leadership', 'Leadership', 'Leadership', array('icon' => 'dashicons-category', 'has_archive' => 'false', 'template' => [ [$namespace . '/leadership-meta-block']]));
        $Leadership_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'name' => 'text',
            'position' => 'text',
            'education' => 'text',
            'copy' => 'text',
        );
        $Leadership_CPT->register_meta($meta_values);
    }
}
