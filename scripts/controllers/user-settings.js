import 'jquery';
import userDatabase from 'user-database';
import pageLoader from 'page-loader';
import * as firebase from "firebase";
import firebaseModule from 'firebase-config';

let userSettings = (function() {
    let $mainContainer = $('.main-container');

    function loadSettingsPage() {
        return pageLoader.loadPage('user-settings', $mainContainer);
    }

    function loadHelpSetupPage() {
        return pageLoader.loadPage('help', $mainContainer);
    }

    function loadSettingsEmailChange() {
        return pageLoader.loadPage('update-email', $mainContainer);
    }

    function loadSettingsPasswordChange() {
        return pageLoader.loadPage('update-password', $mainContainer);
    }

    function updateUserEmail(sammy) {
        let user = firebase.auth().currentUser;

        let newEmail = sammy.params.email[0];

        user.updateEmail(newEmail)
            .then(function() {
                toastr.success(`Succesfully changed user email!`);
                sammy.redirect('#/home');
            }, function(err) {
                toastr.error(err.message);
            });
    }

    function updateUserPassword(sammy) {
        let user = firebase.auth().currentUser;

        let newPassword = sammy.params.password[0];

        user.updatePassword(newPassword)
            .then(function() {
                toastr.success(`Succesfully changed user password!`);
                sammy.redirect('#/home');
            }, function(err) {
                toastr.error(err.message);
            });
    }

    function getUser() {
        let firebaseUser = firebase.database().ref().child('User');
        firebaseUser.on('value', currentUser => {
            let user = currentUser.val();
            return pageLoader.loadTemplatePage('current-user', user, $mainContainer);
        });
    }

    return {
        loadSettingsPage,
        loadHelpSetupPage,
        loadSettingsEmailChange,
        loadSettingsPasswordChange,
        updateUserEmail,
        updateUserPassword,
        getUser
    };
}());

export default userSettings;