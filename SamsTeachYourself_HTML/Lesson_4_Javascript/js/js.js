function workedon() {
    document.write(document.lastModified);
}

function clocktime() {
    now = new Date();
    localtime = now.toString();
    utctime = now.toUTCString();
    document.write("<p><strong>Local time:</strong> " + localtime + "</p>");
    document.write("<p><strong>UTC time:</strong> " + utctime + "</p>");
}

function watchface() {
    hours = now.getHours();
    mins = now.getMinutes();
    secs = now.getSeconds();
    msecs = now.getMilliseconds();
    document.write("<h2>");
    document.write(hours + ":" + mins + ":" + secs + ":" + msecs);
    document.write("</h2>");
}