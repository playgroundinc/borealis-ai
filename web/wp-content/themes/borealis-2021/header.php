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
<html <?php language_attributes(); ?>>
<head>
    <?php 
        $setting_names = array('gtm_container_id');
        $settings = pg_get_settings($setting_names);
        if ( ! empty( $settings['gtm_container_id'] ) ) : ?>
            <!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '<?php echo esc_attr($settings['gtm_container_id']) ?>');</script>
            <!-- End Google Tag Manager -->
        <?php endif; ?>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>


<body <?php body_class('text-shade-black-400'); ?>>
    <?php if ( ! empty( $settings['gtm_container_id'] ) ) : ?>
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr($settings['gtm_container_id'])?>"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    <?php endif; ?>
    <?php
        pg_svg_spritemap(); 
        $Menu = new PG_Custom_Menus();  
        $custom_logo_id = get_theme_mod( 'custom_logo' );        
        $image = wp_get_attachment_image_src( $custom_logo_id , 'full' )[0];
        $imgPath= parse_url($image)['path'];
        $url = get_home_url();
        $logoUrl = $url . $imgPath;

        $hasSubnav = false;
        if(is_page('research') or is_page('products')) {
            $hasSubnav = true;
        }
    ?>
    <div id="page" class="site">
        <!-- Skip to Content link -->
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'pg-wp-starter' ); ?></a>
        <header id="masthead">
            <nav id="main-navigation" class="<?php echo ($hasSubnav)? 'rounded-t-large': 'rounded-large';?> relative mt-4 top-2 pb-2 pt-4 nav-container <?php echo (is_home() || is_front_page())? 'bg-transparent': 'bg-primary-navy-400'; ?> ">
                <div class="relative flex">
                    <div class="pt-2 logo h-fit container">
                        <a href="/home">
                            <img src="<?php echo $logoUrl ?>" alt="">
                        </a>
                    </div>
                    <div class="container nav-items grow flex text-shade-white-400 py-4">
                        <?php 
                            $Menu->generate_menu('navigation-main', 'multi-level');
                        ?>
                    </div>
                </div>
                <a href="/search" class="p-2 absolute top-7 right-6 text-3xl">
                    <?php echo pg_render_icon('search') ?>
                </a>
            </nav>
        </div>
        </header><!-- #masthead -->
        <main id="content">
    