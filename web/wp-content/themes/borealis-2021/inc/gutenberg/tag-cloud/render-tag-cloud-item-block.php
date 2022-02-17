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
        $namespace . '/tag-cloud-item-block',
        array(
            'render_callback' => 'pg_render_tag_cloud_item_block',
        )
    );
}

if ( ! function_exists( 'pg_render_tag_cloud_item_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_tag_cloud_item_block( $attrs, $content, $block_obj ) {
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'text' => '',
            'link' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        ?>
            <?php if (!empty($attributes->link) and !empty($attributes->text)): ?>
                <a class="text-primary-electric-blue-400 hover:underline visited:text-primary-purple-400 w-1/2 md:w-1/3 mb-6" href="<?php echo esc_attr($attributes->link)?>"><?php echo $attributes->text ?></a>
            <?php endif; ?>
        <?php
        return ob_get_clean();
    }
}   