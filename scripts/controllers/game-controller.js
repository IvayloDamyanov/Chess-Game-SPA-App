import 'jquery';
import pageLoader from 'page-loader';

let gameController = (function() {
    let $mainContainer = $('.main-container');

    function loadGamePage() {
        return pageLoader.loadPage('game', $mainContainer);
    }

    // Not working correctly
    /*/function loadScript() {
        $('.game-start').on('click', function() {
            $.getScript('./../gameLogic/startGame.js', function() {});
        });
    }*/

    return {
        loadGamePage,
        //loadScript
    }
}());

export default gameController;