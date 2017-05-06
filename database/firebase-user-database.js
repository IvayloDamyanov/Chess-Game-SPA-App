import firebaseModule from 'firebase-config';

let userDatabase = (function() {
    const database = firebaseModule.database,
        auth = firebaseModule.auth;

    function createUser(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
            .catch(err => Promise.reject(err));
    }

    function signInUser(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .catch(err => Promise.reject(err));
    }

    function signOutUser() {
        return auth.signOut()
            .catch(err => Promise.reject(err));
    }

    function getCurrentUser() {
        return new Promise((resolve) => {
            auth.onAuthStateChanged(function(user) {
                callback(user);
            })
        });
    }

    function onStateChanged(callback) {
        return auth.onAuthStateChanged(function(user) {
            callback(user);
        });
    }

    return {
        createUser,
        signInUser,
        signOutUser,
        onStateChanged,
        getCurrentUser
    }
}());

export default userDatabase;