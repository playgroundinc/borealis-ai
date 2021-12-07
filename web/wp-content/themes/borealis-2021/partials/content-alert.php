<?php 
/**
 * Alert Bar Template
 * 
 * This is the template that displays the entire hero.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package trimac
 */

$option_names = array('alert_bar_title', 'alert_bar_copy', 'alert_bar_link', 'alert_bar_link_text');
$options = pg_get_options($option_names);
$setting_names = array('alert_bar_cookie_name', 'cookie_lifespan_in_hours');
$settings = pg_get_settings($setting_names);

$dismissed = false;

if (!empty($settings['alert_bar_cookie_name'])) {
    $dismissed = !empty($_COOKIE[ 'STYXKEY-' . $settings['alert_bar_cookie_name']]);
} 

$allowed_html = pg_allowed_html();

if (!$dismissed && !empty($options['alert_bar_copy'])):
?>
<div class="alert-bar alert block--black">
    <div class="container container-fluid">
        <div class="center-xs flex pb-xs-1">
            <div class="fc-xs-100 pr-xs-4 ph-lg-4 flex center-lg middle-xs">
                <?php if (!empty($options['alert_bar_title'])): ?>
                    <h3 class="caption pt-xs-1 copy--bold mb-xs-0"><?php echo esc_html($options['alert_bar_title']); ?></h3>
                <?php endif; ?>
                <p class="legal fc-xs-100 fc-lg pl-lg-1 pt-xs-1">
                    <?php echo esc_html($options['alert_bar_copy'])?>
                    <?php if(!empty($options['alert_bar_link'])): ?>
                        <a href="<?php echo esc_url_raw($options['alert_bar_link']) ?>"><?php echo !empty($options['alert_bar_link_text']) ? esc_attr($options['alert_bar_link_text']) : 'view here'; ?></a>
                    <?php endif; ?>
                </p>
            </div>
        </div>
        <button
            role="button"
            data-cookie="<?php echo !empty($settings['alert_bar_cookie_name']) ? esc_attr($settings['alert_bar_cookie_name']) : esc_attr('trmc-alert-bar-cookie'); ?>"
            data-duration="<?php echo !empty($settings['cookie_lifespan_in_hours']) ? esc_attr(intval($settings['cookie_lifespan_in_hours']) * 60 * 60) : esc_attr(172800); ?>"
            class="alert-bar__dismiss dismiss-button"
            aria-label="<?php esc_attr_e('Dismiss alert bar', 'trmc') ?>"
        >
            <?php 
                echo wp_kses(pg_render_icon('cookie-close'), $allowed_html);
            ?>
        </button>
    </div>
</div>
<?php endif; ?>