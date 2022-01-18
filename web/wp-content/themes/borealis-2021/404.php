<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package pg-wp-starter
 */

get_header();
$options_names = array(
    '404_title',
    '404_description'
);
$options = pg_get_options($options_names);
$allowed_html = pg_allowed_html();
?>

	<div id="content">
        <h1><?php esc_html_e('404', 'pg'); ?></h1>
        <?php if (!empty($options['404_title'])): ?>
            <h2><?php echo wp_kses($options['404_title'], $allowed_html)?></h2>
        <?php endif; ?>
        <?php if (!empty($options['404_description'])): ?>
            <div>
                <?php echo wp_kses(wpautop($options['404_description']), $allowed_html)?>
            </div>
        <?php endif; ?>
        <a href="<?php echo esc_url_raw(get_home_url()); ?>"><?php esc_html_e('Back to Homepage', 'pg'); ?></a>
	</div>

<?php
get_footer();
