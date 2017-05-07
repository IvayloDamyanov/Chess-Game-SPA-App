import * as firebase from "firebase";

const firebaseModule = (function() {
    var config = {
        apiKey: "AIzaSyBabfzqdejrbMHcwdYRkBbVh4lrNMRuzWU",
        authDomain: "chess-game-spa-app.firebaseapp.com",
        databaseURL: "https://chess-game-spa-app.firebaseio.com",
        projectId: "chess-game-spa-app",
        storageBucket: "chess-game-spa-app.appspot.com",
        messagingSenderId: "75954807318"

    };

    firebase.initializeApp(config);

    const auth = firebase.auth();
    const database = firebase.database();

    return {
        database,
        auth
    };
}());

export default firebaseModule;