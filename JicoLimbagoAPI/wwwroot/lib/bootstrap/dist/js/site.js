window.playClickSound = () => {
    const audio = document.getElementById("clickSound");
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
};

window.toggleDarkMode = () => {
    document.body.classList.toggle("dark");
};