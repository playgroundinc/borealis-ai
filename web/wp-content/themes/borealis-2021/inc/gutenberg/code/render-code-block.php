<?php
/**
 *
 * Render Compare Code Block
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
        $namespace . '/code',
        array(
            'render_callback' => 'pg_render_code_block',
        )
    );
}

if ( ! function_exists( 'pg_render_code_block' ) ) {
    /**
     * Render out code block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_code_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'caption' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();

        ob_start();
        ?>
        <div class="custom-component animated-element">
            <?php if (strlen($attributes->title) > 0): ?>
                <h2 class="h4 mb-8"><?php echo esc_html($attributes->title); ?></h2>
            <?php endif; ?>
            <?php foreach($block['innerBlocks'] as $inner_block): ?>
                <?php echo render_block($inner_block); ?>
            <?php endforeach; ?>
            <?php if (strlen($attributes->caption) > 0): ?>
                <p class="paragraph-sm text-shade-grey-700 mt-8"><?php echo esc_html($attributes->caption); ?></p>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }
}
