document.addEventListener('DOMContentLoaded', function() {
    var tittle = document.querySelector("#name")
    var name = "Norbit"
    var i = 2
    var intervalID

    intervalID = setInterval(function(){
        const actualSec = name.substring(0, i)
        tittle.innerText = actualSec 
        if(name.length == i){
            clearInterval(intervalID);
            tittle.innerText = actualSec
        }
        i++
    }, 360)
})