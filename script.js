var cookieAlert = document.querySelector("#cookieAlert");
var cookieOut = document.querySelector("#cookie");
function hide(element) {
    console.log(element);
    cookieOut.innerHTML = "";
    element.remove();
}
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<11; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}