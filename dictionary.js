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
//assigning images to variables
const anime_eyes = './Anime/anime_eyes.png';
const anime_nose = './Anime/anime_nose.png';
const anime_mouth = './Anime/anime_mouth.png';
const anime_ears = './Anime/anime_ears.png';
//read person input
function image_import(height,width,image) {
  	var x = document.createElement("IMG");
  	x.setAttribute("src", image);
  	x.setAttribute("width", width);
  	x.setAttribute("height", height);
  	x.setAttribute("alt", "image not accessible");
  	document.body.appendChild(x);
  	console.log("Image is here")
}
function character_imagine() {
	console.log("button works");
	var txtname = document.getElementById("character_input").value;
	txtname = txtname.toLowerCase()
	console.log(txtname);
//	var txtstyle = document.getElementById("character_style").value;
//	txtstyle = txtstyle.toLowerCase()
//	console.log(txtstyle);
	for (const word of descaverage)
	{
		if (txtname.includes(word +' '+ descface[0]))
		{
			image_import(100,200,anime_eyes);
	  	}
	  	if (txtname.includes(word +' '+ descface[1]))
		{
			image_import(100,200,anime_nose);
	  	}
	  	if (txtname.includes(word +' '+ descface[2]))
		{
			image_import(100,200,anime_mouth);
	  	}
	 }
};