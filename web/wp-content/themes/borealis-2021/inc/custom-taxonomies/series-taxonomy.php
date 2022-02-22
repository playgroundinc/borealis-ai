<?php 

if (!function_exists('pg_register_series_taxonomy')) {
    /**
     * Creates a Leadership Custom Post Type with custom metadata
     */
    function pg_register_series_taxonomy() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Series_Taxonomy = new PG_Custom_Taxonomy('series', 'Series', 'Series', array('post_types' => array('research-blogs', 'news')));
        $Series_Taxonomy->register();
    }
}
