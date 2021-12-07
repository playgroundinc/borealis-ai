<?php 
/**
 * Development Block Inputs
 * 
 */
class Development_Inputs {
  /**
   * Constructor function.
   * 
   * @param string $name the input for this name.
   */
  public function __construct($name = null, $fields = array('xxl','xl','lg','md','sm','xs'), $type = 'fluid') {
		$this->name = $name;	
    $this->fields = $fields;
    $this->type = $type;
  }
  /**
   * Returns the fields required for each kind of input.
   */
  private function get_input_fields() {
    return $this->fields;
  }

  private function generate_label($label = null) {
    if ($label) {
      return ucwords(str_replace('-', ' ', $label));
    } 
    return ucwords(str_replace('_', ' ', $this->name));
  }
  
  private function generate_rule() {
    return str_replace("_", "-", $this->name );
  }
  /**
   * Generate Container Inputs
   * 
   * Returns the set of inputs for the container.
   */
  public function generate_numeric_input() {
    $fields = $this->get_input_fields();
    ob_start();
    ?>
    
    <div class="row development-block__controls__single"> 
      <div class="col-xs-12">
        <h3 class="heading_three"><?php echo esc_html(ucfirst(str_replace('_', ' ', $this->name)) . ' Settings'); ?></h3>
      </div>
      <?php foreach($fields as $key=>$field): ?>
          <div class="col-md-5">
            <?php $label = $this->generate_label($key); ?>
            <label for="<?php echo esc_attr($this->name . "_" . $key) ?>"><?php echo esc_html(ucfirst($this->name) . ' ' . $label) ?></label>
            <input type="number" id="<?php echo esc_attr($this->name . "_" . $key ) ?>">
          </div>
          <div class="col-md-1">
            <label for="<?php echo esc_attr($this->name . "_" . $key . "_units") ?>">Units</label>
            <select name="<?php echo esc_attr($this->name . "_" . $key . "_units") ?>" id="<?php echo esc_attr($this->name . "_" . $key . "_units") ?>">
              <?php if (is_countable($field) && !empty($field)): ?>
                <?php foreach ($field as $option): ?>
                  <option value="<?php echo esc_attr($option)?>"><?php echo esc_html($option) ?></option>
                <?php endforeach; ?>
              <?php else: ?>
                <option value="<?php echo esc_attr($field)?>"><?php echo esc_html($field) ?></option>
              <?php endif; ?>
            </select>
          </div>

      <?php endforeach; ?>
    </div>
    <?php
    return ob_get_clean();
  }

  /**
   * Generate Fluid Type Inputs.
   * 
   * Generates a set of current, max, and min font size inputs for all breakpoints.
   */
  public function generate_fluid_type_input() {
    ob_start();
    ?>
    <?php $label = $this->generate_label(); ?>

        <div class="row development-block__controls__single"> 
          <div class="col-xs-12">
            <h3 class="heading_three"><?php echo esc_html($label . ' Controls')?></h3>
          </div>
          <div class="col-md-4">
            <label for="<?php echo esc_attr($this->name ) ?>"><?php echo esc_html($label . ' Current') ?></label>
            <input type="number" disabled="true" id="<?php echo esc_attr($this->name) ?>" data-active="false">
          </div>
          <div class="col-md-4">
            <label for="<?php echo esc_attr($this->name . "_min") ?>"><?php echo esc_html($label . ' Min') ?></label>
            <input type="number" id="<?php echo esc_attr($this->name . "_min") ?>" data-active="false">
          </div>
          <div class="col-md-4">
            <?php $label = $this->generate_label(); ?>
            <label for="<?php echo esc_attr($this->name . "_max") ?>"><?php echo esc_html($label . ' Max') ?></label>
            <input type="number" id="<?php echo esc_attr($this->name . "_max") ?>" data-active="false">
          </div>
        </div>
    <?php
    return ob_get_clean();
  }

  public function get_input() {
    if ($this->type === 'numeric') {
      $input = $this->generate_numeric_input();
      return $input;
    }
    $input = $this->generate_fluid_type_input();

    return $input;
  }
}