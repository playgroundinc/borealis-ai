<?php
/**
 *
 * Render Form Select Block
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
        $namespace . '/select-input',
        array(
            'render_callback' => 'trmc_render_select_input_block'
        )
    );
}

if ( ! function_exists( 'trmc_render_select_input_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_select_input_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
            'helper_text' => '',
            'label' => '',
            'required' => false,
            'options' => '',
            'type' => 'select',
        );
        $attributes = pg_get_attributes( $attrs, $fields ); 
        $allowedHtml = pg_allowed_html();
        $name = pg_slugify($attributes->label);
        $split_options = explode(',', $attributes->options);
        $options = array();
        if (!empty($split_options)) {
            $options = pg_create_options($split_options);
        }
        ob_start();
        ?>
            <?php if (!empty($attributes->label) && !empty($attributes->options)): ?>
                <?php 
                    $args = array(
                        'type' => $attributes->type,
                        'name' => $name,
                        'id' => $name,
                        'label' => trim($attributes->label),
                        'required' => $attributes->required,
                        'helper' => $attributes->helper_text,
                        'options' => $options,
                    );
                    echo wp_kses(pg_form_field($args), $allowedHtml);
                ?>
            <?php endif; ?>
        <?php
        return ob_get_clean();
    }
}
