Note
=================================================

I no longer use this template, but am leaving it on Github as a reference because I know some projects have forked it.

Since writing this template, I've learned a lot, and the Javascript community has also (of course) moved forward. For
a more modern boilerplate, see [backbone-browserify](https://github.com/shebson/backbone-browserify). In addition to
using Browserify (which makes dependency management a breeze), [backbone-browserify](https://github.com/shebson/backbone-browserify)
also handles LESS compilation, handlebars precompilation, unit testing, and more.


Single-Page Webapp Template, Dev Server Included
=================================================

This project provides basic boilerplate for creating a single-page webapp with Backbone, Handlebars, Bootstrap and
Require.js. Out of the box, this template uses r.js to optimize the project by combining and uglifying related scripts.
It also provides a simple development server, so you can get up and running almost instantly.

Get up and running
--------------------

Make sure you have [Node](http://nodejs.org/) installed on your system. You also need to have
`grunt-cli` installed globally:

    $ npm install -g grunt-cli

Clone this repo to a local directory and run `npm install` to install dependencies:

    $ git clone git@github.com:shebson/backbone-handlebars-requirejs.git
    $ cd backbone-handlebars-requirejs
    $ npm install

Run the development server:

    $ grunt server

That's it! Your app is now running on port 3030. To see it, just open it in your browser:

    $ open http://localhost:3030

Grunt will watch your src directory for changes and recompile as needed.


Organization
--------------------

The project source is stored in the `src` directory. When grunt and r.js compiles your application, the optimized build
is stored in the `build` directory (which is ignored by git).

Deploying to Production
------------------------

You have a great deal of flexibility about how to serve your app in production. You could upload the contents of the build
directory to a static origin like Amazon S3, or you could easily add them to an existing application served by Nginx or
Apache. Whatever you use as an origin, the contents of the build directory are prime candidates for a CDN and aggressive
client-side cacheing.

Acknowledgements
------------------

The development server, Gruntfile, and README were directly inspired by Spike Brehm's excellent
[Rendr app template](https://github.com/airbnb/rendr-app-template).

My thinking about developing, organizing, and optimizing Backbone webapps was also heavily influenced by Bill
Heaton's [blog post](http://www.hautelooktech.com/2012/02/01/optimize-and-build-a-backbone-js-javascript-application-with-require-js-using-packages/)
about engineering large Backbone projects at HauteLook.