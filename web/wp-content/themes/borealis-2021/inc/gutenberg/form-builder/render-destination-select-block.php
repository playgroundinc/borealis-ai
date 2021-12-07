<?php
/**
 *
 * Render Destination Select Block
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
        $namespace . '/select-destination-input',
        array(
            'render_callback' => 'trmc_render_select_destination_block'
        )
    );
}

if ( ! function_exists( 'trmc_render_select_destination_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_select_destination_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
            'label' => '',
            'required' => false,
            'options' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields ); 
        $allowedHtml = pg_allowed_html();
        $name = pg_slugify($attributes->label);
        $options = !empty($attributes->options) ? json_decode($attributes->options) : false;
        if (!empty($options)) {
            foreach($options as $key => $option) {
                $valid = pg_filter_valid_emails($key);
                if (!$valid) {
                    unset($options->$key);
                }
            }
        }
        ob_start();
        if (!empty($options)):
        ?>
            <div class="custom-form__destination">
                <?php 
                    $args = array(
                        'type' => 'select',
                        'name' => $name,
                        'id' => $name,
                        'label' => trim($attributes->label),
                        'required' => false,
                        'helper' => '',
                        'options' => $options,
                    );
                    echo wp_kses(pg_form_field($args), $allowedHtml);
                ?>
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
