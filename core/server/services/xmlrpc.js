var _ = require('lodash'),
    config = require('../config'),
    urlService = require('../services/url'),
    common = require('../lib/common'),
    request = require('../lib/request'),
    settingsCache = require('./settings/cache'),

    defaultPostSlugs = [
        'welcome',
        'the-editor',
        'using-tags',
        'managing-users',
        'private-sites',
        'advanced-markdown',
        'themes'
    ],
