var n=(Math.floor(((Math.random()*12345.98765)%6)+1));
var m=(Math.floor(((Math.random()*98765.12345)%6)+1));
//alert(n +" "+ m);


if(n===1)
document.querySelectorAll("img")[0].src="./images/dice/1.png";
if(n===2)
document.querySelectorAll("img")[0].src="./images/dice/2.png";
if(n===3)
document.querySelectorAll("img")[0].src="./images/dice/3.png";
if(n===4)
document.querySelectorAll("img")[0].src="./images/dice/4.png";
if(n===5)
document.querySelectorAll("img")[0].src="./images/dice/5.png";
if(n===6)
document.querySelectorAll("img")[0].src="./images/dice/6.png";



if(m===1)
document.querySelectorAll("img")[1].src="./images/dice/1.png";
if(m===2)
document.querySelectorAll("img")[1].src="./images/dice/2.png";
if(m===3)
document.querySelectorAll("img")[1].src="./images/dice/3.png";
if(m===4)
document.querySelectorAll("img")[1].src="./images/dice/4.png";
if(m==5)
document.querySelectorAll("img")[1].src="./images/dice/5.png";
if(m==6)
document.querySelectorAll("img")[1].src="./images/dice/6.png";

if(m>n){
    document.lastChild.lastChild.firstElementChild.firstElementChild.innerHTML="Player 2 Won";
}else if(m<n){
    document.lastChild.lastChild.firstElementChild.firstElementChild.innerText="Player 1 Won";
}else{
    document.lastChild.lastChild.firstElementChild.firstElementChild.innerText="Draw";
}