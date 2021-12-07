<?php 
/**
 * Adds a crawler to output a multi-level menu.
 *
 * @file
 * Dropdown Menu Walker
 *
 * @package Trimac-2021
 */

/**
 * Tutorial here: https://www.ibenic.com/how-to-create-wordpress-custom-menu-walker-nav-menu-class/
 */
class PG_Dropdown_Menu_Walker extends Walker_Nav_Menu {
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     */
    public function start_lvl( &$output, $depth = 0, $args = null ) {
        $indent  = str_repeat( "\t", $depth );
        $output .= "\n$indent<div role=\"region\" class=\"dropdown submenu slide-toggle\">\n";
        $output .= "\n$indent<ul class=\"mb-xl-0 mb-xs-2\" role=\"menu\">\n";

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
        $link_classes = ' menu-item__link block-link caption caption--menu flex between-xs';
        $icon = pg_render_icon('chevron', true);
        if ( $parent ) {
            $link_classes .= ' menu-item__parent';
        }
        if ( intval( $item->menu_item_parent ) === 0 ) {
            $parent_link_classes = $link_classes .= " ph-xl-2 pv-xs-4 pv-xl-2 menu-link";
            $output .= '<li role="menuitem" class="' . $classes . ' fc-xs-100 fc-xl bb-xs-grey-lt bb-xl">';
            $output .= '<a role="button" aria-haspopup="true" aria-expanded="false" class="' . $link_classes . '" href="' . $permalink . '">';
            $output .= '<span class="block-link">' . $title . '</span>';
            if ( $parent ) {
                $output .= $icon;
            }
            $output .= '</a>';
            return $output;
        }
        $menu_item_classes = $link_classes . ' pv-xs-2 ph-xl-3';
        $output .= '<li role="menuitem"  class="' . $classes . '">';
        $output .= '<a aria-haspopup="false" class="' . $menu_item_classes . '" href="' . $permalink . '">';
        $output .= $title;
        $output .= '</a>';

    }
}
