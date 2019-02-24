// dictionary
const gender = [];
gender.push("male");
gender.push("female")

const artsytle = [];
artsytle.push("anime");
artsytle.push("cartoony");
artsytle.push("realistic")

const descBig = [];
descBig.push("big");
descBig.push("huge");
descBig.push("large");

const descaverage = [];
descaverage.push("normal");
descaverage.push("average");
descaverage.push("medium");

const descsmall = [];
descsmall.push("small");
descsmall.push("little");
descsmall.push("tiny");

const descface = []
descface.push("eyes");
descface.push("mouth");
descface.push("head");
descface.push("ears");
descface.push("nose");
//read person input
function character_style() {
	console.log("button works");
	var txtname = document.getElementById("character_style").value;
	txtname = txtname.toLowerCase()
	console.log(txtname);
}
function character_imagine() {
	console.log("button works");
	var txtname = document.getElementById("character_input").value;
	txtname = txtname.toLowerCase()
	console.log(txtname);
//	var txtstyle = document.getElementById("character_style").value;
//	txtstyle = txtstyle.toLowerCase()
//	console.log(txtstyle);
}
//assigning images to variables
const anime_eyes = './Anime/anime_eyes.png'
const anime_nose = './Anime/anime_nose.png'
const anime_mouth = './Anime/anime_mouth.png'
const anime_ears = './Anime/anime_ears.png'

//searching for key words
//for (const word of descBig) {
//	if (text.includes(word + descface[0]))

//};

