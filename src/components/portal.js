export function createPortal(mainWrapper) {
  const portalGate = document.createElement("div");
  portalGate.classList.add("portal_gate");
  mainWrapper.appendChild(portalGate);

  const portalFrameOne = document.createElement("div");
  portalFrameOne.classList.add("portal_frame_one");
  portalGate.appendChild(portalFrameOne);

  const portalOne = document.createElement("div");
  portalOne.classList.add("portal_one");
  portalFrameOne.appendChild(portalOne);

  const portalFrameTwo = document.createElement("div");
  portalFrameTwo.classList.add("portal_frame_two");
  portalFrameOne.appendChild(portalFrameTwo);

  const portalTwo = document.createElement("div");
  portalTwo.classList.add("portal_two");
  portalFrameTwo.appendChild(portalTwo);

  const portalFrameThree = document.createElement("div");
  portalFrameThree.classList.add("portal_frame_three");
  portalFrameTwo.appendChild(portalFrameThree);

  const portalThree = document.createElement("div");
  portalThree.classList.add("portal_three");
  portalFrameThree.appendChild(portalThree);

  const portalFrameFour = document.createElement("div");
  portalFrameFour.classList.add("portal_frame_four");
  portalFrameThree.appendChild(portalFrameFour);

  const portalFour = document.createElement("div");
  portalFour.classList.add("portal_four");
  portalFrameFour.appendChild(portalFour);
}
