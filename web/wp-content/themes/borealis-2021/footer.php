<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pg-wp-starter
 */

    $Menu = new PG_Custom_Menus();
    $allowed_html = pg_allowed_html(); 
    $current_lang = pg_current_lang();
    $option_names = array('footer_banner_copy', 'footer_cta_text', 'footer_cta_link', 'footer_address', 'footer_telephone', 'footer_fax', 'facebook', 'twitter', 'instagram', 'youtube', 'linkedin');
    $options = pg_get_options($option_names);
?>
    </main>
	<footer id="colophon" class="footer dark">
        <div class="container container-fluid">
            <?php if (!empty($options['footer_banner_copy']) || !empty($options['footer_cta_link'])): ?>
                <div class="footer__banner block-link">
                    <div class="flex col-xs row-md bb-xs-white pv-xs-4 pt-md-3 pb-md-2 pt-lg-6 pb-lg-4 between-md">
                        <div class="footer__logo">
                            <?php the_custom_logo(); ?>
                        </div>
                        <div class="flex between-xs middle-xs">
                            <?php if (!empty($options['footer_banner_copy'])): ?>
                                <p class="footer__banner__copy copy--bold caption mt-xs-3 mt-md-0"><?php echo esc_html($options['footer_banner_copy']); ?></p>
                            <?php endif; ?>
                            <?php if (!empty($options['footer_cta_text']) && !empty($options['footer_cta_link'])): ?>
                                <a href="<?php echo esc_attr($options['footer_cta_link']) ?>" class="btn btn--secondary ml-md-2 mt-xs-3 mt-md-0 ml-lg-3"><?php echo esc_html($options['footer_cta_text']); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            <div class="footer__navigation">
                <div class="bb-xs-white pt-xs-7 pb-xs-3 pb-md-3 pt-md-5 pt-lg-7 pb-lg-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-5 pb-xs-9 pb-md-0">
                            <p class="copy--bold caption mb-xs-3"><?php esc_html_e('Head Office', 'trmc')?></p>
                            <?php if (!empty($options['footer_address'])): ?>
                                <div class="caption pb-xs-2">
                                    <?php echo wpautop(wp_kses($options['footer_address'], $allowed_html))?>
                                </div>
                            <?php endif; ?>
                            <?php if (!empty($options['footer_telephone'])): ?>
                                <p class="caption"><?php esc_html_e('Tel', 'trmc')?>: <?php esc_html_e($options['footer_telephone']); ?></p>
                            <?php endif; ?>
                            <?php if (!empty($options['footer_fax'])): ?>
                                <p class="caption"><?php esc_html_e('Fax', 'trmc')?>: <?php esc_html_e($options['footer_fax']); ?></p>
                            <?php endif; ?>
                            <div class="mt-xs-5">
                                <?php 
                                    $icons = array( 
                                        'facebook' => __('Link to Facebook', 'trmc'),
                                        'instagram' => __('Link to Instagram', 'trmc'),
                                        'linkedin' => __('Link to LinkedIn', 'trmc'),
                                        'twitter' => __('Link to Twitter', 'trmc'),
                                        'youtube' => __('Link to YouTube', 'trmc'),
                                    );
                                    foreach($icons as $id => $title) {
                                        if (!empty($options[$id])) {   
                                            ?>
                                                <a class="icon-lg icon--link" aria-label="<?php esc_attr_e($title); ?>" href="<?php echo esc_url_raw($options[$id]) ?>">
                                                    <?php
                                                        $icon = pg_render_icon($id);
                                                        echo wp_kses($icon, $allowed_html);
                                                    ?>
                                                </a>
                                            <?php
                                        }
                                    }
                                ?>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7">
                            <?php 
                                $Menu->generate_menu('footer-main');
                            ?>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__legal">
                <div class="flex col-xs-reverse row-lg pv-xs-1 pv-xl-0 between-md">
                    <div class="flex middle-xs fc-xs-50">
                        <p class="legal pv-xs-1 pv-xl-2 pr-md-1 pr-xl-3">&copy; <?php esc_html_e(date('Y')); ?> <?php esc_html_e('Trimac Transportation', 'trmc')?></p>
                        <?php 
                            $Menu->generate_menu('footer-legal', false);
                        ?>
                    </div>
                    <div>
                        <?php 
                            $Menu->generate_menu('footer-secondary', false);
                        ?>
                    </div>
                </div>
            </div>
        </div>

        
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
