const darkModeToggle = document.getElementById('toggle');
const html = document.querySelector('html');
const styleSheet = document.styleSheets[0];




// let themeState = "light";

// if (localStorage.getItem('theme') !== themeState ) {
//     themeState = localStorage.getItem('theme')
// };

function setThemeColour() {
    let themeState = localStorage.getItem('theme');
    if (themeState === "light") {
        themeState = "dark";
        html.dataset.theme = themeState;
        darkModeToggle.textContent = "🌚";
        darkModeToggle.dataset.themetoggle = themeState;
    } else  if (themeState === "dark") {
        html.dataset.theme = themeState;
        darkModeToggle.textContent = "🌞";
        darkModeToggle.dataset.themetoggle = themeState;
    }
};

darkModeToggle.addEventListener('click', (click) => {
    const toggleButton = click.target;
    const buttonState = toggleButton.getAttribute('data-themetoggle');
    
    let themeState = localStorage.getItem('theme');
    
    if (buttonState === "light") {
        themeState = 'dark';
        localStorage.setItem('theme', themeState);
    } else  if (buttonState === "dark") {
        themeState = 'light';
        localStorage.setItem('theme', themeState);
    }
    setThemeColour();
});

setThemeColour();


// darkModeToggle.addEventListener('click', (click) => {
//     const toggleButton = click.target;
//     const buttonState = toggleButton.getAttribute('data-themetoggle');
    
//     let themeState = "light";
    

//     if (buttonState === "light") {
//         themeState = "dark";
//         html.dataset.theme = themeState;
//         darkModeToggle.textContent = "🌚";
//         toggleButton.dataset.themetoggle = themeState;
//         localStorage.setItem('theme', themeState);
//     } else  if (buttonState === "dark") {
//         html.dataset.theme = themeState;
//         darkModeToggle.textContent = "🌞";
//         toggleButton.dataset.themetoggle = themeState;
//         localStorage.setItem('theme', themeState);
//     }
// });
