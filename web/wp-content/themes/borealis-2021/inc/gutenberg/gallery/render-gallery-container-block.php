<?php
/**
 *
 * Render Gallery Container
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
        $namespace . '/gallery-container',
        array(
            'render_callback' => 'pg_render_gallery_container_block',
        )
    );
}

if ( ! function_exists( 'pg_render_gallery_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_gallery_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'link' => '',
            'link_text' => '',
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();

        ob_start();
        ?>
        <div class="custom-component animated-element">
            <div class="md:flex container">
                <div class="md:w-4/12">
                    <?php if (!empty($attributes->title)): ?>                   
                        <h2 class="h3"><?php echo esc_html($attributes->title) ?></h2>
                    <?php endif; ?>
                </div>
                <div class="md:w-8/12">
                    <?php if (strlen($attributes->description) > 0): ?>
                        <p class="paragraph-lg"><?php echo esc_html($attributes->description); ?></p>
                    <?php endif; ?>
                    <?php if (!empty($attributes->link) && strlen($attributes->link_text) > 0): ?>
                        <a class="py-4 text-link paragraph" href="<?php echo esc_attr($attributes->link)?>"><?php echo esc_html($attributes->link_text); ?></a>
                    <?php endif; ?>
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
