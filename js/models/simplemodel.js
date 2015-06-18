'use strict';

var Word = Backbone.Model.extend({
	apiKey: 'dc6zaTOxFJmzC',
	url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",

	getData: function() {
		$.ajax(this.url, {
			success: this.fetchSuccess
		});
	},

	fetchSuccess: function(response) {
		$('body').html('<img src="' + response.data.fixed_height_downsampled_url + '">');
	},

	initialize: function() {
		this.view = new WordView({model: this});
		this.on('change:word', function() {
			this.getData();
			this.view.render();
		});
	}
});