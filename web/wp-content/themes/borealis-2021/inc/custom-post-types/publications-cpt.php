<?php 

if (!function_exists('pg_register_publications_cpt')) {
    /**
     * Creates a Location Custom Post Type with a services custom taxonomy and custom metadata
     */
    function pg_register_publications_cpt() {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Publications_CPT = new PG_Custom_Post_Type('publications', 'Publication', 'Publications', array('icon' => 'dashicons-book', 'has_archive' => 'false', 'template' => [ [$namespace . '/publications-meta-block']]));
        $Publications_CPT->register();
        $Publications_CPT->register_tags('conferences', 'Conference', 'Conferences');

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'authors' => 'text',
            'abstract' => 'text',
            'code' => 'text',            
            'paper' => 'text',
            'blog' => 'text',
            'publication_date' => 'text',            
            'time_to_read' => 'text',            
            'citation' => 'text', 
            'citation_link' => 'text',
        );
        $Publications_CPT->register_meta($meta_values);
    }
}

if (!function_exists('pg_handle_research_blog_save')) {
    /**
     * Since all News Releases are sorted by this key, this function sets today's date as the default. 
     * 
     * @param int $post_id the id for the current post.
     */
    function pg_handle_research_blog_save($post_id) {
        $date = get_post_meta($post_id, 'publication_date');
        if (empty($date)) {
            $date = date('Y/m/d');
            update_post_meta($post_id, 'publication_date', $date);
        }
    }
}

if (!function_exists('pg_save_post_research_blog_date_callback')) {
    /**
     * Default function for all post saves.
     * 
     * @param int $post_id the id for the current post.
     * @param object $post a WP_Object of the post.
     * @param boolean $update whether or not this is an update.
     */
    function pg_save_post_research_blog_date_callback($post_id, $post, $update){
        if ($post->post_type === 'research-blogs'){
            // We're only interested in setting the metavalue by default right now.
            if ($update) {
                return;
            }
            pg_handle_research_blog_save($post_id);
        }
    }
}

if (!function_exists('pg_handle_research_blog_sidebar_save')) {
    /**
     * Since all News Releases are sorted by this key, this function sets today's date as the default. 
     * 
     * @param int $post_id the id for the current post.
     */
    function pg_handle_research_blog_sidebar_save($post_id, $post) {
        // Parses the blocks from the $post objects content
        $blocks = parse_blocks($post->post_content);
        // Filter blocks so we're only working with the custom-section blocks.
        $sections =  array_filter(
            // Array
            $blocks, 
            // Callback
            function($block) { 
                return $block['blockName'] === 'pg/custom-section-block'; 
            }
        );
        // Set up an empty array so we're never pushing an empty value to post_meta.
        $post_sections = array();
        if (!empty($sections)) {
            foreach ($sections as $section_block) {
                $info = array();
                // Pulls the title off of the block attributes.
                $info['title'] = $section_block['attrs']['title'];
                // Sets up an empty array for subsections.
                $info['subsections'] = array();
                // If the block has innerBlocks, check if any are subsections.
                if (!empty($section_block['innerBlocks'])) {
                    // Filters innerBlocks so we're only using subsection blocks.
                    $subsections = array_filter($section_block['innerBlocks'], function($inner_block) { return $inner_block['blockName'] === 'pg/custom-subsection-block'; });
                    // If we have any subsections, add their titles to the array.
                    if (!empty($subsections)) {
                        foreach ( $subsections as $inner_block) {
                            array_push($info['subsections'], $inner_block['attrs']['title']);
                        }
                    }
                    
                }
                // Adds this item to the $post_info array.
                array_push($post_sections, $info);
            }
        }
        // Using json_encode to transform the array into a JSON string which can be easily stored.
        // We can then decode it on the front end. 
        update_post_meta($post_id, 'post_sections', json_encode($post_sections));
    }
}

if (!function_exists('pg_save_post_research_blog_sidebar_callback')) {
    /**
     * Default function for all post saves.
     * 
     * @param int $post_id the id for the current post.
     * @param object $post a WP_Object of the post.
     * @param boolean $update whether or not this is an update.
     */
    function pg_save_post_research_blog_sidebar_callback($post_id, $post, $update){
        if ($post->post_type === 'research-blogs'){
            pg_handle_research_blog_sidebar_save($post_id, $post);
        }
    }
}

add_action('save_post','pg_save_post_research_blog_date_callback', 10, 3);
add_action('save_post','pg_save_post_research_blog_sidebar_callback', 10, 3);