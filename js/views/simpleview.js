'use strict';

var WordView = Backbone.View.extend({
	el: '#search',
	events: {
		'click #set': 'setWord'
	},

	setWord: function(){
		var word = $('#word').val();
		// some logic that searches giphy by word then 
		// assigns it to the model word 

		this.model.set({word: word});
		// console.log(this.model.get('data'));
	},

	render: function() { 
		// this.$el.html(this.model.get('word'));
		this.$el.html(this.model.get('image_url'));
	}
});