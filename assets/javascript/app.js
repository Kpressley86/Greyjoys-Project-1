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
    apiKey:"",
    authDomain:"",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

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
            
    
            var  randomInfo = $("<td>").text(snapshotValue.randomInfo);
           
            
            let newRow = $("<tr>");

            newRow.append(randomInfo);
            

        });

    $("#whatever we want to display").append(newRow);

});




});