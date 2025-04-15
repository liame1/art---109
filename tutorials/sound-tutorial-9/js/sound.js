let song = document.querySelector("#pluggnb");

let playBtn = document.querySelector("#play-btn");
let pauseBtn = document.querySelector("#pause-btn");

let volumeUp = document.querySelector("#volume-up");
let volumeDown = document.querySelector("#volume-down");

// ----- BUTTONS :
playBtn.addEventListener('click', function() {
    song.play();
    console.log("song played");
});
pauseBtn.addEventListener('click', function() {
    song.pause();
    console.log("song paused");
});
volumeUp.addEventListener('click', function() {
    song.volume += 0.1;
    console.log(song.volume);
});
volumeDown.addEventListener('click', function() {
    song.volume -= 0.1;
    console.log(song.volume);
});

// ------- DISPLAY AFTER SONG LOADED :
song.onloadeddata = function() {
    playBtn.style.visibility = "visible";
    console.log("sound loaded");
}