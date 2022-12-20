document.addEventListener('DOMContentLoaded', function() {

    var tittle = document.querySelector("#name")
    var name = "Norbert Śleziak"
    var i = 2
    var intervalID

    intervalID = setInterval(function(){
        const actualSec = name.substring(0, i)
        tittle.innerText = actualSec 
        if(name.length == i){
            clearInterval(intervalID);
            tittle.innerText = actualSec
            // setInterval(function(){
            //     tittle.style.color = "RED"
            //     setTimeout(function(){
            //         tittle.style.color = "coral"
            //     }, 200)
            // }, 2300)
        }
        i++
    }, 360)
})