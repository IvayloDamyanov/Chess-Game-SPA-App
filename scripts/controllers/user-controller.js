import pageLoader from 'page-loader';
import userModel from 'user-model';
import userDatabase from 'user-database';

let userController = (function() {
    let $mainContainer = $('.main-container'),
        $headerContainer = $('.header-container');

    function updateHeader() {
        userDatabase.onStateChanged(user => {
            if (user) {
                $headerContainer.removeClass('hidden');
            } else {
                $headerContainer.addClass('hidden');
            }
        })
    }
}());

export default userController;