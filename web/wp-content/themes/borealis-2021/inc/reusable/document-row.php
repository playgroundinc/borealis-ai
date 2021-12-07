<?php
/**
 * Function for outputing a single document row
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package pg-wp-starter
 */

if (!function_exists('trmc_document_row')) {
    /**
     *
     * Outputs an individual row for a post or block
     *
     * @param array $args - function arguments.
     */
    function trmc_document_row( $args ) {
        $allowed_html = pg_allowed_html();
        $file_url = null;
        if (!empty($args->file_id)) {
            $file_url = wp_get_attachment_url($args->file_id);
        }
        ?>
        <?php if (!empty($file_url)): ?>
            <article class="document-block__row">
                <div class="flex row-lg col-xs between-xs middle-lg document-block__container">
                    <div class="document-block__name">
                        <h3 class="heading_four pb-lg-4 mb-xs-2 mb-md-4 mb-lg-0">
                            <?php echo ! empty( $args->name ) ? esc_html( sanitize_text_field( $args->name ) ) : null; ?>
                        </h3>
                    </div>
                    <a class="heading_five link--plain pb-xs-4 block-link" href="<?php echo ! empty( $file_url ) ? esc_url( $file_url ) : null; ?>" aria-label="<?php esc_attr_e('Download file', 'trmc') ?>">
                        <span class="<?php echo $args->icon ? esc_attr('pr-xs-2') : null ?>">
                            <?php echo ! empty( $args->link_text ) ? esc_html( sanitize_text_field( $args->link_text ) ) : null; ?>
                        </span>
                        <span class="icon-lg">
                            <?php 
                                if ( $args->icon ) {
                                    $icon = pg_render_icon('download');
                                    echo wp_kses($icon, $allowed_html);
                                } 
                            ?>
                        </span>
                    </a>
                </div>
            </article>
        <?php
        endif;
    }

}
