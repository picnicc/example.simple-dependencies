# Example: how to include dependencies on the fly

## The gist

This example shows you how to compile your JS plugin along with external dependencies using [picnicc](https://picni.cc). 

Since picnicc uses HTTP to grab files (or "assets, or "components", or "plugins", if you like) and put them together, it's easy to include others' work in your own code. We're going to create a dummy plugin which relies on [Underscore](http://underscorejs.org/), [Backbone](http://backbonejs.org/), and, for good measure, [jQuery](http://jquery.com/) (in a real-life scenario, you would use a CDN distro for jQuery, ok?).

We are going to give our users the possibility to:

* Compile our plugin along with its dependencies in one file
* Use a form to grab only what the dependencies they need.

## Compile (with one click)

Here, we get in touch with the [picnicc API](https://picni.cc/api/v1) using a simple link (params are located in the query string). Picnicc will grab our picnicc.json file, and compile the assets listed in it.

That's it.

### Plain
[compile](https://picni.cc/api/v1/build/?username=picnicc&project=simple-compile.js&picnicc=https://raw.github.com/picnicc/example.simple-compile/master/picnicc.json&if_success=302)


### Minified
[compile](https://picni.cc/api/v1/build/?username=picnicc&project=simple-compile.js&picnicc=https://raw.github.com/picnicc/example.simple-compile/master/picnicc.json&if_success=302&minify=js)

## Customize (HTML form)

Here, we get in touch with the [picnicc API](https://picni.cc/api/v1) through a simple HTML form, which lets our users tell the API what exactly should be put into the user's custom build.

## The good thing is...
The dependencies don't have to be included in our pug in's 





