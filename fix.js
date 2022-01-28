Hooks.on("ready", function() {
    console.log("Initialized sidebar fix")
    var elem = document.getElementById("ui-right");
    elem.style.position = "absolute";
    elem.style.right = "0";
    document.getElementById("ui-right").style.position = "absolute"
})