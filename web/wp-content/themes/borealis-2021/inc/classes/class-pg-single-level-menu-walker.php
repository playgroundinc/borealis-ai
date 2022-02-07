<?php
/**
 * Adds a crawler to output the main menu (Used in the site header)
 *
 * @file
 * Main Menu Crawler
 *
 * @package Trimac-2021
 */

/**
 * Tutorial here: https://www.ibenic.com/how-to-create-wordpress-custom-menu-walker-nav-menu-class/
 */
class PG_Single_Level_Menu_Walker extends Walker_Nav_Menu {
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param object  $item - The current menu item.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     * @param integer $id - ID.
     */
    public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        $object    = $item->object;
        $type      = $item->type;
        $title     = $item->title;
        $permalink = $item->url;
        $output .= "<li class='" . join( ' ', $item->classes ) . " menu-item--single' role=\"menuitem\">";
        if (intval($item->menu_order) > 1) {
            $output .= '<a class="hover:text-primary-electric-blue-400 mr-8 p-2 legal" href="' . $permalink . '">';
        } else {
            $output .= '<a class="hover:text-primary-electric-blue-400 mr-8 p-2 legal" href="' . $permalink . '">';
        }
        $output .= $title;
        $output .= '</a>';

    }
}
