let inTime;
setInterval(main, 1000);
function labin() {
    const now = new Date();
    inTime = Date.parse(now)
    localStorage.setItem("labin", inTime);
    document.getElementById("inTime").innerText = toDateTimeString(inTime);
}

function labout(){
    const now = new Date();
    const outTime = Date.parse(now);
    localStorage.setItem("labin", null);
    document.getElementById("outTime").innerText = toDateTimeString(outTime);
}

function main(){
    const now = new Date();
    const diff = now - inTime;
    document.getElementById("labTime").innerText = toTimeString(diff);
}

function toTimeString(milliSecond){
    return ("00" + Math.floor(milliSecond/1000/3600)).slice(-2) + ":"
        + ("00" + Math.floor(milliSecond/1000/60)).slice(-2) + ":"
        + ("00" + Math.floor(milliSecond/1000%60)).slice(-2);
}

function toDateTimeString(unixTime){
    const D = new Date(unixTime*1);
    console.log(D)
    const Y = D.getFullYear();
    const M = D.getMonth() + 1;
    const d  = D.getDate();
    const h = ("00" + D.getHours()).slice(-2);
    const m = ("00" + D.getMinutes()).slice(-2);
    const s = ("00" + D.getSeconds()).slice(-2);
    console.log(Y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s)
    return Y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;
}

function init(){
    inTime = localStorage.getItem("labin");
    console.log(inTime);
    document.getElementById("inTime").innerText = toDateTimeString(inTime);
}