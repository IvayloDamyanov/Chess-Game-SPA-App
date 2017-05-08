import 'jquery';
import pageLoader from 'page-loader';

let gameController = (function() {
    let $headerContainer = $('.header-container');

    function loadGamePage() {
        return pageLoader.loadPage('game', $headerContainer);
    }

    return {
        loadGamePage
    }
}());

export default gameController;