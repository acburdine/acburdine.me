var _ = require('lodash');
var path = require('path');
var Handlebars = require('handlebars');

module.exports = {
    if: function (conditional, truth, falsehood) {
        // Taken from the handlebars source code
        if (_.isUndefined(falsehood) || _.isObject(truth)) {
            if (_.isFunction(conditional)) {
                conditional = conditional.call(this);
            }

            // Default behavior is to render the positive path if the value is truthy and not empty.
            // The `includeZero` option may be set to treat the condtional as purely not empty based on the
            // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
            if ((!truth.hash.includeZero && !conditional) || _.isEmpty(conditional)) {
                return truth.inverse(this);
            }

            return truth.fn(this);
        }

        if (conditional) {
            return truth;
        }

        return falsehood;
    },

    link: function (text, url) {
        text = Handlebars.Utils.escapeExpression(text);
        url = Handlebars.Utils.escapeExpression(url);

        var result = '<a href="' + url + '">' + text + '</a>';
        return new Handlebars.SafeString(result);
    },

    stylesheet: function (css) {
        css = '/assets/css/' + Handlebars.Utils.escapeExpression(css) + '.css';

        var result = '<link rel="stylesheet" type="text/css" href="' + css + '" />';
        return new Handlebars.SafeString(result);
    },

    script: function (js) {
        js = '/assets/js/' + Handlebars.Utils.escapeExpression(js) + '.js';

        var result = '<script type="text/javascript" src="' + js + '"></script>';
        return new Handlebars.SafeString(result);
    }
};
