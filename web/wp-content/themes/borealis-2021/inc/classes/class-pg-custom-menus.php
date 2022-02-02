<?php
/**
 * Custom Menus Class
 * 
 * Defines pages, sections and setting for custom options.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *s
 * @package trimac-2021
 */

class PG_Custom_Menus {
    public function generate_menu($theme_location, $multi = true) {
        if (!$multi) {
            $this->generate_single_level_menu($theme_location);
            return;
        }
        if ($multi === 'dropdown') {
            $this->generate_dropdown_menu($theme_location);
            return;
        }
        $this->generate_multi_level_menu($theme_location);
    }
    public function generate_dropdown_menu($theme_location) {
        wp_nav_menu(
            array(
                'container'         => false,                          // Remove nav container.
                'theme_location'    => $theme_location,                // Where it's located in the theme.
                // 'items_wrap' allows you to define the ul wrapping the menu items.
                // For items_wrap you can use the following variables:
                // %1$s  - $wrap_id (the id for the wrapping ul)
                // %2$s - $wrap_class (the usual classes used for the wrapping ul)
                // %3$s - $items (the menu items as li's)
                'items_wrap'        => '<ul id="%1$s" role="menu" class="%2$s flex col-xs row-xl middle-md mv-xs-0 between-md dropdown-menu">%3$s</ul>',  
                'depth'             => 0,                              // Limit the depth of the nav.
                'fallback_cb'       => '',                             // Fallback function.
                'walker'            => new PG_Dropdown_Menu_Walker(),
            )
        );
    }
    public function generate_multi_level_menu($theme_location) {
        wp_nav_menu(
            array(
                'container'         => false,                          // Remove nav container.
                'theme_location'    => $theme_location,                // Where it's located in the theme.
                // 'items_wrap' allows you to define the ul wrapping the menu items.
                // For items_wrap you can use the following variables:
                // %1$s  - $wrap_id (the id for the wrapping ul)
                // %2$s - $wrap_class (the usual classes used for the wrapping ul)
                // %3$s - $items (the menu items as li's)
                'items_wrap'        => '<ul id="%1$s" role="menu" class="%2$s flex w-full justify-end between-md mv-xs-0">%3$s</ul>',  
                'depth'             => 0,                              // Limit the depth of the nav.
                'fallback_cb'       => '',                             // Fallback function.
                'walker'            => new PG_Multi_Level_Menu_Walker(),
                'sub_menu' => true,
                'show_parent' => true
            )
        );
    }
    public function generate_single_level_menu($theme_location) {
        wp_nav_menu(
            array(
                'container'         => false,                          // Remove nav container.
                'items_wrap'        => '<ul id="%1$s" role="menu" class="%2$s flex row-xs mv-xs-0">%3$s</ul>',  
                'theme_location'    => $theme_location,               // Where it's located in the theme.
                'depth'             => 1,                              // Limit the depth of the nav.
                'fallback_cb'       => '',                             // Fallback function.
                'walker'            => new PG_Single_Level_Menu_Walker(),
            )
        );
    }
}