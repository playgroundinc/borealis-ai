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


<body <?php body_class(); ?>>
    <?php if ( ! empty( $settings['gtm_container_id'] ) ) : ?>
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr($settings['gtm_container_id'])?>"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    <?php endif; ?>
    <?php pg_svg_spritemap(); ?>
    <div id="page" class="site">
    <!-- Skip to Content link -->
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'pg-wp-starter' ); ?></a>

    <header id="masthead">
        <div class="container">
            <?php 
                if (is_singular(['research-blogs', 'news'])) {
                    $header = pg_generate_blog_header($post->ID);
                    if (isset($header) && !empty($header)) {
                        echo $header;
                    }
                } 
            ?>
        </div>

    </header><!-- #masthead -->
        
