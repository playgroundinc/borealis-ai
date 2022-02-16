<?php
	/*
	Plugin Name: PG WP Content Upload
	Plugin URI: https://github.com/playgroundinc/ctnt-tool
	description: A plugin to support uploading content from a Google sheet.
	Version: 1.0
	Author: K Capstick 
	Author URI: https://github.com/kycapstick
	License: GPL2
   */

  include 'inc/class-wp-block.php';

  add_action( 'rest_api_init', function () {
    register_rest_route( 'pg/v1', '/test', array(
      'methods' => array('GET'),
      'callback' => 'pg_test_endpoint',
    ) );
    register_rest_route( 'pg/v1', '/upload-content', array(
      'methods' => array('POST'),
      'callback' => 'pg_generate_content',
      'permission_callback' => 'pg_authenticate_user'
    ) );
    register_rest_route( 'pg/v1', '/create-page', array(
      'methods' => 'POST',
      'callback' => 'pg_generate_page',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-post-meta', array(
      'methods' => 'POST',
      'callback' => 'pg_add_post_meta',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/create-custom-post', array(
      'methods' => 'POST',
      'callback' => 'pg_generate_custom_post',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-image', array(
      'methods' => 'POST',
      'callback' => 'pg_add_image',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-post-thumbnail', array(
      'methods' => 'POST',
      'callback' => 'pg_add_post_thumbnail',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/get-image-url', array(
      'methods' => 'GET',
      'callback' => 'pg_get_image_url',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-post-excerpt', array(
      'methods' => 'POST',
      'callback' => 'pg_add_post_excerpt',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-taxonomy', array(
      'methods' => 'POST',
      'callback' => 'pg_add_taxonomy',
      'permission_callback' => 'pg_authenticate_user',
    ) );
    register_rest_route( 'pg/v1', '/add-authors', array(
      'methods' => 'POST',
      'callback' => 'pg_add_authors',
      'permission_callback' => 'pg_authenticate_user',
    ) );
  } );
  /**
   * Performs basic authentication of base64 encoded header.
   * 
   * @param request $request the POST request being authenticated.
   * 
   * @return boolean performs a series of basic checks before firing wp_authenticate on base64 encoded header.
   */
  if (!function_exists('pg_authenticate_user')) {
    function pg_authenticate_user(WP_REST_Request $request) {
      $auth  = $request->get_header('Authorization');
      if (empty($auth)) {
        return false;
      }
      $encoded = explode(' ', $auth);
      if (!is_array($encoded) || count($encoded) < 2) {
        return false;
      }
      $decoded = base64_decode($encoded[1]);
      $split_auth = explode(':', $decoded);
      if (count($split_auth) < 2) {
        return false;
      }
      $user = $split_auth[0];
      $password = $split_auth[1];
      $valid = wp_authenticate($user, $password);
      if ($valid->errors) {
        return false;
      }
      return true;
    }
  }
  /**
   * Handles Test Endpoint
   * 
   * Handles GET requests to '/pg/v1/test'.
   * Verifies that endpoints are running.
   * Can be used to test for certain data.
   */
  if (!function_exists('pg_test_endpoint')) {
    function pg_test_endpoint() {
      $response = new WP_REST_Response('Plugin is alive and well!');
      $response->set_status(200);
      return $response;
    }
  }
  
  /**
   * Connects the translated post to its English counterpart.
   * 
   * It is a modified version of the code found here; https://wpml.org/wpml-hook/wpml_set_element_language_details/
   * 
   * @param String $page_name the name of the current page in the default language. Will be the same in the translation with the addition of the language code.
   * @param id $page_id the id for the page in the default language.
   * 
   * @return id $translated_id the id of the page translated in the new language.
   */
  if (!function_exists('pg_get_translated_page')) {
    function pg_get_translated_page($page_name, $page_id) {
      // Checks if translated page already exists.
      $translated_id = icl_object_id($page_id, 'page', false,'fr');
      if (!empty($translated_id)) {
        return $translated_id;
      }
      // If no translated page exists, it creates one.
      $translated_name = $page_name . ' FR';
      $translated_id = pg_publish_page($translated_name);
      // https://wpml.org/wpml-hook/wpml_element_type/
      $wpml_element_type = apply_filters( 'wpml_element_type', 'page' );
      // get the language info of the original post
      // https://wpml.org/wpml-hook/wpml_element_language_details/
      $get_language_args = array('element_id' => $page_id, 'element_type' => 'page' );
      $original_post_language_info = apply_filters( 'wpml_element_language_details', null, $get_language_args );
      $set_language_args = array(
        'element_id'    => $translated_id,
        'element_type'  => $wpml_element_type,
        'trid'   => $original_post_language_info->trid,
        'language_code'   => 'fr',
        'source_language_code' => $original_post_language_info->language_code
      );
      // Sets the new page as a translation of the original.
      do_action( 'wpml_set_element_language_details', $set_language_args );
      return $translated_id;
    }
  }

  /**
   * Creates a new page in the WordPress instance.
   * 
   * Author, status and type are all left default in this instance.
   * 
   * @param String $page_name the name of the page.
   */
  if (!function_exists('pg_publish_page')) {
    function pg_publish_page($page_name, $post_type = 'page') { 
      $post_details = array(
        'post_title'    => $page_name,
        'post_status'   => 'publish',
        'post_author'   => 1,
        'post_type' => $post_type
      );
      $new_page = wp_insert_post( $post_details );
      return $new_page;
    }
  }
  /**
   * Either creates or returns page and translation by name provided.
   * 
   * @param request $request the request object.
   * 
   * @return Array $response an array of the ids for the original and translated page. 
   */
  if (!function_exists('pg_generate_page')) {
    function pg_generate_page(WP_REST_Request $request) {
      // Checks that page name has been provided.
      if (empty($request["name"])) {
        $response = new WP_REST_Response( array('error' => 'Missing parameter "name"') );
        $response->set_status(400);
        return $response;
      }
      // Sanitizes value.
      $page_name = sanitize_text_field(wp_unslash($request['name']));
      $page = get_page_by_title($page_name);
      // If page doesn't currently exist, creates it.
      // Else just pulls ID from current page to check for translation.
      if (empty($page)) {
        $page_id = pg_publish_page($page_name);
      } else {
        $page_id = $page->ID;
      }
      // Either returns or generates the ID of the translated page.
      $translated_id = pg_get_translated_page($page_name, $page_id);
      $response = new WP_REST_Response( array(
        'en' => $page_id,
        'fr' => $translated_id,
      ));
      $response->set_status(200);
      return $response;
    }     
  }
  /**
   * Either creates or returns Custom Post by name provided.
   * 
   * @param request $request the request object.
   * 
   * @return Array $response an array of the ids for the original and translated page. 
   */
  if (!function_exists('pg_generate_custom_post')) {
    function pg_generate_custom_post(WP_REST_Request $request) {
      // Checks that page name has been provided.
      if (empty($request["name"]) || empty($request['post_type'])) {
        $response = new WP_REST_Response( array('error' => 'Missing parameter "name" or "post_type') );
        $response->set_status(400);
        return $response;
      }
      // Sanitizes value.
      $page_name = sanitize_text_field(wp_unslash($request['name']));
      $post_type = sanitize_text_field(wp_unslash($request['post_type']));
      $page = get_page_by_title($page_name, 'OBJECT', $post_type);
      if (empty($page)) {
        $page = get_page_by_title($page_name, 'OBJECT', 'news');
      }
      // If page doesn't currently exist, creates it.
      // Else just pulls ID from current page to check for translation.
      if (empty($page)) {
        $page_id = pg_publish_page($page_name, $post_type);
      } else {
        $page_id = $page->ID;
      }
      // Either returns or generates the ID of the translated page.
      $response = new WP_REST_Response( array(
        'id' => $page_id
      ));
      $response->set_status(200);
      return $response;
    }     
  }
  /**
   * Generates the Gutenberg blocks for content.
   * 
   * @param Object $blocks the blocks parameter set in the node app.
   * 
   * @return String $content A string of the gutenberg comments.
   */
  if (!function_exists('pg_generate_blocks')) {
    function pg_generate_blocks($blocks) {
      $content = '';
      if (empty($blocks)) {
        return $content;
      }
      foreach($blocks as $block) {
        $wp_block = new PG_WP_Block($block);
        $comment = $wp_block->pg_generate_comment();
        $content .= $comment;
      }
      return $content;
    }
  
  
  /**
   *  Generate Gutenberg Content.
   * 
   * @param request $request the WP REST Request from the node app.
   * @return String $content the content for the post.
   */}
  if (!function_exists('pg_generate_content')) {
    function pg_generate_content( WP_REST_Request $request ) {
      $post = [];
      if (!empty($request['post_id'])) {
        $post = get_post($request['post_id']);
        $blocks = $request['content'];
        $post_type = get_post_type($post);
        $content = pg_generate_blocks($blocks);
       
        if (!empty($content)) {
          $resp = wp_update_post(array(
            'ID' => $request['post_id'],
            'post_content' => "<!-- wp:pg/" . $post_type . "-meta-block /-->" . $content,
          ));

          $response = new WP_REST_Response( $resp );
          // Add a custom status codes
          $response->set_status( 201 ); 
          return $response;
        }
        $response = new WP_REST_Response( array('error' => 'Missing content') );
        // Add a custom status codes
        $response->set_status( 400 ); 
        return $response;
      } 
      // Create the response object
      $response = new WP_REST_Response( array('status' => 'success!') );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }

  if (!function_exists('pg_get_image_url')) {
    function pg_get_image_url(WP_REST_Request $request) {
      if (empty($request['image_id'])) {
        $response = new WP_REST_Response( array('error' => 'missing image_id'));
        $response->set_status(400);
        return $response;
      }
      $url = wp_get_attachment_image_src($request['image_id'], 'large');
      if (empty($url)) {
        if (empty($request['image_id'])) {
          $response = new WP_REST_Response( array('error' => 'No image found with that ID'));
          $response->set_status(404);
          return $response;
        }
      }
      // Create the response object
      $response = new WP_REST_Response(  $url[0] );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }

  if (!function_exists('pg_get_image_by_name')) {
    function pg_get_image_by_name($name) {
        $name = sanitize_title($name);
        $args = array(
          'post_type' => 'attachment',
          'name' => $name,
          'posts_per_page' => 1,
          'post_status' => 'inherit',
        );
        $_header = get_posts( $args );
        $header = $_header ? array_pop($_header) : null;
        return $header->ID;
    }
  }

  if (!function_exists('pg_add_image')) {
    function pg_add_image(WP_REST_Request $request) {
      if (empty($request['src'])) {
        $response = new WP_REST_Response( array('error' => $request));
        $response->set_status(400);
        return $response;
      }

      $image_url = $request['src'];
      $upload_dir = wp_upload_dir();
      $image_data = file_get_contents( $image_url );
      $filename = basename( $image_url );
      $id = pg_get_image_by_name($filename);
      if ($id) {
        // Create the response object
        $response = new WP_REST_Response(  $id );
        // Add a custom status codes
        $response->set_status( 201 ); 
        return $response;
      }
      if ( wp_mkdir_p( $upload_dir['path'] ) ) {
        $file = $upload_dir['path'] . '/' . $filename;
      }
      else {
        $file = $upload_dir['basedir'] . '/' . $filename;
      }
      file_put_contents( $file, $image_data );
      $wp_filetype = wp_check_filetype( $filename, null );
      $attachment = array(
        'post_mime_type' => $wp_filetype['type'],
        'post_title' => sanitize_file_name( $filename ),
        'post_content' => '',
        'post_status' => 'inherit'
      );

      $attach_id = wp_insert_attachment( $attachment, $file );
      require_once( ABSPATH . 'wp-admin/includes/image.php' );
      $attach_data = wp_generate_attachment_metadata( $attach_id, $file );
      wp_update_attachment_metadata( $attach_id, $attach_data );
      // Create the response object
      $response = new WP_REST_Response(  $attach_id );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }
  if (!function_exists('pg_add_post_meta')) {
    function pg_add_post_meta(WP_REST_Request $request) {
      $id = sanitize_key($request['id']);
      $meta = $request['meta'];
      if (isset($meta) && !empty($meta)) {
        foreach ($meta as $key => $field) {
          if ($key === 'publication_date') {
            $date = date_create(sanitize_text_field(wp_unslash($field)));
            $formatted_date = date_format($date, 'Y/m/d');
            update_post_meta($id, $key, $formatted_date);
            continue;
          }
          update_post_meta($id, $key, sanitize_text_field(wp_unslash($field)));
        }
      }
      $response = new WP_REST_Response(  $id );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
      
    }
  }

  if (!function_exists('pg_add_post_thumbnail')) {
    function pg_add_post_thumbnail(WP_REST_Request $request) {
      $post_id = wp_unslash($request['post_id']);
      $image_id = wp_unslash($request['image_id']);
      if (!isset($post_id) || !isset($image_id)) {
        $response = new WP_REST_Response( array('error' => 'Missing ids'));
        $response->set_status(400);
        return $response;
      }
      $success = set_post_thumbnail($post_id, $image_id);
      $response = new WP_REST_Response(array( 'success' => $success ) );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }

  if (!function_exists('pg_add_authors')) {
    function pg_add_authors(WP_REST_Request $request) {
      $post_id = wp_unslash($request['post_id']);
      $authors = wp_unslash($request['authors']);
      if (!isset($post_id) || !isset($authors)) {
        $response = new WP_REST_Response( array('error' => 'Missing id or author'));
        $response->set_status(400);
        return $response;
      }
      $authors_array = explode(',', $authors);
      if (!empty($authors_array)) {
        $authors_meta = array();
        foreach($authors_array as $author) {
          $author_name = trim($author, '*');
          if (!strlen($author_name) > 0) {
            continue;
          }
          $author_post = get_page_by_title($author_name, 'OBJECT', 'author');
          array_push($authors_meta, array('value' => $author_post->ID, 'label' => $author_name, 'equal' => strpos($author, '*') && strpos($author, '*') >= 0));
        }
      }
      if (!empty($authors_meta)) {
        update_post_meta($post_id, 'authors', json_encode($authors_meta));
      }
      $response = new WP_REST_Response(array( 'success' => true ) );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }

  if (!function_exists('pg_add_post_excerpt')) {
    function pg_add_post_excerpt(WP_REST_Request $request) {
      $post_id = wp_unslash($request['post_id']);
      $excerpt = sanitize_text_field(wp_unslash($request['excerpt']));
      if (!isset($excerpt) || !isset($post_id)) {
        $response = new WP_REST_Response( array('error' => 'Missing excerpt or post ID'));
        $response->set_status(400);
        return $response;
      }
      $update = array(
        'ID' => $post_id,
        'post_excerpt' => $excerpt
      );
      $success = wp_update_post($update);
 
      $response = new WP_REST_Response(array( 'success' => $success ) );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }

  if (!function_exists('pg_check_for_existing_term')) {
    function pg_check_for_existing_term($taxonomy, $value) {
      $term = get_term_by('name', $value, $taxonomy);
      if ($term) {
        return $term->term_id;
      }
      $new_term = wp_insert_term($value, $taxonomy);
      return $new_term['term_id'];
    }
  }
  
  if (!function_exists('pg_add_taxonomy')) {
    function pg_add_taxonomy(WP_REST_Request $request) {
      $post_id = wp_unslash($request['post_id']);
      $taxonomy = sanitize_text_field(wp_unslash($request['taxonomy']));
      $value = sanitize_text_field(wp_unslash($request['name']));
      if (!isset($taxonomy) || !isset($post_id) || !isset($value)) {
        $response = new WP_REST_Response( array('error' => 'Missing value, taxonomy or Post ID'));
        $response->set_status(400);
        return $response;
      }
      $term_id = pg_check_for_existing_term($taxonomy, $value);
      $success = wp_set_post_terms($post_id, array(intval($term_id)), $taxonomy, true);
      $response = new WP_REST_Response(array( 'success' => $success) );
      // Add a custom status codes
      $response->set_status( 201 ); 
      return $response;
    }
  }