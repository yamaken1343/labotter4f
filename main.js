let inTime;
let log = [];
setInterval(main, 1000);

function labin() {
    const now = new Date();
    inTime = Math.floor(Date.parse(now) / 1000);
    localStorage.setItem("labin", inTime);
    document.getElementById("inTime").innerText = toDateTimeString(inTime);
}

function labout() {
    const now = new Date();
    const outTime = Math.floor(Date.parse(now) / 1000);
    const diff = outTime - inTime;
    const nowLog = {"intime": inTime, "outtime": outTime, "staytime": diff};
    log.push(nowLog);
    localStorage.setItem("labin", null);
    localStorage.setItem("log", JSON.stringify(log));
    // localStorage.removeItem("log")
    console.log(log);
    document.getElementById("outTime").innerText = toDateTimeString(outTime);
}

function main() {
    const now = new Date();
    const diff = now / 1000 - inTime;
    document.getElementById("labTime").innerText = toTimeString(diff);
}

function init() {
    inTime = localStorage.getItem("labin");
    if (localStorage.getItem("log")) {
        log = JSON.parse(localStorage.getItem("log"));
        console.log(log)
    }
    console.log(inTime);
    document.getElementById("inTime").innerText = toDateTimeString(inTime);
}