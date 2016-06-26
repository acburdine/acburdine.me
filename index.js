var path = require('path');
var metalsmith = require('metalsmith');
var assets = require('metalsmith-assets');
var sass = require('metalsmith-sass');
var autoprefixer = require('metalsmith-autoprefixer');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var concat = require('metalsmith-concat');
var ignore = require('metalsmith-ignore');
var cleanCss = require('metalsmith-clean-css');

var javascriptSourceFiles = [
    'jquery/dist/jquery.min.js',
    'bootstrap-sass/assets/javascripts/bootstrap.min.js',
    './js/**/*.js'
];

metalsmith(__dirname)
    .metadata({
        default_title: 'acburdine.me | the personal website of Austin Burdine' // eslint-disable-line camelcase
    })
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(ignore('public/**'))
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
        helpers: require('./helpers'),
        pattern: '**/*.hbs',
        rename: true
    }))
    .use(assets({
        source: './src/public',
        destination: '.'
    }))
    .use(permalinks({
        relative: false
    }))
    .use(sass({
        outputDir: './assets/css',
        includePaths: [path.join(__dirname, 'bower_components/bootstrap-sass/assets/stylesheets/')],
        sourceMap: true,
        sourceMapContents: true
    }))
    .use(concat({
        files: './assets/css/*.css',
        output: './assets/css/style.css',
        forceOutput: true
    }))
    .use(concat({
        files: javascriptSourceFiles,
        output: './assets/js/site.js',
        searchPaths: ['bower_components'],
        forceOutput: true
    }))
    .use(autoprefixer())
    .use(cleanCss({
        files: './assets/css/style.css'
    }))
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
