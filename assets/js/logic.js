const darkModeToggle = document.getElementById('toggle');
const html = document.querySelector('html');

// toggle dark mode with button
darkModeToggle.addEventListener('click', (click) => {
    const toggleButton = click.target;
    const buttonState = toggleButton.getAttribute('data-themetoggle');

    let themeState = 0;

    if (buttonState === "light") {
        themeState = "dark";
        darkModeToggle.textContent = "🌚";
    } else if (buttonState === "dark") {
        themeState = "light"
        darkModeToggle.textContent = "🌞";
    }
    html.dataset.theme = themeState;
    toggleButton.dataset.themetoggle = themeState;
    localStorage.setItem('theme', themeState);
});

// implement dark mode depending on saved preferences in local storage
function savedTheme() {
    const localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme == "dark") {
        darkModeToggle.textContent = "🌚";
        html.dataset.theme = "dark";
        darkModeToggle.dataset.themetoggle = "dark";
        // doesn't function properly if the else part isn't included inconsistenly goes to no theme on the blog page
    } else {
        darkModeToggle.textContent = "🌞";
        html.dataset.theme = "light";
        darkModeToggle.dataset.themetoggle = "light";
    }
};

savedTheme();