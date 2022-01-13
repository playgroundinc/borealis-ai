<?php
/**
 *
 * Render Image Block
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
        $namespace . '/custom-image',
        array(
            'render_callback' => 'pg_render_image_block',
        )
    );
}

if ( ! function_exists( 'pg_render_image_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_image_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'caption' => '',
            'image_id' => null,
            'image_alt' => '',
            'image_url' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        $breakpoints = pg_get_regular_sizes();
        $srcset = wp_get_attachment_image_srcset($attributes->image_id, 'custom-img');
        $image = wp_get_attachment_image_url($attributes->image_id, 'custom-img');
        $square_set = wp_get_attachment_image_srcset($attributes->image_id, 'mobile-square');
        $placeholder_srcset = wp_get_attachment_image_srcset($attributes->image_id, 'thumbnail');
        $placholder = wp_get_attachment_image_url($attributes->image_id, 'thumbnail');
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
            <div class="custom-component">
                <div class="container container-fluid animated-element">
                    <div class="image-block">
                        <picture class="image-block__img lazy">
                            <?php if (!empty($srcset)): ?>
                                <source media="(min-width: <?php echo esc_attr($breakpoints['xl'] . 'px') ?>)" sizes="<?php echo esc_attr($breakpoints['default'] . 'px'); ?>" data-srcset="<?php echo esc_attr($srcset) ?>" srcset="<?php echo esc_attr($placeholder_srcset) ?>">
                                <source media="(min-width: <?php echo esc_attr($breakpoints['lg'] . 'px') ?>)" sizes="<?php echo esc_attr($breakpoints['xl'] . 'px'); ?>" data-srcset="<?php echo esc_attr($srcset) ?>" srcset="<?php echo esc_attr($placeholder_srcset) ?>">
                                <source media="(min-width: <?php echo esc_attr($breakpoints['md'] . 'px') ?>)" sizes="<?php echo esc_attr($breakpoints['lg'] . 'px'); ?>" data-srcset="<?php echo esc_attr($srcset) ?>" srcset="<?php echo esc_attr($placeholder_srcset) ?>">
                                <source media="(min-width: 544px)" sizes="<?php echo esc_attr($breakpoints['md'] . 'px'); ?>" srcset="<?php echo esc_attr($srcset) ?>" srcset="<?php echo esc_attr($placeholder_srcset) ?>">
                            <?php endif; ?>
                            <?php if (!empty($square_set)): ?>
                                <source data-srcset="<?php echo esc_attr($square_set) ?>" sizes="100vw" srcset="<?php echo esc_attr($placeholder_srcset) ?>">
                            <?php endif; ?>
                            <img class="lazy" data-src="<?php echo esc_url_raw($image)?>" src="<?php echo esc_url_raw($placholder)?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                        </picture>
                    </div>
                    <?php if (!empty($attributes->caption) || !empty($attributes->image_alt)): ?>
                        <p class="caption ph-lg-5 mt-xs-2 mt-lg-3"><?php echo !empty($attributes->caption) ? esc_html($attributes->caption) : esc_html($attributes->image_alt); ?></p>
                    <?php endif; ?>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
}
