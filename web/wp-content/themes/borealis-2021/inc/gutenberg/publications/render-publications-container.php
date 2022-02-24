<?php
/**
 *
 * Render Publications Container
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
        $namespace . '/publications-container',
        array(
            'render_callback' => 'pg_render_publications_container_block',
        )
    );
}

if ( ! function_exists( 'pg_render_publications_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_publications_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'link' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();

        ob_start();
        ?>
        <div class="custom-component animated-element nestable">
            <div class="md:flex nested-flex md:container">
                <div class="md:basis-4/12 container md:m-0 shrink-0">
                    <?php if (!empty($attributes->title)): ?>                   
                        <h2 class="h3"><?php echo esc_html($attributes->title) ?></h2>
                        <?php if (!empty($attributes->link)): ?>
                            <a class="py-4 text-link paragraph" href="<?php echo esc_attr($attributes->link)?>"><?php echo esc_html('View All'); ?></a>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
                <div class="md:basis-8/12 shrink-0 mt-18 md:mt-0 nested-block">
                    <ul class="border-t border-color-shade-grey-700">
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php echo pg_render_publications_item($inner_block, $attributes->link) ?>
                        <?php endforeach; ?>
                    </ul>
                </div>                
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
