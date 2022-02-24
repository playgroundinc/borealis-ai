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
        $namespace . '/jobs-container',
        array(
            'render_callback' => 'pg_render_featured_jobs_block',
        )
    );
}

if ( ! function_exists( 'pg_render_featured_jobs_block' )) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_featured_jobs_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title'        => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );

        $setting_names = array('greenhouse_api_key');
        $settings = pg_get_settings($setting_names);
        if (!$settings['greenhouse_api_key'] || !strlen($settings['greenhouse_api_key']) > 0) {
            return null;
        }
        ob_start();

        ?>
            <div class="custom-component">
                <?php if (!empty($attributes->title)): ?>
                    <h2 class="h3"><?php echo esc_html($attributes->title) ?></h2>
                <?php endif; ?>
                <ul>
                    <?php foreach ($block['innerBlocks'] as $inner_block): ?>
                        <?php 
                            $output = pg_render_single_job_item($inner_block['attrs'], $settings['greenhouse_api_key']);
                            if ($output) {
                                echo $output;
                            }
                        ?>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php
        return ob_get_clean();
    }
}
