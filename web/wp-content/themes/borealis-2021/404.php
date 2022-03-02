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
    <div class="m-scroll">
        <div class="m-scroll__title border-b border-shade-black-400">
            <div class="scroll1">
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h1>
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h1>
            </div>
        </div>
    </div>
    <div class="m-scroll">
        <div class="m-scroll__title border-b border-shade-black-400">
            <div class="scroll2">
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h1>
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h1>
            </div>
        </div>
    </div>
    <div class="m-scroll">
        <div class="m-scroll__title border-b border-shade-black-400">
            <div class="scroll3">
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?> </a>&nbsp;
                </h1>
                <h1 class="h2 md:h1">
                    <a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?> </a>&nbsp;
                </h1>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();
