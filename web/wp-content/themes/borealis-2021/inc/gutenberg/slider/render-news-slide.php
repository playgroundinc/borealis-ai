<?php

if (!function_exists('pg_render_news_slide')) {
    function pg_render_news_slide($block)
    {

        if ($block['blockName'] !== 'pg/news-slide') {
            $fields = array(
                'post' => 0,
            );
            $attributes = pg_get_attributes($block['attrs'], $fields);
            if (!intval($attributes->post) > 0) {
                return;
            }
            $post = get_post($attributes->post);
            $terms = wp_get_post_terms($post->ID, 'research-areas');
            $content_types = wp_get_post_terms($post->ID, 'content-type');
            $content_type = pg_get_content_type($content_types, $post->post_type);
            $url = get_permalink($post->ID);
            $title = $post->post_title;
        } else {
            $fields = array(
                'link' => false,
                'title' => '',
                'source' => '',
            );
            $attributes = pg_get_attributes($block['attrs'], $fields);
            if (empty($attributes->link)) {
                return;
            }
            $url = $attributes->link;
            $title = $attributes->title;
            $content_type = 'News';
        }

        ob_start();
?>
        <li class="w-full sm:w-1/2 tb:w-1/4 border-l border-color-shade-grey-500 flex flex-col group shrink-0 slide" aria-roledescription="slide">
            <a class="border-color-shade-transparent-400 focus:border-primary-electric-blue-400 focus:outline-0 block pt-5 pb-13 pl-6 md:pl-1.17vw pr-4 md:pr-2.9vw bg-shade-white-400 hover:bg-shade-grey-100 grow" href="<?php echo esc_url_raw($url); ?>">
                <div class="flex flex-col-reverse">
                    <div>
                        <h3 class="paragraph pt-7 group-hover:underline"><?php echo esc_html($title); ?></h3>
                        <?php if (!empty($attributes->source) && strlen($attributes->source) > 0) : ?>
                            <p class="paragraph-sm text-shade-grey-700 pt-2"><?php echo esc_html($attributes->source); ?></p>
                        <?php endif; ?>
                    </div>
                    <p class="paragraph-sm text-shade-grey-700"><?php echo esc_html($content_type); ?></p>
                </div>
            </a>
        </li>

<?php
        return ob_get_clean();
    }
}
