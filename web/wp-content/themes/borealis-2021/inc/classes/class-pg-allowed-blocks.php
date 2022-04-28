<?php

/**
 * Allowed Blocks class
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pg-wp-starter
 */

class PG_Allowed_Blocks
{
    function __construct($post_type)
    {
        $this->post_type = $post_type;
        $this->namespace = 'pg';
        $this->shared_blocks = array(
            // Accordion
            'accordion',
            'accordion-row',

            // Blockquote
            'blockquote',

            // Code
            'code',
            'compare-code',

            // Custom Image
            'custom-image',

            // Custom Video
            'custom-video',

            // Icon List
            'icon-list-container-block',
            'icon-list-item-block',

            // Images
            'image-text',
            'image-text-strip',

            // Image Row
            'image-row-container',
            'image-row-block',

            // Jobs
            'jobs-container',
            'select-job',
            'job-highlight',

            // Page Strips
            'page-strip-graphic',
            'page-strip-graphic-container',

            // Paragraph
            'paragraph',

            // Podcast
            'podcast',

            // Publications
            'publications-container',
            'select-publications',
            'select-research-blogs',
            'select-news',

            // Tabbed Content
            'tabbed-content-container-block',
            'tabbed-content-panel-block',

            // Text & Image
            'text-image-container',
            'text-image-block',

            // Text 2up
            'text-2-up',
            'text-2-up-container',

            // Title Text Cta
            'title-text-cta',

            // Video Tabbed Content
            'video-tabbed-content-container-block',
            'video-tabbed-content-panel-block'
        );
        $this->custom_blocks = array(
            // Blockquote
            'blockquote',

            // Callout
            'callout-column',
            'callout-container',

            // Custom Video
            'custom-video',

            // Gallery
            'gallery-container',

            // Image Row
            'image-row-container',
            'image-row-block',

            // Jobs
            'job-block',
            'jobs-container',
            'select-job',

            // Locations
            'locations-container',
            'location',
            'location-image',

            // Logos
            'logo',
            'logos-container',
            'logos-subsection',

            // Podcast
            'podcast',

            // Posts
            'featured-posts-container',

            // Products
            'product-container',
            'select-product',

            // Select Posts
            'select-team-member',

            // Sliders
            'news-slide',
            'carousel',
            'testimonial-carousel',
            'testimonial',

            // Stats
            'stat-column',
            'stats-container',

            // Statistics
            'statistics',
            'statistics-container',

            // Tag Cloud
            'tag-cloud-container-block',
            'tag-cloud-item-block',

            // Text & Image
            'text-image-container',
            'text-image-block',

            // Title Text Cta
            'title-text-cta',

            // Spacer
            'spacer-container',
            'spacer'
        );
        $this->shared_core_blocks = array(
            'core/embed-youtube',
            'core/video',
        );
        $this->blog_core_blocks = array(
            'core/table',
            'core/quote',
            'core/list'
        );
        $this->author_blocks = array(
            $this->namespace . '/author-meta-block',
        );
        $this->news_blocks = array(
            $this->namespace . '/' . 'news-meta-block',
        );
        $this->research_blogs_blocks = array(
            $this->namespace . '/' . 'research-blogs-meta-block',
        );
        $this->team_member_blocks = array(
            $this->namespace . '/' . 'team-member-meta-block',
            $this->namespace . '/page-strip-graphic-container',
            $this->namespace . '/page-strip-graphic',
            $this->namespace . '/paragraph',
            $this->namespace . '/heading-two',
            $this->namespace . '/heading-three',
            $this->namespace . '/heading-four',
        );
        $this->page_blocks = array(
            $this->namespace . '/' . 'page-meta-block'
        );
        $this->product_blocks = array(
            $this->namespace . '/' . 'product-meta-block',
        );
        $this->program_blocks = array(
            $this->namespace . '/program-meta-block',
        );
        $this->publication_blocks = array(
            $this->namespace . '/' . 'publications-meta-block',
            $this->namespace . '/bibtex',
            $this->namespace . '/paragraph',
            $this->namespace . '/heading-two',
            $this->namespace . '/heading-three',
            $this->namespace . '/heading-four',
            $this->namespace . '/legal',
        );
        $this->body_copy_blocks = array(
            // Fellowships
            'fellowship-container',
            'fellowship',

            // Figures
            'compare-figures',

            // Sections
            'custom-section-block',
            'custom-subsection-block',

            // Text
            'heading-two',
            'heading-three',
            'heading-four',
            'paragraph',
            'legal'
        );
    }

    function add_namespace($item)
    {
        return $this->namespace . '/' . $item;
    }

    function get_custom_allowed_blocks()
    {
        $shared_blocks = array_map(array($this, 'add_namespace'), $this->shared_blocks);
        // Leaving in as commented until can test works appropriately on dev.
        // $shared_core_blocks = array_map(array($this, 'add_namespace'), $this->shared_core_blocks);
        // $body_copy_blocks = array_map(array($this, 'add_namespace'), $this->body_copy_blocks);
        // $body_copy_blocks = array_merge($body_copy_blocks, $shared_blocks);
        // $body_copy_blocks = array_merge($body_copy_blocks, $shared_core_blocks);

        $body_copy_blocks = array_map(array($this, 'add_namespace'), $this->body_copy_blocks);
        $body_copy_blocks = array_merge($body_copy_blocks, $shared_blocks);
        $body_copy_blocks = array_merge($body_copy_blocks, $this->blog_core_blocks);
        $body_copy_blocks = array_merge($body_copy_blocks, $this->shared_core_blocks);

        // Authors
        if ($this->post_type === 'author') {
            return $this->author_blocks;
        }
        // News
        if ($this->post_type === 'news') {
            $news_blocks = array_merge($body_copy_blocks, $this->news_blocks);
            return $news_blocks;
        }
        // Publications
        if ($this->post_type === 'publications') {
            return $this->publication_blocks;
        }

        // Research Blogs
        if ($this->post_type === 'research-blogs') {
            $research_blog_blocks = array_merge($body_copy_blocks, $this->research_blogs_blocks);
            return $research_blog_blocks;
        }
        // Team Members
        if ($this->post_type === 'team-member') {
            return $this->team_member_blocks;
        }

        $custom_blocks = array_map(array($this, 'add_namespace'), $this->custom_blocks);
        $custom_blocks = array_merge($custom_blocks, $this->shared_core_blocks);
        $custom_blocks = array_merge($custom_blocks, $shared_blocks);
        if ($this->post_type === 'product') {
            $product_blocks = array_merge($custom_blocks, $this->product_blocks);
            return $product_blocks;
        }
        if ($this->post_type === 'program') {
            $program_blocks = array_merge($custom_blocks, $this->program_blocks);
            return $program_blocks;
        }

        $page_blocks = array_merge($custom_blocks, $this->page_blocks);
        return $page_blocks;
    }
}

function pg_add_allowed_blocks($allowed_blocks, $post)
{
    $Allowed = new PG_Allowed_Blocks($post->post_type);
    $blocks = $Allowed->get_custom_allowed_blocks();
    return $blocks;
}


add_filter('allowed_block_types', 'pg_add_allowed_blocks', 10, 2);
