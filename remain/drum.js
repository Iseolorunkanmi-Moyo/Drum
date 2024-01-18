document.getElementById("bass").addEventListener("click", bass);

function bass () {
    var audio = new Audio("/sounds/kick-bass.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "w"){
        bass()
    }
} )

document.getElementById("hihat").addEventListener("click", hat);

function hat () {
    var audio = new Audio("/sounds/crash.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "c"){
        hat()
    }
} )

document.getElementById("snare").addEventListener("click", snare);

function snare () {
    var audio = new Audio("/sounds/tom-1.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "p"){
        snare()
    }
} )

document.getElementById("tom1").addEventListener("click", tom1);

function tom1 () {
    var audio = new Audio("/sounds/tom-1.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "1"){
        tom1()
    }
} )

document.getElementById("tom2").addEventListener("click", tom2);

function tom2 () {
    var audio = new Audio("/sounds/tom-2.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "2"){
        tom2()
    }
} )

document.getElementById("tom3").addEventListener("click", tom3);

function tom3 () {
    var audio = new Audio("/sounds/tom-3.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "3"){
        tom3()
    }
} )

document.getElementById("tom4").addEventListener("click", tom4);

function tom4 () {
    var audio = new Audio("/sounds/tom-4.mp3")
    audio.play()
}

document.body.addEventListener("keypress", function(event){
    if (event.key === "4"){
        tom1()
    }
} )