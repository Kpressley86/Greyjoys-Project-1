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

    // Assign the reference to the database to a variable //

    var database = firebase.database();

    // Submit Button To Store Information In Firebase //
    
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
    
//first API call grabbing player name, weight, height and country.
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/golf-t2/profiles/pga/2017/players/profiles.JSON?api_key=nyj9hw5kb3r39sxjy2mxa7c9"
var searchYear;
var playerName ="";

function clear(){
    $("#searchName").empty();
}

$("search").on("click",function(event){
event.preventDefault();
clear();

playerName = $("#searchName").val();
playerName = str.split(" ");

console.log(playerName)

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        var players = response.players;

        for (var i = 0; i < response.players.length; i++) {

        console.log(players[i].first_name + " " + players[i].last_name + " Country:" + players[i].country + " Height:" + players[i].height + " Weight:" + players[i].weight);

            if (players[i].first_name === "sam" && players[i].last_name === "Horsfield") {

                $("#playersName").text(players[i].first_name + players[i].last_name)
                $("#height").text(players[i].height);
                $("#weight").text(players[i].weight);
                $("#country").text(players[i].country);


            }
        };


    });
});




});