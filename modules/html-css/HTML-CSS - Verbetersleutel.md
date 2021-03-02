<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# HTML/CSS - Verbetersleutel

## Bart Duisters

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Basis

## Opdracht 1

Wat moet er bovenaan een geldige HTML5-pagina staan?

Oplossing:

```html
<!DOCTYPE html>
```

## Opdracht 2

- Maak een bestand genaamd `basis.html`.
- Voeg de volgende elementen toe:
  - DOCTYPE voor HTML5
  - head
    - title met als inhoud jouw naam
  - body
    - h1 met als inhoud jouw naam

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvi Hendriks</title>
</head>
<body>
    <h1>Marvi Hendriks</h1>
</body>
</html>
```

## Opdracht 3

Ga verder op Opdracht 2.

Voeg onder de hoofding een paragraaf toe. In de paragraaf stel je jezelf voor.

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marvi</title>
</head>
<body>
    <h1>Marvi</h1>
    <p>Hoi, ik ben Simone and that's about it :P niks boeiend te vertellen</p>
</body>
</html>
```

## Opdracht 4

Ga verder op Opdracht 3.

Voeg een afbeelding toe, de `src` kan verwijzen naar een lokale afbeelding
aangezien de website enkel lokaal geopend wordt.

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/17120_Fill_670_0.png"/>

</body>
</html>
```

## Opdracht 5

Ga verder op Opdracht 4.

Voeg drie links toe naar jouw favoriete websites.

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="https://www.krcgenk.be/nl"> Dit is de site van KRC Genk</a>
    <br />
    <a href="https://sporza.be/nl/"> Dit is de site van Sporza</a>
    <br />
    <a href="https://www.bol.com/">
      Als we goede punten krijgen, geven we u zo ene cadeau. Groetjes Marvi,
      Domenico, Marco</a
    >
  </body>
</html>
```

## Opdracht 6

In VSCode is het mogelijk om de basis markup te generen. Maak een nieuw bestand
genaamd `opdracht-6.html`. Open het bestand in VSCode en type `html`.

Er verschijnen `Emmet Abbreviations`, kies voor `html:5` en klik op enter.

![2020-10-25-1603653261_screenshot_503x119](media/2020-10-25-1603653261_screenshot-959813882.jpeg)

Oplossing:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

# Lijsten en tabellen

**Gebruik vanaf nu VSCode (automatische indentatie, controle van syntax ...) om
HTML te schrijven.**

- Maak een bestand genaamd `lijsten-en-tabellen.html`.
- Gebruik de `html:5`-emmet om de standaard markup te genereren.

## Opdracht 1

Maak een ongeordende lijst van jouw lievelingsdieren. Plaats boven de lijst
een hoofding met als content "Lievelingsdieren".

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lijsten en tabellen - Opdracht 1</title>
</head>
<body>
    <h1>Lievelingsdieren</h1>
    <ul>
        <li>Hondjes</li>
        <li>Katten</li>
        <li>Paarden</li>
    </ul>    
</body>
</html>
```

## Opdracht 2

Er is gevraagd om een layout te voorzien om een recept te tonen.

- Voeg een hoofding toe met als content de naam van het recept.
- Voeg een afbeelding toe onder de hoofding, de afbeelding toont het gerecht
  dat gemaakt zal worden.
- Voeg een hoofding (kleiner dan de hoofding met de naam) toe, met als content
  "Ingrediënten".
- Voeg een ongeordende lijst toe met de benodigde ingrediënten.
- Voeg een hoofding (zelfde grootte als die van "Ingrediënten"), met als content
  "Bereidingswijze".
  Voeg een geordende lijst toe met de stappen om het gerecht te maken.

Oplossing:

```html
<!DOCTYPE html5>
<html>
  <head>
    <title>Opdracht 8</title>
  </head>
  <body>
    <h1>Pannenkoeken</h1>
    <img
      src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg"
      alt="Pannenkoeken"
    />
    <h2>Ingrediënten</h2>
    <ul>
      <li>750ml melk</li>
      <li>3 eieren</li>
      <li>250g bloem</li>
    </ul>
    <h2>Bereidingswijze</h2>
    <ol>
      <li>zeef de bloem in een mengkom</li>
      <li>voeg de 3 eieren toe</li>
      <li>voeg de melk al roerend toe</li>
    </ol>
  </body>
</html>
```

## Opdracht 3

Maak een tabel met als kolomnamen:

- id
- voornaam
- achternaam
- leeftijd
- geslacht

Maak een tabel met als kolomnamen:

- voornaam
- achternaam
- leeftijd
- geslacht
- docent (dit bevat de id van de docent)

Oplossing:

```html
<!-- TODO -->
```

## Opdracht 4

Zorg ervoor dat zowel de voornaam als de achternaam getoond worden onder één
hoofding, met als content "naam".

# CSS

## Opdracht 1

- Maak een HTML-bestand
- In de body, voeg zes `div`-elementen toe
- Style de eerste div zodat het er uitziet als een `h1`-element, maak deze tekst rood
- Style de eerste div zodat het er uitziet als een `h2`-element, maak deze tekst blauw
- Style de eerste div zodat het er uitziet als een `h3`-element, maak deze tekst rood
- Style de eerste div zodat het er uitziet als een `h4`-element, maak deze tekst blauw
- Style de eerste div zodat het er uitziet als een `h5`-element, maak deze tekst rood
- Style de eerste div zodat het er uitziet als een `h6`-element, maak deze tekst blauw

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div><h1 style="color: red">Wij</h1></div>
    <div><h2 style="color: blue">volgen</h2></div>
    <div><h3 style="color: red">les</h3></div>
    <div><h4 style="color: blue">met</h4></div>
    <div><h5 style="color: red">docent</h5></div>
    <div><h6 style="color: blue">Bart</h6></div>
  </body>
</html>

```

## Opdracht 2

- Maak een HTML-bestand
- Voeg een div toe met als tekst: John Duck
- Voeg `inline css` toe, zorg ervoor dat de tekst van de div in het rood getoond wordt

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS</title>
  </head>
  <body>
    <div style="color: red">John Duck</div>
  </body>
</html>
```

## Opdracht 3

- Maak een HTML-bestand
- Voeg een div toe met als tekst: John Duck
- Voeg `interne css` toe, zorg ervoor dat de tekst in het rood getoond wordt

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        color: red;
      }
    </style>
  </head>
  <body>
    <div>John Duck</div>
  </body>
</html>
```

## Opdracht 4

- Maak een HTML-bestand
- Voeg een div toe met als tekst: John Duck
  Voeg `externe css` toe, zorg ervoor dat de tekst in het rood getoond wordt (doe dit in een bestand genaamd `styling.css`)

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>John Duck</title>
    <link rel="stylesheet" type="text/css" href="./styling.css" />
  </head>
  <body>
    <div>John Duck</div>
  </body>
</html>
```

```css
div {
  color: red;
}
```

## Opdracht 5

- Maak een HTML-bestand
- Voeg drie div-elementen toe
- Door middel van `externe css` wordt ervoor gezorgd dat
  alle div-elementen een blauwe achtergrond hebben en witte
  tekst
- Door middel van `interne css` wordt ervoor gezorgd dat
  de middelste div, een roze achtergrond heeft en zwarte tekst

Tip: denk aan de verschillende `selectors` (element, class, id)

Oplossing:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .anders {
        background-color: deeppink;
        color: black;
      }
    </style>
  </head>
  <body>
    <div>Bart</div>
    <div class="anders">De</div>
    <div>Duister</div>
  </body>
</html>

```

```css
div {
background-color: blue;
color: white;
```

# Projectstructuur

## Opdracht 1

Als de oefening af is, push deze naar jouw eigen GitHub-repository en stuur de link naar de docent.

Zorg voor een projectstructuur waarbij:

- Alle HTML-pagina's een omschrijvende naam hebben.
- Alle HTML-pagina's de globale stylesheet inladen.
- Zorg voor een map waarin alle `assets` van dit project komen.
- Alle HTML-pagina's een eigen stylesheet inladen (denk aan de volgorde van het inladen). Indien de stylesheet niet bestaat, maak deze aan in de map `css` in de map `assets`.
- Zorg ervoor dat alle pagina's, behalve de hoofdpagina, in een map `pages` zitten.
- Voeg alle afbeeldingen die gebruikt worden doorheen deze oefening toe aan de map `img` in de map `assets`.

De inhoud:

- Alle pagina's:

  - Bovenaan navigatie met links om naar alle pagina's te navigeren.

- Hoofdpagina:

  - Een introductietekst en een foto (bestandsnaam van de foto: selfie.jpg).
  - Wanneer er op de foto geklikt wordt, moet de `about`-pagina geopend worden.

- About-pagina:

  - Tekstje met sporten en hobby's.
  - Een afbeelding (bestandsnaam van de foto: hobby.jpg).

- Projectpagina:

  - Een unordered list met drie projecten waaraan je wilt werken in de toekomst.

De styling:

- Alle pagina's:

  - Tekst (font) om te gebruiken: Lucida Console
  - De grootte van de tekst (font): 16px
  - De grootte van de tekst voor de links in de navigatie: 20px

- Hoofdpagina:

  - Achtergrondkleur: roze
  - Tekstkleur: zwart

- About-pagina:

  - Achtergrondkleur: blauw
  - Tekstkleur: wit

- Projectpagina:
  - Achtergrondkleur: groen
  - Tekstkleur: wit

Oplossing:

```html
<!-- Pull Request hier de opgezette structuur (inhoud van de bestanden is niet nodig) -->
```
