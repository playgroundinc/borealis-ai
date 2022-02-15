<?php
/**
 *
 * Render Bibtex
 *
 * @package Borealis
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
        $namespace . '/bibtex',
        array(
            'render_callback' => 'pg_render_bibtex_block',
        )
    );
}

if ( ! function_exists( 'pg_render_bibtex_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_bibtex_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'entry' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();

        ob_start();
        ?>
            <div>
              <h2 class="h4 mt-6"><?php echo esc_html('Bibtex') ?></h2> 
              <div class="px-12 py-10 bg-shade-grey-100 rounded-large mt-10">       
                <p class="paragraph-sm"><?php echo wp_kses($attributes->entry, $allowed_html) ?></p>     
              </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
