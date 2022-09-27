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
    changeName ();

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
    "we are the brave.mp3",
    "يا معافر.mp3",
    "عشرة ومشوار.mp3"
    ];

console.log(songsNames.length - 5)
function nextSong () {
    songIndex++

    if (songIndex > songsNames.length-1) {
        songIndex = 0 ;
    };

    audio.src = `mp3/${songsNames[songIndex]}`;
    playSong();
    };
function prevusSong () {
    songIndex--

        if (songIndex < songsNames.length - 3) {
            songIndex = songsNames.length-1 ;
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




