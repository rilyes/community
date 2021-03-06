// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>.
//
// https://documize.com

import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
	model: function (params) {
		return params.token;
	},

	activate() {
		this.get('browser').setTitleAsPhrase('Reset Password');
		$('body').addClass('background-color-theme-light d-flex justify-content-center align-items-center');
	},

	deactivate() {
		$('body').removeClass('background-color-theme-light d-flex justify-content-center align-items-center');
	}
});
