<?php

/**
 * Theme Custom Settings.
 * 
 * Uses the Custom_Settings class to define a new theme settings menu.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Borealis-2021
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
                'Greenhouse API Keys' => array(
                    'id' => $namespace . '-integrations-greenhouse',
                    'fields' => array(
                        'greenhouse_api_key' => 'text',
                        'greenhouse_url' => 'text'
                    )
                ),
            )
        ),

        // // 404 page settings submenu.
        '404 Page Settings' => array(
            'slug' => $namespace . '-404-settings',
            'parent' => $parent,
            'description' => 'Use this page to update the copy on the 404 page.',
            'sections' => array(
                '404 Page' => array(
                    'id' => $namespace . '-404-en',
                    'fields' => array(
                        '404_title_en' => 'text',
                        '404_description_en' => 'textarea',
                    )
                ),
            )
        ),

        // Cookie Notification settings.
        'Cookie Notification Settings' => array(
            'slug' => $namespace . '-cookie-settings',
            'parent' => $parent,
            'description' => 'Use this page to update the copy and links for the cookies notification. If left blank it will default to the value set on the main Borealis site.',
            'sections' => array(
                'Cookie Policy' => array(
                    'id' => $namespace . '-cookie-policy',
                    'fields' => array(
                        'cookie_policy_title' => 'text',
                        'cookie_policy_copy' => 'textarea',
                        'cookie_policy_link_text' => 'text',
                        'cookie_policy_link' => 'text'
                    )
                ),
            )
        ),


        'Footer Settings' => array(
            'slug' => $namespace . '-footer-settings',
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(
                'Footer Banner' => array(
                    'id' => $namespace . '-footer-banner-en',
                    'fields' => array(
                        'footer_banner_copy_en' => 'textarea',
                    )
                ),
            ),
        ),

        // Social Media settings submenu.
        'Social Media Settings' => array(
            'slug' => $namespace . '-social-settings',
            'parent' => $parent,
            'description' => 'This is where you can add links for the social media integrations on your site. If left blank it will default to the value set on the main Borealis site.',
            // Sections allow for breaking up the inputs onto the page. 
            // The key for each item will act as the section's title. 
            'sections' => array(

                'Social Media' => array(
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
