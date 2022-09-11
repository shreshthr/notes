
const rainBtn = document.querySelector(".rain");
const thunderBtn = document.querySelector(".thunder");
const waterBtn = document.querySelector(".water");
const fireBtn = document.querySelector(".fire");
const nightBtn = document.querySelector(".night");


// Rain
let rainAudio = new Audio('/audio/rain.mp3');
let rain = false;

function rainSound() {
    if (rain) {
        rainAudio.pause();
        rain = false;
    } else {
        rainAudio.play();
        rain = true;
    }
}

rainBtn.addEventListener('click', () => {
    rainSound();
})


// Thunder
let thunderAudio = new Audio('/audio/thunder.mp3');
let thunder = false;

function thunderSound() {
    if (thunder) {
        thunderAudio.pause();
        thunder = false;
    } else {
        thunderAudio.play();
        thunder = true;
    }
}

thunderBtn.addEventListener('click', () => {
    thunderSound();
})


// Water
let waterAudio = new Audio('/audio/water.mp3');
let water = false;

function waterSound() {
    if (water) {
        waterAudio.pause();
        water = false;
    } else {
        waterAudio.play();
        water = true;
    }
}

waterBtn.addEventListener('click', () => {
    waterSound();
})




// Night
let nightAudio = new Audio('/audio/night.mp3');
let night = false;

function nightSound() {
    if (night) {
        nightAudio.pause();
        night = false;
    } else {
        nightAudio.play();
        night = true;
    }
}

nightBtn.addEventListener('click', () => {
    nightSound();
})
