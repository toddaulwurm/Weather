var cookieAlert = document.querySelector("#cookieAlert");
var cookieOut = document.querySelector("#cookie");
function hide(element) {
    console.log(element);
    cookieOut.innerHTML = "";
    element.remove();
}

var temps = [22,11,33,22,44,33,55,44,66,55];
var week = {
    "todayHigh": temps[0],
    "todayLow": temps[1],
    "tomorrowHigh": temps[2],
    "tomorrowLow": temps[3],
    "wedHigh": temps[4],
    "wedLow": temps[5],
    "thursHigh": temps[6],
    "thursLow": temps[7],
    "friHigh": temps[8],
    "friLow": temps[9],
}
var tempHolders = document.querySelector("#friHigh");
console.log(tempHolders.innerHTML);
console.log(wedHigh)

function fahrenheitFunction(){
    console.log(temps[9]);
}
fahrenheitFunction();