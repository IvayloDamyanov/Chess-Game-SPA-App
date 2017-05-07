import Sammy from 'sammy';
import userController from 'user-controller';
import pageLoader from 'page-loader';

const navigator = (function() {
    const $headerContainer = $('.header-container');

    function initialize() {
        let sammy = Sammy(function() {
            //this.before({}, userController.updateHeader);

            this.get('#/', userController.loadInitialPage);

            this.get('#/home', userController.loadHomePage);

            this.get('#/signup', userController.loadSignupPage);

            this.get('#/login', userController.loadSignInPage);

            this.get('#/logout', userController.signOut);

            this.post('#/signup', userController.signUp);

            this.post('#/login', userController.signIn);

        });

        sammy.run('#/');
    }

    return {
        initialize
    };

}());

export default navigator;