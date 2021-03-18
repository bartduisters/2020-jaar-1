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

# JavaScript - Verbetersleutel

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
<br/>
<br/>

# Class

Wat is een class?
Oplossing: Een template van een object. 

Wat gebeurt er wanneer een instantie van een class gemaakt wordt?
Oplossing: Wanneer een instantie van een class gemaakt wordt, dan zal er een object
met alle properties en methoden (functies) van de class teruggegeven worden.

Wat is een constructor-methode?
Oplossing: Een methode die uitgevoerd wordt op het moment dat er een instantie van een class gemaakt wordt.

## omschrijven

### Opdracht 1

Omschrijf onderstaande code. Schrijf enkel uitleg bij de regels met een comment. Het gaat altijd over de regel onder de comment.

```js
// 1.
class Student {
    // 2.
    voornaam;
    // 3.
    achternaam;
    
    // 4.
    volledigeNaam() {
        let volledigeNaam = '';

        if (this.voornaam) {
            volledigeNaam += this.voornaam;
        }

        if (this.achternaam) {
            if (volledigeNaam.length > 0) {
                volledigeNaam += ' ';
            }
            volledigeNaam += this.achternaam;
        }
        
        return volledigeNaam;
    }
}

/*
* 5. 
* Toekennen van ... variabele genaamd student.
* De waarde is ...
* Het type is ...
*/
let student = new Student();
student.voornaam = 'John';
student.achternaam = 'Duck';
console.log(student.volledigeNaam());

let studentEnkelVoornaam = new Student();
studentEnkelVoornaam.voornaam = 'John';
console.log(studentEnkelVoornaam.volledigeNaam());

let studentEnkelAchternaam = new Student();
studentEnkelAchternaam.achternaam = 'Duck'
console.log(studentEnkelAchternaam.volledigeNaam());
```

Oplossing:

```js
// 1. Definiëren van een class genaamd Student
class Student {
    // 2. Property genaamd 'voornaam', waarde is undefined
    voornaam;
    // 3. Property genaamd 'achternaam', waarde is undefined
    achternaam;
    
    // 4. Methode genaamd 'volledigeNaam'
    volledigeNaam() {
        let volledigeNaam = '';

        if (this.voornaam) {
            volledigeNaam += this.voornaam;
        }

        if (this.achternaam) {
            if (volledigeNaam.length > 0) {
                volledigeNaam += ' ';
            }
            volledigeNaam += this.achternaam;
        }
        
        return volledigeNaam;
    }
}

/*
* 5. Toekennen van een nieuwe instantie van de class Student
* aan de variabele genaamd student.
* De waarde is een instantie van de class. Een instantie
* is een object met de properties en functies die gedefinieerd staan
* op de class.
* Het type is object.
*/
const student = new Student();
student.voornaam = 'John';
student.achternaam = 'Duck';
console.log(student.volledigeNaam());

const studentEnkelVoornaam = new Student();
studentEnkelVoornaam.voornaam = 'John';
console.log(studentEnkelVoornaam.volledigeNaam());

const studentEnkelAchternaam = new Student();
studentEnkelAchternaam.achternaam = 'Duck'
console.log(studentEnkelAchternaam.volledigeNaam());
```

## Schrijven

### Opdracht 1

Begin vanaf de code uit het onderdeel 'Class - Omschrijven - Opdracht 1':
- Zorg ervoor dat er gebruik gemaakt wordt van een constructor-methode.
- Maak gebruik van parameters in de constructor-methode om de properties een waarde toe te kennen.
- Schrijf de code om zodat de properties gezet worden tijdens het aanmaken van de instantie 
(in plaats van de properties een waarde toe te kennen nadat er een instantie gemaakt is).

Oplossing:

```js
class Student {
    voornaam;
    achternaam;
    
    constructor(voornaam, achternaam) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
    }
    
    volledigeNaam() {
        let volledigeNaam = '';

        if (this.voornaam) {
            volledigeNaam += this.voornaam;
        }

        if (this.achternaam) {
            if (volledigeNaam.length > 0) {
                volledigeNaam += ' ';
            }
            volledigeNaam += this.achternaam;
        }
        
        return volledigeNaam;
    }
}

let student = new Student('John', 'Duck');
console.log(student.volledigeNaam());

let studentEnkelVoornaam = new Student('John');
console.log(studentEnkelVoornaam.volledigeNaam());

let studentEnkelAchternaam = new Student(undefined, 'Duck');
console.log(studentEnkelAchternaam.volledigeNaam());
```

### Opdracht 2

Maak een class om onderstaande objecten op te bouwen.
Gebruik instanties van de class om de objecten aan de variabelen toe te kennen.

```js
const ferrari = {
    merk: 'Ferrari',
    type: 'F50'
}

const lamborghini = {
    merk: 'Lamborghini',
    type: 'Diablo'
}

const opel = {
    merk: 'Opel',
    type: 'Manta'
}
```

Oplossing:

```js
class Wagen {
    merk;
    type;
    
    constructor(merk, type) {
        this.merk = merk;
        this.type = type;
    }
}

const ferrari = new Wagen('Ferrari', 'F50');
const lamborghini = new Wagen('Lamborghini', 'Diablo');
const opel = new Wagen('Opel', 'Manta');
```

# Class - static

## Schrijven

Maak een class genaamd `Calculator`.

Voorzie vier `static methods`:
- som
- verschil
- delen
- vermenigvuldigen

Voorzie een `static property`:
- PI (met als waarde het nummer 3.141592)

Vertrek vanuit onderstaande code:
```js
class Calculator {

}

console.log(Calculator.som(3 + 3)); // Dit moet 6 loggen
console.log(Calculator.verschil(3 - 2)); // Dit moet 1 loggen
console.log(Calculator.delen(6 / 2)); // Dit moet 3 loggen
console.log(Calculator.vermenigvuldigen(3 * 3)); // Dit moet 9 loggen
console.log(Calculator.PI); // Dit moet 3.141592 loggen
```

Oplossing:

```js
class Calculator {
    static PI = 3.141592;

    static som(a, b) {
        return a + b;
    }

    static verschil(a, b) {
        return a - b;
    }

    static delen(a, b) {
        return a / b;
    }

    static vermenigvuldigen(a, b) {
        return a * b;
    }
}

console.log(Calculator.som(3, 3)); // Dit moet 6 loggen
console.log(Calculator.verschil(3, 2)); // Dit moet 1 loggen
console.log(Calculator.delen(6, 2)); // Dit moet 3 loggen
console.log(Calculator.vermenigvuldigen(3,  3)); // Dit moet 9 loggen
console.log(Calculator.PI); // Dit moet 3.141592 loggen
```

# Class - extends & super

## Schrijven

### Oefening 1

#### Deel 1

Refactor onderstaande code zodat er gebruik gemaakt wordt van classes.
Zorg voor een class genaamd 'Cursist' en een class genaamd 'Docent'.

```js
const cursist1 = {
  naam: "Yoeri",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist2 = {
  naam: "Marvi Hendriks",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist3 = {
  naam: "Simone :P",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist4 = {
  naam: "Domenico",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist5 = {
  naam: "Marco",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist6 = {
  naam: "Michelle",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist7 = {
  naam: "Romy",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist8 = {
  naam: "Jorg",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist9 = {
  naam: "Tony $erneel$",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist10 = {
  naam: "Ian",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist11 = {
  naam: "Angelique",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const cursist12 = {
  naam: "Arne",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
};

const docent1 = {
  naam: "Bart",
  motto: "25 is grappiger dan 24",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
  motto: function () {
    return `Mijn motto is: ${this.motto}`;
  },
};

const docent2 = {
  naam: "Mark",
  motto: "24 is grappiger dan 25",
  begroeting: function () {
    return `Hallo, ik ben ${this.naam}!`;
  },
  motto: function () {
    return `Mijn motto is: ${this.motto}`;
  },
};
```

Oplossing:

```js
class Cursist {
  naam;

  constructor(naam) {
    this.naam = naam;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }
}

class Docent {
  naam;
  motto;

  constructor(naam, motto) {
    this.naam = naam;
    this.motto = motto;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }

  getMotto() {
    return `Mijn motto is: ${this.motto}`;
  }
}

const cursist1 = new Cursist("Yoeri");
const cursist2 = new Cursist("Marci Hendriks");
const cursist3 = new Cursist("Simone :p");
const cursist4 = new Cursist("Domenico");
const cursist5 = new Cursist("Marco");
const cursist6 = new Cursist("Michelle");
const cursist7 = new Cursist("Romy");
const cursist8 = new Cursist("Jorg");
const cursist9 = new Cursist("Tony $erneel$");
const cursist10 = new Cursist("Ian");
const cursist11 = new Cursist("Angelique");
const cursist12 = new Cursist("Arne");

const docent1 = new Docent("Bart", "25 is grappiger dan 24.");
const docent2 = new Docent("Mark", "24 is grappiger dan 25.");

console.log(cursist1.begroeting());
console.log(cursist2.begroeting());
console.log(cursist3.begroeting());
console.log(cursist4.begroeting());
console.log(cursist5.begroeting());
console.log(cursist6.begroeting());
console.log(cursist7.begroeting());
console.log(cursist8.begroeting());
console.log(cursist9.begroeting());
console.log(cursist10.begroeting());
console.log(cursist11.begroeting());
console.log(cursist12.begroeting());

console.log(docent1.begroeting());
console.log(docent1.getMotto());
console.log(docent2.begroeting());
console.log(docent2.getMotto());
```

#### Deel 2

Ga verder op de oplossing uit deel 1, zorg voor een algemene class genaamd `Persoon`.

Zowel de class `Cursist` en `Docent` zullen overerven van `Persoon`.

Zet alle gemeenschappelijke properties en methodes in de `super class`.

Oplossing:

```js
class Persoon {
  naam;

  constructor(naam) {
    this.naam = naam;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}!`;
  }
}

class Cursist extends Persoon {
  constructor(naam) {
    super(naam);
  }
}

class Docent extends Persoon {
  motto;

  constructor(naam, motto) {
    super(naam);
    this.motto = motto;
  }

  getMotto() {
    return `Mijn motto is: ${this.motto}`;
  }
}

const cursist1 = new Cursist("Yoeri");
const cursist2 = new Cursist("Marci Hendriks");
const cursist3 = new Cursist("Simone :p");
const cursist4 = new Cursist("Domenico");
const cursist5 = new Cursist("Marco");
const cursist6 = new Cursist("Michelle");
const cursist7 = new Cursist("Romy");
const cursist8 = new Cursist("Jorg");
const cursist9 = new Cursist("Tony $erneel$");
const cursist10 = new Cursist("Ian");
const cursist11 = new Cursist("Angelique");
const cursist12 = new Cursist("Arne");

const docent1 = new Docent("Bart", "25 is grappiger dan 24.");
const docent2 = new Docent("Mark", "24 is grappiger dan 25.");

console.log(cursist1.begroeting());
console.log(cursist2.begroeting());
console.log(cursist3.begroeting());
console.log(cursist4.begroeting());
console.log(cursist5.begroeting());
console.log(cursist6.begroeting());
console.log(cursist7.begroeting());
console.log(cursist8.begroeting());
console.log(cursist9.begroeting());
console.log(cursist10.begroeting());
console.log(cursist11.begroeting());
console.log(cursist12.begroeting());

console.log(docent1.begroeting());
console.log(docent1.getMotto());
console.log(docent2.begroeting());
console.log(docent2.getMotto());
```

# Access modifiers - get & set

## Schrijven

### Opdracht 1

#### Deel 1

Maak een class genaamd `Lijst`.

Voeg aan deze class toe:
- private property `lijst`
- getter methode `lengte`:
  - Dit geeft de lengte van de private property `lijst` terug
- getter methode `lijst`:
  - Dit geeft de private property `lijst` terug
- setter methode `voegToe`
  - Dit voegt een item toe aan het einde van de private property `lijst`
- methode `aanpassen`, deze methode heeft één parameter genaamd `functie`:
  - ga er vanuit dat de functie die meegegeven wordt als paramter, altijd een waarde teruggeeft
  - gebruik iteratie om over elke waarde van de private property `lijst` te itereren, ken de waarde
  die de functie teruggeeft toe aan de index waarover geïterreerd wordt


Oplossing:

```js
class Lijst {
  _lijst = [];

  get lengte() {
    return this._lijst.length;
  }
  
  get lijst() {
    return this._lijst;
  }

  set voegToe(item) {
    this._lijst[this._lijst.length] = item;
  }

  aanpassen(functie) {
    for (let i = 0; i < this.lengte; i++) {
      this._lijst[i] = functie(this._lijst[i]);
    }
  }
}

function maalTwee(getal) {
  return getal * 2;
}

const getallen = new Lijst();
getallen.voegToe = 3;
getallen.voegToe = 1;
getallen.voegToe = 4;
getallen.aanpassen(maalTwee);
```

#### Deel 2

Maak gebruik van de gemaakte class uit deel 1:
- initialiseer een variabele genaamd `nummers` met een instantie van de class `Lijst`
- gebruik de setter `voegToe` om verschillende nummers aan de lijst toe te voegen
  - De nummers om toe te voegen: 3, 1, 4, 1, 5, 9, 2
- maak een functie genaamd `maalTwee`:
  - de functie accepteert één parameter genaamd `item`
  - de functie geeft de parameter terug, vermenigvuldigd met twee
- roep de functie `aanpassen` aan, geef de functie `maalTwee` mee als parameter (zonder de functie aan te roepen)

```js
// Voeg de opdracht hier toe

// Onderstaande lus zal als resultaat hebben: 6, 2, 8, 2, 10, 18, 4
for (let i = 0; i < nummers.lengte; i++) {
  console.log(nummers.lijst[i]);
}
```

Oplossing:

```js
class Lijst {
  _lijst = [];

  get lengte() {
    return this._lijst.length;
  }
  
  get lijst() {
    return this._lijst;
  }

  set voegToe(item) {
    this._lijst[this._lijst.length] = item;
  }

  aanpassen(functie) {
    for (let i = 0; i < this.lengte; i++) {
      this._lijst[i] = functie(this._lijst[i]);
    }
  }
}

const nummers = new Lijst();

nummers.voegToe = 3;
nummers.voegToe = 1;
nummers.voegToe = 4;
nummers.voegToe = 1;
nummers.voegToe = 5;
nummers.voegToe = 9;
nummers.voegToe = 2;

function maalTwee(item) {
  return item * 2;
}
nummers.aanpassen(maalTwee);

// Onderstaande lus zal als resultaat hebben: 6, 2, 8, 2, 10, 18, 4
for (let i = 0; i < nummers.lengte; i++) {
  console.log(nummers.lijst[i]);
}
```

# Ingebouwde objecten

## Schrijven

### Opdracht 1

```js
const cursisten1 = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },

];

const cursisten2 = [  
{ naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" }
]

// Gebruik een instantiemethode van Array om cursisten1 en cursisten2 samen te voegen,
// zodat er één array is, toegekend aan een nieuwe variabele genaamd 'cursisten', 
// waarin alle cursisten aanwezig zijn.

/* Voeg hier de oplossing toe */

// Gebruik een instantiemethode van Array om een nieuwe array te maken
// waar elk element een string is. Bijvoorbeeld 'Cursist: Romy'.
// Ken de nieuwe array toe aan een variabele genaamd 'bewerkteCursisten'.

/* Voeg hier de oplossing toe */

// Wijzig onderstaande code niet, dit moet uitprinten:
// Cursist: Yoeri
// Cursist: Marvi Hendriks
// ...
// Cursist: Arne
// 
// Waarbij de drie puntjes alle tussenliggende cursisten voorstellen.
bewerkteCursisten.forEach(cursist => console.log(cursist));
```

Oplossing:

```js
const cursisten1 = [
  { naam: "Yoeri" },
  { naam: "Marvi Hendriks" },
  { naam: "Simone :P" },
  { naam: "Domenico" },
  { naam: "Marco" },
  { naam: "Michelle" },

];

const cursisten2 = [  
{ naam: "Romy" },
  { naam: "Jorg" },
  { naam: "Tony $erneel$" },
  { naam: "Ian" },
  { naam: "Angelique" },
  { naam: "Arne" }
]

// Gebruik een instantiemethode van Array om cursisten1 en cursisten2 samen te voegen,
// zodat er één array is, toegekend aan een nieuwe variabele genaamd 'cursisten', 
// waarin alle cursisten aanwezig zijn.

const cursisten = cursisten1.concat(cursisten2);

console.log(cursisten);

// Gebruik een instantiemethode van Array om een nieuwe array te maken
// waar elk element een string is. Bijvoorbeeld 'Cursist: Romy'.
// Ken de nieuwe array toe aan een variabele genaamd 'bewerkteCursisten'.

const bewerkteCursisten = cursisten.map((x) => "Cursist: " + x.naam);

// Wijzig onderstaande code niet, dit moet uitprinten:
// Cursist: Yoeri
// Cursist: Marvi Hendriks
// ...
// Cursist: Arne
// 
// Waarbij de drie puntjes alle tussenliggende cursisten voorstellen.
bewerkteCursisten.forEach(cursist => console.log(cursist));
```

### Opdracht 2

In de commentaar staat omschreven wat er verwacht wordt.

```js
const studenten = [
  {
    naam: "Yoeri",
  },
  {
    naam: "Marvi Hendriks",
  },
  {
    naam: "Simone :P",
  },
  {
    naam: "Domenico",
  },
  {
    naam: "Marco",
  },
  {
    naam: "Michelle",
  },
  {
    naam: "Romy",
  },
  {
    naam: "Jorg",
  },
  {
    naam: "Tony $erneel$",
  },
  {
    naam: "Ian",
  },
  {
    naam: "Angelique",
  },
  {
    naam: "Arne",
  },
];

function filterCursisten(cursisten, letters) {
  /*
   * <eerste>
   * Herschrijf de code tussen de <eerste></eerste> comment.
   * Tip: Maak gebruik van .filter()
   */
  const gefilterdeCursisten = [];
  for (let i = 0; i < cursisten.length; i++) {
    const cursist = cursisten[i];

    /*
     * Omschrijf waarom .toLowerCase gebruikt wordt op zowel de naam als de letters
     */
    if (cursist.naam.toLowerCase().includes(letters.toLowerCase())) {
      gefilterdeCursisten[gefilterdeCursisten.length] = cursist;
    }
  }
  /*
   * </eerste>
   */
  return gefilterdeCursisten;
}

const cursistenMetEenR = filterCursisten(studenten, "r");
const cursistenMetCo = filterCursisten(studenten, "Co");

function logCursisten(letters, cursisten) {
  /*
   * <tweede>
   * Herschrijf de code tussen de <tweede></tweede> comment.
   * Tip: Maak gebruik van .map
   */
  let namen = [];
  for (let i = 0; i < cursisten.length; i++) {
    namen[i] = cursisten[i].naam;
  }
  /*
   * </tweede>
   */

  /*
   * Omschrijf wat .join(', ') doet
   */
  namen = namen.join(", ");
  console.log(`Cursisten met ${letters.toLowerCase()} in de naam: ${namen}`);
}

logCursisten("r", cursistenMetEenR);
logCursisten("Co", cursistenMetCo);
```

Oplossing:

```js
const studenten = [
  {
    naam: "Yoeri",
  },
  {
    naam: "Marvi Hendriks",
  },
  {
    naam: "Simone :P",
  },
  {
    naam: "Domenico",
  },
  {
    naam: "Marco",
  },
  {
    naam: "Michelle",
  },
  {
    naam: "Romy",
  },
  {
    naam: "Jorg",
  },
  {
    naam: "Tony $erneel$",
  },
  {
    naam: "Ian",
  },
  {
    naam: "Angelique",
  },
  {
    naam: "Arne",
  },
];

function filterCursisten(cursisten, letters) {
  const gefilterdeCursisten = cursisten.filter((cursist) => {
    /*
     * Omschrijf waarom .toLowerCase gebruikt wordt op zowel de naam als de letters
     * Antwoord: Zet alle strings om naar kleine letters zodat het niet uitmaakt of een woord met hoofdletters of met kleine letters geschreven is
     * "HaLlO" wordt "hallo"
     */
    return cursist.naam.toLowerCase().includes(letters.toLowerCase())
  });
  return gefilterdeCursisten;
}

const cursistenMetEenR = filterCursisten(studenten, "r");
const cursistenMetCo = filterCursisten(studenten, "Co");

function logCursisten(letters, cursisten) {
  let namen = cursisten.map((cursist) => cursist.naam);

  /*
   * Omschrijf wat .join(', ') doet
   * Antwoord: Maakt een string, gebaseerd op alle elementen op de array en tussen elk element wordt een komma en een spatie geplaatst
   */
  namen = namen.join(", ");
  console.log(`Cursisten met ${letters.toLowerCase()} in de naam: ${namen}`);
}

logCursisten("r", cursistenMetEenR);
logCursisten("Co", cursistenMetCo);
```