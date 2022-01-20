<?php 
/**
 * Custom Taxonomy Class
 * 
 * Defines taxonomy
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Custom_Taxonomy {
    function __construct($slug, $single, $plural, $args = array()) {
        $this->namespace = 'pg';
        $this->slug = $slug;
        $this->single = $single;
        $this->plural = $plural;
        $this->post_types = !empty($args['post_types']) ? $args['post_types'] : 'post'; 
        $this->public = !empty($args['public']) ? $args['public'] : true;
        $this->publicly_queryable = !empty($args['publicly_queryable']) ? $args['publicly_queryable'] : true;
        $this->show_ui = !empty($args['show_ui']) ? $args['show_ui'] : true;
        $this->show_admin_column = !empty($args['show_admin_column']) ? $args['show_admin_column'] : true;
    }

    public function register() {
        // creating (registering) the custom type
		register_taxonomy( 
            $this->slug, /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
            // let's now add all the options for this post type
            $this->post_types,
            array(
                'labels' => array(
                    'name' => __($this->plural, $this->namespace), /* This is the Title of the Group */
                    'singular_name' => __($this->single, $this->namespace), /* This is the individual type */
                    'all_items' => __('All '.$this->plural, $this->namespace), /* the all items menu item */
                    'add_new' => __('Add New', $this->namespace), /* The add new menu item */
                    'add_new_item' => __('Add New '.$this->single, $this->namespace), /* Add New Display Title */
                    'edit' => __( 'Edit', $this->namespace ), /* Edit Dialog */
                    'edit_item' => __('Edit '.$this->plural, $this->namespace), /* Edit Display Title */
                    'new_item' => __('New '.$this->single, $this->namespace), /* New Display Title */
                    'view_item' => __('View '.$this->single, $this->namespace), /* View Display Title */
                    'search_items' => __('Search '.$this->single, $this->namespace), /* Search Custom Type Title */
                    'not_found' =>  __('Nothing found in the Database.', $this->namespace), /* This displays if there are no entries yet */
                    'not_found_in_trash' => __('Nothing found in Trash', $this->namespace), /* This displays if there is nothing in the trash */
                    'parent_item_colon' => ''
                ),
                'public' => $this->public,
                'publicly_queryable' => $this->publicly_queryable,
                'show_ui' => $this->show_ui,
                'menu_position' => $this->menu_position, /* this is what order you want it to appear in on the left hand side menu */
                'show_in_rest' => true, // enables Gutenberg
                'show_admin_column' => $this->show_admin_column,
            ) /* end of options */
        ); /* end of register post type */
    }
}