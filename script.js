// document.addEventListener("DOMContentLoaded", () => {
//     const textInput = document.getElementById("text-input");
//     const convertToMorseBtn = document.getElementById("convert-to-morse");
//     const convertToTextBtn = document.getElementById("convert-to-text");
//     const output = document.getElementById("output");

//     const morseCodeMap = {
//         'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
//         'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
//         'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
//         'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
//         'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
//         '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
//         '8': '---..', '9': '----.', ' ': '/'
//     };

//     const textToMorse = (text) => {
//         return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
//     };

//     const morseToText = (morse) => {
//         const reverseMorseMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));
//         return morse.split(' ').map(symbol => reverseMorseMap[symbol] || '').join('');
//     };

//     convertToMorseBtn.addEventListener("click", () => {
//         const inputText = textInput.value.trim();
//         if (!inputText) {
//             output.textContent = "Please enter text to convert.";
//             return;
//         }
//         output.textContent = textToMorse(inputText);
//     });

//     convertToTextBtn.addEventListener("click", () => {
//         const inputText = textInput.value.trim();
//         if (!inputText) {
//             output.textContent = "Please enter Morse code to convert.";
//             return;
//         }
//         output.textContent = morseToText(inputText);
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text-input");
    const convertToMorseBtn = document.getElementById("convert-to-morse");
    const convertToTextBtn = document.getElementById("convert-to-text");
    const output = document.getElementById("output");

    // Create and append a copy button
    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy";
    copyButton.id = "copy-button";
    copyButton.style.display = "none"; // Hidden initially
    document.querySelector(".output-wrapper").appendChild(copyButton);

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
            copyButton.style.display = "none";
            return;
        }
        output.textContent = textToMorse(inputText);
        copyButton.style.display = "block"; // Show copy button
    });

    convertToTextBtn.addEventListener("click", () => {
        const inputText = textInput.value.trim();
        if (!inputText) {
            output.textContent = "Please enter Morse code to convert.";
            copyButton.style.display = "none";
            return;
        }
        output.textContent = morseToText(inputText);
        copyButton.style.display = "block"; // Show copy button
    });

    // Copy to clipboard function
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(output.textContent)
            .then(() => {
                copyButton.textContent = "Copied! ✅";
                setTimeout(() => copyButton.textContent = "Copy", 2000); // Reset text after 2s
            })
            .catch(() => alert("Failed to copy!"));
    });
});
