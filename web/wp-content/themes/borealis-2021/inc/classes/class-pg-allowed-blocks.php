<?php 
/**
 * Allowed Blocks class
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Allowed_Blocks {
    function __construct($post_type) {
        $this->post_type = $post_type;
        $this->namespace = 'pg';
        $this->custom_blocks = array(

            // Accordion
            'accordion',
            'accordion-row',

            // Callout
            'callout-column',
            'callout-container',
            
            // Content Cards
            'content-card',
            'content-card-container',

            // Documents
            'document-row',

            // Forms
            'form-builder',
            'date-input',
            'input-row',
            'number-input',
            'select-input',
            'text-input',
            'textarea-input',
            'select-destination-input',

            // Image List
            'image-list',
            'image-list-container',

            // Logos
            'logo',
            'logos-container',

            // Sliders
            'image-slide',
            'carousel',
            'testimonial-slide',
            'testimonial-carousel',

            // Stats
            'stat-column',
            'stats-container',

            // Timeline
            'milestone',
            'timeline-container',

            // Embed Forms
            'cognito-form',
            'formstack-form',

            // Page Strips
            'feature-strip',
            'page-strip-graphic',
            'page-strip',

            // Image
            'custom-image',
            'image-text',
        );
        $this->core_blocks = array(
            'core/video',
            'core/buttons',
            'core/list',
        );
        $this->news_release_blocks = array(
            $this->namespace . '/' . 'news-release-meta-block',
        );
        $this->page_blocks = array(
            $this->namespace . '/' . 'page-meta-block'
        );
        $this->location_blocks = array(
            $this->namespace . '/' . 'location-meta-block',
        );
        $this->body_copy_blocks = array(
            // Body Copy
            'body-copy',
            'body-copy-image',

            // Sliders 
            'body-copy-image-slide',
            'body-copy-carousel',

            // Text
            'heading-one',
            'heading-two',
            'heading-three',
            'heading-four',
            'heading-five',
            'heading-six',
            'paragraph',
            'paragraph-no-alignment',
        );
    }

    function add_namespace($item) {
        return $this->namespace . '/' . $item;
    }

    function get_custom_allowed_blocks() {
        if ($this->post_type === 'custom-location') {
            return $this->location_blocks;
        }
        $body_copy_blocks = array_map(array($this, 'add_namespace'), $this->body_copy_blocks);
        if ($this->post_type === 'news-releases') {
            $news_release_blocks = array_merge($body_copy_blocks, $this->news_release_blocks);
            return $news_release_blocks;
        } 
        $custom_blocks = array_map(array($this, 'add_namespace'), $this->custom_blocks);
        $custom_blocks = array_merge($this->core_blocks, $custom_blocks);
        $custom_blocks = array_merge($body_copy_blocks, $custom_blocks);
        if ($this->post_type === 'page') {
            $custom_blocks = array_merge($custom_blocks, $this->page_blocks);
        } 
        return $custom_blocks;
    }
}

function pg_add_allowed_blocks($allowed_blocks, $post) {
    $Allowed = new PG_Allowed_Blocks($post->post_type);
    $blocks = $Allowed->get_custom_allowed_blocks();
    return $blocks;
}


add_filter( 'allowed_block_types', 'pg_add_allowed_blocks', 10, 2 );
