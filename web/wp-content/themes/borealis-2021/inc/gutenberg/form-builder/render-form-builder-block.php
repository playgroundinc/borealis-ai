<?php
/**
 *
 * Render Form Builder Block
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
        $namespace . '/form-builder',
        array(
			'render_callback' => 'trmc_render_form_builder_block',
					'script'          => 'trmc-form-builder',
        )
    );
}

if ( ! function_exists( 'trmc_render_form_builder_block' ) ) {
    /**
     * Render out carousel container block.
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_form_builder_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        $fields     = array(
            'alignment' => 'left',
            'bg_color' => 'white',
			'description' => '',
			'email' => '',
			'submit_text' => __('Submit', 'trmc'),
			'title' => '',
            'success_title' => __('Thank You!', 'trmc'),
            'success_message' => __('Your message has been successfully sent. We will contact you very soon!', 'trmc'),
        );
        $attributes = pg_get_attributes( $attrs, $fields ); 
        $id = !empty($attributes->title) ? pg_slugify($attributes->title) : 'custom-form';
        $allowed_html = pg_allowed_html();
        ob_start();
        ?>
			<?php if (!empty($attributes->email)): ?>
            <div class="<?php echo $attributes->bg_color === 'white' ? esc_attr('block--' . $attributes->bg_color) : esc_attr('pv-xs-20 block--' . $attributes->bg_color) ?> custom-component animated-element">
				<div class="container container--content container-fluid">
                    <div>
                        <?php if (!empty($attributes->title)): ?>
                            <h2 class="heading_one mb-xs-2 animated-element <?php echo esc_attr('copy--' . $attributes->alignment)?>"><?php echo esc_html($attributes->title); ?></h2>
                        <?php endif; ?>
                        <?php if (!empty($attributes->description)): ?>
                            <p class="paragraph pb-xs-2 animated-element"><?php echo wp_kses($attributes->description, $allowed_html); ?></p>
                        <?php endif; ?>
                        <form id="<?php echo esc_attr($id) ?>" class="custom-form" data-destination="<?php echo esc_attr($attributes->email); ?>" id="<?php echo esc_attr(pg_slugify($attributes->title))?>" data-title="<?php echo esc_attr($attributes->title) ?>" data-site="<?php echo esc_attr(get_home_url())?>"  novalidate>
                        <?php 
                            $honeypot_args = array(
                                'name' => 'username',
                            );
                            echo wp_kses(pg_honeypot_field($honeypot_args), $allowed_html);
                        ?>
                        <?php
                            foreach($block['innerBlocks'] as $inner_block) {
                                echo wp_kses(render_block( $inner_block ), $allowed_html);
                            }
                        ?> 
                        <div class="copy--right mt-xs-4">
                            <input class="btn btn--primary animated-element" type="submit" value="<?php echo esc_attr($attributes->submit_text); ?>">
                        </div>
                        </form>
                    </div>
				</div>
                <div id="<?php echo esc_attr($id . '-success') ?>" class="container container-fluid custom-form__success">
                    <div class="block--black pv-xs-7 copy--center br-xs">
                        <div class="custom-form__success__message fc-xl-50 fc-lg-70 fc-xs-100 mh-xs-auto ph-xs-3 ph-lg-0">
                            <h3 class="heading_three"><?php esc_html_e($attributes->success_title, 'trmc'); ?></h3>
                            <p><?php esc_html_e($attributes->success_message, 'trmc'); ?></p>
                        </div>
                        <button 
                            class="dismiss-button"
                            aria-label="<?php esc_attr_e('Dismiss success message', 'trmc') ?>"
                        >
                            <?php 
                                echo wp_kses(pg_render_icon('cookie-close'), $allowed_html);
                            ?>
                        </button>
                    </div>
                </div>
                <div id="<?php echo esc_attr($id . '-failure') ?>" class="container container-fluid custom-form__failure">
                    <div class="block--red-lt pv-xs-7 copy--center br-xs">
                        <div class="custom-form__success__message fc-xl-50 fc-lg-70 fc-xs-100 mh-xs-auto ph-xs-3 ph-lg-0">
                            <h3 class="heading_three"><?php esc_html_e('Oops', 'trmc'); ?></h3>
                            <p><?php esc_html_e('Something went wrong', 'trmc'); ?></p>
                        </div>
                        <button 
                            class="dismiss-button"
                            aria-label="<?php esc_attr_e('Dismiss failure message', 'trmc') ?>"
                        >
                            <?php 
                                echo wp_kses(pg_render_icon('cookie-close'), $allowed_html);
                            ?>
                        </button>
                    </div>
                </div>
            </div>
			<?php endif; ?>
        <?php
        return ob_get_clean();
    }
}
