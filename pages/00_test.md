# Datatyper

Vi har i de forrige eksempler arbejdet meget med tal, som i JavaScript hedder 'number'.

Her ville vi udover number, også se på andre primitive datatyper.

## Number

Number er en datatype som repræsentere heltal og decimaltal, hvilket ikke er typisk for alle programmeringssprog.
Normalt vil et programmeringssprog benytte `Integer` til at representere heltal, og floating-point arithmetic, også kaldet floats, til decimal tal.

Hvor i andre sprog som understøtte integer, vil en værdi erklæret som en integer ikke kunne have decimal tal, og derfor ville eksempler som '8 / 3' give 2, da de resterende '2 / 3' ikke kan blive representeret.

```javascript
// a will match the value
const a = 999999999999999;

// b will not match the value
const b = 9999999999999999;

// c is not precise enough
const c = 0.2 + 0.1;

console.log(a);
```

> Note: Decimal tal skrives altid med et '.' (punktum) i programmering.

## Tekst (string)

Tekst strenge(string), i programmering kan erklæres på to måde i Javascript enten med `"` eller `'`. Den man anvender til at starte en string, skal også være den man lukker med.

```javascript
const text1 = "This is a string";

const text2 = "This is also a string";

const text3 = text1 + text2;

console.log(text3);
```

> Note: Som man kan se bliver text2 sat sammen uden mellemrum. Dette kaldes 'concatenate'.

Strings består af karakter, hvilket er de enkelte tegn. De fleste programmeringssprog har også dette som en datatype, men dette er ikke gældende for JavaScript.

## Boolean

En boolean, er en værdi som enten er sandt eller falsk, true/false. Den kan selv sættes, eller man kan anvende det ved at lave en sammenligning, så som:

- a == b: "er 'a' det samme som 'b'?
- a != b: "er 'a' ikke det samme som 'b'?
- a < b: "er 'a' mindre end 'b'?
- a <= b: "er 'a' mindre eller det samme som 'b'?
- a > b: "er 'a' større end 'b'?
- a >= b: "er 'a' større end eller lig med 'b'?

Alle overstående ville resultere i enten 'true' eller 'false' alt efter værdien af a og b

```javascript
const numberA = 2;
const numberB = 1;

console.log(numberA == numberB);
console.log(numberA != numberB);
console.log(numberA < numberB);
console.log(numberA <= numberB);
console.log(numberA > numberB);
console.log(numberA >= numberB);
```

Tankegangen for håndtering af boolean har stor betydning for næste afsnit 'Control Flow'.

---
