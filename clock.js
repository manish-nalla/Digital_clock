const he = document.getElementById("hour")
const me = document.getElementById("minutes")
const se = document.getElementById("seconds")
const ampme = document.getElementById("ampm")

function clock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    // if (h < 10) {
    //     h = "0" + h
    // }
    // else {
    //     h = h
    // }

    he.innerText = h;
    me.innerText = m;
    se.innerText = s;
    ampme.innerText = ampm;

    setTimeout(() => {
        clock()
    }, 1000)
}

clock()