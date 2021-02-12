//Set up vars


//function to check internet conection
function checkWiFi () {
    console.log("FUNCTION: checkWiFi: Started to check WiFi connection.")
    document.getElementById("wifi").innerHTML = "Check internet connection (in progress, will notifiy when done)";
    if (window.navigator.onLine == false) {
        console.log("No WiFi")
        document.getElementById("wifi").innerHTML = "Check internet connection (No WiFi network connected)";
        const myNotification = new Notification('WebTools: WiFi Connection Check', {
            body: 'Your WiFi connection check results are in.'
          })
    }
    else {
        console.log("WiFi connection found")
        document.getElementById("wifi").innerHTML = "Check internet connection (WiFi network connected)";
        const myNotification = new Notification('WebTools: WiFi Connection Check', {
            body: 'Your WiFi connection check results are in.'
          })
    }
}


//function to open website
function opengitforsite() {
    openBrowser('https://github.com/CodeDude404/WebTools.github.io')
}