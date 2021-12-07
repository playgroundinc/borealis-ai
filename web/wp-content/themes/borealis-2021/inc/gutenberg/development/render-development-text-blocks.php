<?php
/**
 *
 * Render Development Text Blocks
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
    $block_names = array(
        'headline',
        'heading-one',
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'paragraph',
        'paragraph-no-alignment',
        'caption',
        'btn',
        'eyebrow',
    );
    foreach ($block_names as $block_name) {
        $namespace = pg_get_namespace();
        register_block_type(
            $namespace . '/' . $block_name,
            array(
                'render_callback' => 'trmc_render_development_text_block',
            )
        );
    }
    
}

if ( ! function_exists( 'trmc_render_development_text_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_development_text_block( $attrs, $content, $block_obj ) {
        $namespace = pg_get_namespace();
        $block = $block_obj->parsed_block;
        $fields     = array(
            'content' => '',
            'alignment' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );    
        $alignment = !empty($attributes->alignment) ? 'copy--' . $attributes->alignment : null; 
        $spacing = 'mb-xs-3';
        ob_start();
        switch($block['blockName']) {
            case $namespace . '/headline':
        ?>
                <h1 class="headline <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h1>
        <?php 
            break;
            case $namespace . '/heading-one':
        ?>
                <h1 class="heading_one <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h1>
        <?php 
            break;
            case $namespace . '/heading-two':
        ?>
                <h2 class="heading_two <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h2>
        <?php 
            break;
            case $namespace . '/heading-three':
        ?>
                <h3 class="heading_three <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h3>
        <?php 
            break;
            case $namespace . '/heading-four':
        ?>
                <h4 class="heading_four <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h4>
        <?php 
            break;
            case $namespace . '/heading-five':
        ?>
                <h5 class="heading_five <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h5>
        <?php 
            break;
            case $namespace . '/heading-six':
        ?>
                <h6 class="heading_six <?php echo esc_attr($alignment . ' ' . $spacing)?>"><?php echo wp_kses($attributes->content, 'post')?></h6>
        <?php 
            break;
            case $namespace . '/paragraph-no-alignment':
            case $namespace . '/paragraph':
        ?>
            <p class="paragraph  <?php echo !empty($alignment) ? esc_attr($alignment) : null ?>"><?php echo wp_kses($attributes->content, 'post')?></p>
        <?php 
            break;
            case $namespace . '/caption':
        ?>
                <p class="caption <?php echo esc_attr($alignment)?>"><?php echo wp_kses($attributes->content, 'post')?></p>
        <?php 
            break;
            case $namespace . '/btn':
        ?>
            <button class="btn"><?php echo wp_kses($attributes->content, 'post'); ?></button>
        <?php
            break;
            case $namespace . '/eyebrow':
        ?>
                <div class="eyebrow"><?php echo wp_kses($attributes->content, 'post'); ?></div>
        <?php
            break;
        }
        ?>
        <?php
        return ob_get_clean();
    }
}
