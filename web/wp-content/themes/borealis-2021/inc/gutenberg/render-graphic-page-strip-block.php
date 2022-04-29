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
        $namespace . '/page-strip-graphic',
        array(
            'render_callback' => 'pg_render_graphic_page_strip_block',
        )
    );
}

if (!function_exists('pg_render_graphic_page_strip_block')) {
    /**
     * Render out page strip block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_graphic_page_strip_block($attrs, $content, $block_obj)
    {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'copy' => '',
            'btn_text' => '',
            'btn_url' => '',
            'image_id' => 0,
            'image_id_mobile' => 0,
            'background_colour' => '',
            'text_position' => '',
        );
        $attributes = pg_get_attributes($attrs, $fields);
        $image = wp_get_attachment_image_url($attributes->image_id, 'full');
        $image_mobile = wp_get_attachment_image_url($attributes->image_id_mobile, 'full');
        $blacktext = false;
        $isEmpty = false;
        if ($attributes->background_colour === 'bg-shade-white-400 text-shade-black-400' or $attributes->background_colour === 'bg-shade-grey-100 text-shade-black-400') {
            $blacktext = true;
        }
        ob_start();
?>
        <div class="hidden md:flex h-full <?php echo $attributes->text_position === 'bottom' ? 'flex-col' : 'flex-col-reverse' ?>  justify-end <?php echo $attributes->background_colour ?> bg-cover bg-no-repeat p-17 rounded-large bg-center" style="background-image: url(<?php echo $image ?>)">
            <div class="flex justify-start">
                <div class="w-full max-w-[560px]">
                    <?php if (!empty($attributes->title)) : ?>
                        <h3 class="h3   mb-11">
                            <?php echo $attributes->title ?>
                        </h3>
                    <?php endif ?>
                    <?php if (!empty($attributes->copy)) : ?>
                        <p class="paragraph mb-8 w-full tb:w-7/12">
                            <?php echo $attributes->copy ?>
                        </p>
                    <?php endif ?>
                    <?php if (!empty($attributes->btn_text) and !empty($attributes->btn_url)) : ?>
                        <a href="<?php echo $attributes->btn_url ?>" class="primary-button flex items-end underline-cta w-fit <?php echo $blacktext ? 'black-underline text-shade-black-400' : 'white-underline text-shade-white-400' ?>">
                            <?php echo $attributes->btn_text ?>
                            <span class="icon icon--lg ml-7 relative top-0">
                                <?php echo pg_render_icon('arrow-general') ?>
                            </span>
                        </a>
                    <?php endif ?>
                </div>
            </div>
        </div>
        <div class="md:hidden block <?php echo $attributes->background_colour ?> rounded-large mt-7">
            <div class="w-full bg-cover <?php echo $image ? 'pb-78' : 'pb-15' ?> bg-no-repeat pt-15 px-6 bg-center rounded-large" style="background-image: url(<?php echo $image_mobile ?>)">
                <?php if (!empty($attributes->title)) : ?>
                    <h3 class="h3   mb-6">
                        <?php echo $attributes->title ?>
                    </h3>
                <?php endif ?>
                <?php if (!empty($attributes->copy)) : ?>
                    <p class="paragraph mb-6 w-full tb:w-7/12">
                        <?php echo $attributes->copy ?>
                    </p>
                <?php endif ?>
                <?php if (!empty($attributes->btn_text) and !empty($attributes->btn_url)) : ?>
                    <a href="<?php echo $attributes->btn_url ?>" class="primary-button flex items-end underline-cta w-fit <?php echo $blacktext ? 'black-underline text-shade-black-400' : 'white-underline text-shade-white-400' ?>">
                        <?php echo $attributes->btn_text ?>
                        <span class="icon icon--lg ml-7 relative top-0">
                            <?php echo pg_render_icon('arrow-general') ?>
                        </span>
                    </a>
                <?php endif ?>
            </div>
        </div>
<?php
        return ob_get_clean();
    }
}
