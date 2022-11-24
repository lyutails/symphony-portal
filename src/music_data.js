// classic western

import furElise from '../refs/music/classic_western/Beethoven_Fur_Elise.mp3';
import mountainKing from '../refs/music/classic_western/Grieg_In_the_Hall_of_the_Mountain_King.mp3';
import rondoAllaTurca from '../refs/music/classic_western/Mozart_Rondo_Alla_Turca.mp3';
import clairDeLune from '../refs/music/classic_western/Debussy_Clair_de_Lune.mp3';
import moonlightBeethoven from '../refs/music/classic_western/Beethoven_Moonlight_Sonata_3rd_Movement.mp3';
import standchenSchubert from '../refs/music/classic_western/Schubert_Standchen.mp3';

//import furElisePic from '../refs/notes/fur_elise_notes.svg';
// import mountainKingPic from '.r./efs/notes/greig in the hall of the mountain king.svg';
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
import valseTiersen from '../refs/music/waltz/Yann_Tiersen_La_valse.mp3';
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
        description: `Beethoven wrote Für Elise 1810 as a small piece for the piano, and then put it
         aside with his many other draft works. We only have it because a musicologist found it and
          published it in 1867! And it's a good thing for us that Für Elise was finally found! Its 
          first five notes (alternating E and D-sharp) have become as famous as the booming 
          da-da-da-dum first notes of Beethoven’s 5th Symphony. Musically, Für Elise is deeply 
          melodic and full of nostalgic feeling, with a relatively simple harmony that makes it very 
          accessible and not overly intellectually demanding. At the same time, because its first 
          part is easy even for a beginner piano player to learn, but is also beautiful, 
          it is often assigned by piano teachers the world over, perpetuating its fame. As part 
          of the Romantic music movement that explored beautifully terrifying and unknowable spiritual 
          and emotional experiences, Für Elise contrasts the sad wistfulness of its main theme with 
          the unpredictable wildness of its other two themes. Für Elise was lost for over 50 years 
          until a musicologist found it and published it after Beethoven's death. And then that final 
          draft copy was lost again and has never been found.`,
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
        description: `Familiar to many as the soundtrack to the film Eyes Wide Shut, Dmitri Shostakovich’s Waltz No. 2 
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
        song_artist: 'Yann Tiersen',
        song_name: "La valse d'Amélie",
        description: `An extended piano version of the incredible song called "La Valse d'Amélie", 
        originally played and composed by Yann Tiersen.`,
        path: valseTiersen,
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
        description: `The title of this work by Ludovico Einaudi means, simply, white clouds, 
        and it’s a title which perfectly captures the calm atmosphere conveyed in this work for solo piano.
        It’s emotional, beautiful and the piece builds as it progresses. Nuvole Bianche is one of Einaudi’s 
        most commercially-successful works. It is the minimalist approach that catches the ear of his dedicated listeners. 
        The sequence of opening chords sits at the core of this work and the statement returns later in the piece.  
        This piece might “sound” like a classical composition, but when you look at the structure and chords 
        it’s actually much closer to a pop-progression. That’s because it uses 4 chords, and those chords 
        are the very well-known 1-5-4-6 chords, but in a 6-4-1-5 order.`,
        path: nuvoleBianche,
        //image: nuvoleBianchePic,
    },
    {
        id: 20,
        song_artist: 'Joe Hisaishi',
        song_name: 'One Summer’s Day',
        description: `Every element of Spirited Away makes it easy to get caught up in the story of a young 
        girl who must navigate the spirit world in order to return herself and her parents to the human world.
        But the music is an especially potent part of the film’s power. The man responsible for the film’s 
        music is Joe Hisaishi, who has worked on almost allof Hayao Miyazaki’s films and has released more 
        than 100 film scores and solo albums over the course of his career. 
        The score to Spirited Away is a lush, sweeping aural adventure, and the crown jewel of it all 
        is “One Summer’s Day,” the opening track. “One Summer’s Day” emphasizes the focus on Chihiro 
        with a returning focus on the piano. The orchestration might grow and evolve around it, 
        but the piano almost always carries the melody, and at a key moment — the appearance of the 
        film’s title card — all other instruments drop out completely, leaving just the piano.
        Hisaishi’s music strikes a careful balance between internal and external, focusing on highlighting 
        the emotions present in a scene without completely disregarding the unfolding action.`,
        path: oneSummerDay,
        //image: oneSummerDayPic,
    },
    {
        id: 21,
        song_artist: 'Hans Zimmer',
        song_name: 'Interstellar',
        description: `"Chris said to me, in his casual way. 'So, Hans, if I wrote one page of something, 
        didn't tell you what it was about, just give you one page, would you give me one day of work?'
        "Zimmer told Shone. "'Whatever you came up with on that one day would be fine.'" 
        Zimmer spent a day composing the theme and then showed it to Nolan, and Nolan loved it. 
        It was only then that Nolan revealed what kind of movie he had in mind. "I asked him, 
        'Well, yes, but what is the movie?' And he started describing this huge, epic tale of space 
        and science and humanity, on this epic scale. I’m going, 'Chris, hang on, I’ve just written 
        this highly personal thing, you know?' He goes, 'Yes, but I now know where the heart of the movie is.
        'Everything about this movie was personal.'"`,
        path: interstellar,
        //image: interstellarPic,
    },
    {
        id: 22,
        song_artist: 'Yiruma',
        song_name: 'River Flows in You',
        description: `The title could be used as a way to immerse yourself in what the music might be doing.
         Often described as a work representing the fruition of love, the progress made throughout River 
         Flows in You could depict how love can grow between people. This work is peaceful, comfortable and loving, 
         and that is perhaps why it has stayed such a popular work for many years. Although sometimes described 
         as ‘new-age’ and ‘new-classical’ in genre, Yiruma firmly believes his works reflect that of the popular 
         music world, whilst also paying homage to classical forms before him. His persistence with the solo piano 
         genre has allowed his music to be more widely accepted in modern media, as the structure is often reflective 
         of popular music. This widely-accepted sub-form of classical music has become very popular with other 
         composers such as Ludovico Einaudi and Jon E Amber producing music of a similar vein. River Flows in 
         You is built upon repetition of melodic patterns. Similar to the ideals of minimalism, less is always 
         more with Yiruma’s compositions. Strongly in the key of A major, River Flows in You opens with a 
         tentative proclamation of the main melodic pattern. There is a sense of holding back at the beginning here, 
         like the music is unsure how much to play out. The use of arpeggio runs, grace notes and the constant high 
         register in both hands gives the gentle and relaxing atmosphere to the piece. The structure of this piece
          can be seen through the repetition of the different patterns that Yiruma uses. From the opening theme, 
          to the variation, back to the theme again and so on, River Flows in You is like a popular song, with 
          a repeating theme and slight variations for the 'verses'.`,
        path: riverFlowsInYou,
        //image: riverFlowsInYouPic,
    },
    {
        id: 23,
        song_artist: 'Yann Tiersen',
        song_name: 'Comptine',
        description: `Composed as part of the soundtrack for the 2001 film Amélie, Comptine d’un autre été, 
        l’après midi is one of the most iconic tracks. Composed for solo piano, the title loosely translates 
        into ‘Nursery Rhyme from Another Summer’. The opening melody is heard once more, this time with the 
        melody up and octave. The sweetness from the high notes sits on top of the fluctuating left hand 
        that has not changed yet. The range keeps pushing upwards as the theme is slowly developed by the right hand. 
        There is a tinge of sadness seeping out at this point which may relate to the feelings of nostalgia when 
        listening to this work. The piece ends quietly on a single chord as the two hands finally come together. 
        A simple but effective work for piano that evokes feelings of nostalgia and hope, which also comes 
        across on screen. `,
        path: tiersenComptine,
        //image: tiersenComptineic,
    },
    {
        id: 24,
        song_artist: 'John Williams',
        song_name: 'Harry Potter',
        description: `John Williams is an American composer who composed the soundtracks for the first three 
        Harry Potter films. Well known in the film industry, he has frequently collaborated with George Lucas 
        and Steven Spielberg`,
        path: harryPotter,
        //image: harryPotterPic,
    },
    ],
    [    
    {
        id: 25,
        song_artist: 'Frank Sinatra',
        song_name: 'Fly Me To The Moon',
        description: `Simply put, Frank Sinatra’s “Fly Me to the Moon” is centered on the singer being deeply in love. 
        And the title is a metaphor which is based on how he feels about his significant other. Or “fly me to the moon” 
        is a fancy way of saying that being with his lover (i.e. the addressee of this song) makes him feel euphoric.`,
        path: flyMeToTheMoon,
        //image: flyMeToTheMoonPic,
    },
    {
        id: 26,
        song_artist: 'Dave Brubeck',
        song_name: 'Take Five',
        description: `"It's time that the jazz musicians take up their original role 
        of leading the public into a more adventurous rhythm," he said.
        Brubeck said it's a good idea to shake things up a bit, and that's 
        exactly what he did with the song "Take Five." "It just worked," he says. "You know, 
        if anyone could ever predict what's going to be a big seller like that, my God, they'd 
        be driving around in Rolls-Royces; you know, living in castles." "Take Five" spawned a 
        number of jazz compositions in five-four time from lots of musicians, but you'd probably 
        be hard-pressed to name any as memorable as "Take Five." It's a jazz standard in its own right. 
        It is now a requisite for Dave Brubeck anytime he plays live, as well as Joe Morello.`,
        path: takeFive,
        //image: takeFivePic,
    },
    {
        id: 27,
        song_artist: 'Ella Fitzgerald',
        song_name: 'Misty',
        description: `"Misty" is a jazz standard written in 1954 by pianist Erroll Garner. 
        He composed it as an instrumental in the traditional 32-bar format, and recorded it 
        for the album Contrasts. Lyrics were added later by Johnny Burke. It became the signature 
        song of Johnny Mathis, appearing on his 1959 album Heavenly and reaching number 12 on the U.S.
         Pop Singles chart later that year.`,
        path: misty,
        //image: mistyPic,
    },
    {
        id: 28,
        song_artist: 'Louis Armstrong',
        song_name: 'What A Wonderful World',
        description: `'What a Wonderful World' is simply about appreciating the beauty of your surroundings.
        In the song, Louis sings of seeing various events and natural wonders that make him smile, while also 
        perhaps lamenting the passage of time, noting: "I hear babies crying, I watch them grow, they'll learn
         much more than I'll never know". Released in 1968, it remains one of the most relaxing and beautiful 
         pop songs ever made, one of the most timeless songs of all time.`,
        path: wonderfulWorld,
        //image: wonderfulWorldPic,
    },
    {
        id: 29,
        song_artist: 'Miles Davis',
        song_name: 'So What',
        description: `"So What" is the first track on the 1959 album Kind of Blue by American trumpeter Miles Davis.
        It is one of the best-known examples of modal jazz, set in the Dorian mode and consisting of 16 bars of D Dorian, 
        followed by eight bars of E♭ Dorian and another eight of D Dorian.`,
        path: soWhat,
        //image: soWhatPic,
    },
    {
        id: 30,
        song_artist: 'Ryo Fukui',
        song_name: 'Autumn Leaves',
        description: `Ryo Fukui (福居良) was a Japanese jazz pianist. He was born in 1948 in Biratori, Hokkaido. 
        He released his debut album Scenery in 1976 and was based in Sapporo, where he played regularly at the Slowboat jazz club.
        As a jazz standard, "Autumn Leaves" has accumulated more than a thousand commercial recordings.`,
        path: autumnLeaves,
        //image: autumnLeavesPic,
    },
    ],
    [    
    {
        id: 31,
        song_artist: 'Deep Purple',
        song_name: 'Smoke on the Water',
        description: `The iconic four-note riff may ring around the speakers of homes forevermore but 
        the song was inspired by one of the heaviest moments in rock and roll history as it reflects on the smoke
         billowing out from the Montreux Casino in 1971 a touching the waters that surrounded it.`,
        path: smokeOnTheWater,
        //image: smokeOnTheWaterPic,
    },
    {
        id: 32,
        song_artist: 'Scorpions',
        song_name: 'Still Loving You',
        description: `"Still Loving You" is a power ballad[4] by the German hard rock band Scorpions. 
        It was released on 3 July 1984 as the second single from their ninth studio album, Love at First Sting (1984).
        The song reached number 64 on the Billboard Hot 100. It was most successful in Europe, reaching the top 5 
        in several countries.`,
        path: stillLovingYou,
        //image: stillLovingYouPic,
    },
    {
        id: 33,
        song_artist: 'Led Zeppelin',
        song_name: 'Stairway to Heaven',
        description: `The song has three sections, each one progressively increasing in tempo and volume. 
        The song begins in a slow tempo with acoustic instruments (guitar and recorders) before introducing 
        electric instruments. The final section is an uptempo hard rock arrangement highlighted by Page's guitar 
        solo (considered by many to be one of the greatest ever[9][additional citation(s) needed]) accompanying 
        Plant's vocals that end with the plaintive a cappella line: "And she's buying a stairway to heaven."`,
        path: stairwayToHeaven,
        //image: stairwayToHeavenPic,
    },
    {
        id: 34,
        song_artist: 'Pink Floyd',
        song_name: 'Dark Side of the Moon',
        description: `There are hit albums, and then there’s Dark Side of the Moon. Pink Floyd‘s eternally 
        popular song cycle has sold more than 15 million copies in the U.S. since its release on March 1st, 
        1973, and more than 45 million units worldwide. A true colossus of classic rock, the album made its 
        creators — bassist/vocalist Roger Waters, guitarist/vocalist David Gilmour, keyboardist/vocalist Rick Wright, 
        and drummer Nick Mason — incredibly wealthy, and ultimately spent a mind-boggling 937 weeks on the Billboard 200.`,
        path: darkSide,
        //image: darkSidePic,
    },
    {
        id: 35,
        song_artist: 'Guns N’Roses',
        song_name: 'Knocking on Heavens Door',
        description: `GNR's studio version first appeared on the soundtrack for the 1990 Tom Cruise movie Days of Thunder, 
        with spoken-word responses during the second verse. Those were omitted from the mix that appeared on Use Your 
        Illusion II the following year. The song was released as a single in May 1992, charting around the world - including at No. 
        18 on Billboard’s Mainstream Rock Songs survey.`,
        path: knocking,
        //image: knockingPic,
    },
    {
        id: 36,
        song_artist: 'Queen',
        song_name: 'Show Must Go On',
        description: `The Show Must Go On is a song by Queen. It was written by Freddie Mercury and Brian 
        May for the band's 1991 album Innuendo. It was also released as a single with Keep Yourself Alive on the B-side.
        Written as a collaborative effort between Mercury and May, the song tells the listener to face life head-on, 
        no matter the hardships that come their way. The lyrics themselves allude to Freddie Mercury's declining health 
        from his battle with AIDs, which he was slowly succumbing to at the time of recording.`,
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