var ticketPrice = 16;

function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.movies = [];
}

function Movie(movieName, rating, movieDescription) {
  this.movieName = movieName;
  this.rating = rating;
  this.movieDescription = movieDescription;
}

// $16-full priced adult ticket @ night
// $8-senior/kids ticket at  night
// $8-day ticket adult
// $5-kids day ticket

Ticket.prototype.moviePrice = function(age,time) {
  if  ((time <= "17:00") && (age >= 50) || (age <= 10)) {
      return ticketPrice - 4;
    } else if  ((time >= "17:00") && (age >= 50) || (age <= 10)) {
      return ticketPrice - 2;
    } else if (time === "11:00") {
      return ticketPrice - 2;
    } else {
      return ticketPrice;
    }

}

Movie.prototype.MovieInfo = function() {
  return this.movieName + ', ' + this.rating + ', ' + this.movieDescription;
}

function resetFields() {
  $('input#age').val("");
  $('input#time').val("");
}

$(function() {
  $('form#userInput').submit(function(e) {
    var selectedMovie = $('#movies option:selected').val();
    var time = $("input#time").val();
    var age = parseInt($("input#age").val());

    var newTicket = new Ticket(age, selectedMovie, time);
    var gold = new Movie('Gold', 6.2, 'Kenny Wells, a prospector desperate for a lucky break, teams up with a similarly eager geologist and sets off on a journey to find gold in the uncharted jungle of Indonesia.');
    var sleepless = new Movie('Sleepless', 5.6,"A cop with a connection to the criminal underworld scours a nightclub in search of his kidnapped son.")
    var daughter = new Movie('Daughter', 6.8, "The story follows a man who returns home to discover a long-buried family secret, and whose attempts to put things right threaten the lives of those he left home years before." )
    // var movieData = [
    //   ["gold", 6.3, "gold dust"]
    // ];
    // movieData.forEach(function(movieElements) {
    //   newTicket.movies.push(
    //     new Movie(
    //       moviesElements[0],
    //       moviesElements[1],
    //       moviesElements[2]
    //     )
    //   });
    // });
    newTicket.movies.push(gold, sleepless, daughter);
    console.log(newTicket);

    $(".output").empty();
    $(".output").append('<h2>Your movie will cost $ ' + newTicket.moviePrice(age,time) + '</h2>');
    newTicket.movies.forEach(function(movie) {
      if (movie.movieName.toLowerCase() === selectedMovie) {
        $('.output').append('<h3>' + movie.MovieInfo() + ' </h3>');
      }
     });

    e.preventDefault();
    resetFields();
  });
});
