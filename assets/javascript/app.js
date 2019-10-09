$(document).ready(function () {

    var searchYear = $("#searchYear").val();

    console.log(searchYear);


    //first API call grabbing player name, weight, height and country.

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/golf-t2/profiles/pga/2019/players/profiles.JSON?api_key=nyj9hw5kb3r39sxjy2mxa7c9"



    $("#search").on("click", function (e) {

        e.preventDefault();

        var playerName = $("#searchName").val().split(" ");

        var firstNamer = playerName[0];
        var lastNamer = playerName[1];

        $("#searchName").val("");


        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                
                var players = response.players;

                for (var i = 0; i < response.players.length; i++) {

                    //console.log(players[i].first_name + " " + players[i].last_name + " Country:" + players[i].country + " Height:" + players[i].height + " Weight:" + players[i].weight);

                    if (players[i].first_name === firstNamer && players[i].last_name === lastNamer) {

                        $("#playerName").text(players[i].first_name + " " + players[i].last_name)
                        $("#height").text(players[i].height + " inches");
                        $("#weight").text(players[i].weight + " lb.");
                        $("#country").text(players[i].country);


                    }
                    else {



                    }

                };

            });


        var queryURL3 = "https://api.sportsdata.io/golf/v2/json/Tournaments/2019?key=769b3cca2915407895d20432d46761ed"

        $.ajax({
            url: queryURL3,
            method: "GET"

        })
            .then(function (res) {

                for (var i = 0; i < res.length; i++) {

                    var tournamentName = (res[i].Name);
                    var tournmanetLocation = (res[i].Location);
                    var courseSize = (res[i].Yards);
                    var parScore = (res[i].Par);

                    if (res[i].IsOver === false) {

                        var trElement = $("<tr>");
                        var tdElement = $("<td>");


                        let tournyName = $("<td>").text(tournamentName);
                        trElement.append(tournyName);


                        let theSize = $("<td>").text("Yards: " + courseSize);
                        trElement.append(theSize);


                        let locationElement = $("<td>").text(tournmanetLocation);
                        trElement.append(locationElement);


                        $("#cool").append(trElement);

                    }
                };

            });



// NEW YOUR TIMES API CALL //

        let year = $("#searchYear").val();
        let name = $("#searchName").val();

        let key = "QDzGqfGGE5zww8ffy7tJbwUhXTMaaoxE"
        let queryURLNYT = `https://api.nytimes.com/svc/topstories/v2/articlesearch.json?api-key=${key}&start_date=${year+"0110"}&q=${name}`

        $.ajax({
            url: queryURLNYT,
            method: "GET"
        })
        
        .then(function (response) {

            console.log(response);

        });

    });

});