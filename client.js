console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    console.log('in jQuery');
    displayPhotos();
    displayGuessWho();
    $('.photos').on('click', '.photo', select);
}

function displayPhotos(){
    for (let x of people){
        $('.photos').append(`
            <div class="photo-div">
            <img class="photo" data-github="${x.githubUsername}" src="https://github.com/${x.githubUsername}.png?size=250"/>
            </div>
        `)
    }
}

function select(){
    let github = $(this).data("github");
    console.log(github);
}

function displayGuessWho(){
    let x = randomNumber(0, people.length);
    $('.guess-who').empty();
    $('.guess-who').append(`Which picture is ${people[x].name}`)
    console.log(people[x].name);
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}