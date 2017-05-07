import 'jquery';
import navigator from 'navigator';
import pageLoader from 'page-loader';

(function() {

    navigator.initialize();

    $(document).ready(function() {
        pageLoader.loadPage('header', $('.header-container'));
    });

}());