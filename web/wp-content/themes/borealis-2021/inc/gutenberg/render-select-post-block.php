<?php 
    if ( ! function_exists('pg_render_select_post_block') ) {
    function pg_render_select_post_block($block) {
		$fields = array(
			'post',
		);
		$attributes = pg_get_attributes($block, $fields);

		if (intval($attributes->post) === 0) {
			return;
		}
		if (pg_is_valid('string', $attributes->post)) {
			$post = get_post($attributes->post);
		}

        ob_start();
        if (isset($post) && pg_is_valid('object', $post) && $post->post_type === 'post'):
	?>
		<h2><?php echo esc_html( $post->post_title ); ?></h2>
	<?php
		endif;
		if (isset($post) && pg_is_valid('string', $post->post_content)):
			$content = $post->post_content;
			if (has_blocks($content)) {
				$blocks = parse_blocks($content);
				if (count($blocks) > 0) {
					foreach($blocks as $block) {
						if (isset($block['innerHTML'])) {
							echo wp_kses_post($block['innerHTML']);
						}
					}
				}
			} else {
				echo wpautop($content);
			}
		endif;
        return ob_get_clean();
    }
}