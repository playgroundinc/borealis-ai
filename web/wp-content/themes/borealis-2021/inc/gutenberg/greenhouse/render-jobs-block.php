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
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/job-block',
        array(
            'render_callback' => 'pg_render_job_block',
        )
    );
}

if (!function_exists('pg_render_job_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_job_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'background_color' => '',
            'anchor_id'  => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);

        $setting_names = array('greenhouse_api_key', 'greenhouse_url');
        $settings = pg_get_settings($setting_names);
        if (!$settings['greenhouse_api_key'] || !strlen($settings['greenhouse_api_key']) > 0 || !$settings['greenhouse_url'] || !strlen($settings['greenhouse_url']) > 0) {
            return null;
        }
        ob_start();
?>
        <div id="<?php echo $attributes->anchor_id ?>" class="custom-component component-padding jobs <?php echo $attributes->background_color ?>">
            <div class="md:container animated-element">
                <div class="md:flex">
                    <div class="w-full ">
                        <?php if (!empty($attributes->title)) : ?>
                            <h2 class="h3 tb:h3-desktop pl-5 md:pl-0"><?php echo $attributes->title ?></h2>
                            <div class="tab-container jobs">
                                <div class="flex flex-col tb:flex-row" role="tablist" aria-orientation="horizontal">
                                    <?php
                                    $args = array(
                                        'headers' => array(
                                            'Authorization' => 'Basic' . esc_attr($settings['greenhouse_api_key'])
                                        )
                                    );

                                    $url = $settings['greenhouse_url'] . "/departments";
                                    $url_all_jobs = $settings['greenhouse_url'] . "/jobs";

                                    $response = wp_remote_get($url, $args);
                                    $response_all_jobs = wp_remote_get($url_all_jobs, $args);

                                    $body = wp_remote_retrieve_body($response);
                                    $body_all_jobs = wp_remote_retrieve_body($response_all_jobs);


                                    $data = json_decode($body, true);
                                    $data_all_jobs = json_decode($body_all_jobs, true);

                                    if (is_wp_error($response) || !is_array($response) || empty($response)) {
                                        return null;
                                    }

                                    if (is_wp_error($response_all_jobs) || !is_array($response_all_jobs) || empty($response_all_jobs)) {
                                        return null;
                                    }

                                    $department_array = array();
                                    foreach ($data['departments'] as $department) {
                                        if (!empty($department['jobs'])) {
                                            array_push($department_array, array(
                                                'id' => $department['id'],
                                                'name' => $department['name'] === 'No Department' ? 'All teams' : $department['name'],
                                                'jobs' => $department['name'] === 'No Department' ? $data_all_jobs['jobs'] : $department['jobs']
                                            ));
                                        }
                                    }
                                    echo pg_generate_job_query_bar($department_array);
                                    ?>
                                    <?php foreach ($department_array as $department) : ?>
                                        <?php if ($department['id'] === 0) : ?>
                                            <ul aria-labelledby="<?php echo $department['id'] ?>-tab" id="<?php echo $department['id'] ?>-content-panel" role="tabpanel" class="pt-3 tb:pt-0 nested-block w-full tb:w-8/12 flex flex-col relative top-0 tb:-top-8">
                                                <?php foreach ($department['jobs'] as $job) {
                                                    $output = pg_render_filter_jobs_item($job['id'], $settings['greenhouse_api_key'], $settings['greenhouse_url']);
                                                    if ($output) {
                                                        echo $output;
                                                    }
                                                } ?>
                                            </ul>
                                        <?php else : ?>
                                            <ul aria-labelledby="<?php echo $department['id'] ?>-tab" id="<?php echo $department['id'] ?>-content-panel" role="tabpanel" class="hidden pt-3 tb:pt-0 nested-block w-full tb:w-8/12 flex flex-col relative top-0 tb:-top-8">
                                                <?php foreach ($department['jobs'] as $job) {
                                                    $output = pg_render_filter_jobs_item($job['id'], $settings['greenhouse_api_key'], $settings['greenhouse_url']);
                                                    if ($output) {
                                                        echo $output;
                                                    }
                                                } ?>
                                            </ul>
                                        <?php endif ?>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
