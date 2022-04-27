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
<?php
$setting_names = array('greenhouse_api_key', 'greenhouse_url');
$settings = pg_get_settings($setting_names);

if (!empty($settings['greenhouse_api_key']) && strlen($settings['greenhouse_url']) > 0) : ?>
    <div>
        <?php
        $jobIdQuery = "";
        if (isset($_GET['gh_jid'])) {
            $jobIdQuery = sanitize_text_field(wp_unslash($_GET['gh_jid']));
        }

        $args = array(
            'headers' => array(
                'Authorization' => 'Basic' . esc_attr($settings['greenhouse_api_key'])
            )
        );
        // TODO: borealisai instead of borealisaitest, migration to real borealis job board.
        $url = $settings['greenhouse_url'] . '/jobs/' . $jobIdQuery;
        $response = wp_remote_get($url, $args);

        if (is_wp_error($response) || !is_array($response) || empty($response)) {
            return false;
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);
        $http_code = wp_remote_retrieve_response_code($response);
        ?>
        <div class="md:pt-12">
            <div class="container w-full tb:w-8/12 m-auto pb-14">
                <div class="flex flex-col-reverse">
                    <div class="flex justify-between items-start flex-col tb:flex-row tb:items-end">
                        <h1 class="h3 tb:h3-desktop text-shade-black-400 mb-4 tb:mb-0 md:h1-desktop pt-5 break-normal"><?php echo $data['title'] ?></h1>
                        <h4 class="h4 text-shade-grey-700"><?php echo $data['location']['name'] ?></h4>
                    </div>
                    <div class="flex">
                        <p class="paragraph-small text-shade-grey-700"><?php echo 'Join Us' ?></p>
                        <p class="paragraph-small text-shade-black-400 hidden md:block"><?php echo '&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;' ?></p>
                        <p class="paragraph-small text-shade-black-400 block md:hidden"><?php echo '&nbsp;&nbsp;>&nbsp;&nbsp;' ?></p>
                        <p class="paragraph-small text-primary-electric-purple-400"><?php echo $data['title'] ?></p>
                    </div>
                </div>
            </div>
            <div class="border-b border-shade-grey-500 mb-19"></div>
            <div class="container w-full tb:w-8/12 m-auto greenhouse mb-36"><?php echo  htmlspecialchars_decode($data['content']); ?></div>
            <div class="w-full bg-shade-grey-100 mt-20 md:mt-36">
                <h2 class="w-full tb:w-8/12 container md:h2-desktop h3 text-shade-black-400 pt-14 md:pt-20 pb-4 md:pb-6 bg-shade-grey-100">Ready to Apply?</h2>
            </div>
        </div>
        <div id="grnhse_app"></div>
    </div>
<?php endif; ?>
<?php
get_footer();
