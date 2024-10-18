import { scoreCount } from "./song";

export function header() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logoContainer = document.createElement("a");
  logoContainer.classList.add("logo_container");
  header.appendChild(logoContainer);
  logoContainer.href = "https://lyutails.github.io/symphony-portal/";

  const logoOne = document.createElement("div");
  logoOne.classList.add("logo_one");
  logoContainer.appendChild(logoOne);
  logoOne.innerText = "symphony";

  const logoTwo = document.createElement("div");
  logoTwo.classList.add("logo_two");
  logoContainer.appendChild(logoTwo);
  logoTwo.innerText = "portal";

  const headerRight = document.createElement("div");
  headerRight.classList.add("header_right");
  header.appendChild(headerRight);

  const musicKey = document.createElement("div");
  musicKey.classList.add("music_key");
  headerRight.appendChild(musicKey);

  const score = document.createElement("div");
  score.classList.add("score");
  headerRight.appendChild(score);
  score.innerText = "Score: ";

  headerRight.append(scoreCount);

  return header;
}
