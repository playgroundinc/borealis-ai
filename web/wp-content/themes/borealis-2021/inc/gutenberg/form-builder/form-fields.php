<?php
/**
 *
 * Helpers to easily output HTML for form elements
 *
 * @file
 * Form Fields Helper
 *
 * @author  Jenny Veens <jenny@playgroundinc.com>
 * @version 1.0
 * @package PG Starter Theme
 */

if ( ! function_exists( 'pg_form_field' ) ) {

    /**
     *
     * Check which field we want to output
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_form_field( $args ) {


        switch ( $args['type'] ) {

            case 'select':
                pg_select_field( $args );
                break;

            case 'radio':
                pg_radio_group( $args );
                break;

            case 'checkbox':
                pg_checkbox_group( $args );
                break;

            case 'file':
                pg_file_field( $args );
                break;

            case 'honeypot':
                pg_honeypot_field( $args );
            break;

            case 'hidden':
                pg_hidden_field( $args );
                break;

            default:
                pg_text_field( $args );
        }

    }
}

if ( ! function_exists( 'pg_text_field' ) ) {

    /**
     *
     * Output a text field
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_text_field( $args ) {

    ?>

		<div class="form-group animated-element">

			<?php pg_input_label( $args['id'], $args['label'], $args['required'] ); ?>

			<?php if ( 'textarea' === $args['type'] ) : ?>
				<textarea
					name="<?php echo esc_attr( $args['name'] ); ?>"
					id="<?php echo esc_attr( $args['id'] ); ?>"
					placeholder="<?php echo esc_attr( $args['placeholder'] ); ?>"
					aria-invalid="false"
                    class="p-xs-2 "
					<?php echo $args['required'] ? 'required' : ''; ?>
					<?php echo $args['helper'] ? 'aria-describedby="helper-' . esc_attr( $args['id'] ) . '"' : ''; ?>
				></textarea>
			<?php else : ?>
                <input
                    type="<?php echo esc_attr( $args['type'] ); ?>"
                    name="<?php echo esc_attr( $args['name'] ); ?>"
                    id="<?php echo esc_attr( $args['id'] ); ?>"
                    placeholder="<?php echo esc_attr( $args['placeholder'] ); ?>"
                    aria-invalid="false"
                    <?php echo $args['required'] ? 'required' : ''; ?>          
                    <?php echo $args['helper'] ? 'aria-describedby="helper-' . esc_attr( $args['id'] ) . '"' : ''; ?>
                />
            <?php endif; ?>
            <?php if ( ! empty( $args['helper'] ) ) : ?>
                <div class="helper-text mt-xs-1" id="helper-<?php echo esc_attr( $args['id'] ); ?>">
                    <span id="form-helper-<?php echo esc_attr( $args['id'] ); ?>" class="form-helper">
                        <?php echo esc_html( $args['helper'] ); ?>
                    </span>
                </div>
            <?php endif; ?>

            <?php if ($args['required']): ?>
                <div class="mt-xs-1 error-text">
                    <span><?php esc_html_e('This field is required', 'trmc'); ?></span>
                </div>
            <?php endif; ?>
		</div>
        <?php

    }
}

if ( ! function_exists( 'pg_file_field' ) ) {
    /**
     *
     * Output a file upload field
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_file_field( $args ) {

        $type         = $args['type'] ?? 'text';
        $name         = $args['name'] ?? '';
        $id           = $args['id'] ?? '';
        $label        = $args['label'] ?? 'Label';
        $placeholder  = $args['placeholder'] ?? 'Enter ' . ucwords($name);
        $helper       = $args['helper'] ?? null;
        $error        = $args['error'] ?? null;
        $required     = $args['required'] ?? false;
        $intial_value = $args['value'] ?? null;
        $helper       = $args['helper'] ?? null;

        ?>

		<div class="form-group animated-element">

		<div class="form-group--file">

			<span class="faux-label label"><?php echo esc_html( $label ); ?><?php echo esc_html( $required ) ? ' <span class="required">*</span>' : ''; ?></span>

			<input
			type="file"
			name="<?php echo esc_attr( $name ); ?>"
			id="<?php echo esc_attr( $id ); ?>"
			placeholder="<?php echo esc_attr( $placeholder ); ?>"
			aria-invalid="false"
			accept=".pdf, .doc"
                <?php echo $required ? 'required' : ''; ?>
                <?php echo $error ? 'data-invalid="' . esc_attr( $error ) . '"' : ''; ?>
                <?php echo $helper ? 'aria-describedby="helper-' . esc_attr( $id ) . '"' : ''; ?>
			/>

			<label class="label" for="<?php echo esc_attr( $id ); ?>"><?php esc_html_e( 'Choose a file...', 'pg' ); ?></label>

		</div>

		<div class="helper-text" id="helper-<?php echo esc_attr( $id ); ?>"></div>

        <?php if ( ! empty( $helper ) ) : ?>
			<span id="form-helper-<?php echo esc_attr( $id ); ?>" class="form-helper">
            <?php echo esc_html( $helper ); ?>
			</span>
		<?php endif; ?>

		</div>

        <?php

    }
}

if ( ! function_exists( 'pg_select_option' ) ) {
    /**
     *
     * Output a select option
     *
     * @param string $value - Value for the option.
     * @param string $text - Display text for the option.
     * @param string $selected - Sets an option to be selected.
     */
    function pg_select_option( $value, $text, $selected = false ) {
        ?>
    
	<option
        <?php echo $value === $selected ? esc_attr( 'selected' ) : null; ?>
		value="<?php echo esc_attr( $value ); ?>"
        <?php echo ! empty( $value ) ? '' : ' disabled'; ?>
        <?php echo empty( $selected ) ? '' : ' selected'; ?>
	><?php echo esc_html( $text ); ?></option>

        <?php
    }
}

if ( ! function_exists( 'pg_select_field' ) ) {
    /**
     *
     * Output a select field
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_select_field( $args ) {

        $allowed_html = pg_allowed_html();
        $type     = $args['type'] ?? 'text';
        $name     = $args['name'] ?? '';
        $id       = $args['id'] ?? '';
        $label    = $args['label'] ?? 'Label';
        $helper   = $args['helper'] ?? null;
        $error    = $args['error'] ?? null;
        $required = $args['required'] ?? false;
        $options  = $args['options'] ?? array();
        $selected = $args['selected'] ?? null;
        $group = $args['group'] ?? false;
        ?>

		<div class="form-group animated-element">

            <?php pg_input_label( $id, $label, $required ); ?>
            <div class="select-wrapper">
                <select
                    name="<?php echo esc_attr( $name ); ?>"
                    id="<?php echo esc_attr( $id ); ?>"
                    <?php echo $required ? 'required' : ''; ?>
                    aria-invalid="false"
                >
                    <option value=""><?php esc_html_e('Select', 'trmc') ?></option>

                    <?php foreach ( $options as $value => $text ) : ?>
                        <?php if ( $group ) : ?>
                            <optgroup class="paragraph" label="<?php echo esc_attr( $text['label'] ); ?>">
                                <?php foreach ( $text['items'] as $key => $item ) : ?>
                                    <?php pg_select_option( $key, $item, $selected === $key ); ?>
                                <?php endforeach; ?>
                            </optgroup>
                        <?php else : ?>
                            <?php pg_select_option( $value, $text, strval( $selected ) === strval( $value ) ); ?>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </select>
                <?php 
                    $icon = pg_render_icon('chevron');
                    echo wp_kses($icon, $allowed_html);
                ?>
                <?php if ( ! empty( $helper ) ) : ?>
                    <div class="helper-text mt-xs-1" id="helper-<?php echo esc_attr( $id ); ?>">
                        <span id="form-helper-<?php echo esc_attr( $id ); ?>" class="form-helper">
                            <?php echo esc_html( $helper ); ?>
                        </span>
                    </div>
                <?php endif; ?>
                <?php if (!empty($args['required']) && $args['required']): ?>
                    <div class="mt-xs-1 error-text">
                        <span><?php esc_html_e('This field is required', 'trmc'); ?></span>
                    </div>
                <?php endif; ?>

                    
            </div>
        </div>  
    <?php
    }
}

if ( ! function_exists( 'pg_radio_group' ) ) {
    /**
     *
     * Output a radio group
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_radio_group( $args ) {
        $allowed_html = pg_allowed_html();

        ?>
        <div class="form-group animated-element">
            <fieldset class="radio__group">

            <legend class="label">
                <?php esc_html_e( $args['label'] ); ?>
            </legend>

            <div class="radio__inputs flex">
                <?php foreach ( $args['options'] as $value => $text ) : ?>
                    <div class="radio__input mt-xs-2 mr-xs-3">
                        <input
                            class="screen-reader-only"
                            type="radio"
                            value="<?php echo esc_attr( $text ); ?>"
                            name="<?php echo esc_attr( $args['name'] ); ?>"
                            id="<?php echo esc_attr( $args['id'] ) . '--' . esc_attr( $value ); ?>"
                        />
                        <label  class="label--sm flex middle-xs" for="<?php echo esc_attr( $args['id'] ) . '--' . esc_attr( $value ); ?>">
                            <span class="block-link faux-radio icon-lg mr-xs-2"><?php $icon = pg_render_icon('radio'); echo wp_kses($icon, $allowed_html); ?></span><?php echo esc_html( $text ); ?>
                        </label>
                    </div>
                <?php endforeach; ?>
            </div>

            </fieldset>
            <?php if ( ! empty( $args['helper'] ) ) : ?>
                <div class="helper-text mt-xs-1" id="helper-<?php echo esc_attr( $args['id'] ); ?>">
                    <span id="form-helper-<?php echo esc_attr( $args['id'] ); ?>" class="form-helper">
                        <?php echo esc_html( $args['helper'] ); ?>
                    </span>
                </div>
            <?php endif; ?>
            <?php if ($args['required']): ?>
                <div class="mt-xs-1 error-text">
                    <span><?php esc_html_e('This field is required', 'trmc'); ?></span>
                </div>
            <?php endif; ?>
        </div>

        <?php
    }
}

if ( ! function_exists( 'pg_checkbox_group' ) ) {
    /**
     *
     * Output a checkbox group
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_checkbox_group( $args ) {
        $allowed_html = pg_allowed_html();    

        ?>
        <div class="form-group animated-element">
            <fieldset class="checkbox__group">

                <legend class="label">
                    <?php echo esc_html( $args['label'] ); ?>
                </legend>

                <div class="checkbox__inputs flex">
                    <?php foreach ( $args['options'] as $value => $text ) : ?>
                        <div class="mr-xs-3 mt-xs-3">
                            <input
                                type="checkbox"
                                value="<?php echo esc_attr( $text ); ?>"
                                name="<?php echo esc_attr( $args['name'] ) . '[]'; ?>"
                                id="<?php echo esc_attr( $args['id'] ) . '--' . esc_attr( $value ); ?>"
                                aria-invalid="false"
                                class="screen-reader-only"
                                aria-checked="false"
                                role="checkbox"
                            />
                            <label class="label--sm flex middle-xs" for="<?php echo esc_attr( $args['id'] ) . '--' . esc_attr( $value ); ?>">
                                <span class="faux-checkbox icon-lg mr-xs-2 block-link">
                                    <?php 
                                        $checked = pg_render_icon('checkbox');  
                                        echo wp_kses($checked, $allowed_html);
                                    ?>
                                </span>
                                <?php esc_html_e( $text ); ?>
                            </label>
                        </div>
                    <?php endforeach; ?>
            </div>

            </fieldset>
            <?php if ( ! empty( $args['helper'] ) ) : ?>
                <div class="helper-text mt-xs-1" id="helper-<?php echo esc_attr( $args['id'] ); ?>">
                    <span id="form-helper-<?php echo esc_attr( $args['id'] ); ?>" class="form-helper">
                        <?php echo esc_html( $args['helper'] ); ?>
                    </span>
                </div>
            <?php endif; ?>
            <?php if ($args['required']): ?>
                <div class="mt-xs-1 error-text">
                    <span><?php esc_html_e('This field is required', 'trmc'); ?></span>
                </div>
            <?php endif; ?>
        </div>

        <?php
    }
}

if ( ! function_exists( 'pg_input_label' ) ) {
    /**
     *
     * Output a form element label
     *
     * @param string  $for - The identifier for the form input.
     * @param string  $label - the display text for the label.
     * @param boolval $required - whether a required indicator needs to be displayed.
     */
    function pg_input_label( $for, $label, $required = false ) {
        ?>

		<label class="label" for="<?php echo esc_attr( $for ); ?>"><?php esc_html_e( $label ); ?></label>

        <?php
    }
}

if ( ! function_exists( 'pg_honeypot_field' ) ) {
    /**
     *
     * Output a hidden honeypot field to reduce spam
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_honeypot_field( $args ) {

        $type = $args['type'] ?? 'text';
        $name = $args['name'] ?? '';

        ?>

        <div style="position: absolute; left: -6000px;" aria-hidden="true">
        <label class="label"><?php esc_html_e( $name ); ?>
            <input type="text" name="<?php echo esc_attr( $name ); ?>" tabindex="-1" value="">
        </label>
		</div>

        <?php
    }
}

if ( ! function_exists( 'pg_hidden_field' ) ) {
    /**
     *
     * Output a hidden field to capture additional data
     *
     * @param array $args - Arguments to create the form element.
     */
    function pg_hidden_field( $args ) {

        $type  = $args['type'] ?? 'text';
        $name  = $args['name'] ?? '';
        $value = $args['value'] ?? '';

        ?>

		<input type="hidden" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( $value ); ?>">

        <?php
    }
}
