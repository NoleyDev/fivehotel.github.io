// fungsi dark mode
if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark){
    if(isDark){
        document.body.setAttribute('id', 'darkmode')

        localStorage.setItem('preferredTheme', 'dark');
    }else{
        document.body.setAttribute('id', '')

        localStorage.removeItem('preferredTheme');
    }
}