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
        $namespace . '/jobs-container',
        array(
            'render_callback' => 'pg_render_featured_jobs_block',
        )
    );
}

if (!function_exists('pg_render_featured_jobs_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_featured_jobs_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
            'background_color' => '',
            'anchor_id'  => '',
        );
        $namespace = pg_get_namespace();
        $attributes = pg_get_attributes($attrs, $fields);

        $setting_names = array('greenhouse_api_key', 'greenhouse_url');
        $settings = pg_get_settings($setting_names);
        if (!$settings['greenhouse_api_key'] || !strlen($settings['greenhouse_api_key']) > 0 || !$settings['greenhouse_url'] || !strlen($settings['greenhouse_url']) > 0) {
            return null;
        }
        ob_start();

?>
        <div id="<?php echo $attributes->anchor_id ?>" class="custom-component component-padding <?php echo $attributes->background_color ?>">
            <div class="animated-element <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:container') : '' ?>">
                <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:flex') : '' ?>">
                    <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('container') : '' ?> md:w-full md:m-0 md:basis-1/3 shrink-0 md:pr-10">
                        <?php if (!empty($attributes->title)) : ?>
                            <h2 class="h3 <?php echo is_singular(array('news', 'research-blogs')) ? esc_attr('md:pb-12') : '' ?>"><?php echo $attributes->title ?></h2>
                        <?php endif; ?>
                    </div>
                    <ul class="grow pt-7 md:pt-0 nested-block">
                        <?php foreach ($block['innerBlocks'] as $inner_block) : ?>
                            <?php
                            if ($inner_block['blockName'] === $namespace . '/select-job') {
                                $output = pg_render_single_job_item($inner_block['attrs'], $settings['greenhouse_api_key'], $settings['greenhouse_url']);
                                if ($output) {
                                    echo $output;
                                }
                            } else {
                                $output = pg_render_job_highlight_block($inner_block['attrs']);
                                if ($output) {
                                    echo $output;
                                }
                            }

                            ?>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
