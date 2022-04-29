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
        $namespace . '/custom-subsection-block',
        array(
            'render_callback' => 'pg_render_custom_subsection_block',
        )
    );
}

if ( ! function_exists( 'pg_render_custom_subsection_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_custom_subsection_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $url = pg_slugify(sanitize_text_field(preg_replace("/\s+/u", " ", $attributes->title)));
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div aria-labelledby="<?php echo esc_attr($url . '-title') ?>" id="<?php echo esc_attr($url); ?>" class="custom-component">
                <?php if (!empty($attributes->title)): ?>
                    <h3 id="<?php echo esc_attr($url . '-title') ?>" class="h3   mt-11 md:mt-13"><?php echo wp_kses($attributes->title, $allowed_html) ?></h2>
                <?php endif; ?>
                <?php foreach ( $block['innerBlocks'] as $inner_block ) : ?>
                    <?php echo wp_kses( render_block($inner_block), $allowed_html ); ?>
                <?php endforeach; ?>
            </div>
        <?php
        return ob_get_clean();
    }
} 