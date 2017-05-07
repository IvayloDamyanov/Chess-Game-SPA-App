import 'jquery';
import userDatabase from 'user-database';
import pageLoader from 'page-loader';

let userSettings = (function() {
    let $mainContainer = $('.main-container');

    function loadSettingsPage() {
        return pageLoader.loadPage('user-settings', $mainContainer);
    }

    // todo: fix this function
    function updateUserProfile() {
        let email = $('#email-for-user').val(),
            password = $('#password-for-user').val();

        return userDatabase.getCurrentUser()
            .then(user => {
                if (user) {
                    user.updateProfile({
                        email: email,
                        password: password
                    }).then(function() {
                        toastr.success('Succesfully changed email and password');
                        sammy.redirect('#/home');
                    }, function(err) {
                        toastr.error(err.message);
                    });
                }
            });
    }

    return {
        loadSettingsPage,
        updateUserProfile
    };
}());

export default userSettings;