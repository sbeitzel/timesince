var frozen = moment("2013-11-09 22:00:00-08");
var bugDiv = document.getElementById("timeAgo");
computeSince();
setInterval(computeSince, 3600000);
function computeSince() {
    var now = moment();
    var days = now.diff(frozen, 'days');
    console.log("Days: "+days);
    bugDiv.innerHTML = nixify(days);
}
function nixify(theNumber) {
    var imageBase = "nixie-digits-1.0/";
    var theString = "";

    while (theNumber >= 1) {
        var digit = theNumber % 10;
        theNumber = (theNumber - digit)/ 10;
        var theNix = imageBase+digit+".png";
        theString = '<img src="'+theNix+'" width="40px" alt="'+digit+'">'+theString;
    }
    return theString;
}
