<?php 

if (!function_exists('pg_register_content_type_taxonomy')) {
    /**
     * Creates a Leadership Custom Post Type with custom metadata
     */
    function pg_register_content_type_taxonomy() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Research_Area_Taxonomy = new PG_Custom_Taxonomy('content-type', 'Content Type', 'Content Types', array('post_types' => array('research-blogs', 'news')));
        $Research_Area_Taxonomy->register();
    }
}
