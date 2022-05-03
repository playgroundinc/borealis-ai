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
    <div class="m-scroll flex relative w-full m-auto overflow-hidden z-10 h-40">
        <div class="m-scroll__title flex absolute top-0 left-0 w-full h-full justify-start items-center whitespace-nowrap transition duration-100 ease border-b border-color-shade-black-400">
            <div class="scroll1">
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h2>
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h2>
            </div>
        </div>
    </div>
    <div class="m-scroll flex relative w-full m-auto overflow-hidden z-10 h-40">
        <div class="m-scroll__title flex absolute top-0 left-0 w-full h-full justify-start items-center whitespace-nowrap transition duration-100 ease border-b border-color-shade-black-400">
            <div class="scroll2">
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h2>
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?> </a>&nbsp;
                </h2>
            </div>
        </div>
    </div>
    <div class="m-scroll flex relative w-full m-auto overflow-hidden z-10 h-40">
        <div class="m-scroll__title flex absolute top-0 left-0 w-full h-full justify-start items-center whitespace-nowrap transition duration-100 ease border-b border-color-shade-black-400">
            <div class="scroll3">
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?> </a>&nbsp;
                </h2>
                <h2 class="m-0 h2  ">
                    <a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_title'], $allowed_html) ?></a>&nbsp;<a class="transition duration-300 ease text-shade-black-400 no-underline" href="<?php echo esc_url_raw(get_home_url()); ?>"><?php echo wp_kses($options['404_description'], $allowed_html) ?> </a>&nbsp;
                </h2>
            </div>
        </div>
    </div>
</div>

<?php
get_footer();
