# Class

### Wat is een class?

Een template van een object.

### Wat gebeurt er wanneer een instantie van een class gemaakt wordt?

Wanneer een instantie van een class gemaakt wordt, dan zal er een object met alle properties en methoden (functies) van de class teruggegeven worden.

### Wat is een constructor-methode?

Een methode die uitgevoerd wordt op het moment dat er een instantie van een class gemaakt wordt.

## omschrijven

### Opdracht 1

//1. Definiëren van een class genaamd Student.
//2. Property genaamd 'voornaam', waarde is undefined.
//3. Property genaamd 'achternaam', waarde is undefined.
//4. Methode genaamd 'volledigeNaam'.
//5. Toekennen van een nieuwe instantie van de class Student aan de var genaamd Student.
De waarde is een instantie van de class. Een instantie is een object met de properties en functies die gedefinieerd staan op de class.
Het type is object.

## Schrijven

### Opdracht 1

```js
class Student {
  voornaam;
  achternaam;

  constructor(voornaam, achternaam) {
    this.voornaam = voornaam;
    this.achternaam = achternaam;
  }

  volledigeNaam() {
    let volledigeNaam = "";

    if (this.voornaam) {
      volledigeNaam += this.voornaam;
    }

    if (this.achternaam) {
      if (volledigeNaam.length > 0) {
        volledigeNaam += "";
      }
      volledigeNaam += this.achternaam;
    }

    return volledigeNaam;
  }
}

let student = new Student("John", "Duck");
console.log(student.volledigeNaam());

let studentEnkelVoornaam = new Student("John");
console.log(studentEnkelVoornaam.volledigeNaam());

let studentEnkelAchternaam = new Student(undefined, "Duck");
console.log(studentEnkelAchternaam.volledigeNaam());
```

### Opdracht 2.

```js
class Wagen {
  merk;
  type;

  constructor(merk, type) {
    this.merk = merk;
    this.type = type;
  }
}

const ferrari = new Wagen("Ferrari", "F50");
const lamborghini = new Wagen("Lamborghini", "Diablo");
const opel = new Wagen("Opel", "Mantra");
```

# Class - Static

## Schrijven

```js
class Calculator {
static PI = 3.141592;

    statis som(a, b) {
        return a + b;
    }

    static verschil(a, b) {
        return a - b;
    }

    static delen(a, b) {
        return a / b;
    }

    static vermenigvuldigen(a, b) {
        return a* b;
    }

}
```

# Class - extends & super

## Schrijven

### Oefening 1

#### Deel 1

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

  constructor(naam, motto) {
    this.naam = naam;
    this.motto = motto;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}`;
  }

  getMotto() {
    return `${this.begroeting()} Mijn motto is: ${this.motto}`;
  }
}

const cursist1 = new Cursist("Yoeri");
const cursist2 = new Cursist("Marvi Hendriks");
const cursist3 = new Cursist("Simone :P");
const cursist4 = new Cursist("Domenico");
const cursist5 = new Cursist("Marco");
const cursist6 = new Cursist("Michelle");
const cursist7 = new Cursist("Romy");
const cursist8 = new Cursist("Jorg");
const cursist9 = new Cursist("Tony");
const cursist10 = new Cursist("Ian");
const cursist11 = new Cursist("Angelique");
const cursist12 = new Cursist("Arne");

const docent1 = new Docent("Bart", "25 is grappiger dan 24");
const docent2 = new Docent("Mark", "24 is grappiger dan 25");

console.log(cursist11.begroeting());

console.log(docent2.getMotto());
```

#### Deel 2

```js class Persoon {
  naam;

  constructor(naam) {
    this.naam = naam;
  }

  begroeting() {
    return `Hallo, ik ben ${this.naam}`;
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
    return `${this.begroeting()} Mijn motto is: ${this.motto}`;
  }
}
const cursist1 = new Cursist("Yoeri");
const cursist2 = new Cursist("Marvi Hendriks");
const cursist3 = new Cursist("Simone :P");
const cursist4 = new Cursist("Domenico");
const cursist5 = new Cursist("Marco");
const cursist6 = new Cursist("Michelle");
const cursist7 = new Cursist("Romy");
const cursist8 = new Cursist("Jorg");
const cursist9 = new Cursist("Tony");
const cursist10 = new Cursist("Ian");
const cursist11 = new Cursist("Angelique");
const cursist12 = new Cursist("Arne");

const docent1 = new Docent("Bart", "25 is grappiger dan 24");
const docent2 = new Docent("Mark", "24 is grappiger dan 25");

console.log(cursist11.begroeting());

console.log(docent2.getMotto());
```
