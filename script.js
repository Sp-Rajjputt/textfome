// console.log("Welcome to Spotify")

//Initialize the variables
let songIndex =0;
let HTMLaudioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "Aadat ninja",filePath: "1.mp3", coverPath: "cover.jpg"},
    {songName: "angli Gumai jaata",filePath: "2.mp3", coverPath: "cover.jpg"},
    {songName: "Khani suno",filePath: "3.mp4", coverPath: "cover.jpg"},
    {songName: "kaho na kaho",filePath: "4.mp3", coverPath: "cover.jpg"},
    {songName: "khaab",filePath: "5.mp3", coverPath: "cover.jpg"},
    {songName: "khal nayak hoon",filePath: "6.mp3", coverPath: "cover.jpg"},
    {songName: "kua me doob jau",filePath: "7.mp3", coverPath: "cover.jpg"},
    {songName: "kya loge tum",filePath: "8.mp3", coverPath: "cover.jpg"},
    {songName: "jassi gill",filePath: "9.mp4", coverPath: "cover.jpg"},
    {songName: "le chakk main aa",filePath: "10.mp4", coverPath: "cover.jpg"},
]
 

songItems.forEach((element,i) => {
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
let audioElement = new Audio('1.mp3')
// audioElement.play();

//Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    // console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //(ct/d)*100=presentage
    // console.log(progress);
    // myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
    //ct=(present/100)*d
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-circle-pause');
     element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
    songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
    songIndex = 9;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `${songIndex-1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})