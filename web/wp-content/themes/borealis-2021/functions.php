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
 * Custom Images
 */
require get_template_directory() . '/inc/custom-images/custom-images.php';
require get_template_directory() . '/inc/custom-images/mobile-image-sizes.php';
require get_template_directory() . '/inc/custom-images/register-image-sizes.php';

require get_template_directory() . '/inc/ajax-actions.php';

require get_template_directory() . '/inc/custom-post-types/register-cpts.php';
require get_template_directory() . '/inc/custom-taxonomies/register-taxonomies.php';
require get_template_directory() . '/inc/admin-columns/custom-post.php';

// Reusable
require get_template_directory() . '/inc/gutenberg/render-icon-btn.php';
require get_template_directory() . '/inc/partials/search-bar.php';

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

// Body Copy
require get_template_directory() . '/inc/gutenberg/render-body-copy-block.php';
require get_template_directory() . '/inc/gutenberg/render-body-copy-image-block.php';

// Content Blocks
require get_template_directory() . '/inc/gutenberg/content-cards/render-content-card-container.php';
require get_template_directory() . '/inc/gutenberg/content-cards/render-content-card-block.php';

// Image List Blocks
require get_template_directory() . '/inc/gutenberg/image-list/render-image-list-container-block.php';
require get_template_directory() . '/inc/gutenberg/image-list/render-image-list-block.php';

// Logo Blocks
require get_template_directory() . '/inc/gutenberg/logos/render-logos-container.php';
require get_template_directory() . '/inc/gutenberg/logos/render-logo-block.php';

// Page Strips
require get_template_directory() . '/inc/gutenberg/render-page-strip-block.php';
require get_template_directory() . '/inc/gutenberg/render-graphic-page-strip-block.php';

// Slider Blocks
require get_template_directory() . '/inc/gutenberg/slider/render-slider-container-block.php';
require get_template_directory() . '/inc/gutenberg/slider/render-image-slide-block.php';

// Stat Blocks
require get_template_directory() . '/inc/gutenberg/stats/render-stat-container-block.php';
require get_template_directory() . '/inc/gutenberg/stats/render-stat-column-block.php';

// Greenhouse Blocks
require get_template_directory() . '/inc/gutenberg/greenhouse/render-jobs-block.php';

// Sidebar Table Of Contents Blocks
require get_template_directory() . '/inc/gutenberg/sidebar-table-of-contents/render-custom-section-block.php';
require get_template_directory() . '/inc/gutenberg/sidebar-table-of-contents/render-custom-subsection-block.php';
