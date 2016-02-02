require('browsernizr/test/css/animations');
require('browsernizr/test/css/transforms3d');
require('browsernizr/test/svg');
require('browsernizr/test/touchevents');
require('browsernizr');

require('./modules/menu');

const webfont = require('webfontloader');
webfont.load({
    custom: {
        families: ['FontAwesome'],
        urls: ['/fonts/font-awesome/css/font-awesome.min.css'],
        testStrings: {
            FontAwesome: '\ue800',
        },
    },
});
