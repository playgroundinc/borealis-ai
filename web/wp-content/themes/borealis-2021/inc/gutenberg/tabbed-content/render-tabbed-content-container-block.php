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
            <section aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="custom-component">
                <div class="container container-fluid animated-element">
                    <div class="page-strip flex middle-xs center-xs ph-md-5 ph-lg-3 pv-md-12 pv-xs-7 ph-xs-3 br-xs-lg">
                        <div class="fc-md-100 fc-lg-70 fc-xl-50 ph-md-5 ph-lg-0 copy--center">
                            <?php if (!empty($attributes->title)): ?>
                                <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="heading_two heading-one-lg mb-xs-0 text-2xl"><?php echo esc_html($attributes->title) ?></h2>
                            <?php endif; ?>
                            <?php if (!empty($attributes->copy)): ?>
                                <h2 id="<?php echo esc_html(pg_slugify($attributes->copy)) ?>" class="heading_two heading-one-lg mb-xs-0 text-2xl"><?php echo esc_html($attributes->copy) ?></h2>
                            <?php endif; ?>
                            <div role="tablist" aria-orientation="horizontal">
                                <?php 
                                    foreach ($block['innerBlocks'] as $inner_block => $element) {
                                        reset($block['innerBlocks']);
                                        $titleSlug = pg_slugify($element['attrs']['title']);
                                        $title = $element['attrs']['title'];

                                        if ($inner_block === key($block['innerBlocks'])) {                                       
                                            echo '<button style="font-weight:bold" role="tab" aria-selected="true" id="'.$titleSlug.'-tab" aria-controls="'.$titleSlug.'-content-panel">'.$title.'</button>';
                                        } else {
                                            echo '<button role="tab" aria-selected="true" id="'.$titleSlug.'-tab" aria-controls="'.$titleSlug.'-content-panel">'.$title.'</button>';
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
                                        echo '<div id="'.$titleSlug.'-content-panel" role="tabpanel" aria-labelledby="'.$titleSlug.'-tab"><h2>'.$title.'</h2><p>'.$content.'</p></div>';
                                    } else {
                                        echo '<div style="display:none" id="'.$titleSlug.'-content-panel" role="tabpanel" aria-labelledby="'.$titleSlug.'-tab"><h2>'.$title.'</h2><p>'.$content.'</p></div>';
                                    }
                                }
                            ?>
                        </div>
                    </div>
                </div>
            </section>
        <?php
        return ob_get_clean();
    }
} 