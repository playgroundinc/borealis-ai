<?php
/**
 *
 * Render Callout Column
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
        $namespace . '/callout-column',
        array(
            'render_callback' => 'pg_render_callout_column_block',
        )
    );
}

if ( ! function_exists( 'pg_render_callout_column_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_callout_column_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'image_alt' => '',
            'image_id' => '',
            'image_url' => '',
            'title' => '',
            'link' => '',
            'link_text' => 'read more',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        if (!empty($attributes->image_id)) {
            $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        }
        ob_start();
        ?>
            <?php if (!empty($attributes->link)): ?>
                <?php $label = 'aria-label="' . esc_attr($attributes->title) . '"'; ?>
                <a  
                    href="<?php echo esc_attr($attributes->link)?>" 
                    <?php echo !empty($attributes->title) ? $label : null; ?>
                >
            <?php endif; ?>
        
                <div>
                    <div style="background-image: url(<?php echo esc_url_raw($image)?>)">
                    </div>
                    <div>
                        <?php if (!empty($attributes->title)): ?>
                            <h3><?php echo esc_html($attributes->title) ?></h3>
                        <?php endif; ?>
                        <?php if (!empty($attributes->link_text)): ?>
                            <p><?php echo esc_attr($attributes->link_text); ?></p>
                        <?php endif; ?>
                    </div>
                    
                </div>
            <?php if (!empty($attributes->link)): ?>
                </a>
            <?php endif; ?>
        <?php
        return ob_get_clean();
    }
}
