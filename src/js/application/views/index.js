define([
    'jquery',
    'handlebars',
    'backbone',
    "text!templates/index.html"
    ],
    function ($, Handlebars, Backbone, indexTemplate) {
        "use strict";
        var IndexView = Backbone.View.extend({
            el: '#content',
            render: function () {
                // Compile the template using Handlebars
                var template = Handlebars.compile(indexTemplate);
                // Load the compiled HTML into the Backbone "el"
                this.$el.html(template);
            }
        });
        return new IndexView();
    });