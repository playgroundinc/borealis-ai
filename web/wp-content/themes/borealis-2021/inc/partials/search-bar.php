<?php 
 
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query) {
        ob_start();
        ?>
        <form action="<?php echo esc_attr($_SERVER['REQUEST_URI']) ?>" class="search-form">
            <label for="search">Search</label>
            <input class="border" id="search" name="q" type="search" value="<?php echo isset( $query ) && ! empty( $query ) ? esc_attr( $query ) : null; ?>">

            <button type="submit">
                <span class="sr-only">Search</span>
            </button> 
            <div role="region" id="search-info"  aria-atomic="true" aria-live="assertive">
                <p id="helper-text">Press enter to search</p>
                <p id="error-state" class="hidden">Please provide a search term.</p>
            </div>
        </form>
        <?php
        return ob_get_clean();
    }
}