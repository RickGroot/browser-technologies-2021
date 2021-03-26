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

## 3 lagen problemen
Met javascript kan ik veel dingen aanpassen en opslaan. Bij een formulier is het handig om met localstorage dingen op te slaan, zodat je daar later mee door kan. Wanneer dit niet beshcikbaar is kan je moeilijk data opslaan, vooral binnen een formulier. Het is handig om de vakken op te splitsen in verschillende formulieren, die vervolgens kunnen opgeslagen worden naar de server. Op deze manier kan de gebruiker doorgaan waar hij/zij gebleven is, alleen dan op formulier niveau en niet op inputfield niveau. Als je elke input gaat pushen naar een data bestand is het wel mogelijk om tijdens een formulier te stoppen en later verder te gaan, alleen dit maakt de pagina wel traag en is dis minder handig bij tragere verbindingen.

### HTML
* Standaard formulieren. 
* Goede semantische opmaak. 
* Verbinding met de server die ingevulde formulieren opslaat. 
* Overzichtelijke lijst van nog in te vullen formulieren.

### CSS 
* Styling op alles, iets meer usable maken. 
* Vooral meer pleasurable maken van het formulier.

### JS
* Localstorage, inlogdata opslaan in de browser.
* Slider bij formulier.

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
![Sketch][sketch1]
[sketch1]: https://github.com/rickgroot/browser-technologies-2021/blob/main/assets/readme/sketch1.jpeg?raw=true "Sketch"

# Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)