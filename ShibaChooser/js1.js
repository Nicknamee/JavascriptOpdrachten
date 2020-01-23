pics = document.getElementById("pics");
createPicsHolders();
createChibaImages();

function createPicsHolders(){
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);

    }

}

function createChibaImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" +(i+1);
        chibaPlaatje = document.createElement("img");
        chibaPlaatje.src = "img/pic" + (i+1) + ".jpg";
        chibaPlaatje.id = (i+1);
        chibaPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);

        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(chibaPlaatje);
    }
}

function maakFavoriet(id) {
    notfav = document.getElementsByClassName("favoriet");

    for(var i = 0; i < notfav.length; i++){
        notfav [i].style.backgroundImage = "none";
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/hartje.png')";

}
