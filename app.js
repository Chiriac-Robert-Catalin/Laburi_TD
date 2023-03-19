var counter = 1;


function printValue(divId, value) {
    $("#"+divId).html(value);
}
printValue("counter",1);

$("#inc").on('click',increment);
$("#dec").on('click',decrement);

function increment() {
    if (counter >= 1 && counter < 10) {
        counter++;
        printValue("counter", counter);
    }
}

function decrement() {
    if (counter <= 10 && counter > 1) {
        counter--;
        printValue("counter", counter);
    }
}