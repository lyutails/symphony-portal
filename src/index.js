import "./style.scss";
import { homePage } from "./pages/home_page";
import { quizPage } from "./pages/quiz_page";

const locationResolver = (location) => {
  switch (location) {
    default:
      document.body.replaceChildren();
      homePage();
      break;
    case "#/homePage/": {
      document.body.replaceChildren();
      homePage();
      break;
    }
    case "#/quizPage/": {
      document.body.replaceChildren();
      quizPage();
      break;
    }
  }
};

locationResolver();

window.addEventListener("hashchange", () => {
  const location = window.location.hash;
  if (location) {
    locationResolver(location);
  }
});
