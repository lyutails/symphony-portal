import { footer } from "../components/footer";
import { header } from "../components/header";
import { createPortal } from "../components/portal";

export function homePage() {
    const body = document.body;
    body.classList.add('body');

    const mainWrapper = document.createElement('div');
    mainWrapper.classList.add('main_wrapper');
    body.appendChild(mainWrapper);

    const cracksOne = document.createElement('div');
    cracksOne.classList.add('cracks_one');
    body.appendChild(cracksOne);

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
    menuLeft.classList.add('active');
    menuLeft.href = '#/homePage/';

    menuLeft.addEventListener('click', function() {
        menuCenter.classList.remove('active');
    })

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

    const portalGate = document.createElement('div');
    portalGate.classList.add('portal_gate');
    mainWrapper.appendChild(portalGate);

    const haveFun = document.createElement('div');
    haveFun.classList.add('have_fun');
    portalGate.appendChild(haveFun);
    haveFun.innerText = 'Have fun...';

    createPortal(mainWrapper);

    const column = document.createElement('div');
    column.classList.add('column');
    mainWrapper.appendChild(column);

    const royal = document.createElement('div');
    royal.classList.add('royal');
    mainWrapper.appendChild(royal);

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
homePage();