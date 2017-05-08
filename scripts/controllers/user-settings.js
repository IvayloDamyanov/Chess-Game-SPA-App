import 'jquery';
import userDatabase from 'user-database';
import pageLoader from 'page-loader';
import * as firebase from "firebase";

let userSettings = (function() {
    let $mainContainer = $('.main-container');

    function loadSettingsPage() {
        return pageLoader.loadPage('user-settings', $mainContainer);
    }

    // todo: fix this function
    function updateUserProfile() {
        let user = firebaseModule.auth().currentUser;

        $('#button-click').click(function() {
            let email = $('#email-for-user').val(),
                password = $('#password-for-user').val();
        })
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
        updateUserProfile,
        getUser
    };
}());

export default userSettings;