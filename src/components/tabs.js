export function createTab(text) {
  const musicTab = document.createElement("div");
  musicTab.classList.add("music_tab");
  musicTab.innerText = text;

  return musicTab;
}
