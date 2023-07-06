let time = null;
window.addEventListener("keydown", (keys) => {
    let element = document.getElementById("desktop");
    let msj = document.getElementById("warning");
    let time_remaining = document.getElementById("time-remaining");
    let alarm = document.getElementById("audio");
    let seconds = 10;
    if (keys.ctrlKey && keys.key == "v") {
        element.classList.add("good");
        element.classList.remove("bad");
        element.classList.remove("virus");
        msj.style.display = "none";
        window.clearInterval(time);
        time_remaining.innerHTML = 10;
        alarm.pause();
    } else if (keys.ctrlKey && keys.key == "b") {
        element.classList.remove("good");
        element.classList.remove("bad");
        element.classList.add("virus");
        msj.style.display = "flex";
        alarm.loop = true;
        alarm.play();
        time = setInterval(() => {
            seconds -= 1;
            time_remaining.innerHTML = seconds;
            if (seconds < 0) {
                element.style.display = "none";
                msj.style.display = "none";
                document.getElementById("boom").style.display = "block";
            }
            if (seconds < -1) {
                window.close();
            }
            seconds % 2 == 0
                ? window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                  })
                : window.scroll({
                      top: 2500,
                      left: 0,
                      behavior: "smooth",
                  });
        }, 1000);
    }
});
