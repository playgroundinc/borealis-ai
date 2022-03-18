<?php

/**
 *
 * Render Video Tabbed Content Container
 *
 * @package Borealis
 * @version 1.0.0
 * @author  Playground Inc.
 * @license https://www.gnu.org/licenses/gpl-3.0.txt GNU/GPLv3
 * @since  1.0.0
 */

// Check if `register_block_type` exists before calling
// If Gutenberg isn't enabled it wont exist and error.
if (function_exists('register_block_type')) {
    $namespace = pg_get_namespace();
    register_block_type(
        $namespace . '/video-tabbed-content-container-block',
        array(
            'render_callback' => 'pg_render_video_tabbed_content_container_block',
            'script' => 'tabbedContent',
        )
    );
}

if (!function_exists('pg_render_video_tabbed_content_container_block')) {
    /**
     * Render out video tabbed content container block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_video_tabbed_content_container_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        $allowed_html = pg_allowed_html();
        // Need to set the name of the attribute and the default as a safeguard.
        $fields = array(
            'image_id' => 0,
            'title' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        ob_start();
?>
        <div class="custom-component animated-element nestable component-dark">
            <div class="bg-center bg-cover text-shade-white-400 pt-12 pb-4 tb:py-20" style="<?php echo $image ? 'background-image: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(' . esc_url_raw($image) . ')' : '' ?>">
                <div class="tab-container flex flex-col-reverse <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('container') : ''; ?>" aria-labelledby="<?php echo esc_html(pg_slugify($attributes->title)) ?>">
                    <div class="w-full flex justify-between">

                        <?php foreach ($block['innerBlocks'] as $inner_block => $element) : ?>
                            <?php
                            $fields = array(
                                'title' => '',
                                'copy' => '',
                                'cta_one_text' => '',
                                'cta_one_link' => '',
                                'cta_two_text' => '',
                                'cta_two_link' => '',
                            );
                            $attributes = pg_get_attributes($element['attrs'], $fields);
                            if (!strlen($attributes->title) > 0 || empty($element['innerBlocks'])) {
                                continue;
                            }
                            $titleSlug = pg_slugify($attributes->title);
                            ?>
                            <?php if ($inner_block === key($block['innerBlocks'])) : ?>
                                <div class="flex justify-between flex-col tb:flex-row w-full cursor-default" id="<?php echo esc_attr($titleSlug . '-content-panel') ?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug . '-tab') ?>">
                                    <div class="w-full tb:w-5/12 lg:w-4/12 tb:-mt-14 lg:-mt-11 pr-12">
                                        <?php if (!empty($attributes->title)) : ?>
                                            <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="h3"><?php echo esc_html($attributes->title) ?></h2>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->copy)) : ?>
                                            <p class="paragraph pt-10 tb:pt-20"><?php echo esc_html($attributes->copy) ?></p>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->cta_one_text) && !empty($attributes->cta_one_link) && strlen($attributes->cta_one_text) > 0 && strlen($attributes->cta_one_link) > 0) : ?>
                                            <div class="md:flex justify-between flex-wrap flex-col tb:flex-row md:pb-7 tb:items-center pt-11">
                                                <a class="primary-button flex items-center mb-6" href="<?php echo esc_url_raw($attributes->cta_one_link) ?>"><?php echo esc_html($attributes->cta_one_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php if (!empty($attributes->cta_two_text) && !empty($attributes->cta_two_link) && strlen($attributes->cta_two_text) > 0 && strlen($attributes->cta_two_link) > 0) : ?>
                                                    <a class="primary-button flex items-center mb-6" href="<?php echo esc_url_raw($attributes->cta_two_link) ?>"><?php echo esc_html($attributes->cta_two_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php endif; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="w-full tb:w-7/12 mb-8">
                                        <?php
                                        foreach ($element['innerBlocks'] as $panel) {
                                            echo wp_kses(render_block($panel), $allowed_html);
                                        }
                                        ?>
                                    </div>
                                </div>
                            <?php else : ?>
                                <div class="flex hidden justify-between flex-col tb:flex-row w-full cursor-default" id="<?php echo esc_attr($titleSlug . '-content-panel') ?>" role="tabpanel" aria-labelledby="<?php echo esc_attr($titleSlug . '-tab') ?>">
                                    <div class="w-full tb:w-5/12 lg:w-4/12 tb:-mt-14 lg:-mt-11 pr-12">
                                        <?php if (!empty($attributes->title)) : ?>
                                            <h2 id="<?php echo esc_html(pg_slugify($attributes->title)) ?>" class="h3"><?php echo esc_html($attributes->title) ?></h2>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->copy)) : ?>
                                            <p class="paragraph pt-10 tb:pt-20"><?php echo esc_html($attributes->copy) ?></p>
                                        <?php endif; ?>
                                        <?php if (!empty($attributes->cta_one_text) && !empty($attributes->cta_one_link) && strlen($attributes->cta_one_text) > 0 && strlen($attributes->cta_one_link) > 0) : ?>
                                            <div class="md:flex justify-between flex-wrap flex-col tb:flex-row md:pb-7 tb:items-center pt-11">
                                                <a class="primary-button flex items-center mb-6" href="<?php echo esc_url_raw($attributes->cta_one_link) ?>"><?php echo esc_html($attributes->cta_one_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php if (!empty($attributes->cta_two_text) && !empty($attributes->cta_two_link) && strlen($attributes->cta_two_text) > 0 && strlen($attributes->cta_two_link) > 0) : ?>
                                                    <a class="primary-button flex items-center mb-6" href="<?php echo esc_url_raw($attributes->cta_two_link) ?>"><?php echo esc_html($attributes->cta_two_text) ?><span class="pl-6"><?php echo pg_render_icon('arrow-white') ?></span></a>
                                                <?php endif; ?>
                                            </div>
                                        <?php endif; ?>
                                    </div>
                                    <div class="w-full tb:w-7/12 mb-8">
                                        <?php
                                        foreach ($element['innerBlocks'] as $panel) {
                                            echo wp_kses(render_block($panel), $allowed_html);
                                        }
                                        ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                    <div class="flex justify-end">
                        <div class="flex justify-start tb:justify-center items-start overflow-x-scroll md:overflow-hidden tb:overflow-x-scroll lg:overflow-hidden w-full tb:w-7/12 mb-11 tb:mb-5" role="tablist" aria-orientation="horizontal">
                            <?php foreach ($block['innerBlocks'] as $inner_block => $element) : ?>
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

                                <?php if ($inner_block === key($block['innerBlocks'])) : ?>
                                    <button class="h-8 pill-secondary pill-secondary-active shrink-0" role="tab" aria-selected="true" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                <?php else : ?>
                                    <button class="h-8 pill-secondary shrink-0" role="tab" aria-selected="false" id="<?php echo esc_attr($titleSlug . '-tab') ?>" aria-controls="<?php echo esc_attr($titleSlug . '-content-panel') ?>"><?php echo esc_html($title) ?></button>
                                <?php endif; ?>
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
