

function mainText() {
    var thebody = document.body;
    thebody.style.overflow = "hidden";
    function writing(text, id, time) {
        i = 0;
        function selfWriting() {
            if (i < text.length) {
                document.getElementById(id).innerHTML += text.charAt(i);
                i++;
                setTimeout(selfWriting, time);
            }
        }
        selfWriting();
    }
    writing("Welcome!!!", "holla", 150);
    setTimeout( function() {
        document.getElementById("cover").style.animation = "clipping .5s linear";
        document.getElementById("cover").style.display = "none";
        thebody.style.overflowX = "hidden";
        thebody.style.overflowY = "visible";
    }, 1700);
    var cutie = document.getElementById("boxx");
    cutie.style.opacity = "0";
    cutie.style.display = "none";
    var aboutMe = "My name is Robert and I am a highschool student, learning at one of the most prestigious college from Bucharest. I always loved the idea of having my own website and sharing something on it, so the purpose of this one is to take you with me through the most important things in my life. Consider it as a blog)); also, I am a web developer and a kyokushin fighter :33";
    document.getElementById("txt").innerHTML = "";
    setTimeout(function() {
        cutie.style.display = "block";
        cutie.style.opacity = "100%";
        setTimeout(function() {
            writing(aboutMe, "txt", 20);
        }, 200);
    }, 1800);
}
