// set our baseURL reference path
SystemJS.config({
    map: {
        'jquery': 'bower_components/jquery/dist/jquery.min.js',
        // app is in build folder
        app: 'build'
    },
    packages: {
        app: {
            main: './main.js',
            defaultExtension: 'js'
        }
    }
});
