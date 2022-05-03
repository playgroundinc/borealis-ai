<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pg-wp-starter
 */

?>
<!doctype html>
<html class="scroll-smooth" <?php language_attributes(); ?>>

<head>
    <?php
    $setting_names = array('gtm_container_id');
    $settings = pg_get_settings($setting_names);
    if (!empty($settings['gtm_container_id'])) : ?>
        <!-- Google Tag Manager -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', '<?php echo esc_attr($settings['gtm_container_id']) ?>');
        </script>
        <!-- End Google Tag Manager -->
    <?php endif; ?>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class('text-shade-black-400 antialiased'); ?>>
    <?php if (!empty($settings['gtm_container_id'])) : ?>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr($settings['gtm_container_id']) ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    <?php endif; ?>

    <?php
    pg_svg_spritemap();
    $Menu = new PG_Custom_Menus();
    $has_subnav = pg_check_for_submenu('navigation-main', $post->ID);
    $custom_logo_id = get_theme_mod('custom_logo');
    $logo = wp_get_attachment_image($custom_logo_id, 'full');
    $url = get_home_url();
    $hero_image = get_the_post_thumbnail_url($post->ID, 'full');
    if (empty($hero_image)) {
        $hero_image = get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg';
    }
    $headline = get_post_meta($post->ID, 'headline', true);
    $header_height = is_front_page() ? 'max-h-screen h-[75vh] min-h-[350px] flex flex-col' : 'min-h-[125px]';
    $no_header = is_page_template('page-search.php') || is_page_template('page-single-job-listing.php') || is_singular(['research-blogs', 'news', 'team-member', 'publications', 'product', 'program']) || is_front_page() || is_page('blog');
    ?>
    <style>
        .custom-gallery:hover,
        .blog-series:hover {
            cursor: url(<?php echo get_bloginfo('stylesheet_directory') . '/src/images/dragCursor.png' ?>), auto;
        }

        .custom-gallery li:hover,
        .blog-series li:hover {
            cursor: url(<?php echo get_bloginfo('stylesheet_directory') . '/src/images/dragCursor.png' ?>), auto;
        }

        .custom-gallery a:hover,
        .blog-series a:hover {
            cursor: url(<?php echo get_bloginfo('stylesheet_directory') . '/src/images/dragCursor.png' ?>), auto;
        }
    </style>
    <div id="page" class="site">
        <?php
        $setting_names = array('cookie_policy_title', 'cookie_policy_copy', 'cookie_policy_link', 'cookie_policy_link_text');
        $settings = pg_get_settings($setting_names);
        if (!empty($settings['cookie_policy_title']) || !empty($settings['cookie_policy_copy']) || !empty($settings['cookie_policy_link']) || !empty($settings['cookie_policy_link_text'])) { ?>
            <div class="cookies bg-shade-grey-100 text-primary-navy-400 cursor-default pl-7 md:pl-6 py-4 md:py-0.8vw flex justify-between hidden fixed z-40 bottom-2 md:bottom-5 right-2 md:right-5">
                <div>
                    <h2 class="paragraph-sm md:paragraph"><?php echo esc_html($settings['cookie_policy_title']) ?></h2>
                    <p class="icon-md md:paragraph-sm mr-4"><?php echo esc_html($settings['cookie_policy_copy']) ?>&nbsp;
                        <a href="<?php echo esc_url($settings['cookie_policy_link']) ?>" class="text-primary-navy-400 cursor-pointer underline hover:opacity-70 transition duration-300"><?php echo esc_html($settings['cookie_policy_link_text']) ?></a>
                    </p>
                </div>
                <div class="flex items-center cursor-pointer">
                    <span id="cookie" tabindex="0" class="mr-6 icon--lg"><?php echo pg_render_icon('close') ?></span>
                </div>
            </div>
            <script>
                const cookie = localStorage.getItem('borealisai-cookie-accepted');
                const cookieModal = document.querySelector('.cookies');
                const cookieClose = document.getElementById('cookie');

                if (!cookie) {
                    cookieModal.classList.remove('hidden');
                }

                cookieClose.addEventListener('click', () => {
                    cookieModal.classList.add('hidden');
                    localStorage.setItem('borealisai-cookie-accepted', 'true');
                });
            </script>
        <?php } ?>
        <!-- Skip to Content link -->
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'pg-wp-starter'); ?></a>
        <header id="masthead" class="<?php echo $no_header ? esc_attr($header_height) : esc_attr('bg-cover bg-bottom min-h-[400px] md:min-h-[280px] flex flex-col justify-end') ?> <?php is_page('blog') && 'special_lisa_class' ?>" style="background-image: url(<?php echo $no_header ? '' : esc_attr($hero_image) ?> )">
            <nav id="main-navigation" class="fixed z-50 left-0 right-0 top-2 transition-top duration-700">
                <div class="<?php echo ($has_subnav) ? 'rounded-b-large md:rounded-b-none rounded-t-large' : 'rounded-large'; ?> relative mt-4 py-4 md:py-0.8vw nav-container drop-shadow-nav <?php echo (is_home() || is_front_page()) ? 'bg-transparent transition-background-color duration-700' : 'bg-primary-navy-400'; ?>">
                    <div class="flex md:flex-row flex-col items-center px-4 md:px-5 lg:px-0 lg:container">
                        <div class="logo shrink-0 h-fit flex md:w-auto w-full justify-between align-center md:py-0.8vw">
                            <a href="<?php echo get_home_url(); ?>">
                                <?php echo $logo ?>
                            </a>
                            <button role="button" class="text-shade-white-400 icon--lg md:hidden menu-toggle" data-toggle="main-nav-items" aria-expanded="false" aria-label="Open Main Menu">
                                <?php echo pg_render_icon('hamburger') ?>
                            </button>
                        </div>
                        <div id="main-nav-items" class="nav-items grow flex fixed md:static inset-0 -left-full w-screen h-screen md:h-auto z-50 md:justify-end items-center md:text-shade-white-400 opacity-0 md:opacity-100 transition-opacity transition-left duration-500 bg-shade-black-30 md:bg-transparent max-h-screen">
                            <div class="w-3/4 md:w-auto bg-shade-white-400 md:bg-transparent h-full md:flex-row flex-col flex pb-14 md:pb-0 md:items-center overflow-scroll md:overflow-auto px-2">
                                <button role="button" class="icon-sm px-6 py-5 block w-full text-shade-black-400 md:hidden" aria-label="Close Main Menu">
                                    <?php echo pg_render_icon('menu-close') ?>
                                </button>
                                <?php
                                $Menu->generate_menu('navigation-main', 'dropdown');
                                ?>

                                <a href="/search" class="mt-6 md:mt-0 px-6 md:px-5 border-t md:border-t-0 w-full md:w-auto text-primary-navy-400 md:text-shade-white-400 py-4 md:py-0.8vw legal flex items-center md:block">
                                    <span class="md:hidden paragraph grow"><?php echo esc_html('Search') ?></span>
                                    <?php echo pg_render_icon('search') ?>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <?php if (is_singular(['research-blogs', 'news'])) : // Start of check for singular News or Blog 
            ?>
                <?php $header = pg_generate_blog_header($post->ID); ?>
                <?php if (isset($header) && !empty($header)) : // Start of Check for empty Blog header 
                ?>
                    <div class="container">
                        <?php echo $header; ?>
                    </div>
                <?php endif; // End of check for empty blog header. 
                ?>
            <?php elseif (is_singular(['publications'])) : // Start of check for singular News or Blog 
            ?>
                <?php $header = pg_generate_publication_header($post->ID); ?>
                <?php if (isset($header) && !empty($header)) : // Start of Check for empty Blog header 
                ?>
                    <div class="container">
                        <?php echo $header; ?>
                    </div>
                <?php endif; // End of check for empty blog header. 
                ?>
            <?php elseif (is_front_page()) : // Start of check for singular News or Blog 
            ?>
                <?php $header = pg_generate_hero_header($post->ID, $headline); ?>
                <?php if (isset($header) && !empty($header)) : // Start of Check for empty Blog header 
                ?>
                    <div class="container grow flex flex-col">
                        <?php echo $header; ?>
                    </div>
                <?php endif; // End of check for empty blog header. 
                ?>
            <?php elseif (is_singular('team-member')) : ?>
                <div class="border-b border-color-shade-grey-500">
                    <div class="container">
                        <?php $header = pg_generate_team_member_header($post->ID); ?>
                        <?php if (isset($header) && !empty($header)) : ?>
                            <?php echo $header ?>
                        <?php endif; ?>
                    </div>
                </div>
            <?php elseif (is_singular('product')) : ?>
                <div class="container">
                    <?php $header = pg_generate_product_header($post->ID); ?>
                    <?php if (isset($header) && !empty($header)) : ?>
                        <?php echo $header ?>
                    <?php endif; ?>
                </div>

            <?php elseif (is_singular('program')) : ?>
                <div class="container">
                    <?php $header = pg_generate_program_header($post->ID); ?>
                    <?php if (isset($header) && !empty($header)) : ?>
                        <?php echo $header ?>
                    <?php endif; ?>
                </div>
            <?php else : ?>
                <div class="container">
                    <?php if (!empty($headline)) : ?>
                        <h1 class="h1   text-shade-white-400 pb-10 md:pb-8 <?php echo $has_subnav ? esc_attr('pt-55') : esc_attr('pt-42') ?>"><?php echo esc_html($headline) ?></h1>
                    <?php else : ?>
                        <h1 class="sr-only"><?php echo the_title(); ?></h1>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </header><!-- #masthead -->
        <main id="content">