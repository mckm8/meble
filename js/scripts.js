/**
 * Created by MCKM on 2017-06-22.
 */
/* Open when someone clicks on the span element */



document.getElementById("row-growing").classList.add("row-top-big");

function openNav(x) {
    // menuButtonAction(x);
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav(x) {
    // menuButtonAction(x);
    document.getElementById("myNav").style.width = "0%";
}

function menuButtonAction(x) {
    x.classList.toggle("change");
}



