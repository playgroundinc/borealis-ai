<?php 
/**
 * Hero Template
 * 
 * This is the template that displays the entire hero.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package trimac
 */

if (is_404()) {
    return;
}
$hero_fields = array(
    'hero_style' => 'square',
    'hero_background_color' => 'grey',
    'headline' => $post->post_title,
    'hero_cta_one_text' => false,
    'hero_cta_one_link' => false,
    'hero_cta_two_text' => false,
    'hero_cta_two_link' => false,
    'hero_video_id' => null,
);

global $post;

$fields = pg_get_meta_values($post->ID, $hero_fields);
$first_btn = !empty($fields['hero_cta_one_text']) && !empty($fields['hero_cta_one_link']);
$second_btn = !empty($fields['hero_cta_two_text']) && !empty($fields['hero_cta_two_link']);
$description = get_the_excerpt();
$single = is_singular('news-releases');
if ($single || is_page_template('page-search.php')) {
    $fields['hero_background_color'] = 'white';
}
$allowed_html = pg_allowed_html();
$classes = 'flex hero hero--' . $fields['hero_style'] . ' block--' . $fields['hero_background_color'];

$image = get_the_post_thumbnail_url($post->ID);
if (empty($image)) {
    $classes .= " hero--no-img";
} 

if ($fields['hero_style'] === 'slanted') {
    $classes .= " page-hero-slanted";
}

if ($fields['hero_style'] === 'video') {
    $video = wp_get_attachment_url(intval($fields['hero_video_id']));
}

?>

<div class="<?php echo esc_attr($classes)?>">
    <?php if ($single): ?>
        <?php 
            $news_release_fields = array('news_release_date' => ''); 
            $news_release_meta = pg_get_meta_values($post->ID, $news_release_fields);
            $date = pg_get_formatted_date($news_release_meta['news_release_date']);
        ?>
        <div class="fc-xs-100 copy--center container--single">
            <div> 
                <div class="hero__text" role="contentinfo">
                    <h1 class="headline mb-xs-0"><?php echo esc_html($post->post_title)?></h1>
                    <p class="pt-xs-2"><?php esc_html_e('Published on', 'trmc') ?> <?php echo esc_html($date);?></p>
                </div>
            </div>
        </div>
    <?php elseif (!empty($video)): ?>
        <div class="hero-video">
            <video tabindex="-1" class="video" loop muted autoplay playsinline <?php  echo !empty($image) ? esc_html('poster=' . $image) : esc_html('poster=' . get_template_directory_uri() . '/dist/images/placeholder.png') ?>>
                <source src="<?php echo esc_url_raw($video); ?>" type="video/mp4">
            </video>
            <div class="video-overlay">
                <div class="container container-fluid flex between-xs">
                    <div class="pl-xl-3 fc-xs-100 flex col-xs center-xs hero__text fc-md-50 fc-xl-40">
                        <div role="contentinfo">
                            <?php if (!empty($fields['headline'])): ?>
                                <h1 class="screen-reader-only"><?php echo esc_html($post->post_title); ?></h1>
                                <h2 class="headline mb-xs-0"><?php echo esc_html($fields['headline']); ?></h2>
                            <?php else: ?>
                                <h1 class="headline"><?php echo esc_html($post->post_title); ?></h1>
                            <?php endif; ?>
                            <?php if (!empty($description)): ?>
                                <p class="mt-xs-2"><?php echo esc_html($description)?></p>
                            <?php endif; ?>
                            <?php if ($first_btn || $second_btn): ?>
                                <div class="wp-block-buttons flex col-xs row-lg flex-fb-auto">
                                    <?php if ($first_btn): ?>
                                        <div class="is-style-outline mt-xs-4 mr-xs-3">
                                            <a class="btn btn--secondary" href="<?php echo esc_url_raw($fields['hero_cta_one_link']) ?>"><?php echo esc_html($fields['hero_cta_one_text']) ?></a>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($second_btn): ?>
                                        <div class="mt-xs-3 mt-lg-4">
                                            <a class="btn btn--primary" href="<?php echo esc_url_raw($fields['hero_cta_two_link']) ?>"><?php echo esc_html($fields['hero_cta_two_text']) ?></a>
                                        </div>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <div class="video-overlay__controls">
                    <div class="container container-fluid copy--right">
                        <button class="video-overlay__controls__btn mb-xs-3 video-overlay__controls--playing" aria-label="<?php esc_attr_e('Pause or play hero video', 'trmc') ?>">
                            <?php 
                                echo wp_kses(pg_render_icon('pause'), $allowed_html);
                                echo wp_kses(pg_render_icon('play'), $allowed_html);
                            ?>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    <?php else: ?>
    <div class="container container-fluid animated-element flex <?php echo !empty($image) ? esc_attr('between-xs') : esc_attr('center-xs copy--center') ?>">
        <?php 
            $content_classes = 'fc-xs-100 flex col-xs center-xs hero__text';
            if (!empty($image) && $fields['hero_style'] !== 'square') {
                $content_classes .= ' fc-md-50 fc-xl-40 pl-xl-3';
            } else {
                if ($fields['hero_style'] === 'square') {
                    $content_classes .= ' middle-sm';
                } else {
                    $content_classes .= ' middle-sm fc-xl-50 fc-lg-60 fc-md-70';
                }
            }
        ?>
        <div class="<?php  echo esc_attr($content_classes); ?>" role="contentinfo">
            <?php if (!empty($fields['headline']) && !is_post_type_archive('news-releases')): ?>
                <h1 class="screen-reader-only"><?php echo esc_html($post->post_title); ?></h1>
                <h2 class="headline mb-xs-0"><?php echo esc_html($fields['headline']); ?></h2>
            <?php elseif (is_post_type_archive('news-releases')): ?>
                <h1 class="heading_one mb-xs-0"><?php echo esc_html_e('News Releases', 'trmc'); ?></h1>
            <?php else: ?>
                <h1 class="heading_one mb-xs-0"><?php echo esc_html($post->post_title); ?></h1>
            <?php endif; ?>
            <?php if (!empty($description)): ?>
                <p class="mt-xs-1 mt-lg-2"><?php echo esc_html($description)?></p>
            <?php endif; ?>
            <?php if ($first_btn || $second_btn): ?>
                <div class="wp-block-buttons flex col-xs row-lg">
                    <?php if ($first_btn): ?>
                        <div class="is-style-outline mt-xs-4 mr-sm-3"><a class="btn btn--secondary" href="<?php echo esc_url_raw($fields['hero_cta_one_link']) ?>"><?php echo esc_html($fields['hero_cta_one_text']) ?></a></div>
                    <?php endif; ?>
                    <?php if ($second_btn): ?>
                        <div class="mt-xs-3 mt-lg-4 mr-sm-3"><a class="btn btn--primary" href="<?php echo esc_url_raw($fields['hero_cta_two_link']) ?>"><?php echo esc_html($fields['hero_cta_two_text']) ?></a></div>
                    <?php endif; ?>

                </div>
            <?php endif; ?>
        </div>
        <?php if (!empty($image) && $fields['hero_style'] !== 'square'): ?>
            <div class="fc-xs-100 fc-md-40 pt-xs-7 flex center-xs end-lg hero__image-container">
                <div class="hero__circle"></div>
                <div class="hero__image fc-xs-70 fc-50-md fc-100-xs" style="background-image: url(<?php echo esc_url_raw($image) ?>)" >
                </div>
            </div>
        <?php endif; ?>
    </div>
    <?php endif; ?>

</div>