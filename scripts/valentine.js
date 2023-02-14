document.addEventListener('DOMContentLoaded', function() {

    var tittle = document.querySelector("#heart")
    var name = "Hej piękna <3 Zostaniesz moją walentynką?"
    var i = 2
    var intervalID

    intervalID = setInterval(function(){
        const actualSec = name.substring(0, i)
        tittle.innerText = actualSec 
        if(name.length == i){
            clearInterval(intervalID)
            tittle.innerText = actualSec
        }
        i++
    }, 300)
})