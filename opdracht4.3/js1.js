var plaatjes1 = [1,2,3];
var teller = 0;
var crook1 = document.getElementById("crook1");
crook1.style.backgroundImage = "url('img/pic1.jpg')";

crook1.addEventListener("click",function() {
    crook1.style.backgroundImage = "url('img/pic" + getEyes() + ".jpg')";

});

function getEyes() {
    if(teller >= plaatjes1.length){
        teller = 1;
    }
    else {
        teller++
    }
    console.log(teller);
    return teller;


}
var teller2 = 4;
var crook2 = document.getElementById("crook2");
crook2.style.backgroundImage = "url('img/pic4.jpg')";

crook2.addEventListener("click", function () {
    crook2.style.backgroundImage = "url('img/pic" + getNose() + ".jpg')";
});

function getNose() {
    if (teller2 > 5) {
        teller2 = 4;
    } else {
        teller2++
    }
    console.log(teller2);
    return teller2;
}


var teller3 = 7;
var crook3 = document.getElementById("crook3");
crook3.style.backgroundImage = "url('img/pic7.jpg')";

crook3.addEventListener("click", function () {
    crook3.style.backgroundImage = "url('img/pic" + getMouth() + ".jpg')";
});

function getMouth(){
    if(teller3 > 8){
        teller3 = 7;
    }

    else {
        teller3++
    }
    console.log(teller3);
    return teller3;
}



