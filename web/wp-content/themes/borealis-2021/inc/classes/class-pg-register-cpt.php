<?php 
/**
 * Custom Post Type Class
 * 
 * Defines post type with option to register tags/categories and add meta.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Custom_Post_Type {
    function __construct($slug, $single, $plural, $args = array()) {
        $this->namespace = 'pg';
        $this->slug = $slug;
        $this->single = $single;
        $this->plural = $plural;
        $this->icon = !empty($args['icon']) ? $args['icon'] : 'dashicons-book';
        $this->description = !empty($args['description']) ? $args['description'] : __( 'This is the example '.$this->single, $this->namespace );
        $this->archive = !empty($args['has_archive']) ? $args['has_archive'] : true;
        $this->supports = !empty($args['supports']) ? $args['supports'] : array('title','excerpt','editor','thumbnail','sticky', 'custom-fields');
        $this->public = !empty($args['public']) ? $args['public'] : true;
        $this->publicly_queryable = !empty($args['publicly_queryable']) ? $args['publicly_queryable'] : true;
        $this->show_ui = !empty($args['show_ui']) ? $args['show_ui'] : true;
        $this->query_var = !empty($args['query_var']) ? $args['query_var'] : true;
        $this->exclude_from_search = !empty($args['exclude_from_search']) ? $args['exclude_from_search'] : false;
        $this->show_in_nav_menus = !empty($args['show_in_nav_menus']) ? $args['show_in_nav_menus'] : false;
        $this->menu_position = !empty($args['menu_position']) ? $args['menu_position'] : 8;
        $this->template = !empty($args['template']) ? $args['template'] : [];
        $this->tags = null;
        $this->tag_args = null;
    }

    public function register() {
        // creating (registering) the custom type
		register_post_type( 
            $this->slug, /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
            // let's now add all the options for this post type
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
                'description' => $this->description, /* Custom Type Description */
                'public' => $this->public,
                'publicly_queryable' => $this->publicly_queryable,
                'exclude_from_search' => $this->exclude_from_search,
                'show_ui' => $this->show_ui,
                'query_var' => $this->query_var,
                'show_in_nav_menus' => $this->show_in_nav_menus,
                'menu_position' => $this->menu_position, /* this is what order you want it to appear in on the left hand side menu */
                'menu_icon' => $this->icon, /* the icon for the custom post type menu. uses built-in dashicons (CSS class name) */
                'rewrite'	=> array( 'slug' => $this->slug, 'with_front' => false ), /* you can specify its url slug */
                'has_archive' => $this->archive,
                'capability_type' => 'post',
                'hierarchical' => false,
                'show_in_rest' => true, // enables Gutenberg
                /* the next one is important, it tells what's enabled in the post editor */
                'supports' => $this->supports,
                'template' => $this->template,
            ) /* end of options */
        ); /* end of register post type */
    }

    private function get_tag_args($tag_args) {
        $all_args = array(
            'show_admin_column' => true,
            'show_ui' => true,
            'query_var' => true,
            'hierarchical' => false,
            'show_in_rest' => true,
        );
        foreach ($all_args as $key => $default) {
            if (isset($tag_args[$key]) && !empty($tag_args[$key])) {
                $all_args[$key] = $tag_args[$key];
            }
        }
        return $all_args;
    }

    public function register_tags($slug, $single, $plural, $tag_args = array()) {
        $args = $this->get_tag_args($tag_args);
        register_taxonomy( 
            $slug,
            array($this->slug),
            array(
                'hierarchical' => $args['hierarchical'],    /* if this is false, it acts like tags */
                'labels' => array(
                    'name' => __( $plural, $this->namespace ), /* name of the custom taxonomy */
                    'singular_name' => __( $single, $this->namespace ), /* single taxonomy name */
                    'search_items' =>  __( 'Search ' . $plural, $this->namespace ), /* search title for taxomony */
                    'all_items' => __( 'All ' . $plural, $this->namespace ), /* all title for taxonomies */
                    'parent_item' => __( 'Parent ' . $single, $this->namespace ), /* parent title for taxonomy */
                    'parent_item_colon' => __( 'Parent '. $single . ':', $this->namespace ), /* parent taxonomy title */
                    'edit_item' => __( 'Edit ' . $single, $this->namespace ), /* edit custom taxonomy title */
                    'update_item' => __( 'Update ' . $single, $this->namespace ), /* update title for taxonomy */
                    'add_new_item' => __( 'Add New ' . $single, $this->namespace ), /* add new title for taxonomy */
                    'new_item_name' => __( 'New Custom ' . $single, $this->namespace ) /* name title for taxonomy */
                ),
                'show_admin_column' => $args['show_admin_column'],
                'show_ui' => $args['show_ui'],
                'query_var' => $args['query_var'],
                'show_in_rest' => $args['show_in_rest'],
            )
        );
    }

    public function register_meta($meta_values) {
        $Meta = new PG_Custom_Meta($meta_values, $this->slug);
        $Meta->register_custom_post_meta();
    }
}