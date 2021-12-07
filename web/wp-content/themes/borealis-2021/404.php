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

	<div id="content" class="content-area page-404">
        <div class="hero"></div>
        <div class="container container-fluid page-404__container flex center-xs middle-xs copy--center pv-md-17 pv-xs-15">
            <div class="fc-xl-50">
                <h1 class="mb-xs-0 headline heading--accent"><?php esc_html_e('404', 'trmc'); ?></h1>
                <?php if (!empty($options['404_title'])): ?>
                    <h2 class="heading_three pt-xs-2 mb-xs-0"><?php echo wp_kses($options['404_title'], $allowed_html)?></h2>
                <?php endif; ?>
                <?php if (!empty($options['404_description'])): ?>
                    <div class="pt-xs-2 page-404__description">
                        <?php echo wp_kses(wpautop($options['404_description']), $allowed_html)?>
                    </div>
                <?php endif; ?>
                <a href="<?php echo esc_url_raw(get_home_url()); ?>" class="mt-xs-4 btn btn--secondary"><?php esc_html_e('Back to Homepage', 'trmc'); ?></a>
            </div>
        </div>
	</div>

<?php
get_footer();
