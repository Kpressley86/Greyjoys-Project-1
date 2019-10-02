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

    // Authentication Create Account //

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
    });

    // Authentication Sign In //

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
    });


    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            
        } else {
            // User is signed out.
            
        }
    });

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