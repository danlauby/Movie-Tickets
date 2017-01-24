var ticketPrice = 16;

function Ticket(age,movie,time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  // this.movies = [];
}
function resetFields() {
  $('input#age').val("");
}

// function Movie(name, rating, desc)
// $16-full priced adult ticket @ night
// $8-senior/kids ticket at  night
// $8-day ticket adult
// $5-kids day ticket

Ticket.prototype.moviePrice = function(age,time) {
  if  ((time === "am") && (age >= 50) || (age <= 10)) {
      return ticketPrice - 4;
    } else if  ((time === "pm") && (age >= 50) || (age <= 10)) {
      return ticketPrice - 2;
    } else if (time === "am") {
      return ticketPrice - 2;
    } else {
      return ticketPrice;
    }

}

$(function() {
  $('form#userInput').submit(function(e) {
    var movie = $('#movies option:selected').val();
    var time = $('#time option:selected').val();
    var age = parseInt($("input#age").val());
    var newTicket = new Ticket(age,time,movie);
    $(".output").empty();
    $(".output").append('<h2>Your movie will cost $</h2>' + newTicket.moviePrice(age,time));
    e.preventDefault();

    resetFields();
  });
});
