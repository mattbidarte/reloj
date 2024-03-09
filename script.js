function currentTime() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    if (hh < 10){
        hh = "0" + hh
    }
    if (mm < 10){
        mm = "0" + mm
    }
    if (ss < 10){
        ss = "0" + ss
    }

    let time = hh + ":" + mm + ":" + ss
    let $watch = document.querySelector("#watch")
    $watch.innerHTML = time
}

setInterval(currentTime, 1000)