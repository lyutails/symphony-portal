import './style.scss';
import { homePage } from './pages/home_page';
import { quizPage } from './pages/quiz_page';
import { galleryPage } from './pages/gallery_page';

const locationResolver = (location) => {
    console.log('location is', location);
    switch (location) {
        default: homePage();
        break;
        case '#/homePage/': {
            document.body.replaceChildren();
            homePage();
            break;
        }             
        case '#/quizPage/': {
            document.body.replaceChildren();
            quizPage();
            break;
        }
        case '#/galleryPage/': {
            document.body.replaceChildren();
            galleryPage();
            break;
        }
    }
}

window.addEventListener('hashchange', () => {
    const location = window.location.hash;    
    if (location) {
        locationResolver(location);
    }
})