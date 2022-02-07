<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pg-wp-starter
 */
$Menu = new PG_Custom_Menus();
$allowed_html = pg_allowed_html();
$current_lang = pg_current_lang();
$option_names = array('footer_banner_copy', 'linkedin', 'github', 'youtube', 'twitter');
$options = pg_get_options($option_names);
?>
</main>
<footer class="bg-shade-white-400">
	<div class="flex pt-13 container w-full mt-20 border-solid border-b border-shade-grey-500 border-opacity-40">
		<div class="pr-80">
			<div class="mb-4">
				<svg class="icon-rbc h-16 w-12" aria-labelledby="icon-rbc">
					<title id="icon-rbc">rbc logo</title>
					<use xlink:href="#icon-rbc"></use>
				</svg>
			</div>
			<div>
				<p class="legal text-shade-grey-700">
					<?php echo wp_kses($options['footer_banner_copy'], $allowed_html); ?>
				</p>
			</div>
		</div>
		<div class="mb-10 grow">
			<?php
			$Menu->generate_menu('footer-main');
			?>
		</div>
	</div>
	<div class="container flex justify-between">
		<div class="flex mt-7 mb-8">
			<p class="cursor-default legal text-shade-grey-700 mr-10">&copy; <?php esc_html_e(date('Y')); ?> <?php esc_html_e('Borealis AI', 'pg') ?></p>
			<?php $Menu->generate_menu('footer-legal', false); ?>
		</div>
		<div class="flex mt-7 justify-end">
			<?php
			$icons = array(
				'linkedin' => __('Link to LinkedIn', 'pg'),
				'github' => __('Link to Github', 'pg'),
				'youtube' => __('Link to YouTube', 'pg'),
				'twitter' => __('Link to Twitter', 'pg'),
			);
			foreach ($icons as $id => $title) {
				if (!empty($options[$id])) {
			?>
					<a class="pl-8 icon--lg" aria-label="<?php esc_attr_e($title); ?>" href="<?php echo esc_url_raw($options[$id]) ?>">
						<?php
						$icon = pg_render_icon($id);
						echo wp_kses($icon, $allowed_html);
						?>
					</a>
			<?php
				}
			}
			?>
		</div>
	</div>
</footer>
</div>

<?php wp_footer(); ?>
</body>

</html>