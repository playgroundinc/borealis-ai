<?php
// Using the filter request because it represents a point in time in the execution of a page where WordPress will have the proper information to make the redirection decision
add_filter( 'request', 'redirect_on_lang_requests' );

function redirect_on_lang_requests( $request ) {
  // Get the global WordPress object to check the request path
  global $wp;
  $page_request = $wp->request;
  // Create a version of this request path without regionalized prefixes
  $non_regional_request = preg_replace('/^(en|fr)\//i', '', $page_request);
  // If the non-regional request is different than the page request redirect to the non-regional version
  if($page_request !== $non_regional_request){
    // Use the WP redirect function
    wp_redirect( trailingslashit(get_home_url()) . $non_regional_request, 301 );
    // Always exit after a WP redirect
    exit;
  }
  // Return the request object unchanged if no redirect occurred
  return $request;
}