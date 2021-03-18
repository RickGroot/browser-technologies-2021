# Browser Technologies @cmda-minor-web 20-21

//Robuuste, toegankelijke websites ontwerpen en maken …

Één van de mooiste [principes](https://www.w3.org/DesignIssues/Principles.html) van het web is dat iedereen met een computer en een browser het web kan gebruik. [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

- [De eindopdracht - Progressive Enhanced Browser Technologie](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Eindopdracht.md)
- [Rubric](https://docs.google.com/spreadsheets/d/1MV3BWwwg_Zz1n-S_qOM4iSm4gA4M6g0xAxGacyaPuac/)

# Use case, Enquete over de minor Web Development
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

- [ ] Studentgegevens (naam + nummer) verplicht
- [ ] Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- [ ] Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.  

Per vak:
- [ ] Naam
- [ ] Docenten
- [ ] Weken waarin je het vak deed
- [ ] Beoordeling 1-10
- [ ] Lesstof (hoe moeilijk is het)
- [ ] Uitleg (duidelijkheid uitleg)
- [ ] Eigen inzicht (snap je alles)

## Sketches
| ![Sketch][sketch1] | ![Sketch][sketch2] |
|:---:|:---:|

[sketch1]: https://github.com/rickgroot/browser-technologies-2021/blob/main/assets/readme/sketch1.jpeg?raw=true "Sketch"
[sketch2]: https://github.com/rickgroot/browser-technologies-2021/blob/main/assets/readme/sketch2.jpeg?raw=true "Sketch"

## Research HTML forms
Een formulies is opgebouwd als verschillende componenten. De top layer is een form attribute, deze kan je een action en method meegeven als je dat wilt. Ook heb je een fieldset, dit is een verzameling binnen je formulier die makkelijk kan worden disabled wanneer eerdere inputs nog niet voltooid zijn. Binnen een fieldset kan je werken met een unordered list met daarin een label en input. Het label is de tekst bij een formulier en de input is wat de user kan invullen/aanpassen. Deze link je aan elkaar voor goede semantische opmaak. 

### Form elementen:
```html
<form></form>
<fieldset></fieldset>
<legend></legend>
<textarea></textarea>
<label></label>
<button></button>
<input></input>
```

### Input types:
* type="text"
* type="button"
* type="checkbox"
* type="file"
* type="hidden"
* type="image"
* type="password"
* type="radio"
* type="reset"
* type="submit"
* type="email"
* type="search"
* type="tel"
* type="url"
* type="number"
* type="range"
* type="date"
* type="datetime-local"
* type="month"
* type="time"
* type="week"
* type="color"

### HTML voorbeeld:
```html
<form action="/where-next" method="post">
    <fieldset>
    <legend>User information</legend>
        <ul>
         <li>
           <label for="name">Name:</label>
           <input type="text" id="name" name="user_name">
         </li>
         <li>
           <label for="mail">E-mail:</label>
           <input type="email" id="mail" name="user_email">
         </li>
         <li>
           <label for="msg">Message:</label>
           <textarea id="msg" name="user_message"></textarea>
         </li>
        </ul>
    </fieldset>
    <fieldset>
        <legend>What is your favorite meal?</legend>
        <ul>
          <li>
            <label for="soup">Soup</label>
            <input type="radio" id="soup" name="meal" value="soup" checked>
          </li>
          <li>
            <label for="curry">Curry</label>
            <input type="radio" id="curry" name="meal" value="curry">
          </li>
          <li>
            <label for="pizza">Pizza</label>
            <input type="radio" id="pizza" name="meal" value="pizza">
          </li>
        </ul>
    </fieldset>
</form>
```

## 3 lagen problemen
Met javascript kan ik veel dingen aanpassen en opslaan. Bij een formulier is het handig om met localstorage dingen op te slaan, zodat je daar later mee door kan. Wanneer dit niet beshcikbaar is kan je moeilijk data opslaan, vooral binnen een formulier. Het is handig om de vakken op te splitsen in verschillende formulieren, die vervolgens kunnen opgeslagen worden naar de server. Op deze manier kan de gebruiker doorgaan waar hij/zij gebleven is, alleen dan op formulier niveua en niet op inputfield niveau. Als je elke input gaat pushen naar een data bestand is het wel mogelijk om tijdens een formulier te stoppen en later verder te gaan, alleen dit maakt de pagina wel traag en is dis minder handig bij tragere verbindingen.
Door middel van CSS kan ik al makkelijk goede error messages geven, en highlighten welke inputs er niet goed ingevuld zijn. Dit is het hoofd element wat ik goed kan enhancen met CSS in een formulier, samen met alle styling natuurlijk.

### HTML
* Standaard formulieren. 
* Goede semantische opmaak. 
* Verbinding met de server die ingevulde formulieren opslaat. 
* Overzichtelijke lijst van nog in te vullen formulieren.

### CSS 
* Styling op alles, laat het er mooi uit zien. 
* Error states duidelijk maken met vormgeving. 
* Extra teksten bij lege inputs. 

### JS
* Localstorage, data snel opslaan tijdens een formulier. 
* Andere leuke enhancements, nog work in progress.

<!--
Suggesties voor Browser API's linken 
- https://platform.html5.org
- https://developer.mozilla.org/en-US/docs/Web/API

Suggesties voor Design pattens voor Usability laten zien?
- lijst?
- UI patterns?
-->

## Planning & programma

| Planning  | Woensdag  |  Donderdag | Vrijdag  |
|---|---|---|---|
| [Week 1](#week-1)  | Intro, College + briefing opdracht 1 | Presentaties opdracht 1, college +  briefing opdracht 2 | Presentaties opdracht 2 |
| [Week 2](#week-2)  | College + Briefing De eindopdracht  | College + werken aan de opdracht | Feedbackgesprekken  |
| [Week 3](#week-3)  | College + werken aan de opdracht  |  College + werken aan de opdracht | Feedbackgesprekken  |
| [Week 4](#week-4)  | Beoordelingsgesprekken (Dinsdag en Woensdag) | Weekly Nerd | Goede vrijdag |

### Week 1

Het web is voor iedereen: Deze week gaan we onderzoeken wat Progressive Enhancement is en kennismaken met testen ~~en het device lab~~.

#### Woensdag 10 maart

Browser Technolgies begint op woensdag. In het eerste college krijg je uitleg over het programma en over het nut van Progressive Enancement. Wat is dat eigenlijk? De meeste CMD studenten hebben dit waarschijnlijk al eens gehoord en misschien iets mee gedaan in blok Tech. Progressive Enhancement, oftewel PE, is een manier hoe je je de code van een website kan bouwen zodat alle gebruikers met alle browsers je website zo goed mogelijk te zien krijgen. Met PE kun je robuuste websites bouwen die het altijd doen. PE is een manier van denken.

| Woensdag 10/3 | Wat  |
|---|---|
| 9:30 | College les 1 over het vak, wie, wat, waar en PE  |
|  | [Briefing Opdracht 1 🛹 NPM install Progressive-Enhancement](course/Opdracht1.md) |
| 16:00 | Checkout per team |

##### Lezen voor les 1 📖

- [Everyone has JavaScript, right? by Stuart Langridge](https://kryogenix.org/code/browser/everyonehasjs.html)


#### Donderdag 11 maart

Donderdag gaan we in je Squad opdracht 1 bekijken en bespreken. Als het goed is heb je een beeld gevormd van Progressive Enhancement. Tijdens de bespreking kun je ook vragen te stellen, samen onderzoeken we wat PE is, waarom het goed is om te begrijpen en misschien kunnen we al wat voorbeelden bespreken hoe je het zou kunnen toepassen.

In het college krijg je uitleg over opdracht 2. Voor deze opdracht ga je proberen het web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken?

🤟 Vandaag geeft [Aaron Gustafson](https://www.aaron-gustafson.com) een gast-college. hij schreef in 2008 het artikel [Understanding Progressive Enhancement](https://alistapart.com/article/understandingprogressiveenhancement/) waarna deze manier van denken een belangrijk onderdeel werd van Web Development. Aaron Gustafson werkt bij Microsoft als 'web standard advocate' met het Edge browser team.

| Donderdag 11/3 | Wat  |
|---|---|
| 9:30 | Opdracht 1 bespreken in Squads 🛹 |
| 10:30 | College les 2 over Browser features |
|  | [Briefing Opdracht 2 💔 Breek het web](course/Opdracht2.md) |
| 16:00 | Checkout per team |
| 18:00 | Gastcollege Aaron Gustafson 🤟 |

Lezen voor les 2 📖

- [The unreasonable effectiveness of simple HTML by Terence Eden](https://shkspr.mobi/blog/2021/01/the-unreasonable-effectiveness-of-simple-html/)

#### Vrijdag 12 maart

Vrijdag bespreken we in clubjes opdracht 2. Zorg dat je de bevindingen van je onderzoek online kan presenteren. We gaan de hele feature lijst doorlopen en alle studenten kunnen laten zien wat ze hebben onderzocht, met voorbeelden, de problemen, cijfers en/of meningen. Bedenk ook hoe je de problemen zou kunnen oplossen.

| Vrijdag 12/3 | Wat  |
|---|---|
| 11:30 | Opdracht 2 bespreken in clubje A 💔 |
| 13:00 | Opdracht 2 bespreken in clubje B 💔 |
| 14:30 | Opdracht 2 bespreken in clubje C 💔 |
| 16:00 | Work Hard Play Hard |

### Week 2

In week 2 beginnen we met de eindopdracht. We hebben in week 1 onderzocht wat PE is en welke feautures wel of niet goed worden ondersteund. Deze week gaan we leren hoe je een interactieve toepassing in 3 lagen kan ontwerpen en wat je kan doen als een browser een 'enhancement' niet kan tonen.

#### Woensdag 17 maart

Woensdag krijg je een briefing van de eindopdracht en een college over browsers, en alles (!) wat daarbij hoort. Daarna gaan we aan de slag: als je een interactieve toepassing ontwerpt die alle gebruikers, met alle browsers moeten kunnen zien, dan zul je moeten bedenken hoe je de toepassing in 3 lagen kan opbouwen, eerst bepaal je de core functionaliteit en de user-delight ... schetsen maar!

| Woensdag 17/3 | Wat  |
|---|---|
| 9:30 | College les 3 over browsers, browser detect, support detection en web views |
|  | [Briefing eindopdracht ✨ Progressive Enhanced Browser Technologie](course/Eindopdracht.md) |
| 10:30 | Sessies: User Deligt & Core functionaliteit ✨ |
| 16:00 | Checkout per team |

#### Donderdag 18 maart

Donderdag gaan we voorbeelden van PE en feature detection bespreken in een college over form validatie. Daarna aan de slag met je ontwerp, in clubjes gaan we je ontwerpideeën bespreken en bedenken hoe je dit in 3 lagen zou kunnen bouwen.  

🤟 Vandaag geeft [Heydon Pickering](https://heydonworks.com) een gastcollege om 14:00. Heydon Pickering is een web developer, hij geeft lezingen en schrijft over toegankelijkeid en web design o.a. voor [Smashing Magazin](https://www.smashingmagazine.com/author/heydon-pickering/). Vorige week heb je een metafoor voor PE bedacht naar aanleiding van een filmpje van Hedon Pickering zelf. Hij komt vandaag langs! Wat wil je hem vragen over het web?

| Donderdag 18/3 | Wat  |
|---|---|
| 9:30 | College les 4 over form-validatie |
| 10:30 | Sessies: Bouwen in 3 lagen ✨ |
| 14:00 | Q&A Heydon Pickering 🤟 |
| 16:00 | Checkout per team |

Lezen voor les 4 📖

- [Be progressive by Jeremy Keith](https://adactio.com/journal/7706)

#### Vrijdag 19 maart

Vrijdag bespreken we in clubjes de vorderingen voor de eindopdracht. Zorg dat je vandaag weet welke browsers (en devices) jij gaat testen.

| Vrijdag 19/3 | Wat  |
|---|---|
| 11:30 | Vorderingen bespreken in clubje C ✨ |
| 13:00 | Vorderingen bespreken in clubje A ✨ |
| 14:30 | Vorderingen bespreken in clubje B ✨ |
| 16:00 | Work Hard Play Hard |

### Week 3

Deze week werken we verder werken aan de eindopdracht en houden we gesprekken om jullie vorderingen te bespreken en vragen te beantwoorden.

#### Woensdag 24 maart

| Woensdag 24/3 | Wat  |
|---|---|
| 9:30 | College les 5 over Viewports |
| 10:30 | Sessies: Feature detectie en testen ✨ |
| 16:00 | Checkout per team |

#### Donderdag 25 maart

Donderdag gaan we verder werken aan de opdracht en doen we code-review sessies.

🤟 Vandaag geeft Ischa Gast een presentatie.

| Donderdag 25/3 | Wat  |
|---|---|
| 9:30 | Gastcollege Ischa Gast 🤟 |
| 10:30 | Sessies: Code-reviews ✨ |
| 16:00 | Checkout per team |

Lezen voor les 6 📖

- [A minimum viable experience makes for a resilient, inclusive website or app](https://piccalil.li/blog/a-minimum-viable-experience-makes-for-a-resilient-inclusive-website-or-app)

#### Vrijdag 26 maart

Vrijdag bespreken we in clubjes de vorderingen voor de eindopdracht. Zorg dat je een code-review hebt gekregen van twee mede-studenten.

| Vrijdag 26/3 | Wat  |
|---|---|
| 11:30 | Vorderingen bespreken in clubje B ✨ |
| 13:00 | Vorderingen bespreken in clubje C ✨ |
| 14:30 | Vorderingen bespreken in clubje A ✨ |
| 16:00 | Work Hard Play Hard |

### Week 4

In week 4 wordt de eindopdracht beoordeeld. Dan gaan we je werk bekijken, bespreken en beoordelen.

| Dinsdag 30/3 | Wat  |
|---|---|
| 9:30 - 15:30 | Beoordelingsgesprekken ✨ |

| Woensdag 31/3 | Wat  |
|---|---|
| 9:30 - 15:30 | Beoordelingsgesprekken ✨ |

| Donderdag 1/4 | Wat  |
|---|---|
| 14:00 | [Weekly Nerd 2️⃣](https://github.com/cmda-minor-web/weekly-nerd-2021)|

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
