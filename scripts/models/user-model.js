import userDatabase from 'user-database';

class UserModel {
    signUp(email, password) {
        return userDatabase
            .createUser(email, password)
            .catch(err => Promise.reject(err));
    }

    signIn(email, password) {
        return userDatabase
            .signInUser(email, password)
            .catch(err => Promise.reject(err));
    }

    signOut() {
        return userDatabase
            .signOutUser()
            .catch(err => Promise.reject(err));
    }
}

const userModel = new UserModel();
export default userModel;