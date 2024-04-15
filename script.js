var drumButton=document.querySelectorAll('.drum');

function playMusic(character){
    switch(character){
        case 'w':
            w= new Audio('./sounds/crash.mp3');
            w.play();
            break;
        case 'a':
            a= new Audio('./sounds/kick-bass.mp3');
            a.play();
            break;     
        case 's':
            s= new Audio('./sounds/snare.mp3');
            s.play();
            break;
        case 'd':
            d= new Audio('./sounds/tom-1.mp3');
            d.play();
            break; 
        case 'j':
            j= new Audio('./sounds/tom-2.mp3');
            j.play();
            break;
        case 'k':
            k= new Audio('./sounds/tom-3.mp3');
            k.play();
            break;
        case 'l':
            l= new Audio('./sounds/tom-4.mp3');
            l.play();
            break;
        default:
            d= new Audio('./sounds/kick-bass.mp3');
            d.play();
            break;      
    }

}

// Buttion click event
for(var j =0;j<drumButton.length;j++){
    drumButton[j].addEventListener('click', function (){
        var myOption=this.innerHTML;
        playMusic(myOption);
        addAnimation(myOption);
        })
}

//keypress event

document.addEventListener('keydown', (event)=>{
    playMusic(event.key)
    addAnimation(event.key)
})

function addAnimation(k){
    var activeButton = document.querySelector('.'+k)
    activeButton.classList.toggle('pressed');
    setInterval(()=>{
        activeButton.classList.remove('pressed')
    }, 500)
}



