document.addEventListener('keydown', function(event) { 
    const keyPressed = event.key;

    if (!isNaN(keyPressed)) {
        buttonFunctions(keyPressed);
    }
     else if ("+!.%*".indexOf(keyPressed) != -1) {
        operator(keyPressed);
    }
     else if (keyPressed === '/') {
        operator('\u00f7')
    }
     else if (keyPressed === '-') {
        subtract('-')
    }
     else if (keyPressed.toLowerCase() === 'p') {
        pi('π')
    }
     else if (keyPressed.toLowerCase() === 'v') {
        buttonFunctions('\u221a')
    }
     else if (event.key === 'Backspace') {
        backspace()
    }
     else if (event.key === 'Enter') {
        equalsShowAnswer()
    }
     else if (event.key === 'Escape') {
        clearDisplay() 
    }
})



