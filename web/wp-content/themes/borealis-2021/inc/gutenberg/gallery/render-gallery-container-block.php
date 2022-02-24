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
            'script' => 'custom-gallery'
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
        $namespace = pg_get_namespace();

        ob_start();
        ?>
        <div class="custom-component animated-element">
            <div class="md:flex container">
                <div class="md:w-4/12">
                    <?php if (!empty($attributes->title)): ?>                   
                        <h2 class="h3 md:h2 pr-8"><?php echo esc_html($attributes->title) ?></h2>
                    <?php endif; ?>
                </div>
                <div class="md:w-8/12">
                    <?php if (strlen($attributes->description) > 0): ?>
                        <p class="paragraph md:paragraph-lg pt-8 md:pt-0"><?php echo esc_html($attributes->description); ?></p>
                    <?php endif; ?>
                    <?php if (!empty($attributes->link) && strlen($attributes->link_text) > 0): ?>
                        <a class="py-4 h4 text-shade-black-400 visited:text-primary-electric-purple-400 paragraph flex items-center" href="<?php echo esc_attr($attributes->link)?>">
                            <?php echo esc_html($attributes->link_text); ?>
                            <span aria-hidden="true" class="rotate-90 pb-6"><?php echo pg_render_icon('arrow-white') ?></span>
                        </a>

                    <?php endif; ?>
                </div>                
            </div>
            <div>
                <div class="mx-auto relative pt-gallery transition-all duration-400">
                    <ul class="flex absolute left-0 top-0 bottom-0 max-w-full overflow-scroll pl-16 lg:pl-gallery-offset items-center pr-25 lg:pr-gallery-offset custom-gallery">
                        <?php foreach ( $block['innerBlocks'] as $index => $inner_block ) : ?>
                            <?php if ($inner_block['blockName'] === $namespace . '/custom-image'): ?>
                                    <?php 
                                        $fields = array(
                                            'image_id' => 0,
                                            'image_alt' => '',
                                        );    
                                        $attributes = pg_get_attributes($inner_block['attrs'], $fields);
                                        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
                                        $placholder = wp_get_attachment_image_url($attributes->image_id);
                                    ?>
                                    <li class="nth-child-2:ml-5">
                                        <picture>
                                            <img class="max-h-[450px] max-w-[450px] rounded-large overflow-hidden block " src="<?php echo esc_url_raw($image)?>" alt="<?php echo !empty($attributes->image_alt) ? esc_attr($attributes->image_alt) : null ?>">
                                        </picture>
                                    </li>
                            <?php elseif ($inner_block['blockName'] === $namespace . '/select-team-member'): ?>
                                <?php 
                                    $fields = array(
                                        'post' => 0,
                                    ); 
                                    $attributes = pg_get_attributes($inner_block['attrs'], $fields); 
                                    if (!$attributes->post || !intval($attributes->post) > 0) {
                                        continue;
                                    }
                                    $post = get_post($attributes->post);
                                    $slug = pg_slugify(sanitize_text_field($post->post_title));
                                    $image = get_the_post_thumbnail_url($post->ID, 'team-member');
                                    $position = get_post_meta($post->ID, 'position', true);
                                    $url = get_permalink($post->ID);
                                ?>
                                <li class="nth-child-2:ml-5  basis-team-member shrink-0 grow-0">
                                    <a href="<?php echo esc_url_raw($url)?>" class="block" aria-labelledby="<?php echo esc_attr($slug)?>">
                                        <img class="block rounded-large" src="<?php echo $image && strlen($image) > 0 ? esc_url_raw($image) : get_bloginfo('stylesheet_directory') . '/src/images/teamMember.png' ?>"/>
                                        <p id="<?php echo esc_attr($slug) ?>" class="h4 pt-12"><?php echo esc_html($post->post_title); ?></p>
                                        <?php if ($position && strlen($position) >0):?>
                                            <p class="paragraph pt-4"><?php echo esc_html($position) ?></p>
                                        <?php endif; ?>
                                    </a>
                                </li>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }
}
