import Sammy from 'sammy';
import userController from 'user-controller';
import userSettings from 'user-settings';
import gameController from 'game-controller';
import pageLoader from 'page-loader';

const navigator = (function() {
    const $headerContainer = $('.header-container');

    function initialize() {
        let sammy = Sammy(function() {
            this.before({}, userController.updateHeader);

            this.get('#/', userController.loadInitialPage);

            this.get('#/home', userController.loadHomePage);

            this.get('#/signup', userController.loadSignupPage);

            this.get('#/login', userController.loadSignInPage);

            this.get('#/logout', userController.signOut);

            this.get('#/home/settings', userSettings.loadSettingsPage);

            this.get('#/home/settings/email', userSettings.loadSettingsEmailChange);

            this.get('#/home/settings/password', userSettings.loadSettingsPasswordChange);

            this.get('#/home/user', userSettings.getUser);

            //this.get('#/home/game', gameController.loadScript);

            this.get('#/home/game', gameController.loadGamePage);

            this.get('#/home/help', userSettings.loadHelpSetupPage);

            this.post('#/home/settings/email', userSettings.updateUserEmail);

            this.post('#/home/settings/password', userSettings.updateUserPassword);

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