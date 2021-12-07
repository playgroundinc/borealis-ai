<?php 
/**
 * Adds a crawler to output a multi-level menu.
 *
 * @file
 * Multi Level Menu Walker
 *
 * @package Trimac-2021
 */

/**
 * Tutorial here: https://www.ibenic.com/how-to-create-wordpress-custom-menu-walker-nav-menu-class/
 */
class PG_Multi_Level_Menu_Walker extends Walker_Nav_Menu {
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     */
    public function start_lvl( &$output, $depth = 0, $args = null ) {
        $indent  = str_repeat( "\t", $depth );
        $output .= "\n$indent<div role=\"region\" class=\"submenu mb-xs-2 mb-md-5\">\n";
        $output .= "\n$indent<ul class=\"mv-xs-0\" role=\"menu\">\n";

    }
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     */
    public function end_lvl( &$output, $depth = 0, $args = null ) {
        $indent  = str_repeat( "\t", $depth );
        $output .= "\n$indent</ul>\n";
        $output .= "\n$indent</div>\n";
    }
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
        $object                = $item->object;
        $type                  = $item->type;
        $title                 = $item->title;
        $permalink             = $item->url;
        $classes               = join( ' ', $item->classes );
        $parent                = $args->walker->has_children;
        $link_classes = 'menu-item__link caption block-link pb-xs-2';

        if ( intval( $item->menu_item_parent ) === 0 ) {
            if ( $parent ) {
                $output .= '<li role="menuitem" class="' . $classes . ' pr-xs-2 fc-xs-100 fc-lg fc-md-50 ">';
                $output .= '<p class="caption copy--bold mb-xs-3">';
                $output .= $title;
                $output .= '</p>';
                return $output;
            }
            $output .= '<li role="menuitem" class="' . $classes . ' pr-xs-2 fc-xs-100 fc-lg fc-md-50 ">';
            $output .= '<a class="' . $link_classes . '" href="' . $permalink . '">';
            $output .= $title;
            $output .= '<svg class="menu-item__open-icon" width="10" height="17" viewBox="0 0 10 17"><use xlink:href="#icon-open"></use></svg>';
            $output .= '</a>';
            $output .= '</li>';
            return $output;
        }
        $output .= '<li role="menuitem" class="' . $classes . '">';
        $output .= '<a class="' . $link_classes . '" href="' . $permalink . '">';
        $output .= $title;
        $output .= '</a>';

    }
}
