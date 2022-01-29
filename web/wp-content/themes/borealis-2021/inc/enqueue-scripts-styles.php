<?php

if (!function_exists('pg_mapbox_scripts')) {
    /**
     * Only load in mapbox scripts if they're necessary.
     */
    function pg_mapbox_scripts() {
        $namespace = pg_get_namespace();
        if (has_block($namespace . '/map-block')) {
            wp_enqueue_script('mapbox', 'https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js', array(), '20151215', false);
            wp_enqueue_style( 'mapbox-css', 'https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css');
        }
    }
}

if (!function_exists('pg_tabbed_content_script')) {
    function pg_tabbed_content_script() {
        wp_register_script('tabbedContent', get_template_directory_uri() . '/dist/tabbedContent.js', array(), '20151215', true);
    }
}

if (!function_exists('pg_blog_modal_script')) {
    function pg_blog_modal_script() {
        wp_enqueue_script('blogModal', get_template_directory_uri() . '/dist/blogModal.js', array(), '20151215', true);
    }
}

if (!function_exists('pg_threejs_scripts')) {
    /**
     * Only load in threejs script if on homepage.
     */
    function pg_threejs_scripts() {
        if (is_front_page()) {
            wp_register_script( 'threejs', 'https://cdn.jsdelivr.net/npm/three@0.130.1/build/three.min.js', array(), '20151215', true );
            wp_enqueue_script( 'shader', get_template_directory_uri() . '/dist/shader.js', array( 'threejs' ), '20151215', true );    
        }
    }
}

if (!function_exists('pg_borealis_script')) {
    /**
     * Only load in threejs script if on homepage.
     */
    function pg_borealis_script() {
        if (is_page_template( 'page-single-job-listing.php' )) {
            wp_enqueue_script( 'borealis', 'https://boards.greenhouse.io/embed/job_board/js?for=borealisai', array(), '20151215', true );
            
        }
    }
}

/**
 * Enqueue scripts and styles.
 */
function pg_wp_starter_scripts() {
    wp_enqueue_script( 'focus-visible', 'https://unpkg.com/focus-visible@latest/dist/focus-visible.min.js', array(), '20151215', true );

	wp_enqueue_style( 'pg-wp-starter-style', get_template_directory_uri() . '/dist/build.css' );

    wp_enqueue_script( 'pg-wp-starter-navigation', get_template_directory_uri() . '/dist/build.js', array(), '20151215', true );

    wp_register_script( 'development-blocks', get_template_directory_uri() . '/dist/development.js', array(), '20151215', true );
    wp_register_script( 'carousel', get_template_directory_uri() . '/dist/carousel.js', array(), '20151215', true );    
    
    wp_register_script('trmc-maps', get_template_directory_uri() . '/dist/maps.js', array(), '20151215', true );
    $api_key = get_option('mapbox_api_key');
    wp_localize_script(
        'trmc-maps',
        'apiKeys',
        array(
            'mapbox'         => $api_key,
        )
    );


    wp_register_script( 'trmc-form-builder', get_template_directory_uri() . '/dist/formBuilder.js', array(), '20151215', true );
    wp_localize_script(
        'trmc-form-builder',
        'ajaxInfo',
        array(
            'ajaxUrl'         => admin_url( 'admin-ajax.php' ),
            'emailSecurity' => wp_create_nonce( 'send_email' ),
        )
    );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

    if ( !is_admin() ) wp_deregister_script('jquery');
    // Conditional function to only load MapBoxGL when necessary.
    pg_mapbox_scripts();
    pg_threejs_scripts();
    pg_borealis_script();
    pg_tabbed_content_script();
    pg_blog_modal_script();
}
add_action( 'wp_enqueue_scripts', 'pg_wp_starter_scripts' );

if (!function_exists('pg_wp_starter_admin_scripts')) {
    function pg_wp_starter_admin_scripts() {
        wp_enqueue_style('pg-wp-starter-admin-style', get_template_directory_uri() . '/dist/admin.css');
        wp_enqueue_script( 'pg-wp-starter-admin-scripts', get_template_directory_uri() . '/dist/admin.js', array(), '20151215', true );  

    }
}
add_action( 'admin_enqueue_scripts', 'pg_wp_starter_admin_scripts' );
