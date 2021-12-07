<?php 
/**
 * Custom Settings class
 * 
 * Defines pages, sections and setting for custom options.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Custom_Settings {
    function __construct($title, $slug, $description, $parent = null, $sections = array() ) {
        $this->namespace = 'pg';
        $this->slug = $slug;
        $this->title = $title;
        $this->description = $description;
        $this->parent = $parent;
        $this->sections = $sections;
        $this->section = '';
    }
    /**
     * Generates either a top level menu or submenu.
     * Depending on if a parent attributes has been passed.s
     */
    public function build_menu() {
        if ($this->parent) {
            add_submenu_page(
                $this->parent,
                __($this->title, $this->namespace),
                __($this->title, $this->namespace),
                'manage_options',
                $this->slug,
                array($this, 'admin_page_contents'),
                3
            );
            $this->add_section();
            return;
        }
        add_menu_page(
            __($this->title, $this->namespace),
            __($this->title, $this->namespace),
            'manage_options',
            $this->slug,
            array($this, 'generate_settings_page_contents'),
            'dashicons-admin-generic',
            3
        );
        if (!empty($this->sections)) {
            $this->add_section();
        }
    }

    /** 
     * Defines a settings section.
     */
    public function add_section() {
        foreach($this->sections as $title => $section) {
            add_settings_section(
                $section['id'],
                __( $title, $this->namespace),
                array($this, 'section_contents'),
                $this->slug
            );
            $this->section = $section;
            if (!empty($section['fields'])) {
                $this->add_fields();
            }
        }
    }
    /**
     * Deslugify's the id to make it a label.
     */
    private function deslugify($string) {
        $string = ucwords(str_replace('_', ' ', $string));
        return $string;
    }
    /** 
     * Defines the individual setting.
     */
    public function add_fields() {
        foreach($this->section['fields'] as $field => $type) {
            $label = $this->deslugify($field);
            add_settings_field(
                $field,
                $label,
                array($this, 'generate_field_markup'),
                $this->slug,
                $this->section['id'],
                array(
                    'id' => $field,
                    'type' => $type,
                    'label_for' => $field,
                )
            );
            register_setting( $this->slug, $field );
        }
    }

    /**
     * The render callback for when sections are defined.
     */
    public function section_contents() {
        return;
    }

    /**
     * Generates the markup for the main theme settings page.
     */
    public function generate_settings_page_contents() {
        ?>
            <h1 class="pt-xs-3 mb-xs-0">Welcome to the theme custom settings!</h1>
            <p class="pt-xs-1">You can find the full technical documentation <a href="https://docs.google.com/document/d/14ToOZjnRk-MnaDQCHAhyWhLKksxwEYgRBtrIGRA2ASo/edit?usp=sharing">here</a></p>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">3rd Party Integrations</h2>
                <p class="mt-xs-1">This is where you would add your Google Tag Manager container ID and your MapBox API key.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-integrations')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">404 Page Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French copy for the 404 page.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-404-settings')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">Alert Bar Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French copy and how long the cookie should be stored for the alert bar.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-alert-settings')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">Cookie Notification Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French copy and how long the cookie should be stored for the cookies notification.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-cookie-settings')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">Footer Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French copy for the footer.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-footer-settings')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">Header Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French copy for the header.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-header-settings')) ?>">found here</a>
            </div>
            <div class="mt-xs-4">
                <h2 class="mb-xs-0">Social Media Settings</h2>
                <p class="mt-xs-1">This is where you would add the English and French links for the social media accounts.</p>
                <a class="block-link mt-xs-1" href="<?php echo esc_url( $this->generate_settings_url($this->namespace . '-social-settings')) ?>">found here</a>
            </div>
        <?php
    }

    /**
     * Generates a link to a settings page. 
     */
    public function generate_settings_url($name) {
        $url = add_query_arg('page', $name, admin_url('admin.php'));
        return $url;
    }

    /**
     * Generates the markup for all submenu pages. 
     */
    public function admin_page_contents() {
        ?>
            <h1 class="mb-xs-0 pt-xs-3"> <?php echo esc_html( $this->title ); ?> </h1>
            <?php if ($this->description): ?>
                <p class="pt-xs-1"><?php echo esc_html($this->description) ?></p>
            <?php endif; ?>
            <form class="pt-xs-4" method="POST" action="options.php">
            <?php
                settings_fields( $this->slug );
                do_settings_sections( $this->slug );
                submit_button();
            ?>
        </form>
        <?php
    }

    /**
     * Generates the markup for the individual inputs.
     */
    public function generate_field_markup($args) {
        ?>
            <?php if ($args['type'] === 'textarea') : ?>
                <textarea id="<?php echo esc_attr($args['id']); ?>" name="<?php echo esc_attr($args['id']); ?>" cols="50" rows="10"><?php echo get_option($args['id']) ?></textarea>
            <?php else: ?>
                <input type="text" id="<?php echo esc_attr($args['id']); ?>" name="<?php echo esc_attr($args['id']); ?>" value="<?php echo get_option($args['id']); ?>">
            <?php endif; ?>
        <?php

    }
}