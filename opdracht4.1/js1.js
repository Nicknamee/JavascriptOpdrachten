var mijnauto = {
    kleur: "silver",
    merk: "BMW",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 10;
        console.log(this.snelheid);
        },

    toeteren: function () {
        console.log("Toet!");

    }
}

console.log(mijnauto.kleur);
mijnauto.toeteren();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
mijnauto.gasgeven();
