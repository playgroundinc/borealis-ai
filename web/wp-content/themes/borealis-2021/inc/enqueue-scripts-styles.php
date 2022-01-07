<?php

if (!function_exists('trmc_mapbox_scripts')) {
    /**
     * Only load in mapbox scripts if they're necessary.
     */
    function trmc_mapbox_scripts() {
        $namespace = pg_get_namespace();
        if (has_block($namespace . '/map-block')) {
            wp_enqueue_script('mapbox', 'https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.js', array(), '20151215', false);
            wp_enqueue_style( 'mapbox-css', 'https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css');
        }
    }

}
/**
 * Enqueue scripts and styles.
 */
function pg_wp_starter_scripts() {

    wp_enqueue_script( 'footnotes-made-easy', 'https://github.com/dartiss/footnotes-made-easy/blob/main/js/tooltips.min.js', array(), '20151215', true );


    // include custom jQuery
function shapeSpace_include_custom_jquery() {

	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

}
add_action('wp_enqueue_scripts', 'shapeSpace_include_custom_jquery');

    
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
    trmc_mapbox_scripts();
}
add_action( 'wp_enqueue_scripts', 'pg_wp_starter_scripts' );

if (!function_exists('pg_wp_starter_admin_scripts')) {
    function pg_wp_starter_admin_scripts() {
        wp_enqueue_style('pg-wp-starter-admin-style', get_template_directory_uri() . '/dist/admin.css');
        wp_enqueue_script( 'pg-wp-starter-admin-scripts', get_template_directory_uri() . '/dist/admin.js', array(), '20151215', true );  

    }
}
add_action( 'admin_enqueue_scripts', 'pg_wp_starter_admin_scripts' );
