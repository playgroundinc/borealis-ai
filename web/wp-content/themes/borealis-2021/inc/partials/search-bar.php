<?php
if (!function_exists('pg_generate_search_bar')) {
    function pg_generate_search_bar($query, $taxonomies = array(), $tab_array = array(), $post_type = null)
    {
        ob_start();
?>
        <div class="border-b border-color-shade-grey-500">
            <div class="md:container md:flex">
                <div class="md:flex grow items-center">
                    <form class="search-form grow border-b md:border-b-0 border-color-shade-grey-500">
                        <div class="container md:w-full relative md:m-0">
                            <label class="sr-only" for="search"><?php echo esc_html('Search') ?></label>
                            <span class="icon icon--lg absolute left-0 top-6 text-shade-grey-700"><?php echo pg_render_icon('search-publication') ?></span>
                            <input class="border block w-full border-0 py-6 pl-10 pr-4 paragraph" id="search" name="q" type="search" placeholder="<?php echo esc_attr('Search') ?>" value="<?php echo isset($query) && !empty($query) ? esc_attr($query) : null; ?>">
                            <button tabindex="-1" class="sr-only" type="submit">
                                <span><?php echo esc_html('Search') ?></span>
                            </button>
                            <div tabindex="-1" role="region" id="search-info" aria-atomic="true" aria-live="assertive">
                                <p id="helper-text" class="sr-only"><?php echo esc_html('Press enter to search') ?></p>
                            </div>
                        </div>
                    </form>
                    <?php if (isset($tab_array) && !empty($tab_array)) : ?>
                        <form class="container md:w-auto md:m-0 pt-8 md:pt-0">
                            <fieldset id="posttype" class="shrink-0 radio-form">
                                <title class="sr-only"><?php echo esc_html('Show results for:'); ?></title>
                                <ul class="flex items-center mr-6">
                                    <?php foreach ($tab_array as $inner_block => $element) : ?>
                                        <?php
                                        $id = $element['id'];
                                        $title = $element['title'];
                                        ?>
                                        <li tabindex="0" class="focus:outline-4">
                                            <input name="blog-toggle" id="<?php echo esc_attr($id . '-toggle') ?>" class="peer sr-only" type="radio" value="<?php echo esc_attr($id) ?>" <?php echo $post_type && $post_type === $id ? esc_attr('checked') : null ?>>
                                            <label for="<?php echo esc_attr($id . '-toggle') ?>" class="pill block mr-2 peer-checked:pill-active"><?php echo esc_html($title); ?></label>
                                        </li>
                                    <?php endforeach; ?>
                                    <li tabindex="0" class="focus:outline-4">
                                        <input name="blog-toggle" id="<?php echo esc_attr('all-toggle') ?>" class="peer sr-only" type="radio" value="all" <?php echo $post_type && $post_type === 'all' ? esc_attr('checked') : null ?>>
                                        <label for="<?php echo esc_attr('all-toggle') ?>" class="pill block mr-2 peer-checked:pill-active"><?php echo esc_html('All'); ?></label>
                                    </li>
                                </ul>
                            </fieldset>
                        </form>
                    <?php endif; ?>
                </div>

                <div class="flex items-center accordion-block container md:w-auto relative md:m-0">
                    <button class="text-shade-grey-700 flex items-center accordion-row__header py-8 md:py-0 w-full md:w-auto" id="search-topics" aria-controls="search-filters" aria-label="<?php esc_attr('Expand or collapse topic filters'); ?>" aria-expanded="false"> <span class="paragraph-sm h-4 w-4 bg-tint-lightBlue-400 icon text-center rounded-full mr-2 "><span class="icon-sm topics opacity-0 transition-opacity duration-300"><?php echo esc_html('0') ?></span></span><?php echo esc_html('Topics') ?><span class="icon icon-md ml-2"><?php echo pg_render_icon('chevron') ?></span></button>
                </div>
            </div>
        </div>
        <div id="search-filters" class="border-b border-color-shade-grey-500 bg-shade-grey-100 slide-toggle" role="region" aria-labelledby="search-topics">
            <div class="container">
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
                                <p class="paragraph mb-2"><?php echo esc_html($taxonomy['label']) ?></p>
                                <div class="flex md:flex-wrap overflow-x-scroll items-center md:overflow-hidden visible-scroll scrollbar-height px-1">
                                    <?php foreach ($terms as $term) : ?>
                                        <div class="mr-3 mb-4 relative mt-1 ">
                                            <input tabindex="0" class="focus:outline-4 peer absolute top-0 left-0 right-0 bottom-0 h-full w-full z-0" value="<?php echo esc_attr($term->term_id) ?>" name="<?php echo esc_attr($term->term_id . '[]') ?>" type="checkbox" id="<?php echo esc_attr($term->term_id) ?>">
                                            <label tabindex="-1" class="bg-shade-white-400 w-max pill peer-checked:pill-active hover:cursor-pointer focus:outline-4 relative z-2" for="<?php echo esc_attr($term->term_id) ?>">
                                                <?php echo esc_html($term->name) ?>
                                            </label>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </fieldset>
                        <?php endforeach; ?>
                    </form>
                    <button class="clear-checkboxes md:mt-0 mt-3">
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