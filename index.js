var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets'),
    sass = require('metalsmith-sass'),
    autoprefixer = require('metalsmith-autoprefixer'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts'),
    concat = require('metalsmith-concat'),
    cleanCss = require('metalsmith-clean-css');

Metalsmith(__dirname)
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
        includePaths: [__dirname + '/bower_components/bootstrap-sass/assets/stylesheets/'],
        sourceMap: true,
        sourceMapContents: true
    }))
    .use(concat({
        files: './assets/css/*.css',
        output: './assets/css/style.css',
        forceOutput: true
    }))
    .use(cleanCss({
        files: './assets/css/style.css'
    }))
    .build(function (err, files) {
        if (err) {
            throw err;
        }
    });
