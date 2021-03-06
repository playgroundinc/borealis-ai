<?php

function pg_blocks()
{
	wp_enqueue_script('footer-banner', get_template_directory_uri() . '/dist/gutenberg.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n'));
	$setting_names = array('greenhouse_api_key', 'greenhouse_url');
	$settings = pg_get_settings($setting_names);
	wp_localize_script(
		'footer-banner',
		'ajaxInfo',
		array(
			'greenhouseAPIKey'            => $settings['greenhouse_api_key'],
			'greenhouseURL' => $settings['greenhouse_url']
		)
	);
}

add_action('enqueue_block_editor_assets', 'pg_blocks', 10, 1);

/**
 * Add custom block categories.
 * 
 * @param array $categories the current categoriess.
 * @param objects $post the current post object.
 */
function pg_custom_block_categories($categories, $post)
{
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'carousels',
				'title' => 'Carousels',
			),
			array(
				'slug' => 'code',
				'title' => 'Code',
			),
			array(
				'slug' => 'containers',
				'title' => 'Containers',
			),
			array(
				'slug' => 'copy',
				'title' => 'Copy',
			),
			array(
				'slug' => 'jobs',
				'title' => 'Jobs'
			),
			array(
				'slug' => 'meta',
				'title' => 'Meta'
			),
			array(
				'slug' => 'page-strips',
				'title' => 'Page Strips',
			),
			array(
				'slug' => 'rows',
				'title' => 'Rows',
			),
			array(
				'slug' => 'selects',
				'title' => 'Select Posts'
			),
			array(
				'slug' => 'sections',
				'title' => 'Sections'
			),
		)
	);
}

add_filter('block_categories', 'pg_custom_block_categories', 10, 2);
