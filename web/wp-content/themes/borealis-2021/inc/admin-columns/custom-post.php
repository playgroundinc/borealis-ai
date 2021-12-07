<?php

$admin_table_post_type = 'custom_post';

if (!function_exists('get_custom_post_meta')) {
	function get_custom_post_meta() {
		return array(
			'custom_post_name' => 'Name',
			'custom_post_description' => 'Description'
		);
	}
}

add_filter('manage_'. $admin_table_post_type .'_posts_columns', function( $columns ){

	$custom_meta = get_custom_post_meta();

	foreach($custom_meta as $key => $meta) {

		$columns[$key] = $meta ;
	}

	return pg_reset_date_column($columns);

});

add_action( 'manage_'. $admin_table_post_type .'_posts_custom_column' , function( $column ){

	global $post;

  $custom_meta = get_custom_post_meta();

	foreach($custom_meta as $key => $meta ) {

		if ($column == $key) {

      $post_data = get_post_meta( $post->ID, $key, true );

			if (!empty($post_data)) {
				echo $post_data;
			}

		}
	}

});
