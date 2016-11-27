var tpl = require('lodash.template');

module.exports = function(content, file, opt) {
    opt = opt || {};

    var NSwrapper = '\'use strict;\'\nvar _ = {}; _.escape = require(\'lodash.escape\');\nmodule.exports = ';
    var template = tpl(content, false, opt.templateSettings).source;

    return NSwrapper + template + ';';
}
