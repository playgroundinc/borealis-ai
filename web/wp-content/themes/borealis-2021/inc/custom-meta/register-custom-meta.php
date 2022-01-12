<?php
/**
 * Add custom meta
 */

//  Page Meta
if (!function_exists( 'pg_add_custom_meta')) {
    function pg_add_custom_meta( ) {
        $page_meta_args = array(
            'gradient_background' => 'text',
            'hero_style' => 'text',
            'hero_background_color' => 'text',
            'headline' => 'richtext',
            'hero_cta_one_text' => 'text',
            'hero_cta_one_link' => 'url',
            'hero_cta_two_text' => 'text',
            'hero_cta_two_link' => 'url',
            'hero_video_id' => 'number',
            'hero_video_url' => 'url',
            'hero_video_alt' => 'text'
        );
        $Page_Meta = new PG_Custom_Meta($page_meta_args);
        $Page_Meta->register_custom_meta();
    }
}

add_action('init', 'pg_add_custom_meta');