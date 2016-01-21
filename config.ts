System.config({
    map: {
        'npm': 'system-npm',
        'npm-extension': 'system-npm/npm-extension'
    },
    paths: {
        'system-npm/*': 'node_modules/system-npm/*.js'
    },
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
})