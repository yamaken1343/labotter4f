let inTime;
let log = [];
setInterval(main, 1000);

function labin() {
    console.debug("labin")
    const now = new Date();
    inTime = Math.floor(Date.parse(now) / 1000);
    localStorage.setItem("labin", inTime);
    document.getElementById("inTime").innerText = toDateTimeString(inTime);
    document.getElementById("buttonLabel").innerText = "らぼりだ"
    const setting = JSON.parse(localStorage.getItem("setting"));
    createTweetButton(setting.labinTweetText);
    setTimeout(createTweetButton, 60000, setting.labnowTweetText)
}

function labout() {
  console.debug("labout")
  const setting = JSON.parse(localStorage.getItem("setting"));
  const now = new Date();
  const outTime = Math.floor(Date.parse(now) / 1000);
  const diff = outTime - inTime;
  const nowLog = {"intime": inTime, "outtime": outTime, "staytime": diff};
  if (localStorage.getItem("log")) {
    log = JSON.parse(localStorage.getItem("log"));
  }
  inTime = null;
  log.push(nowLog);
  localStorage.removeItem("labin")
  localStorage.setItem("log", JSON.stringify(log));
  // localStorage.removeItem("log")
  console.log(log);
  document.getElementById("outTime").innerText = toDateTimeString(outTime);
  createTweetButton(setting.laboutTweetText)
  document.getElementById("buttonLabel").innerText = "らぼいん"

}

function mainButton() {
    if (inTime) {
        labout()
    } else {
        labin()
    }
}

function main() {
    if (inTime) {
        const now = new Date();
        const diff = now / 1000 - inTime;
        document.getElementById("labTime").innerText = toTimeString(diff);
    }
}

function createTweetButton(text) {
    document.getElementById("tweetButton").innerHTML = ""
    const setting = JSON.parse(localStorage.getItem("setting"));
    twttr.widgets.createShareButton(
        '', // TODO URLを適切に設定
        document.getElementById("tweetButton"),
        {
            text: text,
            size: "large",
            hashtags: setting.tweetHashTag,
            lang: 'ja',
        });
}

function init() {
    inTime = localStorage.getItem("labin");
    let setting = JSON.parse(localStorage.getItem("setting"));
    if (!setting) {
        const init_setting = {
            labinTweetText: "らぼいんしました！",
            laboutTweetText: "らぼりだしました！",
            tweetHashTag: "らぼったあ4f",
            labnowTweetText: "らぼなう！"
        }
        localStorage.setItem("setting", JSON.stringify(init_setting));
        setting = JSON.parse(localStorage.getItem("setting"));
    }
    console.log(inTime);
    if (inTime) {
        document.getElementById("buttonLabel").innerText = "らぼりだ"
        document.getElementById("inTime").innerText = toDateTimeString(inTime);
        createTweetButton(setting.labnowTweetText);
    } else {
        document.getElementById("buttonLabel").innerText = "らぼいん"
        createTweetButton("らぼったあを使っています")
    }

}