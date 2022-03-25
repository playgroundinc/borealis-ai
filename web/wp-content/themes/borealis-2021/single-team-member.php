<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package pg-wp-starter
 */

get_header();
$namespace = pg_get_namespace();
$image_id = get_post_thumbnail_id();
$image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', TRUE);
$image = get_the_post_thumbnail_url($post->ID, 'medium');
$excerpt = get_the_excerpt($post->ID);
$blocks = parse_blocks($post->post_content);
$paragraphs = array_filter($blocks, function ($block) {
    return $block['blockName'] === 'pg/paragraph';
});
$allowed_html = pg_allowed_html();
$additional_content = array_filter($blocks, function ($block) {
    return $block['blockName'] !== 'pg/paragraph' && $block['blockName'] !== 'pg/team-member-meta';
});
?>
<main id="main-content" class="main-content container pt-25">
    <div class="md:flex justify-between">
        <?php if (isset($image) && strlen($image) > 0) : ?>
            <div class="basis-1/4 shrink-0 text-center md:text-left">
                <div class="rounded-large inline-block overflow-hidden">
                    <img src="<?php echo esc_url_raw($image) ?>" alt="<?php echo esc_attr($image_alt) ?>">
                </div>
            </div>
        <?php endif; ?>
        <div class="<?php echo isset($image) && strlen($image) > 0 ? esc_attr('basis-8/12 pt-14 md:pt-0') : esc_attr('w-full'); ?> shrink-0 paragraph-style mb-20 md:mb-40">
            <p class="paragraph-lg"><?php echo esc_html($excerpt) ?></p>
            <?php if (!empty($paragraphs)) : ?>
                <?php
                foreach ($paragraphs as $paragraph) {
                    echo wp_kses(render_block($paragraph), $allowed_html);
                }
                ?>
            <?php endif; ?>
        </div>
    </div>
</main>
<?php
if (!empty($additional_content)) {
    foreach ($additional_content as $added_block) {
        echo wp_kses(render_block($added_block), $allowed_html);
    }
}
?>

<?php
get_footer();
