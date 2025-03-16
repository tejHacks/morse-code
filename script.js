document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const convertToMorseBtn = document.getElementById("convert-to-morse");
    const convertToTextBtn = document.getElementById("convert-to-text");
    const output = document.getElementById("output");

    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', ' ': '/'
    };

    const textToMorse = (text) => {
        return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
    };

    const morseToText = (morse) => {
        const reverseMorseMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
        return morse.split(' ').map(symbol => reverseMorseMap[symbol] || '').join('');
    };

    convertToMorseBtn.addEventListener("click", () => {
        const inputText = textInput.value.trim();
        if (!inputText) {
            output.textContent = "Please enter text to convert.";
            return;
        }
        output.textContent = textToMorse(inputText);
    });

    convertToTextBtn.addEventListener("click", () => {
        const inputText = textInput.value.trim();
        if (!inputText) {
            output.textContent = "Please enter Morse code to convert.";
            return;
        }
        output.textContent = morseToText(inputText);
    });
});
