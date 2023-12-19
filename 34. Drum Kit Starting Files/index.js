var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick(){
alert("click");
}