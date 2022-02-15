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
	<div class="tb:flex pt-13 container w-full mt-20 border-solid border-b border-shade-grey-500 border-opacity-40">
		<div class="pr-14">
			<div class="mb-4 h1">
				<?php echo pg_render_icon('rbc'); ?>
			</div>
			<div class="legal text-shade-grey-700">
				<?php echo wp_kses(wpautop($options['footer_banner_copy']), $allowed_html); ?>
			</div>
		</div>
		<div class="mb-10 grow">
			<?php
				$Menu->generate_menu('footer-main');
			?>
		</div>
	</div>
	<div class="container tb:flex items-center">
		<p class="cursor-default legal text-shade-grey-700 pt-12 md:pr-5 pb-5 md:pt-7 md:pb-0 tb:pt-6 lg:pt-7 tb:pb-8">&copy; <?php esc_html_e(date('Y')); ?> <?php esc_html_e('Borealis AI', 'pg') ?></p>
		<div class="md:flex justify-between grow">
			<?php $Menu->generate_menu('footer-legal', false); ?>
			<?php
			$icons = array(
				'linkedin' => __('Link to LinkedIn', 'pg'),
				'github' => __('Link to Github', 'pg'),
				'youtube' => __('Link to YouTube', 'pg'),
				'twitter' => __('Link to Twitter', 'pg'),
			);
			?>
			<ul class="flex relative -left-4 md:left-0 md:-right-4">
				<?php foreach ($icons as $id => $title): ?>
					<?php if (!empty($options[$id])): ?>
						<li>
							<a class="px-4 pt-3 md:pt-7 pb-8 icon--lg block text-shade-grey-700 hover:text-primary-electric-blue-400 transition duration-300" aria-label="<?php esc_attr_e($title); ?>" href="<?php echo esc_url_raw($options[$id]) ?>">
								<?php
								$icon = pg_render_icon($id);
								echo wp_kses($icon, $allowed_html);
								?>
							</a>
						</li>
					<?php endif; ?>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</footer>
</div>

<?php wp_footer(); ?>
</body>

</html>