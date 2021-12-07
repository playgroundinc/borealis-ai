<?php 
/**
 * Cookie Policy Template
 * 
 * This is the template that displays the cookie policy.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package trimac
 */

$option_names = array('cookie_policy_title', 'cookie_policy_copy', 'cookie_policy_link', 'cookie_policy_link_text');
$options = pg_get_options($option_names);
$setting_names = array('cookie_policy_cookie_name', 'cookie_policy_cookie_lifespan_in_hours');
$settings = pg_get_settings($setting_names);

$dismissed = false;
if (!empty($settings['cookie_policy_cookie_name'])) {
    $dismissed = !empty($_COOKIE[ 'STYXKEY-' . $settings['cookie_policy_cookie_name']]);
} 

$allowed_html = pg_allowed_html();

if (!$dismissed && !empty($options['cookie_policy_copy'])):
?>
<div class="cookie-policy alert">
    <div class="container container-fluid">
        <div class="cookie-policy__container p-xs-2 pr-xs-8 block--white ba-xs-grey-lt">
            <?php if (!empty($options['cookie_policy_title'])): ?>
                <h3 class="caption copy--bold mb-xs-0"><?php echo esc_html($options['cookie_policy_title']); ?></h3>
            <?php endif; ?>
            <p class="legal pt-xs-1">
                <?php echo esc_html($options['cookie_policy_copy'])?>
                <?php if(!empty($options['cookie_policy_link'])): ?>
                    <a href="<?php echo esc_url_raw($options['cookie_policy_link']) ?>"><?php echo !empty($options['cookie_policy_link_text']) ? esc_attr($options['cookie_policy_link_text']) : 'view here'; ?></a>
                <?php endif; ?>
            </p>
            <button 
                role="button"
                data-cookie="<?php echo !empty($settings['cookie_policy_cookie_name']) ? esc_attr($settings['cookie_policy_cookie_name']) : esc_attr('trmc-cookie-policy-cookie'); ?>"
                data-duration="<?php echo !empty($settings['cookie_lifespan_in_hours']) ? esc_attr(intval($settings['cookie_lifespan_in_hours']) * 60 * 60) : esc_attr(172800); ?>"
                class="cookie-policy__dismiss dismiss-button"
                aria-label="<?php esc_attr_e('Dismiss cookies notification', 'trmc') ?>"
            >
                <?php 
                    echo wp_kses(pg_render_icon('cookie-close'), $allowed_html);
                ?>
            </button>
        </div>
    </div>
</div>
<?php endif; ?>