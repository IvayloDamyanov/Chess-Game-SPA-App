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
        'navigator': './config/navigator.js',
        'main': './../scripts/main.js',

        // Library files
        'jquery': './../node_modules/jquery/dist/jquery.min.js',
        'handlebars': './../node_modules/handlebars/dist/handlebars.min.js',
        'bootstrap': './../node_modules/bootstrap/dist/js/bootstrap.min.js',
        'sammy': './../node_modules/sammy/lib/sammy.js',

        // Firebase files
        'firebase': './../libs/js/firebase.js',
        'firebase-config': './config/firebase-config.js',

        // loaders
        'template-loader': './../scripts/utils/template-loader.js',
        'page-loader': './../scripts/utils/page-loader.js',

        // controllers
        'user-controller': './../scripts/controllers/user-controller.js',
        'user-settings': './../scripts/controllers/user-settings.js',
        'game-controller': './../scripts/controllers/game-controller.js',

        // user model and database
        'user-model': './../scripts/models/user-model.js',
        'user-database': './../database/firebase-user-database.js',

        // game logic files
        'pieces': './../scripts/pieces.js',
        'mouseCoors': './../scripts/mouseCoords.js',
        'board': './../scripts/board.js',
        'drawBoard': './../scripts/drawBoard.js',
        'player': './../scripts/player.js'
    }
});

System.import('main');