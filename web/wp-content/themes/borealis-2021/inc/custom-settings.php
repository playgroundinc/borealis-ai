<?php

/**
 * Theme Custom Settings.
 * 
 * Uses the Custom_Settings class to define a new theme settings menu.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package trimac-2021
 */

/**
 * Initializes the custom settings menus.
 */
function pg_init_menus()
{
    // Attempting to bypass a regular issue I have where I need to find and replace all namespacing. 
    $namespace = 'pg';
    // Defining parent as this slug needs to be provided to every submenu item. 
    $parent = $namespace . '-settings';
    $menus = array(

        // Top Level menu item.

        // The title for main settings. 
        // Since no 'parent' is provided, this will default to a top level menu item. 
        'Theme Settings' => array(
            'slug' => $parent,
            // Description is optional. 
            // You can also adjust what appears on the main settings page in the admin_page_contents method on the Custom_Settings class.
            'description' => 'This is a landing page where we can provide documentation on how the settings should be used.',
        ),

        // 3rd Party Integrations submenu.
        '3rd Party Integrations' => array(
            'slug' => $namespace . '-integrations',
            'description' => 'Use this page to provide details on all the 3rd party integrations. For details on how to set up Google Analytics see docs: https://docs.google.com/document/d/14ToOZjnRk-MnaDQCHAhyWhLKksxwEYgRBtrIGRA2ASo/edit#bookmark=id.uitz0bcf248n',
            'parent' => $parent,
            'sections' => array(
                'Google Analytics' => array(
                    'id' => $namespace . '-integrations-ga',
                    'fields' => array(
                        'gtm_container_id' => 'text',
                    )
                ),
                'Cookies Notification' => array(
                    'id' => $namespace . '-integrations-cookies',
                    'fields' => array(
                        'cookie_title' => 'text',
                        'cookie_copy' => 'textarea',
                        'cookie_link' => 'text',
                    )
                ),
                'Greenhouse API Keys' => array(
                    'id' => $namespace . '-integrations-greenhouse',
                    'fields' => array(
                        'greenhouse_api_key' => 'text',
                        'greenhouse_url' => 'text'
                    )
                ),
            )
        ),

        // 404 page settings submenu with English and French sections.
        '404 Page Settings' => array(
            'slug' => $namespace . '-404-settings',
            'parent' => $parent,
            'description' => 'Use this page to update the copy on the 404 page. If left blank it will default to the value set on the main Trimac site.',
            'sections' => array(
                '404 Page English' => array(
                    'id' => $namespace . '-404-en',
                    'fields' => array(
                        '404_title_en' => 'text',
                        '404_description_en' => 'textarea',
                    )
                ),
                '404 Page French' => array(
                    'id' => $namespace . '-404-fr',
                    'fields' => array(
                        '404_title_fr' => 'text',
                        '404_description_fr' => 'textarea',
                    )
                )
            )
        ),

        // Alert Bar settings submenu with English and French sections.
        'Alert Bar Settings' => array(
            'slug' => $namespace . '-alert-settings',
            'parent' => $parent,
            'description' => 'Use this page to update the copy on the Alert Bar. If left blank it will default to the value set on the main Trimac site.',
            'sections' => array(
                'Alert Bar Cookie' => array(
                    'id' => $namespace . '-alert-bar-cookie',
                    'fields' => array(
                        'alert_bar_cookie_name' => 'text',
                        'cookie_lifespan_in_hours' => 'number',
                    )
                ),
                'Alert Bar English' => array(
                    'id' => $namespace . '-alert-bar-en',
                    'fields' => array(
                        'alert_bar_title_en' => 'text',
                        'alert_bar_copy_en' => 'textarea',
                        'alert_bar_link_text_en' => 'text',
                        'alert_bar_link_en' => 'text'
                    )
                ),
                'Alert Bar French' => array(
                    'id' => $namespace . '-alert-bar-fr',
                    'fields' => array(
                        'alert_bar_title_fr' => 'text',
                        'alert_bar_copy_fr' => 'textarea',
                        'alert_bar_link_text_fr' => 'text',
                        'alert_bar_link_fr' => 'text'
                    )
                )
            )
        ),

        // Cookie Notification settings with English and French sections.
        'Cookie Notification Settings' => array(
            'slug' => $namespace . '-cookie-settings',
            'parent' => $parent,
            'description' => 'Use this page to update the copy and links for the cookies notification. If left blank it will default to the value set on the main Trimac site.',
            'sections' => array(
                'Cookie Settings' => array(
                    'id' => $namespace . '-cookie-settings',
                    'fields' => array(
                        'cookie_policy_cookie_name' => 'text',
                        'cookie_policy_cookie_lifespan_in_hours' => 'number',
                    )
                ),
                'Cookie Policy English' => array(
                    'id' => $namespace . '-cookie-policy-en',
                    'fields' => array(
                        'cookie_policy_title_en' => 'text',
                        'cookie_policy_copy_en' => 'textarea',
                        'cookie_policy_link_text_en' => 'text',
                        'cookie_policy_link_en' => 'text'
                    )
                ),
                'Cookie Policy French' => array(
                    'id' => $namespace . '-cookie-policy-fr',
                    'fields' => array(
                        'cookie_policy_title_fr' => 'text',
                        'cookie_policy_copy_fr' => 'textarea',
                        'cookie_policy_link_text_fr' => 'text',
                        'cookie_policy_link_fr' => 'text'
                    )
                )
            )
        ),

        'Footer Settings' => array(
            'slug' => $namespace . '-footer-settings',
            // This will create a submenu page. 
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site. If left blank it will default to the value set on the main Trimac site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(
                'Footer Banner English' => array(
                    'id' => $namespace . '-footer-banner-en',
                    'fields' => array(
                        'footer_banner_copy_en' => 'textarea',
                    )
                ),
            ),
        ),

        'Header Settings' => array(
            'slug' => $namespace . '-header-settings',
            // This will create a submenu page. 
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site. If left blank it will default to the value set on the main Trimac site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(
                'Header CTA English' => array(
                    'id' => $namespace . '-header-cta-en',
                    'fields' => array(
                        'header_cta_text_en' => 'text',
                        'header_cta_link_en' => 'text',
                    )
                ),
                'Header CTA French' => array(
                    'id' => $namespace . '-header-cta-fr',
                    'fields' => array(
                        'header_cta_text_fr' => 'text',
                        'header_cta_link_fr' => 'text',
                    )
                ),
            ),
        ),

        // Social Media settings submenu.
        'Social Media Settings' => array(
            'slug' => $namespace . '-social-settings',
            // This will create a submenu page. 
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site. If left blank it will default to the value set on the main Trimac site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(
                'Social Media English' => array(
                    'id' => $namespace . '-socials-en',
                    // The key should be written in kebab case. 
                    // It will be deslugified and turned into the label. 
                    // The value here defines what kind of input it should be.
                    'fields' => array(
                        'facebook_en' => 'text',
                        'instagram_en' => 'text',
                        'youtube_en' => 'text',
                        'linkedin_en' => 'text',
                        'twitter_en' => 'text',
                    )
                ),
                'Social Media French' => array(
                    'id' => $namespace . '-socials-fr',
                    // The key should be written in kebab case. 
                    // It will be deslugified and turned into the label. 
                    // The value here defines what kind of input it should be.
                    'fields' => array(
                        'facebook_fr' => 'text',
                        'instagram_fr' => 'text',
                        'youtube_fr' => 'text',
                        'linkedin_fr' => 'text',
                        'twitter_fr' => 'text',
                    )
                )
            )
        ),
        // Social Media settings submenu.
        'Social Media Settings' => array(
            'slug' => $namespace . '-social-settings',
            // This will create a submenu page. 
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site. If left blank it will default to the value set on the main Trimac site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(

                'Social Media English' => array(
                    'id' => $namespace . '-socials-en',
                    // The key should be written in kebab case. 
                    // It will be deslugified and turned into the label. 
                    // The value here defines what kind of input it should be.
                    'fields' => array(
                        'linkedin_en' => 'text',
                        'github_en' => 'text',
                        'youtube_en' => 'text',
                        'twitter_en' => 'text',
                    )
                ),
            )
        ),
    );

    foreach ($menus as $name => $args) {
        // These fields might not be set, but do need to be defined in the construct. 
        // Checks if they exist and if not, sets them to null.
        $optional_fields = array('parent', 'sections', 'description');
        foreach ($optional_fields as $field) {
            $args[$field] = isset($args[$field]) ? $args[$field] : null;
        }
        // Creates a new instance of the Custom_Settings class and builds the menu.
        $menu = new PG_Custom_Settings($name, $args['slug'], $args['description'], $args['parent'], $args['sections']);
        $menu->build_menu();
    }
}

add_action('admin_menu', 'pg_init_menus');
