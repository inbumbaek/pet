console.log("page loading...");

var petCount1 = 3;
var petSpan1 = document.querySelector("#petting-1");

function like1() {
    petCount1++;
    petSpan1.innerText = petCount1 + " petting(s)";
}

var petCount2 = 5;
var petSpan2 = document.querySelector("#petting-2");

function like2() {
    petCount2++;
    petSpan2.innerText = petCount2 + " petting(s)";
}

var petCount3 = 8;
var petSpan3 = document.querySelector("#petting-3");

function like3() {
    petCount3++;
    petSpan3.innerText = petCount3 + " petting(s)";
}

function hide(element) {
    element.remove();
}

function petType(element) {
    alert("You are looking for a " + element.value);
}