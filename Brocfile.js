// Imports
var filterCoffeeScript = require('broccoli-coffee');
var concat = require('broccoli-concat');
var pickFiles = require('broccoli-static-compiler');
var writeFile = require('broccoli-file-creator');
var mergeTrees = require('broccoli-merge-trees');
var compileSass = require('broccoli-ruby-sass');
var emblem = require('broccoli-ember-emblem');

var instrument = require('broccoli-debug').instrument;

var app = 'app';
app = filterCoffeeScript(app, {bare: true});

var templates = pickFiles(app, {
  srcDir: '/',
  destDir: '/',
  files: ['**/*.emblem']
});
templates = emblem(templates, {
  stripPathFromName: 'templates/'
});
templates = concat(templates, {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/templates.js'
});

app = concat(app, {
  inputFiles: ['*.js', '**/*.js'],
  outputFile: '/assets/app.js'
});
var assets = 'dist'
assets = pickFiles(assets, {
  srcDir: '/',
  destDir: '/',
  files: ['index.html', '**/*.ttf', '**/*.eot', '**/*.svg', '**/*.woff', '**/*.png', '**/*.jpg']
})

var styles = 'styles';
styles = compileSass([styles], 'app.scss', 'assets/app.css');

var vendor = 'src/_lib';
vendor = pickFiles(vendor, {
  srcDir: '/',
  destDir: '/assets',
  files: ['jquery/dist/jquery.js', 'handlebars/handlebars.js', 'ember/ember.js', 'ember-data/ember-data.js']
});
vendor = concat(vendor, {
  inputFiles: ['**/jquery.js', '**/handlebars.js', '**/ember.js', '**/ember-data.js'],
  outputFile: '/assets/vendor.js'
});

module.exports = mergeTrees([app, styles, assets, vendor, templates]);