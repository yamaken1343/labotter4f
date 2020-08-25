function toTimeString(second) {
  return ("00" + Math.floor(second / 3600)).slice(-2) + ":"
      + ("00" + Math.floor(second / 60)).slice(-2) + ":"
      + ("00" + Math.floor(second % 60)).slice(-2);
}

function toDateTimeString(unixTime) {
  const D = new Date(unixTime * 1000);
  const Y = D.getFullYear();
  const M = D.getMonth() + 1;
  const d = D.getDate();
  const h = ("00" + D.getHours()).slice(-2);
  const m = ("00" + D.getMinutes()).slice(-2);
  const s = ("00" + D.getSeconds()).slice(-2);
  return Y + "/" + M + "/" + d + " " + h + ":" + m + ":" + s;
}