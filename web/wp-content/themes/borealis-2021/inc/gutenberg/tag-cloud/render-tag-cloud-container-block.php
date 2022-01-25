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
        $namespace . '/tag-cloud-container-block',
        array(
            'render_callback' => 'pg_render_tag_cloud_container_block',
            'script' => 'tabbedContent',
        )
    );
}

if ( ! function_exists( 'pg_render_tag_cloud_container_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_tag_cloud_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        ?>
            <section class="tag-cloud-container" aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>">
                <?php if (!empty($attributes->title)): ?>
                    <h2 class=""><?php echo esc_html($attributes->title) ?></h2>
                <?php endif; ?>
                <?php if (!empty($block['innerBlocks'])): ?>
                    <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </section>
        <?php
        return ob_get_clean();
    }
}  