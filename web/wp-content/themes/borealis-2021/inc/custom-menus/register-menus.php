<?php 

require get_template_directory() . '/inc/classes/class-pg-single-level-menu-walker.php';
require get_template_directory() . '/inc/classes/class-pg-multi-level-menu-walker.php';
require get_template_directory() . '/inc/classes/class-pg-dropdown-menu-walker.php';
require get_template_directory() . '/inc/classes/class-pg-custom-menus.php';

if (!function_exists('pg_register_menus')) {
    function pg_register_menus() {
        $namespace = pg_get_namespace();
        register_nav_menus(
            array(
                // The key is the slug for the menu's location, the value is the string value shown.
                'header-main' => __('Header Main Menu', $namespace),
                'footer-main' => __('Footer Main Menu', $namespace),
                'footer-legal' => __('Footer Legal Menu', $namespace),
                'footer-secondary' => __('Footer Secondary Menu', $namespace),
                'navigation-main' => __('Navigation Main Menu', $namespace),
            )
        );
    }
}

add_action( 'init', 'pg_register_menus' );