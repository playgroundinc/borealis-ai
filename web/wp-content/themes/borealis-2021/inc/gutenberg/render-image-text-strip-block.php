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
            'reverse' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        ob_start();

        if (!empty($image)) :
?>
            <section class="w-full">
                <div class="flex container text-shade-black-400 <?php echo $attributes->reverse === true ? 'flex-col-reverse' : 'flex-col' ?> <?php echo $attributes->reverse === true ? 'md:flex-row-reverse' : 'md:flex-row' ?>">
                    <div class="w-full md:w-6/12 flex justify-center flex-col">
                        <div class="w-11/12 tb:w-7/12 <?php echo $attributes->reverse === true ? 'ml-30' : 'ml-4'?> ">
                            <?php if (!empty($attributes->title)) : ?>
                                <h3 class="h3 md:mt-0 mt-10 mb-6 tb:mb-11">
                                    <?php echo $attributes->title ?>
                                </h3>
                            <?php endif ?>
                            <?php if (!empty($attributes->copy)) : ?>
                                <p class="paragraph mb-8 md:mb-5 tb:mb-8 w-full">
                                    <?php echo $attributes->copy ?>
                                </p>
                            <?php endif ?>
                            <?php if (!empty($attributes->btn_text) and !empty($attributes->btn_url)) : ?>
                                <a href="<?php echo $attributes->btn_url ?>" class="primary-button flex items-end mb-18 md:mb-0">
                                    <?php echo $attributes->btn_text ?>
                                    <span class="icon icon--lg ml-7 relative top-0">
                                        <?php echo ($attributes->icon === true) ? pg_render_icon('arrow-white') : pg_render_icon('arrow-black'); ?>
                                    </span>
                                </a>
                            <?php endif ?>
                        </div>
                    </div>
                    <div class="w-full md:w-6/12 flex items-center">
                        <div class="w-full bg-cover bg-no-repeat pt-100 bg-center" style="background-image: url(<?php echo $image ?>);"></div>
                    </div>
                </div>
            </section>
<?php
        endif;
        return ob_get_clean();
    }
}
