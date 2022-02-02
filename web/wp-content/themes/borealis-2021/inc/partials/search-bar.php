<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array())
    {
        ob_start();
?> 
    <div class="border-b border-shade-grey-500">
        <div class="container flex">
            <form class="search-form relative grow">
                <label class="sr-only" for="search">Search</label>
                <span class="icon icon--lg absolute left-0 top-6"><?php echo pg_render_icon('search')?></span>
                <input class="border block w-full border-0 py-6 pl-10 pr-4" id="search" name="q" type="search" placeholder="<?php echo esc_attr('Search our Publications')?>" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">

                <button class="sr-only" type="submit">
                    <span ><?php echo esc_html('Search') ?></span>
                </button>
                <div role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                    <p id="helper-text" class="sr-only"><?php echo esc_html('Press enter to search') ?></p>
                </div>
            </form>
            <div class="flex items-center accordion-block">
                <button class="text-shade-grey-700 flex items-center accordion-row__header" id="search-topics" aria-controls="search-filters" aria-label="<?php esc_attr('Expand or collapse topic filters'); ?>" aria-expanded="false"> <span class="paragraph-sm h-4 w-4 bg-tint-lightBlue-400 icon text-center rounded-full mr-2 "><span class="icon-sm topics opacity-0 transition-opacity duration-300"><?php echo esc_html('0') ?></span></span><?php echo esc_html('Topics') ?><span class="icon icon-md ml-2"><?php echo pg_render_icon('chevron')?></span></button>
            </div>
        </div>
    </div>
    <div class="bg-shade-grey-100">
        <div id="search-filters" class="container slide-toggle" role="region" aria-labelledby="search-topics">
            <div class="pt-12 pb-6">
                <form method="post">
                <?php
                    foreach ($taxonomies as $taxonomy):
                        $terms = get_terms(array(
                            'taxonomy' => $taxonomy['name'],
                            'hide_empty' => true,
                        ));
                        ?>
                        <fieldset class="checkbox-form" id="<?php echo esc_attr($taxonomy['name']) ?>">
                            <legend class="sr-only"><?php echo esc_html($taxonomy['label']) ?></legend>
                            <div class="flex flex-wrap">
                                <?php foreach ($terms as $term): ?>
                                    <div class="mr-7 mb-4">
                                        <input 
                                            class="peer sr-only"
                                            value="<?php echo esc_attr($term->term_id)?>" 
                                            name="<?php echo esc_attr($term->term_id . '[]') ?>" 
                                            type="checkbox" 
                                            id="<?php echo esc_attr($term->term_id) ?>" 
                                        >
                                        <label 
                                            class="pill peer-checked:pill-active hover:cursor-pointer"
                                            for="<?php echo esc_attr($term->term_id) ?>">
                                            <?php echo esc_html($term->name)?> 
                                        </label>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </fieldset>
                    <?php endforeach; ?>
                </form>
                <button class="clear-checkboxes">
                    <?php echo esc_html('Clear All') ?>
                </button>
            </div>
        </div>
    </div>
<?php
        return ob_get_clean();
    }
}
?>