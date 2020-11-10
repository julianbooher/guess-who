console.log('Here are all the available people:', people);

$(document).ready(onReady);
let currentGuessWho;

function onReady(){
    console.log('in jQuery');
    displayGuessWho();
    $('.photos').on('click', '.photo', select);
    $('.alert-message').on('click', '.new-name', displayGuessWho);
}

function displayPhotos(){
    // Emptying for potential later feature where they get randomized eached turn.
    $('.photos').empty();
    // Loop through people array and display their image to the DOM.
    people = shuffle(people);
    for (let x of people){
        $('.photos').append(`
            <div class="photo-div">
            <img class="photo" data-github="${x.githubUsername}" src="https://github.com/${x.githubUsername}.png?size=250"/>
            </div>
        `)
    }
}

function select(){
    // Get the github username of the img the user clicks on.
    let github = $(this).data("github");
    let currentImage = this;
    // Compare the current guessWho username to the one the user clicked on.
    // If they match, do success things!
    if (currentGuessWho.githubUsername === github){
        $('.alert-message').empty();
        $('.alert-message').append('<h2 class="success">SUCCESS!</h2>');
        $('.alert-message').append('<br><button class="new-name">Get a New Name</button');
        $(currentImage).toggleClass('blue-border');
        setTimeout(function(){$(currentImage).toggleClass('blue-border')}, 2000)
    } 
    // If they don't match, do failure things!
    else {
        $('.alert-message').empty();
        $('.alert-message').append('<h2 class="wrong">SORRY!<br> Try again.</h2>')
        $(currentImage).toggleClass('red-border');
        setTimeout(function(){$(currentImage).toggleClass('red-border')}, 2000)
    }
    console.log(github);
}

function displayGuessWho(){
    // Display the photos.
    displayPhotos();
    // Get random number that will represent the index in the people array.
    let x = randomNumber(0, people.length);
    // If there is something in the guess-who div, empty it.
    $('.guess-who').empty();
    // If there is an alert-message and button from a successful guess, empty it.
    $('.alert-message').empty();
    // Post the name that the user should be guessing.3
    console.log(people);
    $('.guess-who').append(`<h3>Which picture is ${people[x].name}?</h3>`)
    currentGuessWho = people[x];
    console.log('currentGuessWho:', currentGuessWho.name)
}

// Randomizer for currentGuessWho.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// Algorithm to shuffle an array into a new, random order. Sources provided.
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://bost.ocks.org/mike/shuffle/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }