var randomnumimg = Math.floor(Math.random()*6)+1;
var randomimg = "dice" + randomnumimg + ".png";
var randomimgsur = "images/" + randomimg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsur);

var randomnumimg2 = Math.floor(Math.random()*6)+1;
var randomimg2 = "dice" + randomnumimg2 + ".png";
var randomimgsur2 = "images/" + randomimg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsur2);
if (randomnumimg > randomnumimg2) {
    document.querySelectorAll("p")[0].innerHTML = "Player 1🚩"
}
else {
 document.querySelectorAll("p")[1].innerHTML = "Player 2🚩"
}