

function mainText() {
    i=0;
    text = "Welcome!!!";
    function selfWriting() {
        if (i < text.length) {
            document.getElementById("holla").innerHTML += text.charAt(i);
            i++;
            setTimeout(selfWriting, 150);
        }
    }
    selfWriting();
    setTimeout( function() {
        document.getElementById("cover").style.animation = "clipping .5s linear";
        document.getElementById("cover").style.display = "none";
    }, 1700);
    var cutie = document.getElementById("boxx");
    cutie.style.opacity = "0";
    setTimeout(function() {
        cutie.style.opacity = "100%";
    }, 1800)
}