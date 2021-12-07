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

<?php 
    $body_fields = array(
        'gradient_background' => false, 
        'hero_style' => 'square',
    );
    $fields = !empty($post) ? pg_get_meta_values($post->ID, $body_fields) : [];
    $additional_classes = !empty($fields['gradient_background']) && $fields['gradient_background'] === 'true' ? ' body--gradient' : '';
    $additional_classes .= !empty($fields['hero_style']) && $fields['hero_style'] === 'slanted' ? ' page-hero-slant' : '';
    $additional_classes .= !empty($fields['hero_style']) && $fields['hero_style'] === 'square' ? ' page-hero-square' : '';
    $additional_classes .=  is_singular('news-releases') ? ' page-news-release-single' : null;
?>

<body <?php body_class($additional_classes); ?>>
    <?php if ( ! empty( $settings['gtm_container_id'] ) ) : ?>
        <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo esc_attr($settings['gtm_container_id'])?>"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    <?php endif; ?>
    <?php 
        $option_names = array('header_cta_text', 'header_cta_link');
        $options = pg_get_options($option_names);  
    ?>
    <?php
        trmc_svg_spritemap(); 
        $Menu = new PG_Custom_Menus();  
        $current_lang = pg_current_lang();
        $translated_urls = pg_get_translated_urls();
        $allowed_html = pg_allowed_html();
    ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'pg-wp-starter' ); ?></a>
        <?php get_template_part('partials/content', 'alert'); ?>
        <?php get_template_part('partials/content', 'cookie'); ?>

        <header id="masthead">
            <div class="header hide-on-scroll">
                <div class="flex row-xl col-xs header__container between-xs">
                    <div class="show-xs hide-xl bb-xs-grey-lt">
                        <div class="flex between-xs middle-xs inner-container">
                            <div class="header__logo">
                                <?php the_custom_logo(); ?>
                            </div>
                            <div class="header__toggle">
                                <button aria-haspopup="true" aria-expanded="false" aria-label="<?php esc_attr_e('Open or close menu', 'trmc'); ?>" data-toggle="1" class="btn--custom menu-toggle pv-xs-3 ph-xs-3 block-link icon-lg">
                                    <?php 
                                        $icon = pg_render_icon('hamburger');
                                        echo wp_kses($icon, $allowed_html);
                                    ?>
                                    <?php 
                                        $icon = pg_render_icon('close');
                                        echo wp_kses($icon, $allowed_html);
                                    ?>
                                </button> 
                                
                            </div>
                        </div>
                    </div>
                    <div class="toggle-1 header-main inner-container flex col-xs row-xl middle-md">
                        <div class="mr-xl-4 header__logo hide-xs show-xl">
                            <?php the_custom_logo(); ?>
                        </div>
                        <nav id="main-navigation" class="fc-xs-100 fc-xl">
                            <?php 
                                $Menu->generate_menu('header-main', 'dropdown');
                            ?>
                        </nav>
                    </div>
                    <div class="toggle-1 header-secondary bt-xs-grey-lt bt-xl mt-xl-0 flex col-xs row-xl middle-xs">
                        <ul role="menubar" class="show-xl hide-xs menu flex middle-xs mv-xs-0 between-xs dropdown-menu inner-container end-xl">
                            <li role="menuitem" class=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children fc-xl">
                                <a aria-haspopup="true" role="button" aria-expanded="false" class="menu-link menu-item__link block-link caption menu-item__parent ph-xl-2 pv-xl-2" href="#" aria-label="">
                                    <?php 
                                        if ($current_lang === 'en') {
                                            echo esc_html('FR');
                                        } else {
                                            echo esc_html('EN');
                                        }
                                        $icon = pg_render_icon('chevron', true);
                                        echo wp_kses($icon, $allowed_html);
                                    ?>
                                </a>
                                <div role="region" class="dropdown slide-toggle submenu br-xl-bt submenu--lang">
                                    <ul role="menu">
                                        <?php foreach($translated_urls as $lang => $url): ?>
                                            <?php $label = pg_get_language_label($lang); ?>
                                            <li role="menuitem" class="menu-item menu-item-type-custom menu-item-object-custom">
                                                <a aria-haspopup="false" class="menu-item__link block-link subtitle pv-xl-2 ph-xl-3" href="<?php echo esc_url_raw($url) ?>"><?php echo esc_html($label) ?></a>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>

                                </div>
                            </li>
                        </ul>
                        <div class="inner-container show-xs hide-xl fc-xs-100 copy--center">
                            <?php foreach($translated_urls as $key => $url): ?>
                                <?php if ($key !== $current_lang): ?>
                                    <?php $label = pg_get_language_label($key); ?>
                                    <a class="caption block-link pt-xs-4 pb-xs-3 menu-link" href="<?php echo esc_url_raw($url) ?>"><?php echo esc_html($label); ?></a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                        <div class="inner-container fc-xs-100 fc-md-50 fc-xl pb-xs-2 pv-xl-2 mh-xs-auto ph-xl-2 <?php  echo empty($options['header_cta_text']) || empty($options['header_cta_link']) ? esc_attr('pb-xs-15 pb-md-2 pb-xl-0') : null; ?>">
                            <a href="<?php echo get_home_url(null, 'search'); ?>" class="btn ba-xs-grey btn--secondary inner-container"><?php esc_html_e('Search', 'trmc'); ?></a>              
                        </div>
                        <?php if (!empty($options['header_cta_text']) && !empty($options['header_cta_link'])): ?>
                            <div class="inner-container fc-xs-100 fc-md-50 fc-xl mh-md-auto pb-xs-15 pb-md-4 pb-xl-0 pv-xl-2 pr-xl-2">
                                <a href="<?php echo esc_url_raw($options['header_cta_link'])?>" class="btn btn--primary inner-container"><?php echo esc_html($options['header_cta_text']); ?></a>
                            </div> 
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </header><!-- #masthead -->
        <main id="content">
            <?php get_template_part('partials/content', 'hero'); ?>
        
