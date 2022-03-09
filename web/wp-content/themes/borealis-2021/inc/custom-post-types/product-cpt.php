<?php

if (!function_exists('pg_register_product_cpt')) {
    /**
     * Creates an Product Custom Post Type with custom metadata
     */
    function pg_register_product_cpt()
    {
        // Arguments are:
        // - slug.
        // - single.
        // - plural.
        // - args (an optional array to overwrite any default settings).
        $namespace = pg_get_namespace();
        $Product_CPT = new PG_Custom_Post_Type('product', 'Product', 'Products', array('icon' => 'dashicons-admin-tools', 'has_archive' => 'false', 'template' => [[$namespace . '/product-meta-block']]));
        $Product_CPT->register();

        // Register Meta.
        // Slug will automatically be pulled from when it's registered.
        $meta_values = array(
            'market' => 'text',
            'description' => 'text',
            'cta_text' => 'text',
            'cta_link' => 'text'
        );
        $Product_CPT->register_meta($meta_values);
    }
}
