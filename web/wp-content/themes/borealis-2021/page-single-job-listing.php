<?php
/**
 * Template Name: Single Job Listing
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */
    get_header();
?>
    <div>
        <div class="news-releases custom-component">
            <div class="container container-fluid">
                <h1>SINGLE JOB LISTING PAGE</h1>
                <?php 
                    $jobIdQuery = "";
                    if (isset($_GET['gh_jid'])) {
                        $jobIdQuery = sanitize_text_field(wp_unslash($_GET['gh_jid']));
                    }
                
                    $args = array(
                        'headers' => array(
                            'Authorization' => 'Basic ODliOGE2OWNkNDJlYjMyOTg2NGQwZjU0YWUxNmU0NDAtMjo='
                        )
                    );
                    $url = 'https://boards-api.greenhouse.io/v1/boards/borealisai/jobs/' . $jobIdQuery;
                    $response = wp_remote_get( $url, $args );
                
                    if( is_wp_error( $response ) || ! is_array( $response ) || empty( $response )  ) {
                        return false; 
                    }
                
                    $body = wp_remote_retrieve_body( $response );
                    $data = json_decode( $body, true );
                    $http_code = wp_remote_retrieve_response_code( $response );
                                
                    if ( is_array( $response ) && ! is_wp_error( $response ) ) {
                        $jobTitle = $data['title'];
                        $jobContent = $data['content'];
                        echo '<h2>' . $jobTitle . '</h2>';
                        echo  htmlspecialchars_decode($jobContent);
                    }
                ?>
                <div id="grnhse_app"></div>
            </div>
        </div>
    </div>
<?php
get_footer();