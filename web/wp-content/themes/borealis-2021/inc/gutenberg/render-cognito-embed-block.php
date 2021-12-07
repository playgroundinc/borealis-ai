<?php
/**
 *
 * Render Cognito Embed Block
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
        $namespace . '/cognito-form',
        array(
            'render_callback' => 'trmc_render_cognito_embed_block',
        )
    );
}

if ( ! function_exists( 'trmc_render_cognito_embed_block' ) ) {
    /**
     * Render out cognito embed block
     *
     * @param array $attrs the current block's attributes.
     * @param mixed $content the content of the block.
     * @param array $block_obj array of the block features.
     */
    function trmc_render_cognito_embed_block( $attrs, $content, $block_obj ) {
        $block = $block_obj->parsed_block;
        // Need to set the name of the attribute and the default as a safeguard.
        $fields     = array(
            'cognito_url' => null,
            'form_id' => null,
        );
        $attributes = pg_get_attributes( $attrs, $fields );
        ob_start();
        if (!empty($attributes->form_id) && !empty($attributes->cognito_url)):
        ?> 
            <div class="custom-component">
                <div class="container container--content container-fluid cognito__embed animated-element">
                    <div class="cognito ">
                        <script src="<?php echo esc_url_raw($attributes->cognito_url) ?>"></script>
                        <script>Cognito.load("forms", { id: "<?php echo esc_html($attributes->form_id )?>" });</script>
                    </div>
                </div>
            </div>
        <?php
        endif;
        return ob_get_clean();
    }
}
