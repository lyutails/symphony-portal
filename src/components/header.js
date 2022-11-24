export function header() {
    const header = document.createElement('div');
    header.classList.add('header');    

    const logoContainer = document.createElement('a');
    logoContainer.classList.add('logo_container');
    header.appendChild(logoContainer);
    logoContainer.href = 'https://lyutails.github.io/symphony-portal/';

    const logoOne = document.createElement('div');
    logoOne.classList.add('logo_one');
    logoContainer.appendChild(logoOne);
    logoOne.innerText = 'symphony';

    const logoTwo = document.createElement('div');
    logoTwo.classList.add('logo_two');
    logoContainer.appendChild(logoTwo);
    logoTwo.innerText = 'portal';

    const headerRight = document.createElement('div');
    headerRight.classList.add('header_right');
    header.appendChild(headerRight);

    const languageSwitcher = document.createElement('div');
    languageSwitcher.classList.add('language_switcher');
    headerRight.appendChild(languageSwitcher);

    const ruSwitch = document.createElement('div');
    ruSwitch.classList.add('ru_switch');
    languageSwitcher.appendChild(ruSwitch);
    ruSwitch.innerText = 'ru';

    const engSwitch = document.createElement('div');
    engSwitch.classList.add('eng_switch');
    languageSwitcher.appendChild(engSwitch);
    engSwitch.innerText = 'eng';

    const themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme_switcher');
    headerRight.appendChild(themeSwitcher);

    const daySwitch = document.createElement('div');
    daySwitch.classList.add('day_switch');
    themeSwitcher.appendChild(daySwitch);

    // daySwitch.classList.toggle('active');
    // daySwitch.addEventListener('click', function (a) {
    //     let lightTheme = document.body;
    //     lightTheme.classList.add('active');
    //     dragon.classList.add('active');
    //     isDark = true;
    // })

    const nightSwitch = document.createElement('div');
    nightSwitch.classList.add('night_switch');
    themeSwitcher.appendChild(nightSwitch);

    const musicKey = document.createElement('div');
    musicKey.classList.add('music_key');
    headerRight.appendChild(musicKey);

    const score = document.createElement('div');
    score.classList.add('score');
    headerRight.appendChild(score);
    score.innerText = 'Score: 0';

    return header;
    }
    
