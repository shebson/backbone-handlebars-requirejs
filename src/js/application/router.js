define([
	'jquery',
	'underscore',
	'backbone',
    'views/404',
    'views/index'
    ],
	function($, _, Backbone, error404View, indexView ) {
		var AppRouter = Backbone.Router.extend({
			routes: {
                '' : 'index',
                '*actions' : 'error404'
            },
			index: function() {
				indexView.render();

			},
            error404: function(){
                error404View.render();
            }
		});

		var init = function() {
			var app_router = new AppRouter;
			Backbone.history.start();
		};
		return {
			init: init
	 	}
			
	});
	

    