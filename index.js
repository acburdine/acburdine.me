var path = require('path');
var metalsmith = require('metalsmith');
var assets = require('metalsmith-assets');
var sass = require('metalsmith-sass');
var autoprefixer = require('metalsmith-autoprefixer');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var concat = require('metalsmith-concat');
var cleanCss = require('metalsmith-clean-css');

metalsmith(__dirname)
    .metadata({
        title: 'acburdine.me | the personal website of Austin Burdine'
    })
    .source('./src')
    .destination('./build')
    .use(layouts({
        engine: 'handlebars',
        partials: 'layouts/partials',
        helpers: require('./helpers'),
        pattern: '**/*.hbs',
        rename: true
    }))
    .use(permalinks())
    .use(assets({
        source: './src/public',
        destination: '.'
    }))
    .use(sass({
        outputDir: './assets/css',
        includePaths: [path.join(__dirname, '/bower_components/bootstrap-sass/assets/stylesheets/')],
        sourceMap: true,
        sourceMapContents: true
    }))
    .use(concat({
        files: './assets/css/*.css',
        output: './assets/css/style.css',
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
