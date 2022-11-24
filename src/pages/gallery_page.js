import { footer } from "../components/footer";
import { header } from "../components/header";

export function galleryPage() {
    const body = document.body;
    body.classList.add('body');
    
    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main_wrapper');
    body.appendChild(mainWrapper);
    
    const circleBlurUpOne = document.createElement('div');
    circleBlurUpOne.classList.add('circle_blur_up_one');
    body.appendChild(circleBlurUpOne);
    
    const circleBlurUpTwo = document.createElement('div');
    circleBlurUpTwo.classList.add('circle_blur_up_two');
    body.appendChild(circleBlurUpTwo);
    
    const cracksOne = document.createElement('div');
    cracksOne.classList.add('cracks_one');
    body.appendChild(cracksOne);
    
    const circleBlurDownOne = document.createElement('div');
    circleBlurDownOne.classList.add('circle_blur_down_one');
    body.appendChild(circleBlurDownOne);
    
    const circleBlurDownTwo = document.createElement('div');
    circleBlurDownTwo.classList.add('circle_blur_down_two');
    body.appendChild(circleBlurDownTwo);
    
    const cracksTwo = document.createElement('div');
    cracksTwo.classList.add('cracks_two');
    body.appendChild(cracksTwo);
    
    mainWrapper.appendChild(header());
    
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main_menu');
    mainWrapper.appendChild(mainMenu);
    
    const menuLeft = document.createElement('a');
    menuLeft.classList.add('menu_left');
    mainMenu.appendChild(menuLeft);
    menuLeft.href = '#/homePage/';
    
    const home = document.createElement('span');
    home.innerText = 'home';
    home.classList.add('home');
    menuLeft.appendChild(home);
    
    const menuCenter = document.createElement('a');
    menuCenter.classList.add('menu_center');
    mainMenu.appendChild(menuCenter);
    menuCenter.href = '#/quizPage/';

    const quiz = document.createElement('span');
    quiz.innerText = 'quiz';
    quiz.classList.add('quiz');
    menuCenter.appendChild(quiz);
    
    const menuRight = document.createElement('a');
    menuRight.classList.add('menu_right');
    mainMenu.appendChild(menuRight);
    menuRight.classList.add('active');
    menuRight.href = '#/galleryPage/';

    menuRight.addEventListener('click', function(d) {
        menuRight.classList.add('active');
        menuLeft.classList.remove('active');
        menuCenter.classList.remove('active');
    })
    
    const gallery = document.createElement('span');
    gallery.innerText = 'gallery';
    gallery.classList.add('gallery');
    menuRight.appendChild(gallery);
    
    const portalGate = document.createElement('div');
    portalGate.classList.add('portal_gate');
    mainWrapper.appendChild(portalGate);
    
    const haveFun = document.createElement('div');
    haveFun.classList.add('have_fun');
    portalGate.appendChild(haveFun);
    haveFun.innerText = 'Have fun...';
    
    const portalFrameOne = document.createElement('div');
    portalFrameOne.classList.add('portal_frame_one');
    portalGate.appendChild(portalFrameOne);
    
    const portalOne = document.createElement('div');
    portalOne.classList.add('portal_one');
    portalFrameOne.appendChild(portalOne);
    
    const portalFrameTwo = document.createElement('div');
    portalFrameTwo.classList.add('portal_frame_two');
    portalFrameOne.appendChild(portalFrameTwo);
    
    const portalTwo = document.createElement('div');
    portalTwo.classList.add('portal_two');
    portalFrameTwo.appendChild(portalTwo);
    
    const portalFrameThree = document.createElement('div');
    portalFrameThree.classList.add('portal_frame_three');
    portalFrameTwo.appendChild(portalFrameThree);
    
    const portalThree = document.createElement('div');
    portalThree.classList.add('portal_three');
    portalFrameThree.appendChild(portalThree);
    
    const portalFrameFour = document.createElement('div');
    portalFrameFour.classList.add('portal_frame_four');
    portalFrameThree.appendChild(portalFrameFour);
    
    const portalFour = document.createElement('div');
    portalFour.classList.add('portal_four');
    portalFrameFour.appendChild(portalFour);
    
    const column = document.createElement('div');
    column.classList.add('column');
    mainWrapper.appendChild(column);

    const columnRight = document.createElement('div');
    columnRight.classList.add('column_right');
    mainWrapper.appendChild(columnRight);
    
    const noteOne = document.createElement('div');
    noteOne.classList.add('note_one');
    mainWrapper.appendChild(noteOne);
    
    const noteTwo = document.createElement('div');
    noteTwo.classList.add('note_two');
    mainWrapper.appendChild(noteTwo);
    
    const noteThree = document.createElement('div');
    noteThree.classList.add('note_three');
    mainWrapper.appendChild(noteThree);
    
    const noteFour = document.createElement('div');
    noteFour.classList.add('note_four');
    mainWrapper.appendChild(noteFour);
    
    const noteFive = document.createElement('div');
    noteFive.classList.add('note_five');
    mainWrapper.appendChild(noteFive);
    
    const noteSix = document.createElement('div');
    noteSix.classList.add('note_six');
    mainWrapper.appendChild(noteSix);
    
    const columnOne = document.createElement('div');
    columnOne.classList.add('column_ruin_one');
    mainWrapper.appendChild(columnOne);
    
    const columnTwo = document.createElement('div');
    columnTwo.classList.add('column_ruin_two');
    mainWrapper.appendChild(columnTwo);    
    
    mainWrapper.append(footer());
}
galleryPage();