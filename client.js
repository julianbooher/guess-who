console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    console.log('in jQuery');
    displayPhotos();
    $('photo').on('click', )
}

function displayPhotos(){
    for (let x of people){
        $('.photos').append(`
            <div class="photo" data-name="${x.name}">
            <img src="https://github.com/${x.githubUsername}.png?size=250"
            </div>
        `)
    }
}
