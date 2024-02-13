var len=document.querySelectorAll(".drum").length

for(var i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",playsound)
}

function playsound(i){
    var buttonletter=this.innerHTML
    switches(buttonletter)
    animation(buttonletter)
}

document.addEventListener("keydown",keypressed)

function keypressed(event){
    var keyletter=event.key
    switches(keyletter)
    animation(keyletter)
}

function switches(key){
        switch (key) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play()
            break;

        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play()
            break;

        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play()
            break;

        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play()
            break;

        case "j":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play()
            break;

        case "k":
            var kickbass=new Audio("./sounds/kick-bass.mp3");
            kickbass.play()
            break;

        case "l":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play()
            break;

        default:console.log("some other button is pressed")
            break;
        }
    }

    function animation(cls){
        document.querySelector("."+cls).classList.add("pressed");
        setTimeout(function(){document.querySelector("."+cls).classList.remove("pressed");},100)
    }