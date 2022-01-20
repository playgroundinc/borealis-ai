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
        $namespace . '/tabbed-content-container-block',
        array(
            'render_callback' => 'pg_render_tabbed_content_container_block',
            'script' => 'tabbedContent',
        )
    );
}

if ( ! function_exists( 'pg_render_tabbed_content_container_block' ) ) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_tabbed_content_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'title' => '',
            'copy' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        ?>
            <section class="tab-container" aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>">
                <?php if (!empty($attributes->title)): ?>
                    <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class=""><?php echo esc_html($attributes->title) ?></h2>
                <?php endif; ?>
                <?php if (!empty($attributes->copy)): ?>
                    <h2 id="<?php echo esc_html(pg_slugify($attributes->copy)) ?>" class=""><?php echo esc_html($attributes->copy) ?></h2>
                <?php endif; ?>
                <div role="tablist" aria-orientation="horizontal">
                    <?php 
                        foreach ($block['innerBlocks'] as $inner_block => $element) {
                            reset($block['innerBlocks']);
                            $titleSlug = pg_slugify($element['attrs']['title']);
                            $title = $element['attrs']['title'];

                            if ($inner_block === key($block['innerBlocks'])) {                                       
                                echo '<button class="font-bold" role="tab" aria-selected="true" id="'.$titleSlug.'-tab" aria-controls="'.$titleSlug.'-content-panel">'.$title.'</button>';
                            } else {
                                echo '<button class="font-normal" role="tab" aria-selected="false" id="'.$titleSlug.'-tab" aria-controls="'.$titleSlug.'-content-panel">'.$title.'</button>';
                            }
                        }
                    ?>
                </div>
                <?php 
                    foreach ($block['innerBlocks'] as $inner_block => $element) {
                        reset($block['innerBlocks']);
                        $titleSlug = pg_slugify($element['attrs']['title']);
                        $title = $element['attrs']['title'];
                        $content = $element['attrs']['content'];

                        if ($inner_block === key($block['innerBlocks'])) {                                       
                            echo '<div class="block" id="'.$titleSlug.'-content-panel" role="tabpanel" aria-labelledby="'.$titleSlug.'-tab"><h2>'.$title.'</h2><p>'.$content.'</p></div>';
                        } else {
                            echo '<div class="hidden" id="'.$titleSlug.'-content-panel" role="tabpanel" aria-labelledby="'.$titleSlug.'-tab"><h2>'.$title.'</h2><p>'.$content.'</p></div>';
                        }
                    }
                ?>
            </section>
        <?php
        return ob_get_clean();
    }
} 