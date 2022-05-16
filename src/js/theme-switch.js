const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
}

const body = document.querySelector('body');
const themeCheckbox = document.querySelector('#theme-switch-toggle');

const setThemeDark = () => {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    themeCheckbox.checked = true;
}

const setThemeLight = () => {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    themeCheckbox.checked = false;
}

const checkboxValue = event => {
    const chechboxValueCurrent = event.currentTarget.checked;
    console.log(chechboxValueCurrent);

    if (chechboxValueCurrent) {
        setThemeDark();
    } else {
        setThemeLight();
    }
}

themeCheckbox.addEventListener('change', checkboxValue);

const initialTheme = () => {
    const chosenTheme = localStorage.getItem('theme');

    if (chosenTheme === Theme.DARK) {
        setThemeDark();
    } else {
        setThemeLight();
    }
}

initialTheme();