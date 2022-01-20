<?php 

if (!function_exists('pg_register_research_area_taxonomy')) {
    /**
     * Creates a Leadership Custom Post Type with custom metadata
     */
    function pg_register_research_area_taxonomy() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Research_Area_Taxonomy = new PG_Custom_Taxonomy('research-areas', 'Research Area', 'Research Areas', array('post_types' => array('research-blogs', 'publications', 'news')));
        $Research_Area_Taxonomy->register();
    }
}
