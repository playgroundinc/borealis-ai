<?php
/**
 * pg-wp-starter functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

require get_template_directory() . '/inc/setup.php';
require get_template_directory() . '/inc/widgets.php';
require get_template_directory() . '/inc/enqueue-scripts-styles.php';
require get_template_directory() . '/inc/gutenberg.php';
require get_template_directory() . '/inc/custom-settings.php';
require get_template_directory() . '/inc/sprite-map.php';
require get_template_directory() . '/inc/custom-menus/register-menus.php';

add_post_type_support( 'page', 'excerpt' );

require get_template_directory() . '/inc/utilities.php';

/**
 * Classes
 */
require get_template_directory() . '/inc/classes/class-pg-custom-settings.php';
require get_template_directory() . '/inc/classes/class-pg-custom-meta.php';

// Responsive Images - Comment out if you do need to render responsive images.
require get_template_directory() . '/inc/classes/class-pg-responsive-images.php';

// Register Custom Image Sizes
require get_template_directory() . '/inc/custom-images/register-image-sizes.php';

// Register Custom Post Types
require get_template_directory() . '/inc/classes/class-pg-register-cpt.php';

// Register Custom Taxonomy
require get_template_directory() . '/inc/classes/class-pg-custom-taxonomy.php';

// Pagination - Comment out if you do not need to render pagination.
require get_template_directory() . '/inc/classes/class-pg-pagination.php';

// Allowed Blocks
require get_template_directory() . '/inc/classes/class-pg-allowed-blocks.php';

/**
 * Meta
 */
require get_template_directory() . '/inc/custom-meta/register-custom-meta.php';


/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Actions
 */
require get_template_directory() . '/inc/actions/load-more.php';

require get_template_directory() . '/inc/ajax-actions.php';

require get_template_directory() . '/inc/custom-post-types/register-cpts.php';
require get_template_directory() . '/inc/custom-taxonomies/register-taxonomies.php';
require get_template_directory() . '/inc/admin-columns/custom-post.php';

// Reusable
require get_template_directory() . '/inc/gutenberg/render-icon-btn.php';

// Partials
require get_template_directory() . '/inc/partials/search-bar.php';
require get_template_directory() . '/inc/partials/search-bar-main.php';
require get_template_directory() . '/inc/partials/search-bar-main-result.php';


// Partials - Blogs
require get_template_directory() . '/inc/partials/blog/blog-sidebar.php';
require get_template_directory() . '/inc/partials/blog/blog-header.php';
require get_template_directory() . '/inc/partials/blog/blog-cite.php';
require get_template_directory() . '/inc/partials/blog/blog-share.php';
require get_template_directory() . '/inc/partials/blog/blog-result.php';

// Partials - Publications
require get_template_directory() . '/inc/partials/publications/publication-result.php';
require get_template_directory() . '/inc/partials/publications/publication-header.php';
require get_template_directory() . '/inc/partials/publications/publication-sidebar.php';
require get_template_directory() . '/inc/partials/publications/publication-related.php';

// Custom Blocks
require get_template_directory() . '/inc/gutenberg/render-blocks.php';
require get_template_directory() . '/inc/gutenberg/render-select-post-block.php';
require get_template_directory() . '/inc/gutenberg/render-text-column.php';
require get_template_directory() . '/inc/gutenberg/render-image-text-block.php';
require get_template_directory() . '/inc/gutenberg/render-video-block.php';
require get_template_directory() . '/inc/gutenberg/render-image-block.php';

// Accordion Blocks
require get_template_directory() . '/inc/gutenberg/accordion/render-accordion-container.php';
require get_template_directory() . '/inc/gutenberg/accordion/render-accordion-row-block.php';

// Callout Blocks
require get_template_directory() . '/inc/gutenberg/callouts/render-callout-container-block.php';
require get_template_directory() . '/inc/gutenberg/callouts/render-callout-column-block.php';

// Blockquote
require get_template_directory() . '/inc/gutenberg/blockquote/render-blockquote-block.php';

// Body Copy
require get_template_directory() . '/inc/gutenberg/render-body-copy-block.php';
require get_template_directory() . '/inc/gutenberg/render-body-copy-image-block.php';
require get_template_directory() . '/inc/gutenberg/copy/render-copy-blocks.php';

// Content Blocks
require get_template_directory() . '/inc/gutenberg/content-cards/render-content-card-container.php';
require get_template_directory() . '/inc/gutenberg/content-cards/render-content-card-block.php';

// Gallery
require get_template_directory() . '/inc/gutenberg/gallery/render-gallery-container-block.php';

// Image List Blocks
require get_template_directory() . '/inc/gutenberg/image-list/render-image-list-container-block.php';
require get_template_directory() . '/inc/gutenberg/image-list/render-image-list-block.php';

// Logo Blocks
require get_template_directory() . '/inc/gutenberg/logos/render-logos-container.php';
require get_template_directory() . '/inc/gutenberg/logos/render-logos-subsection.php';
require get_template_directory() . '/inc/gutenberg/logos/render-logo-block.php';

// Page Strips
require get_template_directory() . '/inc/gutenberg/render-page-strip-block.php';
require get_template_directory() . '/inc/gutenberg/render-graphic-page-strip-container-block.php';
require get_template_directory() . '/inc/gutenberg/render-graphic-page-strip-block.php';

// Publications 
require get_template_directory() . '/inc/gutenberg/publications/render-publications-container.php';
require get_template_directory() . '/inc/gutenberg/publications/render-publications-item.php';
require get_template_directory() . '/inc/gutenberg/publications/render-bibtex.php';

// Posts 
require get_template_directory() . '/inc/gutenberg/posts/render-featured-post.php';
require get_template_directory() . '/inc/gutenberg/posts/render-featured-posts-block.php';

// Products
require get_template_directory() . '/inc/gutenberg/products/render-products-list-block.php';
require get_template_directory() . '/inc/gutenberg/products/render-products-item.php';

// Slider Blocks
require get_template_directory() . '/inc/gutenberg/slider/render-slider-container-block.php';
require get_template_directory() . '/inc/gutenberg/slider/render-news-slide.php';
require get_template_directory() . '/inc/gutenberg/slider/render-image-slide-block.php';

// Stat Blocks
require get_template_directory() . '/inc/gutenberg/stats/render-stat-container-block.php';
require get_template_directory() . '/inc/gutenberg/stats/render-stat-column-block.php';

// Greenhouse Blocks
require get_template_directory() . '/inc/gutenberg/greenhouse/render-jobs-block.php';

// Sidebar Table Of Contents Blocks
require get_template_directory() . '/inc/gutenberg/sidebar-table-of-contents/render-custom-section-block.php';
require get_template_directory() . '/inc/gutenberg/sidebar-table-of-contents/render-custom-subsection-block.php';

// Icon List Blocks
require get_template_directory() . '/inc/gutenberg/icon-list/render-icon-list-container-block.php';
require get_template_directory() . '/inc/gutenberg/icon-list/render-icon-list-item-block.php';

// Tabbed Content Blocks
require get_template_directory() . '/inc/gutenberg/tabbed-content/render-tabbed-content-container-block.php';
require get_template_directory() . '/inc/gutenberg/tabbed-content/render-tabbed-content-panel-block.php';

// Tag Cloud Blocks
require get_template_directory() . '/inc/gutenberg/tag-cloud/render-tag-cloud-container-block.php';
require get_template_directory() . '/inc/gutenberg/tag-cloud/render-tag-cloud-item-block.php';

// Text 2 Up Block
require get_template_directory() . '/inc/gutenberg/render-text-2-up-container-block.php';
require get_template_directory() . '/inc/gutenberg/render-text-2-up-block.php';

// Image & Text Block
require get_template_directory() . '/inc/gutenberg/render-image-text-strip-block.php';

// Statistics Blocks
require get_template_directory() . '/inc/gutenberg/render-statistics-container-block.php';
require get_template_directory() . '/inc/gutenberg/render-statistics-block.php';

// add hook for subnav
add_filter( 'wp_nav_menu_objects', 'my_wp_nav_menu_objects_sub_menu', 10, 2 );

// filter_hook function to react on sub_menu flag
function my_wp_nav_menu_objects_sub_menu( $sorted_menu_items, $args ) {
  if ( isset( $args->sub_menu ) ) {
    $root_id = 0;
    
    // find the current menu item
    foreach ( $sorted_menu_items as $menu_item ) {
      if ( $menu_item->current ) {
        // set the root id based on whether the current menu item has a parent or not
        $root_id = ( $menu_item->menu_item_parent ) ? $menu_item->menu_item_parent : $menu_item->ID;
        break;
      }
    }
    
    // find the top level parent
    if ( ! isset( $args->direct_parent ) ) {
      $prev_root_id = $root_id;
      while ( $prev_root_id != 0 ) {
        foreach ( $sorted_menu_items as $menu_item ) {
          if ( $menu_item->ID == $prev_root_id ) {
            $prev_root_id = $menu_item->menu_item_parent;
            // don't set the root_id to 0 if we've reached the top of the menu
            if ( $prev_root_id != 0 ) $root_id = $menu_item->menu_item_parent;
            break;
          } 
        }
      }
    }

    $menu_item_parents = array();
    foreach ( $sorted_menu_items as $key => $item ) {
      // init menu_item_parents
      if ( $item->ID == $root_id ) $menu_item_parents[] = $item->ID;

      if ( in_array( $item->menu_item_parent, $menu_item_parents ) ) {
        // part of sub-tree: keep!
        $menu_item_parents[] = $item->ID;
      } else if ( ! empty( $item->menu_item_parent ) ) {
        // not part of sub-tree: away with it!
        unset( $sorted_menu_items[$key] );
      }
    }
    
    return $sorted_menu_items;
  } else {
    return $sorted_menu_items;
  }
}
