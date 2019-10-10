$(document).ready(function () {

    var searchYear = $("#searchYear").val();

    console.log(searchYear);


    //first API call grabbing player name, weight, height and country.

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.sportradar.us/golf-t2/profiles/pga/2019/players/profiles.JSON?api_key=c9e65kafbe4az5dtnuyvue8z"



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



        //playerName = playerName.replace(" ", "+");

        let key = "t7L4fRfqSRx96gkzHLXA4s2ibVdaGXfA"
        let queryURLNYT = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${playerName}&limit={1}`

        $.ajax({
            url: queryURLNYT,
            method: "GET"
        })

            .then(function (r) {

                let results = r.data;


                $('#playerImg').attr('src', results[0].images.fixed_height_still.url)
                    .attr('data-still', results[0].images.fixed_height_still.url)
                    .attr('data-animate', results[0].images.fixed_height.url)
                    .attr('data-state', 'still')
                    .addClass('cover')
                    .on('click', function () {
                        var state = $(this).data('state');
                        if (state == 'still') {
                            $(this).data('state', 'animate');
                            $(this).attr('src', $(this).data('animate'));
                        }
                        else {
                            $(this).data('state', 'still');
                            $(this).attr('src', $(this).data('still'));
                        }
                    });
                
            });

    });

});