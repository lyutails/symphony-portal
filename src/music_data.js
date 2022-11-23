// classic western

import furElise from '../refs/music/classic_western/Beethoven_Fur_Elise.mp3';
import mountainKing from '../refs/music/classic_western/Grieg_In_the_Hall_of_the_Mountain_King.mp3';
import rondoAllaTurca from '../refs/music/classic_western/Mozart_Rondo_Alla_Turca.mp3';
import clairDeLune from '../refs/music/classic_western/Debussy_Clair_de_Lune.mp3';
import moonlightBeethoven from '../refs/music/classic_western/Beethoven_Moonlight_Sonata_3rd_Movement.mp3';
import standchenSchubert from '../refs/music/classic_western/Schubert_Standchen.mp3';

//import furElisePic from '../refs/notes/fur_elise_notes.svg';
// import mountainKingPic from '../refs/notes/greig in the hall of the mountain king.svg';
// import clairDeLunePic from '../refs/notes/debussy clair de lune.svg';


// classic russian

import italianPolka from '../refs/music/classic_russian/Rachmaninoff_Italian_Polka.mp3';
import scriabinEtude from '../refs/music/classic_russian/Scriabin_Etude_Op_8_No_12.mp3'
import danceOfTheKnights from '../refs/music/classic_russian/Prokofiev_Dance_of_the_Knights_From_Romeo_and_Juliet.mp3';
import plumFairy from '../refs/music/classic_russian/Tchaikovsky_Dance_of_the_Sugar_Plum_Fairy_The_Nutcracker.mp3';
import theFirebird from '../refs/music/classic_russian/Stravinsky_The_Firebird.mp3';
import swanLake from '../refs/music/classic_russian/Tchaikovsky_Swan_Lake.mp3';

// import swanLakePic from '../refs/notes/tchaikovsky swan lake.svg';


// waltz

import waltzNoTwo from '../refs/music/waltz/Shostakovich_Waltz_No_2.mp3';
import minuteWaltz from '../refs/music/waltz/Chopin_Minute_Waltz.mp3';
import flowerWaltz from '../refs/music/waltz/Tchaikovsky_Waltz_of_the_Flowers.mp3';
import blueDanubeWaltz from '../refs/music/waltz/Strauss_The_Blue_Danube_Waltz.mp3';
import sleepingBeauty from '../refs/music/waltz/Tchaikovsky_Sleeping_Beauty_Waltz.mp3';
import mephistoWaltz from '../refs/music/waltz/Liszt_Mephisto_Waltz.mp3';

// modern

import nuvoleBianche from '../refs/music/modern/Ludovico_Einaudi_Nuvole_Bianche.mp3';
import oneSummerDay from '../refs/music/modern/Joe_Hisaishi_One_Summer_Day.mp3';
import interstellar from '../refs/music/modern/Hans_immer_Interstellar.mp3';
import riverFlowsInYou from '../refs/music/modern/Yiruma_River_Flows_in_You.mp3';
import tiersenComptine from '../refs/music/modern/Yann_Tiersen_Comptine.mp3';
import harryPotter from '../refs/music/modern/Harry_Potter_John_Williams.mp3';

// jazz

import flyMeToTheMoon from '../refs/music/jazz/Fly_me_to_the_moon_Frank_Sinatra.mp3';
import takeFive from '../refs/music/jazz/Dave_Brubeck_Take_Five.mp3';
import misty from '../refs/music/jazz/Misty_Ella_Fitzgerald.mp3';
import wonderfulWorld from '../refs/music/jazz/Louis_Armstrong_What_A_Wonderful_World.mp3';
import soWhat from '../refs/music/jazz/Miles_Davis_So_What.mp3';
import autumnLeaves from '../refs/music/jazz/Ryo_Fukui_Autumn_Leaves.mp3';

// rock

import smokeOnTheWater from '../refs/music/rock/Deep_Purple_Smoke_on_the_Water.mp3';
import stillLovingYou from '../refs/music/rock/Scorpions_Still_Loving_You.mp3';
import stairwayToHeaven from '../refs/music/rock/Led_Zeppelin_Stairway_To_Heaven.mp3';
import darkSide from '../refs/music/rock/Pink_Floyd_Dark_Side_Of_The_Moon.mp3';
import knocking from '../refs/music/rock/Guns_Roses_Knockin_On_Heaven_Door.mp3';
import queenShow from '../refs/music/rock/Queen_The_Show_Must_Go_On.mp3';


export const musicEng = [
    [
    {
        id: 1,
        song_artist: 'Ludwig van Beethoven',
        song_name: 'Für Elise',
        description: `Musically, it is a five-part rondo with the form ABACA. 
        It is in the key of A minor, which gives it a sad or wistful sound, full 
        of regret and longing. The repeating A section is the most recognized part of Für Elise. 
        It is the easiest section to learn and play.`,
        path: furElise,
        //image: furElisePic,
    },
    {
        id: 2,
        song_artist: 'Edvard Grieg',
        song_name: 'In The Hall Of The Mountain King',
        description: `Edvard Grieg was born in 1843 in Bergen, Norway and died there in 1907. 
        Grieg was both an outstanding pianist and composer and he expressed his love of Norwegian 
        culture and the beauty of the Norwegian countryside in his compositions.
        In the Hall of the Mountain King was first written as incidental music for the premier 
        of Henrik Ibsen’s play Peer Gynt in 1876. Grieg later created two orchestral suites from 
        the incidental music. In the Hall of the Mountain King is a musical depiction of Peer Gynt 
        being chased by trolls during his escape from the home of the Mountain King.`,
        path: mountainKing,
        //image: mountainKingPic,
    },
    {
        id: 3,
        song_artist: 'Wolfgang Amadeus Mozart',
        song_name: 'Rondo alla Turca',
        description: `The first movement sets a theme with six variations and is highly pure melody. 
        The second movement is extremely lyrical, serene and noble in its melody. As for the last movement, 
        the best known, he imitates the style of a Turkish Janissaries company. This final part is characterised 
        by the use of piccolos, cymbals, triangles and numerous percussions. Mozart seems to have gathered 
        all knowledge and sophisticated techniques to create a work of heavenly beauty, yet extremely complex:
         percussions are barely hinted, hand crossings, broken arpeggios ... All of his mastery is expressed 
         progressively after each variation.`,
        path: rondoAllaTurca,
        //image: rondoAllaTurcaPic,
    },
    {
        id: 4,
        song_artist: 'Claude Debussy',
        song_name: 'Clair de Lune',
        description: `Clair de Lune ('moonlight'), has entered popular consciousness thanks 
        to its regular performance. Its origins are complex and fascinating, combining influences 
        from poetry, the music of the Baroque period (from around 1600 to 1750), and Impressionism, 
        a style in music following on from that in visual arts.`,
        path: clairDeLune,
        //image: clairDeLunePic,
    },
    {
        id: 5,
        song_artist: 'Ludwig van Beethoven',
        song_name: 'Moonlight Sonata 3rd Movement',
        description: `Its popularity with piano learners spans centuries, due perhaps 
        to the romantic nature of its title, or perhaps because it offers as much to the early-intermediate 
        pianist as it does the advanced pianist. The third movement presents numerous technical challenges, 
        not least the speed and dexterity required to play Presto Agitato. Close your eyes and imagine yourself 
        playing it up to speed. Then don’t think, and just play.`,
        path: moonlightBeethoven,
        //image: moonlightBeethovenPic,
    },
    {
        id: 6,
        song_artist: 'Franz Schubert',
        song_name: 'Ständchen',
        description: `It’s a short story of a person wishing to be loved by another. 
        You can feel two different things: melancholy yearning and hope. They shift 
        back and forth, back and forth. Schubert composed Romantic music with the tools of a Classical 
        composer. Each piece expressively tells a story as if it were a piece of Romantic music, but 
        the scenes and characters are distinct and pronounced like a piece of Classical music — 
        they don’t blend seamlessly like in a piece of late Romantic music.`,
        path: standchenSchubert,
        //image: standchenSchubertPic,
    }
    ],
    [    
    {
        id: 7,
        song_artist: 'Sergei Rachmaninoff',
        song_name: 'Italian Polka',
        description: `"Italian Polka" is based on a tune that Rachmaninoff heard in Italy in the early 
        1900s, played by an old hurdy-gurdy. He liked the melody very much, and he recorded it for the 
        piano right after he returned to the hotel.`,
        path: italianPolka,
        //image: italianPolkaPic,
    },
    {
        id: 8,
        song_artist: 'Alexander Scriabin',
        song_name: 'Etude Op 8 No 12',
        description: `The Scriabin Etude Op8 No12 may well be the best known and most loved of Scriabin's
         works for the piano. It is youthful, vigorous, technically demanding piano music in the grand 
         late Romantic style, written at a point in Scriabin's life when he and Rachmaninov were still 
         headed in the same direction. Scriabin plays it very fast as the forward motion of 
         the music demands, and the etude is driven to its irresistable conclusion leaving the listener 
         breathless.`,
        path: scriabinEtude,
        //image: scriabinEtudePic,
    },
    {
        id: 9,
        song_artist: 'Sergey Prokofiev',
        song_name: 'Dance of the Knights',
        description: `"Romeo and Juliet" consists of three orchestral suites. "Dance of the Knights" is 
        one of two movements from "Montagues and Capulets," which begins the second suite. It is meant to 
        accompany the fateful encounter between the two warring clans of Shakespeare's romantic drama, 
        then follow the action to the Capulets' masquerade ball, where Juliet encounters Romeo. 
        In the decades since its premiere, "Dance of the Knights" has become an iconic work in its own right. 
        Selections have been excerpted for film and television, sampled by musicians like Tribe Called Quest 
        and Sia, and used for the video game "Civilization V."`,
        path: danceOfTheKnights,
        //image: danceOfTheKnightsPic,
    },
    {
        id: 10,
        song_artist: 'Pyotr Ilyich Tchaikovsky',
        song_name: 'Dance of the Sugar Plum Fairy',
        description: `Despite the tune’s ubiquity, it never gets old. “The Dance of the Sugar Plum Fairy” was one of the 
        earliest uses of the celesta, an instrument that became so popular it appealed to both Frank Sinatra and the 
        composer John Williams, who exploited its ethereal timbre for “Hedwig’s Theme” in the “Harry Potter” films. Tchaikovsky achieved 
        the rare feat of writing music that was endlessly enjoyable yet revolutionary. For centuries, people 
        had been looking for a keyboard instrument that would hit bells. The celesta uses felt hammers to hit the bells. It’s a much more 
        smooth and beautiful sound. The inventor called it celesta because “celestial” — heaven. He thought it 
        sounded heavenly. Tchaikovsky discovered the celesta, which had been invented in the 1880s, on a trip to France. 
        He wasn’t the first composer to use it in an orchestral piece, but he was the first person to give it a massive solo. 
        It proved to be such an influential move. From that moment on, the floodgates opened. Everyone wrote for celesta.`,
        path: plumFairy,
        //image: plumFairyPic,
    },
    {
        id: 11,
        song_artist: 'Igor Stravinsky',
        song_name: 'The Firebird',
        description: `The Firebird is a ballet and orchestral concert work by Stravinsky written 
        for the 1910 Paris season of Diaghilev’s Ballets Russes. The ballet is significant not only 
        as the first international success of Stravinsky’s career, but also as the beginning of the 
        collaboration between Diaghilev and Stravinsky that would also produce the acclaimed ballets 
        Petrushka and The Rite Of Spring.`,
        path: theFirebird,
        //image: theFirebirdPic,
    },
    {
        id: 12,
        song_artist: 'Pyotr Ilyich Tchaikovsky',
        song_name: 'Swan Lake',
        description: `"Swan Lake" is a timeless love story that mixes magic, tragedy, and romance into four acts. 
        It features Prince Siegfried and a lovely swan princess named Odette. Under the spell of a sorcerer, 
        Odette spends her days as a swan swimming on a lake of tears and her nights in her beautiful human form.
        The couple quickly falls in love. As in most fairy tales, things are not that easy and the sorcerer has 
        more tricks to play. Yet, it is interesting to note that in many performances, a single prima ballerina 
        plays both Odette and Odile. It is a role that ballerinas strive for from a very young age.`,
        path: swanLake,
        //image: swanLakePic,
    },
    ],
    [    
    {
        id: 13,
        song_artist: 'Dmitri Shostakovich',
        song_name: 'Second Waltz',
        description: `Familiar to many as the soundtrack to the film Eyes Wide Shut, dmitri shostakovich’s Waltz No. 2 
        from the Suite for Variety Orchestra – which is better known as Jazz Suite No. 2 – has mysterious, lascivious 
        qualities that call to mind circus or variety music. stefan Potzmann has arranged this dramatic russian performance 
        piece for four clarinets, thus adding another wellknown classic to the instrumental literature now available.`,
        path: waltzNoTwo,
        //image: waltzNoTwoPic,
    },
    {
        id: 14,
        song_artist: 'Frederic Chopin',
        song_name: 'Minute Waltz',
        description: `It was written in 1847. It is a piece of music for the piano. It is sometimes called "The Waltz of 
        the Little Dog". This is because Chopin was watching a little dog chase its tail when he wrote it.
         The little dog was "Marquis". He belonged to Chopin's friend George Sand. Marquis had befriended Chopin. 
         The composer mentioned Marquis in several of his letters. In one letter dated 25 November 1846, Chopin wrote:
         "Please thank Marquis for missing me and for sniffing at my door.`,
        path: minuteWaltz,
        //image: minuteWaltzPic,
    },
    {
        id: 15,
        song_artist: 'Pyotr Ilyich Tchaikovsky',
        song_name: 'Waltz of the Flowers',
        description: `Waltz of the Flowers is a piece of orchestral music that features in the second act 
        of his ever-loved festive ballet The Nutcracker. The ballet was premiered at Christmastime in 1892, 
        and has since been one of the most popular ballets in the world. It is based on E. T. A Hoffmann’s 
        1816 fairytale The Nutcracker and the Mouse King, which tells the story of a young girl who adventures
         into the ‘Land of Sweets’ on Christmas Eve. Waltz of the Flowers is the final dance of the ballet where 
         all the Sugar Plum Fairy’s sweets celebrate Clara and the prince.`,
        path: flowerWaltz,
        //image: flowerWaltzPic,
    },
    {
        id: 16,
        song_artist: 'Johann Strauss II',
        song_name: 'Dance of the Sugar Plum Fairy',
        description: `The work epitomizes the symphonic richness and variety of Strauss’s dance music, 
        which earned him acclaim as the “waltz king,” and it has become the best-known of his many dance pieces.`,
        path: blueDanubeWaltz,
        //image: blueDanubeWaltzPic,
    },
    {
        id: 17,
        song_artist: 'Pyotr Ilyich Tchaikovsky',
        song_name: 'The Sleeping Beauty',
        description: `Tchaikovsky wrote his first ballet, Swan Lake, in 1875 because — he was frank 
        to admit — he needed the money. The project may have helped to fill his pockets, but it also 
        served the even more important purpose of fully awakening that which had already been manifest 
        in many of his non-ballet scores, namely the gift to write music that is the essence of the dance. 
        Some 13 years, two symphonies, and several operas later, Tchaikovsky was commissioned to write another 
        ballet, this one for the Maryinsky Theater in St. Petersburg, with the subject, The Sleeping Beauty, 
        based on the fairy tale by Charles Perrault. The Sleeping Beauty, now a classic in the ballet repertory, 
        is Tchaikovsky at his best. One of Tchaikovsky’s best-known waltzes comes from Act I of the ballet, and is 
        danced by the corps holding garlands of flowers in celebration of Aurora’s 16th birthday.`,
        path: sleepingBeauty,
        //image: sleepingBeautyPic,
    },
    {
        id: 18,
        song_artist: 'Franz Liszt',
        song_name: 'Mephisto Waltz',
        description: `It’s still ringing in your ears, this warhorse for orchestra or for a pianist. 
        Doesn’t it – when convincingly interpreted – almost drive you crazy with its wild, diabolical 
        tempo, its sensual surge in the slow middle part? And now honestly, for once: Can you even whistle 
        a tune from Liszt’s Faust symphony?`,
        path: mephistoWaltz,
        //image: mephistoWaltzPic,
    },
    ],
    [    
    {
        id: 19,
        song_artist: 'Ludovico Einaudi',
        song_name: 'Nuvole Bianche',
        description: `about`,
        path: nuvoleBianche,
        //image: nuvoleBianchePic,
    },
    {
        id: 20,
        song_artist: 'Joe Hisaishi',
        song_name: 'One Summer’s Day',
        description: `about`,
        path: oneSummerDay,
        //image: oneSummerDayPic,
    },
    {
        id: 21,
        song_artist: 'Hans Zimmer',
        song_name: 'Interstellar',
        description: `about`,
        path: interstellar,
        //image: interstellarPic,
    },
    {
        id: 22,
        song_artist: 'Johann Strauss II',
        song_name: 'River Flows in You',
        description: `about`,
        path: riverFlowsInYou,
        //image: riverFlowsInYouPic,
    },
    {
        id: 23,
        song_artist: 'Yann Tiersen',
        song_name: 'Comptine',
        description: `about`,
        path: tiersenComptine,
        //image: tiersenComptineic,
    },
    {
        id: 24,
        song_artist: 'John Williams',
        song_name: 'Harry Potter',
        description: `about`,
        path: harryPotter,
        //image: harryPotterPic,
    },
    ],
    [    
    {
        id: 25,
        song_artist: 'Frank Sinatra',
        song_name: 'Fly Me To The Moon',
        description: `about`,
        path: flyMeToTheMoon,
        //image: flyMeToTheMoonPic,
    },
    {
        id: 26,
        song_artist: 'Dave Brubeck',
        song_name: 'Take Five',
        description: `about`,
        path: takeFive,
        //image: takeFivePic,
    },
    {
        id: 27,
        song_artist: 'Ella Fitzgerald',
        song_name: 'Misty',
        description: `about`,
        path: misty,
        //image: mistyPic,
    },
    {
        id: 28,
        song_artist: 'Louis Armstrong',
        song_name: 'What A Wonderful World',
        description: `about`,
        path: wonderfulWorld,
        //image: wonderfulWorldPic,
    },
    {
        id: 29,
        song_artist: 'Miles Davis',
        song_name: 'So What',
        description: `about`,
        path: soWhat,
        //image: soWhatPic,
    },
    {
        id: 30,
        song_artist: 'Ryo Fukui',
        song_name: 'Autumn Leaves',
        description: `about`,
        path: autumnLeaves,
        //image: autumnLeavesPic,
    },
    ],
    [    
    {
        id: 31,
        song_artist: 'Deep Purple',
        song_name: 'Smoke on the Water',
        description: `about`,
        path: smokeOnTheWater,
        //image: smokeOnTheWaterPic,
    },
    {
        id: 32,
        song_artist: 'Scorpions',
        song_name: 'Still Loving You',
        description: `about`,
        path: stillLovingYou,
        //image: stillLovingYouPic,
    },
    {
        id: 33,
        song_artist: 'Led Zeppelin',
        song_name: 'Stairway to Heaven',
        description: `about`,
        path: stairwayToHeaven,
        //image: stairwayToHeavenPic,
    },
    {
        id: 34,
        song_artist: 'Pink Floyd',
        song_name: 'Dark Side of the Moon',
        description: `about`,
        path: darkSide,
        //image: darkSidePic,
    },
    {
        id: 35,
        song_artist: 'Guns N’Roses',
        song_name: 'Knocking on Heavens Door',
        description: `about`,
        path: knocking,
        //image: knockingPic,
    },
    {
        id: 36,
        song_artist: 'Queen',
        song_name: 'show must go on',
        description: `about`,
        path: queenShow,
        //image: queenShowPic,
    },
    ]
]

// export const musicRu = [
//     {
//         id: 1,
//         song_artist: 'Людвиг ван Бетховен',
//         song_name: 'К Элизе',
//         description: `В музыкальном плане это рондо из пяти частей в форме ABACA. Он в тональности ля минор, 
//         что придает ему грустный или задумчивый звук, полный сожаления и тоски. Повторяющаяся часть А — самая 
//         узнаваемая часть «К Элизе». Это самый простой раздел для изучения и игры.`,
//         path: furElise,
//         image: '../refs/notes/fur_elise_notes.svg',
//     },
//     {
//         id: 2,
//         song_artist: 'Эдвард Григ',
//         song_name: 'In The Hall Of The Mountain King',
//         description: `Эдвард Григ родился в 1843 году в Бергене, Норвегия, и умер там же в 1907 году. Григ 
//         был выдающимся пианистом и композитором, и в своих произведениях он выражал свою любовь к норвежской 
//         культуре и красоте норвежской сельской местности. «В зале горного короля» была впервые написана как 
//         музыкальное сопровождение к премьере пьесы Генрика Ибсена «Пер Гюнт» в 1876 году. Позже Григ создал 
//         две оркестровые сюиты из этой музыки. В Зале Горного Короля есть музыкальное изображение Пера Гюнта, 
//         которого преследуют тролли во время его побега из дома Горного Короля.`,
//         path: mountainKing,
//         image: '../refs/notes/greig in the hall of the mountain king.svg',
//     },
//     {
//         id: 3,
//         song_artist: 'Сергей Рахманинов',
//         song_name: 'Italian Polka Concerto No. 2',
//         description: `«Итальянская полька» основана на мелодии, которую Рахманинов услышал в Италии 
//         в начале 1900-х годов в исполнении старой шарманки. Мелодия ему очень понравилась, и он 
//         записал ее для фортепиано сразу после того, как вернулся в гостиницу.`,
//         path: italianPolka,
//         image: '../refs/notes/rachmaninoff italian polka.svg',
//     },
//     {
//         id: 4,
//         song_artist: 'Пётр Ильич Чайковский',
//         song_name: 'Лебединое Озеро',
//         description: `«Лебединое озеро» — это вневременная история любви, в которой волшебство, трагедия и 
//         романтика смешиваются в четырех действиях. В нем представлены принц Зигфрид и прекрасная принцесса-лебедь 
//         по имени Одетта. Под чарами колдуна Одетта проводит дни как лебедь, плывущий по озеру слез, и ночи в своем 
//         прекрасном человеческом обличье. Пара быстро влюбляется. Как и в большинстве сказок, все не так просто, 
//         и у колдуна есть еще уловки. Тем не менее, интересно отметить, что во многих спектаклях одна 
//         прима-балерина играет и Одетту, и Одиллию. Это роль, к которой балерины стремятся с самого раннего возраста.`,
//         audio: swanLake,
//         image: '../refs/notes/tchaikovsky swan lake.svg',
//     },
//     {
//         id: 5,
//         song_artist: 'Клод Дебюсси',
//         song_name: 'Clair de Lune',
//         description: `Clair de Lune («лунный свет») вошла в общественное сознание благодаря регулярному исполнению. 
//         Его происхождение сложное и увлекательное, сочетающее в себе влияние поэзии, музыки периода барокко 
//         (примерно с 1600 по 1750 год) и импрессионизма, музыкального стиля, следующего за стилем в изобразительном искусстве.`,
//         path: clairDeLune,
//         image: '../refs/notes/debussy clair de lune.svg',
//     },
//     {
//         id: 6,
//         song_artist: 'Йоханн Себастьян Бах',
//         song_name: 'Prelude No. 1 in C Major',
//         description: `«Хорошо темперированный клавир» (его два тома, каждый содержит прелюдию и фугу в каждой нотной
//         тональности) начинается в до мажоре, самой «естественной» музыкальной тональности, поэтому он, очевидно, 
//         позаботился о том, чтобы первая запись была Неплохо. Немногие партии клавишных звучат так нежно и хрупко, 
//         но в них есть и очень баховская стабильность.`,
//         path: preludeBach,
//         image: '../refs/notes/Bach Prelude No. 1 in C Major.svg',
//     },
// ]