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
class PG_Dropdown_Menu_Walker extends Walker_Nav_Menu
{
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     */
    public function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent  = str_repeat("\t", $depth);
        $output .= "\n$indent<div role=\"region\" class=\"submenu drop-shadow-nav bg-shade-white-400 md:rounded-b-large w-full hidden md:flex-row-reverse text-primary-navy-400 md:absolute top-full right-0 mb-xs-2 mb-md-5 pl-4 md:pl-0\">\n";
        $output .= "\n$indent<ul class=\"md:flex md:container justify-end\" role=\"menu\">\n";
    }
    /**
     * Outputs HTML for the menu
     *
     * @param string  $output - The HTML to be written to the page.
     * @param integer $depth - The menu depth.
     * @param array   $args - Optional aruguments.
     */
    public function end_lvl(&$output, $depth = 0, $args = null)
    {
        $indent  = str_repeat("\t", $depth);
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
    public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0)
    {
        $object                = $item->object;
        $type                  = $item->type;
        $title                 = $item->title;
        $permalink             = $item->url;
        $active = in_array('current-menu-item', $item->classes);
        $classes               = join(' ', $item->classes);
        $link_classes = 'px-6 md:px-5 block group';
        $link_classes .=  $active ? ' menu-item--active text-primary-electric-blue-400' : ' text-primary-navy-400';
        if (intval($item->menu_item_parent) === 0) {
            $parent_link_classes = $link_classes .= " ";
            $output .= '<li role="menuitem" class="' . $classes . '">';
            $output .= '<a class="' . $link_classes . ' py-3 hover:text-primary-electric-blue-400 md:hover:text-shade-white-400 visited:text-primary-electric-purple transition duration-300 md:text-shade-white-400 md:py-2 paragraph md:hyperlink" href="' . $permalink . '">';
            $output .= $title;
            $output .= '<span class="nav-underline bg-transparent transition duration-300 hidden md:block ';
            $output .= $active ? 'bg-tint-teal-400' : 'group-hover:bg-tint-teal-400 group-focus:bg-tint-teal-400';
            $output .= '"></span>';
            $output .= '</a>';
            return $output;
        }
        $menu_item_classes = $link_classes;
        $output .= '<li role="menuitem"  class="' . $classes . '">';
        $output .= '<a class="' . $menu_item_classes . ' py-3 md:py-0.8vw md:hyperlink paragraph-md text-primary-navy-400 hover:text-primary-electric-blue-400" href="' . $permalink . '">';
        $output .= $title;
        $output .= '</a>';
    }
}
