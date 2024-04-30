<?php
/**
 * Plugin Name:       Mrs Tabs Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Md. Radush Shalihin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mrs-tabs-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_mrs_tabs_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_mrs_tabs_block_block_init' );

/**
 * Enqueues the jquery assets scripts.
 *
 * @return void
 */
function mrs_block_mrs_tabs_block_enqueue_assets() {
	if ( ! is_admin() ) {
		wp_enqueue_script( 'mrs-block-enqueue-script', plugin_dir_url( __FILE__ ) . 'mrs-tab-script.js', array( 'jquery' ), wp_rand( 1, 100 ), true );
	}
}
add_action( 'init', 'mrs_block_mrs_tabs_block_enqueue_assets' );
