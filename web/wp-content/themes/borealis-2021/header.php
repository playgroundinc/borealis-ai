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
        $hero_image = get_the_post_thumbnail_url($post->ID, 'full');
        if (empty($hero_image)) {
            $hero_image = get_bloginfo('stylesheet_directory') . '/src/images/heroImage.jpg';
        }
        $headline = get_post_meta($post->ID, 'headline', true);
        $hasSubnav = false;
        if(is_page('research') or is_page('products')) {
            $hasSubnav = true;
        }
        $no_header = is_page_template('page-search.php') || is_page_template('page-single-job-listing.php') || is_singular(['research-blogs', 'news', 'team-member', 'publications']) ;
    ?>
    <div id="page" class="site">
        <!-- Skip to Content link -->
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'pg-wp-starter' ); ?></a>
        <header 
            id="masthead"
            class="<?php echo $no_header ? 'min-h-[125px]' : esc_attr('bg-cover bg-bottom min-h-[400px] md:min-h-[280px] flex flex-col justify-end') ?>"
            style="background-image: url(<?php echo $no_header ? '' : esc_attr($hero_image) ?> )"
        >
            <nav id="main-navigation" class="fixed left-0 right-0 top-3">
                <div class="<?php echo ($hasSubnav)? 'rounded-t-large': 'rounded-large';?> relative mt-4 top-2 pb-2 pt-4 nav-container <?php echo (is_home() || is_front_page())? 'bg-transparent': 'bg-primary-navy-400'; ?>">
                    <div class="relative flex container">
                        <div class="pt-2 logo h-fit">
                            <a href="<?php echo get_home_url(); ?>">
                                <img src="<?php echo $logoUrl ?>" alt="">
                            </a>
                        </div>
                        <div class="nav-items grow flex text-shade-white-400 py-4">
                            <?php 
                                $Menu->generate_menu('navigation-main', 'multi-level');
                            ?>
                        </div>
                    </div>
                    <a href="/search" class="p-2 absolute top-7 right-6 legal text-shade-white-400">
                        <?php echo pg_render_icon('search') ?>
                    </a>
                </div>
            </nav>
            <?php if (is_singular(['research-blogs', 'news'])): // Start of check for singular News or Blog ?>
                <?php $header = pg_generate_blog_header($post->ID); ?>
                <?php if (isset($header) && !empty($header)): // Start of Check for empty Blog header ?>
                    <div class="container">
                        <?php echo $header; ?>
                    </div>
                <?php endif; // End of check for empty blog header. ?>
                <?php elseif (is_singular(['publications'])): // Start of check for singular News or Blog ?>
                <?php $header = pg_generate_publication_header($post->ID); ?>
                <?php if (isset($header) && !empty($header)): // Start of Check for empty Blog header ?>
                    <div class="container">
                        <?php echo $header; ?>
                    </div>
                <?php endif; // End of check for empty blog header. ?>
            <?php elseif ($no_header): ?>
                <h1 class="sr-only"><?php echo esc_html(the_title()); ?></h1>
            <?php else: ?>
                <div class="container">
                    <?php if (!empty($headline)): ?> 
                        <h1 class="h1 text-shade-white-400 pb-10 md:pb-8 pt-42"><?php echo esc_html($headline) ?></h1>
                    <?php else: ?>
                        <h1 class="sr-only"><?php echo the_title(); ?></h1>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </header><!-- #masthead -->
        <main id="content">
    

