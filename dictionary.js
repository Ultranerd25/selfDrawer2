// dictionary
const artsytle = [];
artsytle.push("anime");
artsytle.push("cartoony");


const anime = 0
const cartoon = 1


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
const anime_eyes = [];
anime_eyes.push('./Assets/Anime/anime_eyesB.png');
anime_eyes.push('./Assets/Anime/anime_eyesM.png');
anime_eyes.push('./Assets/Anime/anime_eyesS.png');
const anime_nose = [];
anime_nose.push('./Assets/Anime/anime_noseB.png');
anime_nose.push('./Assets/Anime/anime_noseM.png');
anime_nose.push('./Assets/Anime/anime_noseS.png');

const anime_mouth = [];
anime_mouth.push('./Assets/Anime/anime_mouthB.png)';
anime_mouth.push('./Assets/Anime/anime_mouthM.png)';
anime_mouth.push('./Assets/Anime/anime_mouthS.png)';
const anime_ears = [];
anime_eyes.push('./Assets/Anime/anime_earsB.png');
anime_eyes.push('./Assets/Anime/anime_earsM.png');
anime_eyes.push('./Assets/Anime/anime_earsS.png');
const cartoon_eyes = [];
cartoon_eyes.push('./Assets/Cartoon/cartoon_eyesB.png');
cartoon_eyes.push('./Assets/Cartoon/cartoon_eyesM.png');
cartoon_eyes.push('./Assets/Cartoon/cartoon_eyesS.png');
const cartoon_nose = [];
cartoon_nose.push('./Assets/Cartoon/cartoon_noseB.png');
cartoon_nose.push('./Assets/Cartoon/cartoon_noseM.png');
cartoon_nose.push('./Assets/Cartoon/cartoon_noseS.png');
const cartoon_mouth = [];
cartoon_mouth.push('./Assets/Cartoon/cartoon_mouthB.png)';
cartoon_mouth.push('./Assets/Cartoon/cartoon_mouthM.png)';
cartoon_mouth.push('./Assets/Cartoon/cartoon_mouthS.png)';

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
function search(size)
{
	for (const word of size)
	{
		if (artwork === artsytle[anime]) 
		{
			if (txtname.includes(word +' '+ descface[0]))
			{
				image_import(100,200,anime_eyes[size]);
			}
			if (txtname.includes(word +' '+ descface[1]))
			{
				image_import(100,200,anime_nose[size]);
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
				image_import(100,200,cartoon_eyes[size]);
			}
			if (txtname.includes(word +' '+ descface[1]))
			{
				image_import(100,200,cartoon_nose[size]);
			}
			if (txtname.includes(word +' '+ descface[2]))
			{
				image_import(100,200,cartoon_mouth[size]);
			}
		}
	}
}
function character_imagine() {
	console.log("button works");
	var txtname = document.getElementById("character_input").value;
	txtname = txtname.toLowerCase()
	console.log(txtname);
	search(descBig);
	search(descaverage);
	search(descsmall);
//	var txtstyle = document.getElementById("character_style").value;
//	txtstyle = txtstyle.toLowerCase()
//	console.log(txtstyle);
};