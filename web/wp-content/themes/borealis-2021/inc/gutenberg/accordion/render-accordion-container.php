<?php
/**
 *
 * Render Accordion Container Block
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
        $namespace . '/accordion',
        array(
            'render_callback' => 'pg_render_accordion_block',
        )
    );
}

if ( ! function_exists( 'pg_render_accordion_block' ) ) {
    /**
     * Render out accordion block.
     *
     * @param mixed $block_content the content of the block.
     * @param array $block array of the block features.
     */
    function pg_render_accordion_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'title'        => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
    ?>
        <div>
            <?php if ( ! empty( $attributes->title ) ) : ?>
                <h2>
                    <?php echo wp_kses( $attributes->title,$allowed_html ); ?>
                </h2>
                <?php if (!empty($attributes->description)): ?>
                    <div class="mt-xs-2">
                        <?php echo wp_kses(wpautop($attributes->description), $allowed_html); ?>
                    </div>
                <?php endif; ?>
            <?php endif; ?>
            <div class="accordion-block">
                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                <?php endforeach; ?>
            </div>
        </div>
    <?php
        return ob_get_clean();
    }
}