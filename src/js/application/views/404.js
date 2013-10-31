define([
    'jquery',
    'handlebars',
    'backbone',
    "text!templates/404.html",
    ], function($, Handlebars, Backbone, errorTemplate) {
        var error404view = Backbone.View.extend({
            el: '#content',
            render: function() {
                // Compile the template using Handlebars
                var template = Handlebars.compile(errorTemplate);
                // Load the compiled HTML into the Backbone "el"
                this.$el.html( template );
            }

        });

        return new error404view;
    });