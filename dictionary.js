// dictionary
const artsytle = [];
artsytle.push("anime");
artsytle.push("cartoony");
artsytle.push("realistic");

const anime = 0
const cartoony = 1
const realistic = 2

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
descface.push("nose");
//assigning images to variables
const anime_eyes = './Anime/anime_eyes.png';
const anime_nose = './Anime/anime_nose.png';
const anime_mouth = './Anime/anime_mouth.png';
const anime_ears = './Anime/anime_ears.png';
const cartoon_eyes = 'cartoon_eyes.png';
const cartoon_nose = 'cartoon_nose.png';
const cartoon_mouth = 'cartoon_mouth.png';
const realistic_eyes ='realistic_eyes.png';
const realistic_nose ='realistic_nose.png';
const realistic_mouth ='realistic_mouth.png';
//read person input
function image_import(height,width,image) 
{
  	var x = document.createElement("IMG");
  	x.setAttribute("src", image);
  	x.setAttribute("width", width);
  	x.setAttribute("height", height);
  	x.setAttribute("alt", "image not accessible");
  	document.body.appendChild(x);
  	console.log("Image is here")
}
function setartstyle(art)
{
	artwork = artsytle[art]
	console.log(artwork);
}
function search()
{
	for (const word of descaverage)
	{
		if (artwork === artsytle[anime]) 
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
		if (artwork === artsytle[cartoony]) 
		{
			if (txtname.includes(word +' '+ descface[0]))
			{
				image_import(100,200,cartoon_eyes);
			}
			if (txtname.includes(word +' '+ descface[1]))
			{
				image_import(100,200,cartoon_nose);
			}
			if (txtname.includes(word +' '+ descface[2]))
			{
				image_import(100,200,cartoon_mouth);
			}
		}
		if (artwork === artsytle[realistic]) 
		{
			if (txtname.includes(word +' '+ descface[0]))
			{
				image_import(100,200,realistic_eyes);
			}
			if (txtname.includes(word +' '+ descface[1]))
			{
				image_import(100,200,realistic_nose);
			}
			if (txtname.includes(word +' '+ descface[2]))
			{
				image_import(100,200,realistic_mouth);
			}
		}
	}
}
function character_imagine() {
	console.log("button works");
	var txtname = document.getElementById("character_input").value;
	txtname = txtname.toLowerCase()
	console.log(txtname);
	search();
//	var txtstyle = document.getElementById("character_style").value;
//	txtstyle = txtstyle.toLowerCase()
//	console.log(txtstyle);
};