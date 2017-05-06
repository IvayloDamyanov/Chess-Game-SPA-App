System.config({
    transpiler: 'plugin-babel',
    paths: {
        'npm:*': './../node_modules/*'
    },
    map: {
        // System.js files
        'plugin-babel': './../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // App files
        'main': './../scripts/main.js',

        // Library files
        'jquery': './../node_modules/jquery/dist/jquery.min.js',
        'handlebars': './../node_modules/handlebars/handlebars.min.js',
        'bootstrap': './../node_modules/bootstrap/dist/js/bootstrap.min.js',
        'sammy': './../node_modules/sammy/lib/sammy.js',
    }
});

System.import('main');