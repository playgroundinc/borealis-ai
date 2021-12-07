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
            'render_callback' => 'trmc_render_content_card_container_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_content_card_container_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_content_card_container_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'description' => '',
            'title' => '',
            'icon' => true,
            'link' => '',
            'link_text' => __('Learn More', 'trmc'),
            'bg_color' => 'white',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'callout-column-slider';
        $classes = $attributes->bg_color !== 'white' ? 'block--' . $attributes->bg_color . ' pv-xs-13' : 'block--' . $attributes->bg_color;
        $classes .= $attributes->icon ? ' content-card--icon' : ' content-card--no-icon';
        ob_start();
        ?>
            <div class="custom-component <?php echo esc_attr($classes) ?>">
                <div class="container container-fluid">
                    <div class="content-card__container">
                        <?php if (!empty($attributes->title)): ?>
                            <div class="mb-lg-9 mb-xs-5 animated-element mh-xs-auto copy--center fc-lg-50 fc-xs-100">                        
                                <h2 class="heading_one mb-xs-3"><?php echo esc_html($attributes->title) ?></h2>
                                <?php if (!empty($attributes->description)): ?>
                                    <?php echo wpautop($attributes->description); ?>
                                <?php endif; ?>
                                <?php if (!empty($attributes->link)): ?>
                                    <a href="<?php echo esc_attr($attributes->link)?>" class="mt-xs-4 btn btn--primary"><?php echo esc_html($attributes->link_text); ?></a>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div>
                            <div class="flex col-xs row-lg start-lg content-card__list">
                                <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                                    <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        <?php
        return ob_get_clean();
    }
}
