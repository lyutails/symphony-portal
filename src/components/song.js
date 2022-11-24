import { musicEng } from "../music_data";
import { state } from "../utils/globals";

export const songNameHolder = document.createElement('div');
    songNameHolder.classList.add('song_name_holder');    
    songNameHolder.innerText = '*****';

export const songPic = document.createElement('div');
songPic.classList.add('song_pic');

export function createNextLevelButton() {
    const nextLevel = document.createElement('div');
    nextLevel.classList.add('next_level', 'disabled');  
    nextLevel.textContent = 'Next Level';

    return nextLevel;
} 

export const songInfo = document.createElement('div');
songInfo.classList.add('song_info');

export const createSong = (song, isRight, nextLevel) => {
    const songHolder = document.createElement('div');
    songHolder.classList.add('song_holder');    

    const songName = document.createElement('div');
    songName.classList.add('song_name');
    songHolder.appendChild(songName);

    const songArtist = document.createElement('div');
    songArtist.classList.add('song_artist');
    songHolder.appendChild(songArtist);

    songName.textContent = song.song_name;
    songArtist.textContent = song.song_artist;

    songHolder.addEventListener('click', () => {
        //songHolder.setAttribute('style', `background-color: ${isRight ? 'blue' : 'red'}`);               
        songHolder.style.backgroundColor = `${isRight ? 'blue' : 'red'}`;
        songNameHolder.textContent = isRight ? musicEng[state.currentStep][state.correctAnswer].song_name : '*****';  
        songPic.style.backgroundImage = isRight ? musicEng[state.currentStep][state.correctAnswer].image : '../refs/light/piano.png';
        songInfo.textContent = isRight ? musicEng[state.currentStep][state.correctAnswer].description : '';
        if (isRight) nextLevel.classList.toggle('disabled');         
    })
    return songHolder;
}