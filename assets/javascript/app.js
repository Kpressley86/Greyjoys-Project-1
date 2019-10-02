$(document).ready(function () {

    // Variables for search parameters //
    var randomInfo = "";


    function clear() {
        $("#form or whatever we use").empty();
    }

    // CLICK HANDLERS //
    $("#run-search").on("click", function (event) {

        event.preventDefault();

        clear();

        var queryURL = buildQueryURL();

        // Grab Info And Add it to specific variables as a string //
        // use variables in URL for search parameters //

    });

    //  .on("click") function associated with the clear button
    $("#clear-all").on("click", clear);
    function runSearch(news) {

        var apiKey = ""
        var queryURL = `https:api-key=${apiKey}&q=${news}&end_date${endYear}&start_date=${startYear}&sort=relevance`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);

            // then parse.info.from.object into a Variable to display on screen//



        });
    };

    // Initialize Firebase //

    var firebaseConfig = {
        apiKey: "AIzaSyBnFFHuk1PVtDan50yKCPIMgeViWlA3rXc",
        authDomain: "greyjoy-project1.firebaseapp.com",
        databaseURL: "https://greyjoy-project1.firebaseio.com",
        projectId: "greyjoy-project1",
        storageBucket: "",
        messagingSenderId: "492997344720",
        appId: "1:492997344720:web:76ccd3669451188c1d4dd5",
        measurementId: "G-B88N2JWR6L"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // Authentication SignIn //

    (function () {
        var app = document.querySelector('#app');

        app.signIn = function () {
            var email = app.email;
            var password = app.password;

            if (!email || !password) {
                return console.log('email and password required');
            }

            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('signIn error', error);
            });
        };

        // Authentication SignUp //

        app.register = function () {
            var email = app.email;
            var password = app.password;

            if (!email || !password) {
                return console.log('emal and password required');
            }

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                console.log('register error', error);
                if (error.code === 'auth/email-already-in-use') {
                    var credential = firebase.auth.EmailAuthProvider.credential(email, password);

                    app.signInWithGoogle()
                        .then(function () {
                            firebase.auth().currentUser.link(credential)
                                .then(function (user) {
                                    console.log('Account linking success', user);
                                }, function (error) {
                                    console.log('Account linking error', error);
                                });
                        });
                }

            });
        };

        // Authentication with Google //

        app.signInWithGoogle = function () {

            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');

            return firebase.auth().signInWithPopup(provider)
                .catch(function (error) {
                    console.log('Google sign in error', error);
                });
        };

        // Authentication SignOut //

        app.signOut = function() {

            firebase.auth().signOut();
        };

        firebase.auth().onAuthStateChanged(function (user) {
           app.user = user;
           console.log('user', user);
        });
    }) ();

    // Assign the reference to the database to a variable //

    var database = firebase.database();

        $("#submit").on("click", function (event) {

            event.preventDefault();

            // variables for information we want to store on our database //
            var example = $("#random-info").val().trim();


            database
                .ref()
                .push({
                    //push info from variables to database //
                    randomInfo: example,

                });



            database
                .ref()
                .on("child_added", function (snapshot) {

                    let snapshotValue = snapshot.val();

                    console.log(snapshot.val());


                    var randomInfo = $("<td>").text(snapshotValue.randomInfo);


                    let newRow = $("<tr>");

                    newRow.append(randomInfo);


                });

            $("#whatever we want to display").append(newRow);

        });




    });