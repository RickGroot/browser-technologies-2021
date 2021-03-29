# Browser Technologies @cmda-minor-web 20-21

//Robuuste, toegankelijke websites ontwerpen en maken …

Één van de mooiste [principes](https://www.w3.org/DesignIssues/Principles.html) van het web is dat iedereen met een computer en een browser het web kan gebruik. [Het web is voor iedereen](https://www.youtube.com/watch?v=UMNFehJIi0E). Het is geen gecontroleerde (programmeer) omgeving, je kan er gerust van uit gaan dat niemand precies hetzelfde te zien krijgt als wat jij in je browser ziet. Er zijn technische beperkingen, zoals afmetingen van de browser, grootte van het apparaat, manier van interactie, kwaliteit van de hardware, kwaliteit van het netwerk en er zijn mensen, allemaal verschillende mensen ...

# Use case, Enquete over de minor Web Development
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

- [x] Studentgegevens (naam + nummer) verplicht
- [x] Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- [x] Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.  

Per vak:
- [x] Naam
- [x] Docenten
- [x] Weken waarin je het vak deed
- [x] Beoordeling 1-10
- [x] Lesstof (hoe moeilijk is het)
- [x] Uitleg (duidelijkheid uitleg)
- [x] Eigen inzicht (snap je alles)

## Core functionaliteit
Een enquête invullen op elk device en onder alle omstandigheden. Verder kunnen gaan bij de enquête waar je gebleven was, een lijst met enquêtes die nog gedaan moeten worden en die al gedaan zijn.

## Link naar demo
[Live Demo](https://rick-groot-browser-tech.herokuapp.com/)
![Preview](https://github.com/rickgroot/browser-technologies-2021/blob/main/assets/readme/preview.jpg?raw=true)

## Table of contents 
* [Browsers](https://github.com/RickGroot/browser-technologies-2021#browsers)
* [Features in 3 lagen](https://github.com/RickGroot/browser-technologies-2021#features-in-3-lagen)
* [Research forms](https://github.com/RickGroot/browser-technologies-2021#research-html-forms)
* [Sketches](https://github.com/RickGroot/browser-technologies-2021#eerste-sketches)
* [Installation guide](https://github.com/RickGroot/browser-technologies-2021#install-this-project)

## Browsers
Desktop browsers:
* Google chrome
* Firefox  
* Safari

Mobile browsers: 
* Google chrome
* Firefox
* Samsung internet
* Safari

### Kort testverslag
Op desktop was ik al snel klaar met testen. Google chrome was mijn hoofd-browser, dus alles wat ik had gemaakt werkte sowieso al in deze browser. De test met Firefox werkte ook vlekkeloos. Alle features werken en alles ziet er hetzelfde uit als op chrome. Op mobiel was dit hetzelfde geval. Op Chrome, Firefox en ook Samsung internet werkte alles zoals verwacht en waren alle features zonder problemen toegepast. Het testen op Safari was iets lastiger, omdat ik zelf geen Apple device bezit. Dit heb ik gedaan via iemand anders, en daarbij werkten de radio buttons niet helemaal goed want deze werden niet weggehaald door appearance in CSS. Dit was vrij snel opgelost door de inpts ook een opacity van 0 te geven. Ook alle features werkten als verwacht op Apple devices.  

Bij het maken van de applicatie had ik de verschillende browsers in mijn achterhoofd. Bij het toevoegen van CSS heb ik geen gebruik hoeven maken van nieuwe technieken die niet overal worden ondersteund. Door middel van [caniuse](https://caniuse.com/) heb ik veel CSS gecheckt, waardoor code ook snel werkte in andere browsers. Zo had ik gebruik gemaakt van `type="week"`, maar aangezien dit niet ondersteund wordt in alle browsers heb ik dit vervangen door radio buttons met de periodes (met behulp van [Max Mulder](https://github.com/kilroy763)).

## Features in 3 lagen
Met javascript kan ik veel dingen aanpassen en opslaan. Bij een formulier is het handig om met localstorage dingen op te slaan, zodat je daar later mee door kan. Wanneer dit niet beshcikbaar is kan je moeilijk data opslaan, vooral binnen een formulier. Het is handig om de vakken op te splitsen in verschillende formulieren, die vervolgens kunnen opgeslagen worden naar de server. Op deze manier kan de gebruiker doorgaan waar hij/zij gebleven is, alleen dan op formulier niveau en niet op inputfield niveau. Als je elke input gaat pushen naar een data bestand is het wel mogelijk om tijdens een formulier te stoppen en later verder te gaan, alleen dit maakt de pagina wel traag en is dis minder handig bij tragere verbindingen.

### HTML
* Standaard formulieren. 
* Goede semantische opmaak. 
* Verbinding met de server die ingevulde formulieren opslaat. 
* Overzichtelijke lijst van nog in te vullen formulieren.
<details>
<summary>Meer uitleg over HTML</summary>
Door de HTML goed semantisch neer te zetten wordt de pagina sneller toeghankelijk voor meer mensen. Zo hebben screenreaders bijvoorbeeld veel aan een goede HTML structuur, maar wanneer de CSS niet wordt ingeladen moet de enquête evengoed toeghankelijk zijn. Door gebruik te maken van de "break" tag is de HTML overzichtelijk en toegankelijk voor het brede publiek. Wanneer alleen HTML geladen wordt kan de gebruiker evengoed nog goed de core-functionaliteit van deze site gebruiken.
</details>


### CSS 
* Styling op alles, iets meer usable maken. 
* Vooral meer pleasurable maken van het formulier.
<details>
<summary>Meer uitleg over CSS enhancement</summary>
De CSS laag van dit project zorgt vooral voor meer pleasure in dit project. Door goede hover en focus states toe te passen is het voor mensen met en zonder muis toegankelijk. Verder gebruik ik CSS eigenlijk vooral om het project er mooi uit te laten zien.
</details>

### JS
* Localstorage, inlogdata opslaan in de browser.
* Localstorage bij elke enquête, alle data word opgeslagen voor een volgende keer.
* Slider bij formulier.
<details>
<summary>Meer uitleg over JS enhancements</summary>
Door de JavaScript in dit project worden er verschillende dingen opgeslagen waardoor de UX word verbeterd. Door localstorage wordt er bij deze laag veel data opgeslagen, zoals enquête antwoorden en login gegevens. Door de login gegevens op te slaan kan de gebruiker bij een volgend bezoek makkelijker inloggen. En door de inputs van formulieren op te slaan is het makkelijker om verder te gaan bij een bepaalde vraag in een enquête. De nummer input van het formulier wordt ook veranderd naar een range slider, omdat dit makkelijker is in gebruik met gebruik JavaScript.
</details>


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

## Eerste sketches
![Sketch](https://github.com/rickgroot/browser-technologies-2021/blob/main/assets/readme/sketch1.jpeg?raw=true)

## Install this project
    
Clone the repository.
```bash
  $ git clone https://github.com/RickGroot/browser-technologies-2021.git
```
    
Navigate to repository...
```bash
  $ cd browser-technologies-2021
```

...and then install packages.
```bash
  $ npm install
```
    
Start local dev environment.
```bash
  $ npm run dev
```
    
Build export.
```bash
  $ npm start
```

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)