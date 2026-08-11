function buttonFunctions(input) {
    const myInput = document.getElementById("display-box");
    myInput.value = myInput.value + input;
}

function operator(input) {
    const myInput = document.getElementById("display-box");
    var latestInput = myInput.value.slice(-1);
    if (latestInput !== '' && !isNaN(latestInput) || latestInput === 'π'){
        myInput.value = myInput.value + input;
    }
}

function subtract(input) {
    const myInput = document.getElementById("display-box");
    var latestInput = myInput.value.slice(-1);
    if (latestInput !== '-' && latestInput !== '+') {
        myInput.value = myInput.value + input;
    }
}

function pi(input) {
    const myInput = document.getElementById("display-box");
    var latestInput = myInput.value.slice(-1);
    if (latestInput !== 'π') {
        myInput.value = myInput.value + input;
    }
}

function clearDisplay() {
    const myInput = document.getElementById("display-box");
    myInput.value = "";
}

function equalsShowAnswer() {
    const myInput = document.getElementById("display-box");
var result = myInput.value.replace("\u00f7", "/").replace("π", Math.PI).replace(/\u221a(\d+\.*\d*)/g, 'Math.sqrt($1)').replace(/(\d+\.*\d*)\u00b2/g , 'Math.pow($1, 2)').replace(/(\d+\.*\d*)\u00b3/g , 'Math.pow($1, 3)').replace(/(\d+)\!/g, 'factorial($1)')
console.log(result);
    myInput.value = eval(result);
}

function plusMinus() {
  const myInput = document.getElementById("display-box");
  let str = myInput.value;

  if (!str) return;

  let i = str.length - 1;

  while (i >= 0 && /[\d.]/.test(str[i])) {
    i--;
  }

  let start = i + 1;

  // If the minus is a sign, include it with the number
  if (str[i] === "-" && (i === 0 || /[+\-*/]/.test(str[i - 1]))) {
    start = i;
  }

  let lastNumber = str.slice(start);

  if (lastNumber === "" || lastNumber === "-") return;

  if (lastNumber.startsWith("-")) {
    lastNumber = lastNumber.slice(1);
  } else {
    lastNumber = "-" + lastNumber;
  }

  myInput.value = str.slice(0, start) + lastNumber;
}

function backspace() {
    const myInput = document.getElementById("display-box");
    myInput.value = myInput.value.slice(0, -1); 
}

function factorial(i) {
    const myInput = document.getElementById("display-box");
    if (i === 1) {
        return 1
    }
    return (factorial(i-1)) * i
}