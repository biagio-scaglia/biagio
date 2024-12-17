// Texts for the typing effect
const textArray = ["Web Developer", "UX/UI Designer", "Performance Specialist"];
let textIndex = 0;
let charIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text

const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay + 250);
});
// Contenuti del codice
const codeSnippets = {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Ciao, sono Biagio Scaglia</h1>
    <p>Progetto e sviluppo siti web moderni e intuitivi!</p>
</body>
</html>
`,
    css: `
body {
    background-color: #1e2a38;
    color: white;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
h1 {
    color: #007acc;
    text-align: center;
}
`,
    js: `
document.addEventListener('DOMContentLoaded', function () {
    const message = 'Benvenuto nel mio sito!';
    console.log(message);
});
`
};

// Cambia il contenuto del codice
const circles = document.querySelectorAll('.code-header .circle');
const codeContent = document.getElementById('code-content');

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        const lang = circle.getAttribute('data-lang');
        codeContent.textContent = codeSnippets[lang];
    });
});
// FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        answer.classList.toggle('open');
    });
});
