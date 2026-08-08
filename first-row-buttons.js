function buttonFunctions(input) {
    const myInput = document.getElementById("display-box");
    myInput.value = myInput.value + input;
}

function clearDisplay() {
    const myInput = document.getElementById("display-box");
    myInput.value = "";
}

function equalsShowAnswer() {
    const myInput = document.getElementById("display-box");
var result = myInput.value.replace("\u00f7", "/").replace("π", "Math.PI").replace(/\u221a(\d+\.\d+)/g, 'Math.sqrt($1)').replace(/(\d+\.*\d*)\u00b2/g , 'Math.pow($1, 2)').replace(/(\d+\.*\d*)\u00b3/g , 'Math.pow($1, 3)')
console.log(result);
    myInput.value = eval(result);
}

function plusMinus() {
    const myInput = document.getElementById("display-box");
    myInput.value = myInput.value * -1;
}

function backspace() {
    const myInput = document.getElementById("display-box");
    myInput.value = myInput.value.slice(0, -1);
}