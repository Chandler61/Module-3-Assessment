console.log('hello world')

function theSubmit(evt) {
    evt.preventDefault();

    alert('ya boi will work on developing that skill!');
}

let answer= document.querySelector('#whatYouThink');
answer.addEventListener('submit', theSubmit)

function faveColor(evt) {
    evt.preventDefault();

    alert("best belive it's blue");
}

let color1= document.querySelector('#color');
color1.addEventListener('click', faveColor)

function favePlace(evt) {
    evt.preventDefault();

    alert("Hmm thats a tough one, but I would have to say a car show")
}

let place1= document.querySelector('#place');
place1.addEventListener('click', favePlace)

function faveRitual(evt) {
    evt.preventDefault();

    alert("Not too sure")
}

let ritual1= document.querySelector('#ritual');
ritual1.addEventListener('click', faveRitual)