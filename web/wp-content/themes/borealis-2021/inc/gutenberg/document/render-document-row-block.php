<?php
/**
 *
 * Render Document Row Block
 *
 * @package pg-wp-starter
 * @subpackage trimac
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
        $namespace . '/document-row',
        array(
            'render_callback' => 'trmc_render_document_row_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_document_row_block' ) ) {
    /**
     * Render out accordion block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function trmc_render_document_row_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'name'      => null,
            'file_id'  => null,
            'file_name' => null,
            'link_text' => 'Download PDF',
            'icon'      => true,
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();

        ob_start();
            trmc_document_row(
                $attributes
            );
        return ob_get_clean();
    }
}
