<?php
/**
 *
 * Render Content Card Container
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
        $namespace . '/content-card-container',
        array(
            'render_callback' => 'pg_render_content_card_container_block',
        )
    );
}

if ( ! function_exists( 'pg_render_content_card_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_content_card_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'title' => '',
            'icon' => true,
            'link' => '',
            'link_text' => 'Learn More',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'callout-column-slider';

        ob_start();
        ?>
            <div>
                <?php if (!empty($attributes->title)): ?>                   
                    <h2><?php echo esc_html($attributes->title) ?></h2>
                    <?php if (!empty($attributes->description)): ?>
                        <?php echo wpautop($attributes->description); ?>
                    <?php endif; ?>
                    <?php if (!empty($attributes->link)): ?>
                        <a href="<?php echo esc_attr($attributes->link)?>"><?php echo esc_html($attributes->link_text); ?></a>
                    <?php endif; ?>
                <?php endif; ?>
                <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                <?php endforeach; ?>                
            </div>
        <?php
        return ob_get_clean();
    }
}
