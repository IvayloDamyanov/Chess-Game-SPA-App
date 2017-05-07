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

    function loadInitialPage(sammy) {
        return userDatabase.getCurrentUser()
            .then(user => {
                if (user) {
                    sammy.redirect('#/home');
                } else {
                    pageLoader.loadPage('initial-page', $mainContainer);
                }
            });
    }

    function loadSignupPage() {
        return pageLoader.loadPage('user-signup', $mainContainer);
    }

    function loadSignInPage() {
        return pageLoader.loadPage('user-login', $mainContainer);
    }

    function loadHomePage() {
        return pageLoader.loadPage('header', $headerContainer)
            .then(_ => {
                $mainContainer.html('');
            });
    }

    function signIn(sammy) {
        let email = sammy.params.email,
            password = sammy.params.password;

        userModel
            .signIn(email, password)
            .then(_ => {
                return new Promise(function(resolve, reject) {
                    toastr.success(`Hi, welcome to our Chess Game Site`);
                    sammy.redirect('#/home');
                    resolve();
                })
            })
            .catch(err => {
                toastr.error(err.message);
            });
    }

    function signUp(sammy) {
        let email = sammy.params.email,
            password = sammy.params.password;

        userModel.signUp(email, password)
            .then(_ => {
                return new Promise(function(resolve, reject) {
                    toastr.success('You succesfully logged out!')
                    sammy.redirect('#/login');
                    resolve();
                })
            })
            .catch(err => {
                toastr.error(err.message);
            })
    }
}());

export default userController;