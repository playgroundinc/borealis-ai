<?php
/**
 *
 * Render Compare Figures
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
        $namespace . '/compare-figures',
        array(
            'render_callback' => 'pg_render_compare_figures_block',
        )
    );
}

if ( ! function_exists( 'pg_render_compare_figures_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function pg_render_compare_figures_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'title' => '',
            'caption' => '',
            'description' => '',
            'columns' => 6,
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
        <div class="custom-component animated-element">
            <?php if (strlen($attributes->title) > 0):?>
                <h3 class="h4"><?php echo esc_html($attributes->title); ?></h3>
            <?php endif; ?>
            <?php if (strlen($attributes->description)): ?>
                <p class="paragraph-blog">
                    <?php echo wp_kses($attributes->description, $allowed_html); ?>
                </p>
            <?php endif; ?>
            <?php if (!empty($block['innerBlocks'])): ?>
                <ul class="mt-10 flex flex-wrap">
                    <?php foreach($block['innerBlocks'] as $inner_block): ?>
                        <?php 
                            $fields = array('image_id' => '', 'image_alt' => '');
                            $inner_attrs = pg_get_attributes($inner_block['attrs'], $fields);
                            $image = wp_get_attachment_image_url($inner_attrs->image_id, 'full'); 
                        ?>
                        <?php  if (intval($attributes->columns) === 3): // 4-up ?>
                            <li class="
                                rounded-large 
                                overflow-hidden 
                                flex 
                                flex-col
                                nth-child-2:mt-10
                                
                                md:nth-child-2:mt-0
                                md:basis-col-6
                                md:nth-child-2:ml-5 
                                md:nth-child-3:mt-6 
                                md:nth-child-2n:ml-0
                                
                                lg:nth-child-3:mt-0
                                lg:nth-child-2n:ml-5
                                lg:basis-col-3 
                                lg:nth-child-5:mt-6 
                                lg:nth-child-4n:ml-0"
                            >
                                <div class="grow flex justify-center items-center bg-shade-grey-50">
                                    <img src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($inner_attrs->image_alt)?>">
                                </div>
                            </li>
                        <?php  elseif (intval($attributes->columns) === 4): // 3-up ?>
                            <li class="
                                rounded-large 
                                overflow-hidden 
                                flex 
                                flex-col
                                nth-child-2:mt-10

                                md:nth-child-2:mt-0
                                md:basis-col-6
                                md:nth-child-2:ml-5 
                                md:nth-child-3:mt-6 
                                md:nth-child-2n:ml-0
                                
                                lg:nth-child-3:mt-0
                                lg:nth-child-2n:ml-5
                                lg:basis-col-4 
                                lg:nth-child-4:mt-6 
                                lg:nth-child-3n:ml-0"
                            >
                                <div class="grow flex justify-center items-center bg-shade-grey-50">
                                   <img src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($inner_attrs->image_alt)?>">
                                </div>
                            </li>
                        <?php else: // 2-up ?>
                            <li class="
                                rounded-large 
                                overflow-hidden 
                                flex 
                                flex-col
                                nth-child-2:mt-10

                                md:nth-child-2:mt-0
                                md:basis-col-6
                                md:nth-child-2:ml-5 
                                md:nth-child-3:mt-6 
                                md:nth-child-2n:ml-0"
                            >
                                <div class="grow flex justify-center items-center bg-shade-grey-50">
                                    <img src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($inner_attrs->image_alt)?>">
                                </div>
                            </li>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
            <?php if (strlen($attributes->caption) > 0): ?>
                <p class="paragraph-sm text-shade-grey-700 mt-8"><?php echo esc_html($attributes->caption); ?></p>
            <?php endif; ?>
        </div>
        <?php
        return ob_get_clean();
    }
}
