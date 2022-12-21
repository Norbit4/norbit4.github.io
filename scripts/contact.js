document.addEventListener('DOMContentLoaded', function() {

    var tittle = document.querySelector("#text")
    var name = "..."
    var i = 1
    var intervalID

    intervalID = setInterval(function(){
        const actualSec = name.substring(0, i)
        tittle.innerText = "Waiting" + actualSec 
        if(name.length == i){
            i = 0
            clearInterval(intervalID)
        }
        i++
    }, 500)
})