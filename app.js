/* ------------- 
-----عليا النعمة انا طلع عين امى فى شويى الجافا سكريبت ولاد الكلب دول ------
-----عليا النعمة انا طلع عين امى فى شويى الجافا سكريبت ولاد الكلب دول ------
-----عليا النعمة انا طلع عين امى فى شويى الجافا سكريبت ولاد الكلب دول ------
----- ايوا كررتها 3 مرات من القلاف اللى شوفته------
------------ */
/* ------------- variables ------------ */
/* ------------- المتغيرات اللى هحتاجها ------------ */


const play = document.querySelector(".play");
const next = document.querySelector(".next");
const back = document.querySelector(".back");
const audio = document.querySelector(".audio");
const player = document.querySelector(".player");
const progressContainer = document.querySelector(".progress");
const progress = document.querySelector(".amount");
const songTitle = document.querySelector(".title");


/* ------------- play and pause songs ------------ */
/* ------------- التشغيل والايقاف ------------ */


function playSong() {
    player.classList.add("playing");
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    audio.play();
    console.log("play");
}

function pauseSong() {
    player.classList.remove("playing");
    play.classList.add("fa-play");
    play.classList.remove("fa-pause");
    audio.pause();
    console.log("pause");
}

play.addEventListener("click", () => {
    const playing = player.classList.contains("playing");
    if (playing) {
        pauseSong();
    } else {
        playSong();
    }
});

/* ------------- next and prevus song ------------ */
/* ------------- الاغنية السابقة والتالية ------------ */

let songIndex = 0;
let songsNames = [
    "1.mp3",
    "2.mp3",
    "3.mp3",
    "4.mp3",
    "5.mp3",
    "6.mp3",
    "7.mp3",
    "8.mp3",
    "9.mp3",
    "10.mp3",
    "11.mp3",
    "12.mp3",
    "13.mp3",
    "14.mp3",
    "15.mp3",
    "16.mp3",
    "17.mp3",
    "18.mp3",
    "19.mp3",
    "20.mp3",
    "21.mp3",
    "22.mp3",
    "23.mp3",
    "24.mp3",
    "25.mp3",
    "26.mp3",
    "27.mp3",
    "28.mp3",
    ];


function nextSong () {
    if (songIndex >= 27) {
        songIndex = 0 ;
    } else{
        songIndex++
    };
    audio.src = `mp3/${songsNames[songIndex]}`;
    playSong();
    };
function prevusSong () {
        if (songIndex <= 1) {
            songIndex = 27 ;
        } else{
            songIndex--
        };
        audio.src = `mp3/${songsNames[songIndex]}`;
        playSong();
        };

function changeName () {
    const nameSong = songsNames[songIndex];
// songTitle.innerHTML = `${nameSong}`
console.log(nameSong)

songTitle.textContent = `${nameSong}`;
}

next.addEventListener("click", nextSong);
next.addEventListener("click", changeName);
back.addEventListener("click", prevusSong);
back.addEventListener("click", changeName);





/* ------------- song progress control ------------ */
/* ------------- التحكم فى وقت التشغيل ------------ */


function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
};
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
};
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);




