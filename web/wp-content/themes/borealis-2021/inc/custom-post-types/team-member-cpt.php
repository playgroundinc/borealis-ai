<?php 

if (!function_exists('pg_register_team_member_cpt')) {
    /**
     * Creates a Team Member Custom Post Type with custom metadata
     */
    function pg_register_team_member_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Team_Member_CPT = new PG_Custom_Post_Type('team-member', 'Team Member', 'Team Members', array('icon' => 'dashicons-admin-users', 'has_archive' => 'false', 'template' => [ [$namespace . '/team-member-meta-block']]));
        $Team_Member_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'position' => 'text',
            'education' => 'text',
        );
        $Team_Member_CPT->register_meta($meta_values);
    }
}
