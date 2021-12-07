<?php
/**
 *
 * Render Milestone
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
        $namespace . '/milestone',
        array(
            'render_callback' => 'trmc_render_milestone_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_milestone_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_milestone_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'year' => '',
            'image_id' => '',
            'image_alt' => '',
            'image_url' => ''
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $image = wp_get_attachment_image_url($attributes->image_id, 'mobile-square');
        $placeholder = wp_get_attachment_url($attributes->image_id, 'thumbnail');
        $square_set = wp_get_attachment_image_srcset($attributes->image_id, 'mobile-square');
        $placeholder_srcset = wp_get_attachment_image_srcset($attributes->image_id, 'thumbnail');
        $allowed_html = pg_allowed_html();
        ob_start();
        if (!empty($attributes->year)):
        ?>
            <li class="milestone-block animated-element">
                <?php if (!empty($image)): ?>
                    <div class="milestone-block__img br-xs-lg mb-md-3 mb-xs-6">
                        <picture class="lazy">
                            <?php if (!empty($square_set)): ?>
                                <source data-srcset="<?php echo esc_attr($square_set) ?>" srcset="<?php echo esc_attr($placeholder_srcset)?>" media="(min-width: 544px)" sizes="439px">
                            <?php endif; ?>
                            <img class="lazy" data-src="<?php echo esc_attr($image)?>" src="<?php echo esc_url_raw($placeholder) ?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                        </picture>
                    </div>
                <?php endif ;?>
                <div class="pt-xs-3 pt-md-0 milestone-block__details">
                    <p class="heading_four"><?php echo esc_html($attributes->year); ?></p>
                    <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                        <?php echo wp_kses( render_block( $inner_block ), $allowed_html ); ?>
                    <?php endforeach; ?> 
                </div> 
            </li>              
        <?php
        endif;
        return ob_get_clean();
    }
}
