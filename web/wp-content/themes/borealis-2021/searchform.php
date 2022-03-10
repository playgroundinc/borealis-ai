<?php

$allowed_html = pg_allowed_html();
$query = "";
if (isset($_GET['q'])) {
    $query = sanitize_text_field(wp_unslash($_GET['q']));
}
$placeholder = __('Looking for something', 'trmc');
?>

<form method="get">
    <label for="search">Search</label>
    <div>
        <input id="search" name="q" type="search" placeholder="<?php echo esc_attr($placeholder . '?') ?>" value="<?php echo esc_attr($query); ?>">
        <button aria-label="<?php esc_attr('Execute search'); ?>" type="submit">
        </button>
    </div>
</form>