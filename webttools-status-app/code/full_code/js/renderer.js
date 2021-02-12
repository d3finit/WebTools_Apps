const progressbar = document.getElementById("checkbar");
const progressBarText = document.getElementById("checkbar");

function checkPage(url) {
    var xhr = new XMLHttpRequest();;
    var randomNum = Math.round(Math.random() * 10000);

    xhr.open('HEAD', url + "?rand=" + randomNum, true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 304) {
                console.log("page ping sucess")
                return true

            } else {
                console.log("page ping failure")
                return false
            }
        }
    }
}

function fulltest() {
    var pagestoping = [
        ["Shopping List Page", "https://codedude404.github.io/WebTools.github.io/index.html"],
        ["Temperature Converter Page", "https://codedude404.github.io/WebTools.github.io/temp.html"]
    ];

    var i = 0;
    var total = 2;
    var one = 1;

    console.log(pagestoping)


    //Ping index.html
    var pingsucess = checkPage(pagestoping[0][one]);
    var percent = "50%";
    progressbar.style.width = percent;
    progressBarText.innerHTML = percent;


    if (pingsucess === true) {
        
    } else {
        
    }
    console.log("Pinged index")

    console.log("done")
}

// .innerHTML = new HTML

// .style.width = "0%"






