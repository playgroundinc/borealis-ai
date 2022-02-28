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
            'cta_one_text' => '',
            'cta_one_link' => '',
            'cta_two_text' => '',
            'cta_two_link' => '',
            'display_style' => 'default',
            'copy' => '',
            'image_id' => 0,
            'title' => '',
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $dark = $image && strlen($image) > 0; 
        ob_start();
        ?>
            <div class="custom-component animated-element nestable">
                <div class="bg-center bg-cover <?php echo $dark && $attributes->display_style === 'background-image' ? esc_attr('text-shade-white-400 pt-11 lg:pt-20 pb-9') : '' ?>" style="<?php echo $dark && $attributes->display_style === 'background-image' ? 'background-image: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('. esc_url_raw($image) . ')' : '' ?>">
                    <div class="tab-container <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('container') : '' ; ?>" aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>">
                        <?php if ($dark && $attributes->display_style === 'background-image'): ?>
                            <div class="lg:flex justify-between">
                                <div class="lg:basis-4/12 shrink-0 flex flex-col lg:pb-11">
                                    <div class="grow flex flex-col justify-end">
                                        <?php if (!empty($attributes->title)): ?>
                                            <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="h3"><?php echo esc_html($attributes->title) ?></h2>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->copy)): ?>
                                            <p class="paragraph pt-11"><?php echo esc_html($attributes->copy) ?></p>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->cta_one_text) && !empty($attributes->cta_one_link) && strlen($attributes->cta_one_text) > 0 && strlen($attributes->cta_one_link) > 0):?>
                                            <div class="md:flex lg:justify-between flex-wrap">
                                                <a class="primary-button flex items-center pt-11 pb-4" href="<?php echo esc_url_raw($attributes->cta_one_link)?>"><?php echo esc_html($attributes->cta_one_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php if (!empty($attributes->cta_two_text) && !empty($attributes->cta_two_link) && strlen($attributes->cta_two_text) > 0 && strlen($attributes->cta_two_link) > 0):?>
                                                    <a class="primary-button flex items-center pt-5 md:pt-11 md:pl-4 pb-4" href="<?php echo esc_url_raw($attributes->cta_two_link)?>"><?php echo esc_html($attributes->cta_two_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php endif; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <div class="lg:basis-7/12 shrink-0 pt-14 lg:pt-0 flex flex-col">
                                    <?php foreach ($block['innerBlocks'] as $inner_block => $element): ?>
                                        <?php
                                            $fields = array(
                                                'title' => '',
                                            );
                                            $attributes = pg_get_attributes($element['attrs'], $fields);
                                            if (!strlen($attributes->title) > 0 || empty($element['innerBlocks'])) {
                                                continue;
                                            }
                                            $titleSlug = pg_slugify($attributes->title);
                                            ?>
                                            <?php if ($inner_block === key($block['innerBlocks'])): ?>                                      
                                                <div class="flex justify-center flex-col grow" id="<?php echo esc_attr($titleSlug .'-content-panel')?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug.'-tab') ?>">
                                                    <?php 
                                                        foreach($element['innerBlocks'] as $panel) {
                                                            echo wp_kses(render_block($panel), $allowed_html);
                                                        }
                                                    ?>
                                                </div>
                                            <?php else: ?>
                                                <div class="hidden justify-center flex-col grow" id="<?php echo esc_attr($titleSlug .'-content-panel')?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug.'-tab') ?>">
                                                    <?php 
                                                        foreach($element['innerBlocks'] as $panel) {
                                                            echo wp_kses(render_block($panel), $allowed_html);
                                                        }
                                                    ?>
                                                </div>
                                            <?php endif;?>
                                    <?php endforeach; ?>
                                    <div class="flex lg:justify-center lg:pt-8 overflow-scroll pb-11 pt-11 pl-4" role="tablist" aria-orientation="horizontal">
                                        <?php foreach ($block['innerBlocks'] as $inner_block => $element): ?>
                                            <?php
                                                $fields = array(
                                                    'title' => '',
                                                );
                                                $attributes = pg_get_attributes($element['attrs'], $fields);
                                                if (!strlen($attributes->title) > 0 || empty($element['innerBlocks'])) {
                                                    continue;
                                                }
                                                $titleSlug = pg_slugify($element['attrs']['title']);
                                                $title = $element['attrs']['title'];
                                            ?> 
                                                <?php if ($inner_block === key($block['innerBlocks'])): ?>   
                                                    <button class="pill-secondary pill-secondary-active shrink-0 first:ml-4" role="tab" aria-selected="true" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                                <?php else: ?>
                                                    <button class="pill-secondary shrink-0" role="tab" aria-selected="false" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                                <?php endif; ?>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        <?php else: ?>
                            <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('lg:flex') : '' ?> justify-between default-tabs">
                                <div class="lg:basis-4/12 shrink-0">
                                    <?php if (!empty($attributes->title)): ?>
                                        <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="h3 pr-6 <?php echo is_singular(array('news', 'research-blogs')) ? esc_attr('pb-4') : '' ?>"><?php echo esc_html($attributes->title) ?></h2>
                                    <?php endif; ?>
                                </div>
                                <div class="basis-8/12 shrink-0 pt-5 lg:pt-0">
                                    <?php if (!empty($attributes->copy)): ?>
                                        <div class="pb-8">
                                            <p class="paragraph"><?php echo esc_html($attributes->copy) ?></p>
                                            <?php if (!empty($attributes->cta_one_text) && !empty($attributes->cta_one_link) && strlen($attributes->cta_one_text) > 0 && strlen($attributes->cta_one_link) > 0):?>
                                                <div class="md:flex flex-wrap">
                                                    <a class="primary-button flex items-center pt-11 pb-4" href="<?php echo esc_url_raw($attributes->cta_one_link)?>"><?php echo esc_html($attributes->cta_one_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                    <?php if (!empty($attributes->cta_two_text) && !empty($attributes->cta_two_link) && strlen($attributes->cta_two_text) > 0 && strlen($attributes->cta_two_link) > 0):?>
                                                        <a class="primary-button flex items-center pt-11 md:pl-8 pb-4" href="<?php echo esc_url_raw($attributes->cta_two_link)?>"><?php echo esc_html($attributes->cta_two_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                    <?php endif; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    <?php endif; ?>
                                   
                                    <div class="flex border-b border-shade-grey-700 overflow-scroll" role="tablist" aria-orientation="horizontal">
                                        <?php foreach ($block['innerBlocks'] as $inner_block => $element): ?>
                                            <?php
                                                $fields = array(
                                                    'title' => '',
                                                );
                                                $attributes = pg_get_attributes($element['attrs'], $fields);
                                                if (!strlen($attributes->title) > 0 || empty($element['innerBlocks'])) {
                                                    continue;
                                                }
                                                $titleSlug = pg_slugify($element['attrs']['title']);
                                                $title = $element['attrs']['title'];
                                            ?> 
                                                <?php if ($inner_block === key($block['innerBlocks'])): ?>   
                                                    <button class="pill-secondary pill-secondary-active shrink-0" role="tab" aria-selected="true" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                                <?php else: ?>
                                                    <button class="pill-secondary shrink-0" role="tab" aria-selected="false" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                                <?php endif; ?>
                                        <?php endforeach; ?>
                                    </div>
                                    <?php foreach ($block['innerBlocks'] as $inner_block => $element): ?>
                                        <?php
                                            $fields = array(
                                                'title' => '',
                                            );
                                            $attributes = pg_get_attributes($element['attrs'], $fields);
                                            if (!strlen($attributes->title) > 0 || empty($element['innerBlocks'])) {
                                                continue;
                                            }
                                            $titleSlug = pg_slugify($attributes->title);
                                            ?>
                                            <?php if ($inner_block === key($block['innerBlocks'])): ?>                                      
                                                <div class="flex flex-col pt-12" id="<?php echo esc_attr($titleSlug .'-content-panel')?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug.'-tab') ?>">
                                                    <?php 
                                                        foreach($element['innerBlocks'] as $panel) {
                                                            echo wp_kses(render_block($panel), $allowed_html);
                                                        }
                                                    ?>
                                                </div>
                                            <?php else: ?>
                                                <div class="hidden flex-col pt-12" id="<?php echo esc_attr($titleSlug .'-content-panel')?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug.'-tab') ?>">
                                                    <?php 
                                                        foreach($element['innerBlocks'] as $panel) {
                                                            echo wp_kses(render_block($panel), $allowed_html);
                                                        }
                                                    ?>
                                                </div>
                                            <?php endif;?>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }
} 