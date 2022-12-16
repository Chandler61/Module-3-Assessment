console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have submitted your answer");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function hoverPicture(evt) {
    evt.preventDefault();

    alert("Look at you! Too cool")
}
let img= document.querySelector('img');
img.addEventListener('mouseover', hoverPicture)