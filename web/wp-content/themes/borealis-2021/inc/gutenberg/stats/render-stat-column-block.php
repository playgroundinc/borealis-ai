<?php
/**
 *
 * Render Stat Container
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
        $namespace . '/stat-column',
        array(
            'render_callback' => 'trmc_render_stat_column_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_stat_coloumn_block' ) ) {
    /**
     * Render out stat column block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_stat_column_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'statistic' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        if (!empty($attributes->statistic)):
        ?>
            <div class="fc-xl-25 fc-md-50 fc-xs-100 flex col-xs">
                <div class="statistic-block__single fg-xs-1">
                    <p>
                        <span class="heading_two block-link"><?php echo esc_html($attributes->statistic); ?></span>
                        <span class="paragraph"><?php echo !empty($attributes->description) ? esc_html($attributes->description) : null; ?></span>
                    </p>
                </div>
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
