<?php 

$allowed_html = pg_allowed_html();
$query = "";
if (isset($_GET['q'])) {
    $query = sanitize_text_field(wp_unslash($_GET['q']));
} 
$placeholder = __('Looking for something', 'trmc');
?>

<form class="search animated-element" method="get">
    <label class="screen-reader-only" for="search">Search</label>
    <div class="flex search__form center-xs">
        <input id="search" name="q" type="search" class="pv-xs-2 search__form__input heading-three-xs" placeholder="<?php echo esc_attr($placeholder . '?') ?>" value="<?php echo esc_attr($query); ?>">
        <button class="icon-lg p-xs-2 search__form__trigger" aria-label="<?php esc_attr_e('Execute search', 'trmc'); ?>" type="submit">
            <?php
                echo wp_kses(pg_render_icon('search'), $allowed_html);
            ?>
        </button>
    </div>
</form>