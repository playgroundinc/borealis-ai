<?php

if (!function_exists('pg_render_filter_jobs_item')) {
    function pg_render_filter_jobs_item($job_id, $api_key, $url)
    {

        $args = array(
            'headers' => array(
                'Authorization' => 'Basic' . esc_attr($api_key)
            )
        );
        if (!$job_id || !intval($job_id) > 0) {
            return null;
        }
        $url = $url . '/jobs/' . $job_id;
        $response = wp_remote_get($url, $args);
        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        if (is_wp_error($response) || !is_array($response) || empty($response)) {
            return null;
        }
        $jobs_page = get_pages(array('meta_key' => '_wp_page_template', 'meta_value' => 'page-single-job-listing.php'));
        if (empty($jobs_page)) {
            return null;
        }
        $single_url = get_permalink($jobs_page[0]->ID);
        $url = add_query_arg('gh_jid', $job_id, $single_url);

        $title = pg_sanitize_output($data['title']);
        if ($data['location'] && !empty($data['location']) && $data['location']['name'] && strlen($data['location']['name']) > 0) {
            $location = pg_sanitize_output($data['location']['name']);
        }
        ob_start();
?>
        <li class="group">
            <a class="block row-item tb:container" href="<?php echo esc_url_raw($url); ?>">
                <div class="hover-item transition-background-color duration-300 group-first:border-t border-b border-color-shade-grey-500 md:px-5 py-4 focus:outline-4">
                    <div class="container md:w-ful md:m-0 flex items-center">
                        <div class="grow">
                            <p class="paragraph"><?php echo esc_html($title) ?></p>
                            <?php if (isset($location)) : ?>
                                <p class="paragraph-sm text-shade-grey-700"><?php echo esc_html($location); ?></p>
                            <?php endif; ?>
                        </div>
                        <span tabindex="0">
                            <?php echo pg_render_icon('arrow'); ?>
                        </span>
                    </div>
                </div>
            </a>
        </li>
<?php
        return ob_get_clean();
    }
}
