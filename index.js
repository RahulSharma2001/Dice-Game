var randomNumber1=Math.floor(Math.random()*6)+1;
var imageurl="images/dice"+randomNumber1+".png";
var targetImage1=document.querySelector("img.img1");
targetImage1.setAttribute("src",imageurl);


var randomNumber2=Math.floor(Math.random()*6)+1;
var imageur2="images/dice"+randomNumber2+".png";
var targetImage1=document.querySelector("img.img2");
targetImage1.setAttribute("src",imageur2);


if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Draw";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player1 win 🚩 ";
}
else
document.querySelector("h1").innerHTML="Player2 win🚩 ";
