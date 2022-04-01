<?php
if (!function_exists('pg_generate_search_bar_main')) {
    function pg_generate_search_bar_main($query, $taxonomies = array())
    {
        ob_start();
?>
        <div class="border-t border-shade-grey-500">
            <div class="container flex">
                <form class="search-form relative grow">
                    <label class="sr-only" for="search">Search</label>
                    <input class=" h2 border block w-full border-0 text-shade-grey-700 py-10" id="search" name="q" type="text" role="search" placeholder="<?php echo esc_attr('Type Here') ?>" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">
                    <button tabindex="-1" class="sr-only" type="submit">
                        <span><?php echo esc_html('Search') ?></span>
                    </button>
                    <div tabindex="-1" role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                        <p id="helper-text" class="sr-only"><?php echo esc_html('Press enter to search') ?></p>
                    </div>
                </form>
                <div class="cursor-pointer flex items-center accordion-block pl-1">
                    <span tabindex="0" id="open-search" class="icon focus:outline-4 icon--xl"><?php echo pg_render_icon('large-search') ?></span>
                    <span tabindex="0" id="close-search" class="icon focus:outline-4 icon--xl hidden"><?php echo pg_render_icon('large-search-close') ?></span>
                </div>
            </div>
            <div class="hidden">
                <button id="search-topics"> <span class="topics"><?php echo esc_html('0') ?></span></button>
            </div>
        </div>
        <div class="bg-shade-white-400 border-b border-shade-grey-500">
            <div id="search-filters" class="container" role="region" aria-labelledby="search-topics">
                <div class="pt-12 pb-6">
                    <form method="post">
                        <?php
                        foreach ($taxonomies as $taxonomy) :
                            $terms = get_terms(array(
                                'taxonomy' => $taxonomy['name'],
                                'hide_empty' => true,
                            ));
                        ?>
                            <fieldset class="checkbox-form" id="<?php echo esc_attr($taxonomy['name']) ?>">
                                <legend class="sr-only"><?php echo esc_html($taxonomy['label']) ?></legend>
                                <div class="flex flex-wrap">
                                    <?php foreach ($terms as $term) : ?>
                                        <div class="mr-3 mb-4">
                                            <input tabindex="-1" class="peer sr-only" value="<?php echo esc_attr($term->term_id) ?>" name="<?php echo esc_attr($term->term_id . '[]') ?>" type="checkbox" id="<?php echo esc_attr($term->term_id) ?>">
                                            <label tabindex="0" class="pill peer-checked:pill-active hover:cursor-pointer focus:outline-4" for="<?php echo esc_attr($term->term_id) ?>">
                                                <?php echo esc_html($term->name) ?>
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