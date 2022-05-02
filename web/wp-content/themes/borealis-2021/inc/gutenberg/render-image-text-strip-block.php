<?php

/**
 *
 * Render Graphic Page Strip
 *
 * @package Borealis AI
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
        $namespace . '/image-text-strip',
        array(
            'render_callback' => 'pg_render_image_text_strip_block',
        )
    );
}

if (!function_exists('pg_render_image_text_strip_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_image_text_strip_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'copy' => '',
            'btn_text' => '',
            'btn_url' => '',
            'image_id' => 0,
            'image_alt' => '',
            'image_id_mobile' => 0,
            'image_alt_mobile' => '',
            'reverse' => '',
            'full_width' => '',
            'text_color' => '',
            'anchor_id' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $image_mobile = wp_get_attachment_image_url($attributes->image_id_mobile, 'full');
        $allowed_html = pg_allowed_html();
        ob_start();
        if (!empty($image)) :
?>
            <div id="<?php echo $attributes->anchor_id ?>" class="w-full custom-component animated-element component-dark image-text">
                <div class="md:flex hidden <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('flex flex-col md:min-h-[500px] relative') : '' ?> <?php echo $attributes->full_width === true ? 'bg-cover bg-no-repeat md:p-20 bg-center' : '' ?>" style="background-image: url(<?php echo $attributes->full_width === true ? $image : '' ?>)">
                    <div class="flex justify-between <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:container grow flex-col md:flex-row') : esc_attr('flex-col-reverse') ?>  <?php echo $attributes->reverse === true ? 'md:flex-row-reverse' : 'md:flex-row' ?>">
                        <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('container md:m-0 md:basis-6/12 grow-0 flex flex-col-reverse') : esc_attr('md:w-6/12') ?> <?php echo $attributes->reverse === true ? 'items-center' : '' ?>">
                            <div class="flex justify-center flex-col <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:m-0 md:w-3/4 tb:w-2/3 grow') : '' ?>">
                                <div class="md:mt-0 mt-15 md:pb-0 <?php echo $attributes->text_color ?>">
                                    <?php if (!empty($attributes->title)) : ?>
                                        <h3 class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('h3   mb-6 tb:mb-11') : esc_attr('h4 mb-4') ?>">
                                            <?php echo $attributes->title ?>
                                        </h3>
                                    <?php endif ?>
                                    <?php if (!empty($attributes->copy)) : ?>
                                        <div>
                                            <p class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('paragraph') : esc_attr('paragraph-blog') ?> w-full">
                                                <?php echo wp_kses($attributes->copy, $allowed_html); ?>
                                            </p>
                                        </div>
                                    <?php endif ?>
                                    <?php if (!empty($attributes->btn_text) and !empty($attributes->btn_url)) : ?>
                                        <a href="<?php echo $attributes->btn_url ?>" class="primary-button flex items-end mb-18 md:mb-0 mt-8 md:mt-5 tb:mt-8 underline-cta <?php echo $attributes->text_color ?> w-fit">
                                            <?php echo $attributes->btn_text ?>
                                            <span class="icon icon--lg ml-7 relative top-0">
                                                <?php echo pg_render_icon('arrow-general') ?>
                                            </span>
                                        </a>
                                    <?php endif ?>
                                </div>
                            </div>
                        </div>
                        <?php if ($attributes->full_width !== true) : ?>
                            <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:w-6/12 md:absolute top-0 bottom-0') : esc_attr('md:w-3/8') ?> w-full  flex items-center shrink-0 <?php echo $attributes->reverse === true ? 'left-0' : 'right-0' ?>">
                                <div class="w-full bg-cover bg-no-repeat bg-center <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('pt-100 md:pt-0 h-full') : esc_attr('rounded-large pt-50'); ?>" style="background-image: url(<?php echo $image ?>);"></div>
                            </div>
                        <?php endif ?>
                    </div>
                </div>
                <div class="md:hidden flex <?php echo $attributes->full_width !== true ? 'min-h-[850px]' : 'min-h-[950px]' ?> <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('flex flex-col min-h-[500px] relative') : '' ?> <?php echo $attributes->full_width === true ? 'bg-cover bg-center bg-no-repeat md:p-20' : '' ?>" style="background-image: url(<?php echo $attributes->full_width === true ? $image_mobile : '' ?>)">
                    <div class="flex justify-between <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:container grow flex-col md:flex-row') : esc_attr('flex-col-reverse') ?>  <?php echo $attributes->reverse === true ? 'md:flex-row-reverse' : 'md:flex-row' ?>">
                        <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('container md:m-0 md:basis-6/12 grow-0 flex flex-col-reverse') : esc_attr('md:w-6/12') ?> <?php echo $attributes->reverse === true ? 'items-center' : '' ?>">
                            <div class="flex justify-center flex-col <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:m-0 md:w-3/4 tb:w-2/3 grow') : '' ?>">
                                <div class="md:mt-0 mt-15 md:pb-0 <?php echo $attributes->text_color ?>">
                                    <?php if (!empty($attributes->title)) : ?>
                                        <h3 class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('h3   mb-6 tb:mb-11') : esc_attr('h4 mb-4') ?>">
                                            <?php echo $attributes->title ?>
                                        </h3>
                                    <?php endif ?>
                                    <?php if (!empty($attributes->copy)) : ?>
                                        <div>
                                            <p class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('paragraph') : esc_attr('paragraph-blog') ?> w-full">
                                                <?php echo wp_kses($attributes->copy, $allowed_html); ?>
                                            </p>
                                        </div>
                                    <?php endif ?>
                                    <?php if (!empty($attributes->btn_text) and !empty($attributes->btn_url)) : ?>
                                        <a href="<?php echo $attributes->btn_url ?>" class="primary-button flex items-end mb-18 md:mb-0 mt-8 md:mt-5 tb:mt-8 underline-cta <?php echo $attributes->text_color ?> w-fit">
                                            <?php echo $attributes->btn_text ?>
                                            <span class="icon icon--lg ml-7 relative top-0">
                                                <?php echo pg_render_icon('arrow-general') ?>
                                            </span>
                                        </a>
                                    <?php endif ?>
                                </div>
                            </div>
                        </div>
                        <?php if ($attributes->full_width !== true) : ?>
                            <div class="<?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('md:w-6/12 md:absolute top-0 bottom-0') : esc_attr('md:w-3/8') ?> w-full  flex items-center shrink-0 <?php echo $attributes->reverse === true ? 'left-0' : 'right-0' ?>">
                                <div class="w-full bg-cover bg-no-repeat bg-center <?php echo !is_singular(array('news', 'research-blogs')) ? esc_attr('pt-100 md:pt-0 h-full') : esc_attr('rounded-large pt-50'); ?>" style="background-image: url(<?php echo $image_mobile ?>);"></div>
                            </div>
                        <?php endif ?>
                    </div>
                </div>
            </div>
<?php
        endif;
        return ob_get_clean();
    }
}
