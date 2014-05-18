ember-scaffold
==============

Starter scaffolding for an ember app built using bower, grunt, coffescript, ember.js, and jasmine.js

Simply clone and run

    $bower install --save
    $grunt install --save-dev
    $grunt compile
    $grunt watch

and you are up and running!

The app directory contains the ember app in uncompiled coffescript and emberscript templates. With grunt watch running, it will automatically compile and concatenate the coffescript into app.js in the dist/assets directory and the emblem into templates.js in the dist/assets directory.

The dist directory contains the index.html and most recent compiled copy of the app.js, temp.js, and lib.min.js which contains the basic associated dependencies. Running $grunt concat will concat the dependencies installed by bower and place them in lib.min.js in the dist/assets directory.

The specs directory contains the jasmine.js files, with the src file containing coffeescript versions. The coffeescript will autocompile with grunt watch and changes to the .js files will trigger the test suite.

src contains the Gruntfile.coffee file. The _lib sub-directory is where bower will install it's dependancies, while the js folder is where the grunt copy task copies the needed dependency files.

styles contains the uncompiled scss and the vendor folder is where the grunt copy function copies the scss bootstrap files. Running '$grunt scss' will compile app.scss and place it in dist/assets.

the tasks folder contains all of the grunt task config files which have been separated out from the gruntfile into js modules. The src directory contains coffeescript versions.
