function initializeNotifications() {
    if (!Notification in window){
        alert("This browser does not support desktop notifications");
    }

    else if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
}

function notifyMe(title, message) {

    var notification = new Notification(title, {
        icon: "images/logo.png",
        body: message
    });

    notification.onclick = function() {
        window.open("http://127.0.0.1:5500/Milestone_3/home.html");
    };
}
initializeNotifications();

// setTimeout(function() {
//     notifyMe("issue cleared", "issue has been cleared");
//     clearTimeout();
// }, 5000);

