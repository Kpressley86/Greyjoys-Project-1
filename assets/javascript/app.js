$(document).ready(function () {

    var searchYear = $("#searchYear").val();

    console.log(searchYear);




    //first API call grabbing player name, weight, height and country.

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/golf-t2/profiles/pga/2019/players/profiles.JSON?api_key=nyj9hw5kb3r39sxjy2mxa7c9"




    $("#search").on("click", function () {
        var playerName = $("#searchName").val().split(" ");

        var firstNamer = playerName[0];
        var lastNamer = playerName[1];



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
                        $("#height").text(players[i].height);
                        $("#weight").text(players[i].weight);
                        $("#country").text(players[i].country);


                    }
                    else {



                    }
                };


            });



    });


    var queryURL3 = "https://api.sportsdata.io/golf/v2/json/Tournaments/2019?key=769b3cca2915407895d20432d46761ed"

    $.ajax({
        url: queryURL3,
        method: "GET"

    })
        .then(function (res) {
        
            for (var i = 0; i < res.length; i++) {

                var tournamentName = $("<tr>").text(res[i].Name);
                var tournmanetLocation = $("<td>").text(res[i].Location);
                var courseSize = $("<td>").text(res[i].Yards);
                var parScore = $("<td>").text(res[i].Par);

                if (res[i].IsOver === false) {
                    
                let trElement = $("<tr>");

                trElement.append(tournmanetName);
                trElement.append(tournmanetLocation);
                trElement.append(courseSize);
                trElement.append(parScore);

                $("#cool").append(trElement);

                }
            };

        });


});