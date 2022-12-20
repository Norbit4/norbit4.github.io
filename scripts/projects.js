document.addEventListener('DOMContentLoaded', function() {

    var tittle = document.querySelector("#name")

    var langs = ["Java", "JavaScript", "Kotlin", "Python"]
    var langsColor = ["Coral", "yellow", "#bd47e0", "#2cdf35"]
    var i = 0
    var j = 2
    var first
    var intervalID

    first = setInterval(function(){
        const actualSec = langs[0].substring(0, j)
        tittle.innerText = actualSec 
        if(langs[0].length == j){
            clearInterval(first);
            j = 0
            i++
        }
        j++
    }, 360)

    setInterval(function(){
        const lang = langs[i]
        const color = langsColor[i]

        intervalID = setInterval(function(){
            const actualSec = lang.substring(0, j)
            tittle.innerText = actualSec 
            tittle.style.color = color
            if(lang.length == j){
                clearInterval(intervalID);
                j = 0
            }
            j++
        }, 340)

        if(i == 3){
            i = -1
        }
        i++
    }, 4500)
})