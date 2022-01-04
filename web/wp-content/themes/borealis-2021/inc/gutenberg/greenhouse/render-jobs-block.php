<?php
/**
 *
 * Render Page Strip
 *
 * @package Trimac
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if ( function_exists( 'register_block_type' ) ) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/job-block',
        array(
            'render_callback' => 'pg_render_job_block',
        )
    );
}

$setting_names = array('greenhouse_api_key');
$settings = pg_get_settings($setting_names);

if ( ! function_exists( 'pg_render_job_block' ) and !empty($settings['greenhouse_api_key'])) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_job_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
            'emptyState' => ''
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        ?>
            <div class="custom-component">
                <div class="container container-fluid animated-element">
                    <div class="page-strip flex middle-xs center-xs ph-md-5 ph-lg-3 pv-md-12 pv-xs-7 ph-xs-3 br-xs-lg">
                        <div class="fc-md-100 fc-lg-70 fc-xl-50 ph-md-5 ph-lg-0 copy--center">
                            <?php if (!empty($attributes->title)): ?>
                                <h2 class="heading_two heading-one-lg mb-xs-0 text-2xl"><?php echo esc_html($attributes->title) ?></h2>
                            <?php endif; ?>
                            <!-- <?php if (!empty($attributes->emptyState)): ?>
                                <p class="mb-xs-0"><?php echo esc_html($attributes->emptyState) ?></p>
                            <?php endif; ?> -->
                            <?php 
                                $args = array(
                                    'headers' => array(
                                        'Authorization' => 'Basic' . esc_attr($settings['greenhouse_api_key'])
                                    )
                                );
                                
                                // Harvest API Url
                                // $url = 'https://harvest.greenhouse.io/v1/jobs?status=open';
                                // Job Board API Url
                                // https://boards-api.greenhouse.io/v1/boards/:board_token/jobs/:job_id 5626198002
                                $url = 'https://boards-api.greenhouse.io/v1/boards/borealisai/jobs?content=true';
                                $response = wp_remote_get( $url, $args );
                        
                                if( is_wp_error( $response ) || ! is_array( $response ) || empty( $response )  ) {
                                    return false; 
                                }
                        
                                $body = wp_remote_retrieve_body( $response );
                                $data = json_decode( $body, true );
                                $http_code = wp_remote_retrieve_response_code( $response );
                                if ( is_array( $response ) && ! is_wp_error( $response ) ) {
                                    $open_jobs[] = $data['jobs'];
                        
                                    foreach( $open_jobs[0] as $job ) {
                                        $job_title = $job['title'];
                                        $job_offices = $job['offices'];
                                        $job_department = $job['departments'][0]['name'];
                                        echo '<p> JOB TITLE: ' . $job_title . '</p>';
                                        echo '<p> JOB OFFICES/LOCATIONS: </p>';
                                        echo '<ul>';
                                        foreach( $job_offices as $office ) {
                                            $office_name = $office['name'];
                                            $office_id = $office['id'];
                                            echo '<li>' . $office_name . '</li>';
                                        };
                                        echo ' </ul>';
                                        echo '<p> JOB DEPARTMENTS/TEAMS: ' . $job_department . '</p>';
                                        echo '<hr>';
                                    }
                                }
                            ?>
                            <?php 
                                $args = array(
                                    'headers' => array(
                                        'Authorization' => 'Basic' . esc_attr($settings['greenhouse_api_key'])
                                    )
                                );
                               
                                // Harvest API Url
                                // $url = 'https://harvest.greenhouse.io/v1/departments';
                                // Job Board API Url
                                $url = 'https://boards-api.greenhouse.io/v1/boards/borealisai/departments';
                                $response = wp_remote_get( $url, $args );
                        
                                if( is_wp_error( $response ) || ! is_array( $response ) || empty( $response )  ) {
                                    return false; 
                                }
                        
                                $body = wp_remote_retrieve_body( $response );
                                $data = json_decode( $body, true );
                                $http_code = wp_remote_retrieve_response_code( $response );
                                if ( is_array( $response ) && ! is_wp_error( $response ) ) {
                                    $departments[] = $data['departments'];
                                    echo '<p class="text-2xl">DEPARTMENTS</p>';
                                    foreach( $departments[0] as $department ) {
                                        $department_name = $department['name'];
                                        $department_id = $department['id'];
                                        echo '<p> DEPARTMENT NAME: ' . $department_name . '</p>';
                                    }
                                }
                            ?>
                        </div>
                    </div>
                    
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
