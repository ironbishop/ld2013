<?php
/*
Plugin Name: Basf Analytics
Description: Show analytics on users activities.
Version: 0.1
Author: Rene Merino - www.amayamedia..com

/*  Copyright 2012 Rene Merino (email: renemerino4@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

function WpRmDisplayStats() {

	WpRmStats::startup('getData');

	?>

		<div class="wrap">
			<div id="icon-options-general" class="icon32"></div>
			<h2>Site Analytics</h2>
			<br />
			<table id="analytics-table" class="tablesorter widefat fixed">
				<thead>
					<tr>
					    <th>Visit #</th>
					    <th>User</th>
					    <th>Date</th>
					</tr>
				</thead>
				<tbody>
				<tr>

				</tr>
				</tbody>
			</table>
			<div id="test"></div>
		</div>

		<script>
			var debug;
			jQuery(document).ready(function($) {

				$.getJSON('<?php echo get_template_directory_uri() . '/stats/stats.json' ?>', function(data) {
					debug = data;
					var items = [];

					$.each(debug, function(key, val){

					  items.push('<tr><td>' + val.id + '</td><td>' + val.user_id + '</td><td>' + val.visit_date + '</td></tr>');

					  items.join('');

					});

					$('#analytics-table tbody').append(items);

				});

			});
		</script>

	<?php

}


/*-----------------------------------------------------------------------------------*/
/*	Register hooks, filters and actions
/*-----------------------------------------------------------------------------------*/
//function basf_analytics_menu() {
//	add_dashboard_page('Basf Analytics', 'Site Analytics', 'read', 'basf-analytics', 'WpRmDisplayStats');
//}
//add_action('admin_menu', 'basf_analytics_menu');

/*-----------------------------------------------------------------------------------*/
/*	Add JavaScript to our plugin
/*-----------------------------------------------------------------------------------*/
add_action( 'admin_init', 'stats_admin_init' );
add_action( 'admin_menu', 'stats_admin_menu' );

function stats_admin_init() {
    /* Register our script. */
    wp_register_script( 'stats-script', plugins_url( '/script.js', __FILE__ ) );
}

function stats_admin_menu() {
    /* Add our plugin submenu and administration screen */
    $page_hook_suffix = add_dashboard_page('Basf Analytics', 'Site Analytics', 'read', 'basf-analytics', 'WpRmDisplayStats');

    /*
      * Use the retrieved $page_hook_suffix to hook the function that links our script.
      * This hook invokes the function only on our plugin administration screen,
      * see: http://codex.wordpress.org/Administration_Menus#Page_Hook_Suffix
      */
    add_action('admin_print_scripts-' . $page_hook_suffix, 'stats_admin_scripts');
}

function stats_admin_scripts() {
    /* Link our already registered script to a page */
    wp_enqueue_script( 'stats-script' );
}

?>