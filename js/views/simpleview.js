'use strict';

var WordView = Backbone.View.extend({
	el: '#search',
	events: {
		'click #set': 'setWord'
	},

	setWord: function(){
		var word = $('#word').val();
	
		this.model.set({word: word});
	},

	render: function() { 
		gif: {
			this.$el.html(this.model.get('image_url'));
		}
	}
});