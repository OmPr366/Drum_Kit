var drums = document.querySelectorAll(".drum");
console.log("OP");

const animate = (key)=>{
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed');
    }, 250);
}

const playMusic = (m) =>{
     const audio = new Audio(m);
     audio.play();
}

document.addEventListener("keypress",(event)=>{
    const triggeredKey = event.key;
    animate(triggeredKey);
    makeSound(triggeredKey);
})

const makeSound = (key)=>{
    switch (key) {
        case "w":
            playMusic("sounds/sounds_sound-1.mp3")
            break;
        case "a":
            playMusic("sounds/sounds_sound-2.mp3")
            break;
        case "s":
            playMusic("sounds/sounds_sound-3.mp3")
            break;
        case "d":
            playMusic("sounds/sounds_sound-4.mp3")
            break;
        case "j":
            playMusic("sounds/sounds_sound-5.mp3")
            break;
        case "k":
            playMusic("sounds/sounds_sound-6.mp3")
            break;
        case "l":
            playMusic("sounds/sounds_sound-7.mp3")
            break;
    
        default:
            break;
    }
}

const handleDrumClick =(event)=>{
    var innerHTML = event.target.innerHTML;
    animate(innerHTML);
    makeSound(innerHTML);
}

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick);
    
}



//Theme1 is here:-
const theme1Background = "#091921";
const theme1Text = "#00fff1";


//Theme2 is here:-
const theme2Background = "rgb(38, 61, 47)";
const theme2Text = "#00e91f";

//Theme3 is here:-
const theme3Background = "#260909";
const theme3Text = "#ffff";

const changeTheme =(theme)=>{
    let root = document.documentElement;
    if (theme == "theme1") {
        root.style.setProperty('--background', theme1Background );
        root.style.setProperty('--text',theme1Text);
    }else if (theme == "theme2") {
        root.style.setProperty('--background',theme2Background);
        root.style.setProperty('--text',theme2Text);
    }else if (theme == "theme3") {
        root.style.setProperty('--background',theme3Background);
        root.style.setProperty('--text',theme3Text);
    }
    
}

const themeChanger =  document.getElementById("extraButtom2");

var currentTheme = "theme1";
themeChanger.addEventListener("click",(e) =>{
    themeChanger.classList.add("changeThemePressed");
    setTimeout(() => {
        themeChanger.classList.remove("changeThemePressed");
    }, 250);
    if (currentTheme == "theme1") {
        
        changeTheme("theme2");
        currentTheme = "theme2";
    }else  if (currentTheme == "theme2"){
        
        changeTheme("theme3");
        currentTheme = "theme3";
    }  else if (currentTheme == "theme3") {
        changeTheme("theme1");
        currentTheme = "theme1";
    }
})
