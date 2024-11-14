import { footer } from "../components/footer";
import { createTab } from "../components/tabs";
import { state } from "../utils/globals";
import { random } from "../utils/random";
import { musicEng } from "../music_data.js";
import {
  createNextLevelButton,
  createSong,
  scoreCount,
  songInfo,
  songNameHolder,
  songPic,
} from "../components/song";
import { header } from "../components/header";
import { createPortal } from "../components/portal.js";

export function quizPage() {
  const body = document.body;
  body.classList.add("body");

  const mainWrapper = document.createElement("div");
  mainWrapper.classList.add("main_wrapper");
  body.appendChild(mainWrapper);

  const cracksOne = document.createElement("div");
  cracksOne.classList.add("cracks_one");
  body.appendChild(cracksOne);

  const cracksTwo = document.createElement("div");
  cracksTwo.classList.add("cracks_two");
  body.appendChild(cracksTwo);

  mainWrapper.appendChild(header());

  const mainMenu = document.createElement("div");
  mainMenu.classList.add("main_menu");
  mainWrapper.appendChild(mainMenu);

  const menuLeft = document.createElement("a");
  menuLeft.classList.add("menu_left");
  mainMenu.appendChild(menuLeft);
  menuLeft.href = "#/homePage/";

  const home = document.createElement("span");
  home.innerText = "home";
  home.classList.add("home");
  menuLeft.appendChild(home);

  const menuCenter = document.createElement("a");
  menuCenter.classList.add("menu_center");
  mainMenu.appendChild(menuCenter);
  menuCenter.classList.add("active");
  menuCenter.href = "#/quizPage/";

  menuCenter.addEventListener("click", function (d) {
    menuCenter.classList.add("active");
    menuLeft.classList.remove("active");
    menuRight.classList.remove("active");
  });

  const quiz = document.createElement("span");
  quiz.innerText = "quiz";
  quiz.classList.add("quiz");
  menuCenter.appendChild(quiz);

  const quizBlock = document.createElement("div");
  quizBlock.classList.add("quiz_block");
  mainWrapper.appendChild(quizBlock);

  const tabs = [
    createTab("Classic Western"),
    createTab("Classic Russian"),
    createTab("Waltz"),
    createTab("Modern"),
    createTab("Jazz"),
    createTab("Rock"),
  ];

  tabs[0].classList.add("active");

  const musicMenu = document.createElement("div");
  musicMenu.classList.add("music_menu");
  quizBlock.appendChild(musicMenu);

  musicMenu.append(...tabs);

  const playerBlock = document.createElement("div");
  playerBlock.classList.add("player_block");
  quizBlock.appendChild(playerBlock);

  playerBlock.appendChild(songNameHolder);

  playerBlock.appendChild(songPic);

  const playPause = document.createElement("div");
  playPause.classList.add("play_pause", "active");
  playerBlock.appendChild(playPause);

  playPause.addEventListener("click", () => {
    playPause.classList.toggle("active");
  });

  const playerFeatures = document.createElement("div");
  playerFeatures.classList.add("player_features");
  playerBlock.appendChild(playerFeatures);

  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider_container");
  playerFeatures.appendChild(sliderContainer);

  const player = document.createElement("input");
  player.classList.add("player");
  player.setAttribute("type", "range");
  sliderContainer.appendChild(player);
  player.value = "0";
  player.min = "1";
  player.max = "100";

  const playerTime = document.createElement("div");
  playerTime.classList.add("player_time");
  sliderContainer.appendChild(playerTime);

  const currentTime = document.createElement("div");
  currentTime.classList.add("current_time");
  playerTime.appendChild(currentTime);
  currentTime.innerText = "00:00";

  const totalDuration = document.createElement("div");
  totalDuration.classList.add("total_duration");
  playerTime.appendChild(totalDuration);
  totalDuration.innerText = "00:00";

  const volumeContainer = document.createElement("div");
  volumeContainer.classList.add("volume_container");
  playerFeatures.appendChild(volumeContainer);

  const volumeIcon = document.createElement("div");
  volumeIcon.classList.add("volume_icon", "active");
  volumeContainer.appendChild(volumeIcon);

  const volumeSlider = document.createElement("input");
  volumeSlider.classList.add("volume_slider");
  volumeSlider.setAttribute("type", "range");
  volumeContainer.appendChild(volumeSlider);
  volumeSlider.value = "99";
  volumeSlider.min = "1";
  volumeSlider.max = "100";

  let track_index = random(0, 6);
  let isPlaying = false;
  let updateTimer;
  state.correctAnswer = track_index;

  let current_track = document.createElement("audio");

  let track_list_eng = musicEng;

  loadTrack(track_index);

  function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    current_track.src = track_list_eng[state.currentStep][track_index].path;
    current_track.load();

    updateTimer = setInterval(seekUpdate, 1000);
  }

  function resetValues() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    player.value = 0;
    current_track.src = "";
    current_track.currentTime = 0;
    isPlaying = false;
  }

  function playpauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
  }

  playPause.addEventListener("click", () => {
    playpauseTrack();
  });

  function playTrack() {
    current_track.play();
    isPlaying = true;
  }

  function pauseTrack() {
    current_track.pause();
    isPlaying = false;
  }

  volumeIcon.addEventListener("click", () => {
    volumeIcon.classList.toggle("active");
    if (volumeIcon.classList.contains("active")) {
      current_track.volume = 1;
    } else {
      current_track.volume = 0;
    }
  });

  volumeSlider.addEventListener("change", () => {
    if (current_track) {
      current_track.volume = volumeSlider.value / 100;
    }
  });

  function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(current_track.duration)) {
      seekPosition = current_track.currentTime * (100 / current_track.duration);
      player.value = seekPosition;

      let currentMinutes = Math.floor(current_track.currentTime / 60);
      let currentSeconds = Math.floor(
        current_track.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(current_track.duration / 60);
      let durationSeconds = Math.floor(
        current_track.duration - durationMinutes * 60
      );

      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
      }

      currentTime.textContent = currentMinutes + ":" + currentSeconds;
      totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }

  const info = document.createElement("div");
  info.classList.add("info");
  quizBlock.appendChild(info);

  const songsList = document.createElement("div");
  songsList.classList.add("songs_list");
  info.appendChild(songsList);

  function checkboxes() {
    const checkboxHolder = document.createElement("div");
    checkboxHolder.classList.add("checkbox_holder");
    songsList.appendChild(checkboxHolder);

    for (let i = 1; i <= 6; i++) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "name";
      checkbox.value = "value";
      checkbox.id = "id";

      const label = document.createElement("label");
      label.htmlFor = "id";

      checkboxHolder.appendChild(checkbox);
    }
  }
  checkboxes();

  const songsHolder = document.createElement("div");
  songsHolder.classList.add("songs_holder");
  songsList.appendChild(songsHolder);

  const nextLevel = createNextLevelButton();

  musicEng[0].map((item, i) => {
    const song = createSong(item, i === track_index, nextLevel);
    songsHolder.appendChild(song);
  });

  info.appendChild(songInfo);

  quizBlock.appendChild(nextLevel);

  nextLevel.addEventListener("click", () => {
    if (!nextLevel.classList.contains("disabled")) {
      state.currentStep++;
      tabs[state.currentStep].classList.add("active");
      nextLevel.classList.add("disabled");
      songsHolder.replaceChildren();
      track_index = random(0, 6);
      state.correctAnswer = track_index;
      musicEng[state.currentStep].map((item, i) => {
        const song = createSong(item, i === track_index, nextLevel);
        songsHolder.appendChild(song);
      });
      //scoreCount.textContent = state.scoreCorrectFirstAttempt;
      loadTrack(track_index);
      playPause.classList.add("active");
      songNameHolder.textContent = "*****";
      songInfo.textContent = "";
    }
  });

  createPortal(mainWrapper);

  const noteOne = document.createElement("div");
  noteOne.classList.add("note_one");
  mainWrapper.appendChild(noteOne);

  const noteTwo = document.createElement("div");
  noteTwo.classList.add("note_two");
  mainWrapper.appendChild(noteTwo);

  const noteThree = document.createElement("div");
  noteThree.classList.add("note_three");
  mainWrapper.appendChild(noteThree);

  const noteFour = document.createElement("div");
  noteFour.classList.add("note_four");
  mainWrapper.appendChild(noteFour);

  const noteFive = document.createElement("div");
  noteFive.classList.add("note_five");
  mainWrapper.appendChild(noteFive);

  const noteSix = document.createElement("div");
  noteSix.classList.add("note_six");
  mainWrapper.appendChild(noteSix);

  const columnOne = document.createElement("div");
  columnOne.classList.add("column_ruin_one");
  mainWrapper.appendChild(columnOne);

  const columnTwo = document.createElement("div");
  columnTwo.classList.add("column_ruin_two");
  mainWrapper.appendChild(columnTwo);

  mainWrapper.append(footer());
}
quizPage();
