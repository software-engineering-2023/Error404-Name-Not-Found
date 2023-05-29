function initializeNotifications() {
    if (!Notification in window){
        alert("This browser does not support desktop notifications");
    }

    else if (Notification.permission !== "granted"){
        Notification.requestPermission();
    }
}

function notifyMe(title, message, url) {

    var notification = new Notification(title, {
        icon: "images/logo.png",
        body: message
    });

    notification.onclick = function() {
        window.open(url);
    };
}
initializeNotifications();


notificationsList.forEach(element => {
    setTimeout(function() {
        notifyMe(element.title, element.message);
        clearTimeout();
    }, element.delay);
});