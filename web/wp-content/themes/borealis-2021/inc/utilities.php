<?php 

if (!function_exists('pg_get_namespace')) {
    /**
     * Sets the namespace for rendering all the blocks.
     */
    function pg_get_namespace() {
        return 'pg';
    }
}

if (!function_exists('pg_get_attributes')) {
    /**
     * Pulls attributes off the block 
     * 
     * @param object $block the current block object.
     * @param array $fields all the attribute names to be pulled off the block. 
     */
    function pg_get_attributes($block, $fields) {
        $attributes = new stdClass();
        foreach ( $fields as $field => $default ) :
            if ( isset( $block['attrs'] ) && isset( $block['attrs'][ $field ] ) ) :
                $attributes->$field = $block['attrs'][ $field ];
            elseif ( isset( $block[ $field ] ) ) :
                $attributes->$field = $block[ $field ];
            else :
                $attributes->$field = $default;
            endif;
        endforeach;
        return $attributes;
    }
}

if (!function_exists('pg_allowed_html')) {
    /**
     * Merges the existing allowed HTML from 'post' with custom markup.
     */
    function pg_allowed_html() {
        $allowed_html = wp_kses_allowed_html('post');
        $new_html = array(
            'svg' => array(
                'class' => array(),
                'viewbox' => array(),
                'focusable' => array(),
                'role' => array(),
                'aria-labelledby' => array(),
                'aria-hidden' => array(),
            ),
            'path' => array(
                'fill' => array(),
                'stroke' => array(),
                'd' => array(),
            ),
            'g' => array(),
            'use' => array(
                'xlink:href' => array(),
            ),
            'input' => array(
                'aria-describedby' => array(),
                'type' => array(),
                'name' => array(),
                'id' => array(),
                'required' => array(),
                'aria-invalid' => array(),
                'class' => array(),
                'placeholder' => array(),
                'aria-checked' => array(),
                'value' => array(),
            ),
            'textarea' => array(
                'aria-describedby' => array(),
                'name' => array(),
                'id' => array(),
                'required' => array(),
                'aria-invalid' => array(),
                'class' => array(),
                'placeholder' => array(),
            ),
            'label' => array(
                'for' => array(),
                'class' => array(),
                'id' => array(),
            ),
            'div' => array(
                'class' => array(),
                'id' => array(),
                'style' => array(),
                'data-caption' => array(),
                'style' => array(),
                'data-src' => array(),
            ),
            'span' => array(
                'class' => array(),
            ),
            'select' => array(
                'aria-describedby' => array(),
                'type' => array(),
                'name' => array(),
                'id' => array(),
                'required' => array(),
                'aria-invalid' => array(),
                'class' => array(),
                'selected' => array(),
                'disabled' => array(),
            ),
            'option' => array(
                'value' => array(),
                'disabled' => array(),
                'selected' => array(),
            ),
            'button' => array(
                'class' => array(),
                'id' => array(),
                'aria-controls' => array(),
                'aria-expanded' => array(),
                'aria-label' => array(),
            ),
            'picture' => array(
                'class' => array(),
            ),
            'source' => array(
                'sizes' => array(),
                'srcset' => array(),
                'media' => array(),
                'data-srcset' => array(),
            )
        );
        $updated_html = array_merge($allowed_html, $new_html);
        return $updated_html;
    }
}

if (!function_exists('pg_slugify')) {
    /**
     * Makes a string into a slug.
     */
    function pg_slugify($string) {
        $slug = str_replace(' ', '-', strtolower(trim($string)));
        $slug = preg_replace('/[^A-Za-z0-9\-]/', '', $slug);
        return $slug;
    }
}

if (!function_exists('pg_deslugify')) {
    /**
     * Makes a slug into a string
     */
    function pg_deslugify($string) {
        $slug = ucwords(str_replace('_', ' ', trim($string)));
        return $slug;
    }
}

if (!function_exists('pg_create_options')) {
    /**
     * Create options of a key value pair where the key is a slug, the value is the string.
     */
    function pg_create_options($current_options) {
        $options = array();
        foreach ($current_options as $current_option) {
            $key = pg_slugify($current_option);
            $options[$key] = $current_option;
        }
        return $options;
    }
}

if (!function_exists('pg_render_icon')) {
    /**
     * Renders an svg of an icon.
     */
    function pg_render_icon($id, $decorative = false) {
        ob_start();
        ?>
            <svg 
                class="icon rotate-0 transition duration-300 <?php  echo esc_attr('icon-' . $id ); ?>" 
                focusable="false" 
                <?php echo $decorative ? esc_html('aria-hidden=true') : null ?>
            > 
                <use xlink:href="#<?php echo esc_attr('icon-' . $id)?>"></use>
            </svg>
        <?php 
        return ob_get_clean();
    }
}

if (!function_exists('pg_render_decoration')) {
    /**
     * Renders an svg from the spritemap that is meant as a decoration.
     */
    function pg_render_decoration($id) {
        ?>
        <svg class="decoration mb-xs-2" focusable="false" aria-hidden="true">
            <use xlink:href="#<?php echo esc_attr('decoration-' . $id)?>"></use>
        </svg>
        <?php 
    }
}

if (!function_exists('pg_current_lang')) {
    /**
     * Returns the current language if WPML is installed.
     * 
     * @returns string the language code.
     */
    function pg_current_lang() {
        if (!class_exists('SitePress')) {
            return 'en';
        } 
        return ICL_LANGUAGE_CODE;
    }
}

if (!function_exists('pg_get_option_default_blog')) {
    /**
     * Checks if setting exists in main site as default.
     * 
     * @param string $current the current value for that option.
     * @param string $selector the name for the option in the current language.
     */
    function pg_get_option_default_blog($current, $selector) {
        if (function_exists('switch_to_blog')) {
            switch_to_blog(1);
            $current = get_option($selector);
            restore_current_blog();
        }
        return $current;
    }
}

if (!function_exists('pg_get_settings')) {
    /**
     * Function to pull in settings.
     * 
     * Settings are different in that they only exist in one language.
     * 
     * @param array $setting_names an array of the settings to be pulled in.
     * @return array $option_names the values for those settings or false.
     */
    function pg_get_settings($setting_names) {
        $options = array();
        foreach ($setting_names as $setting_name) {
            $current = get_option($setting_name);
            $options[$setting_name] = !empty($current) ? $current : false;
        } 
        return $options;
    }
}

if (!function_exists('pg_get_options')) {
    /**
     * Gets multilingual options. 
     * 
     * Checks for an English version and a version on a main site. 
     * 
     * @param array $option_names an array of the keys for the options to be returned.
     * @return array $options the values for those option keys or false.
     */
    function pg_get_options($option_names, $default = 'en') {
        $current_lang = pg_current_lang();
        $options = array();
        foreach ($option_names as $option_name) {
            $current = get_option($option_name . '_' . $current_lang);
            if (empty($current)) {
                $current = pg_get_option_default_blog($current, $option_name . '_' . $current_lang);
            }
            if (empty($current) && !empty($default) && $current_lang !== $default) {
                $current = get_option($option_name . '_' . $default);
                if (empty($current)) {
                    $current = pg_get_option_default_blog($current, $option_name . '_' . $default);
                }
            } 
            $options[$option_name] = !empty($current) ? $current : false;
        } 
        return $options;
    }
}

if (!function_exists('pg_get_language_label')) {
    /**
     * Generates labels for the custom language toggle.
     * 
     * @param string $code the language code.
     * @return string $languages[$code] the label for the current language (defaults to 'en')
     */
    function pg_get_language_label($code) {
        $languages = array(
            'en' => 'English',
            'fr' => 'Français',
        );
        if ($languages[$code]) {
            return $languages[$code];
        }
        return $languages['en'];
    }
}

if ( ! function_exists( 'pg_get_translated_urls' ) ) {
    /**
     * @return array urls.
     */
    function pg_get_translated_urls() {
            $url        = get_the_permalink();
            $urls       = array();
            $urls['en'] = apply_filters( 'wpml_permalink', $url, 'en' );
            $urls['fr'] = apply_filters( 'wpml_permalink', $url, 'fr' );
            return $urls;
    }
}

if (!function_exists('pg_map_for_ids')) {
    /**
     * Maps over array of terms and returns ID.
     */
    function pg_map_for_term_ids($item) {
        return $item['term_id'];
    }
}

if (!function_exists('pg_build_service_options')) {
    /**
     * Map over terms and return array of options.
     */
    function pg_build_service_options($site_name, $terms) {
        $options = array();
        $lang = pg_current_lang();
        foreach ($terms as $term) {
            $translation_id = apply_filters( 'wpml_object_id', $term->term_id, 'services', false,  $lang);
            if (!empty($translation_id) && intval($translation_id) !== intval($term->term_id)) {
                continue;
            }
            $key = pg_slugify($site_name) . '-' . $term->term_id;
            $options[$key] = $term->name;
        }
        return $options;
    }
}

if ( ! function_exists( 'pg_get_meta_values' ) ) {
    /**
     * Get meta values for post ID.
     *
     * @param id    $post_id the id for the post.
     * @param array $fields the meta fields to be pulled off.
     *
     * @return array the meta values.
     */
    function pg_get_meta_values( $post_id, $fields ) {
            $meta_values = array();
            foreach ( $fields as $field => $default) {
                    $value = get_post_meta( $post_id, $field, true );
                    if ( ! empty( $value ) ) {
                        $meta_values[ $field ] = $value;
                    } else {
                        $meta_values[ $field ] = $default;
                    }
            }
            return $meta_values;
    }
}

if (!function_exists('pg_get_formatted_date')) {
    /**
     * Returns a properly fomatted date.
     * 
     * @param string $date the current date string.
     */
    function pg_get_formatted_date($date) {
        $current_lang = pg_current_lang();
        $date_format = $current_lang === 'en' ? 'F d, Y' : 'd F Y';
        $formatted_date = !empty($date) ? date_i18n($date_format, strtotime($date)) : date_i18n($date_format, strtotime($date));
        return $formatted_date; 
    }
}

if (!function_exists('pg_filter_valid_emails')) {
    function pg_filter_valid_emails($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }
}

if (!function_exists('pg_get_query_values')) {
    function pg_get_query_values($req, $param) {
        $value = sanitize_text_field(wp_unslash($req[$param]));
        if (isset($value) && $value !== '') {
            return explode(',', $value);
        }
        return [];
    }
}


function pg_generate_query($post_type, $query, $taxonomies, $page = 1, $posts_per_page = 12, $current_post_id = null) {
    $offset = intval($page - 1) * $posts_per_page;
    $args = array(
        'post_type' => $post_type,
        'posts_per_page' => $posts_per_page,
        'page' => $page,
        'offset' => $offset,
        'meta_key' => 'publication_date',
        'orderby' => 'publication_date',
        'order' => 'DESC'
    );
    if ($query) {
        $args['s'] = $query;
    }
    if($current_post_id !== null) {
        $args['post__not_in'] = array($current_post_id);
    }
    if (!empty($taxonomies)) {
        $args['tax_query'] = array(
            'relation' => 'OR'
        );
        foreach($taxonomies as $key => $terms) {
            if (!empty($terms)) {
                $arg = array(
                    'taxonomy' => $key,
                    'field'    => 'id',
                    'terms'    => $terms,
                );
                array_push($args['tax_query'], $arg);
            }
        }
    }
    return $args;
}

if (!function_exists('pg_get_content_type')) {
    function pg_get_content_type($content_types, $post_type) {
        if (!empty($content_types)) {
            return $content_types[0]->name;
        }
        switch($post_type) {
            case 'research-blogs':
                return 'Research';
            case 'news':
                return 'News';
            default:
                return 'Publication';
        }
    }
}

if (!function_exists('pg_check_for_submenu')) {
    function pg_check_for_submenu($theme_location, $post_id) {
        $theme_locations = get_nav_menu_locations();
        $menu_obj = get_term( $theme_locations[$theme_location], 'nav_menu' );
        $menu_items = wp_get_nav_menu_items($menu_obj->slug);
        $active_item = array_filter($menu_items, function($item) use ($post_id) { return intval($item->object_id) === $post_id && intval($item->menu_item_parent) === 0;});
        if (!empty($active_item)) {
            $active_menu_item = reset($active_item);
            $children = array_filter($menu_items, function($item) use ($active_menu_item) { return intval($item->menu_item_parent) === intval($active_menu_item->ID); });
            return !empty($children);
        }
        return false;
    }
}