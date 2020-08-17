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

function toTimeString(second) {
    return ("00" + Math.floor(second / 3600)).slice(-2) + ":"
        + ("00" + Math.floor(second / 60)).slice(-2) + ":"
        + ("00" + Math.floor(second % 60)).slice(-2);
}

function toDateTimeString(unixTime) {
    const D = new Date(unixTime * 1000);
    console.log(D)
    const Y = D.getFullYear();
    const M = D.getMonth() + 1;
    const d = D.getDate();
    const h = ("00" + D.getHours()).slice(-2);
    const m = ("00" + D.getMinutes()).slice(-2);
    const s = ("00" + D.getSeconds()).slice(-2);
    console.log(Y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s)
    return Y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;
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