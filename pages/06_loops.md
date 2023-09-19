# Loops

Forestil dig at du skal til at printe talene 1-10, du kan gøre det således:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
```

Okay, ikke så slemt, men hvad nu hvis det var 1 til 1 million.
Når du skriver kode, er det vigtigt at kende sine redskaber, og når man begynder at skrive kode der har mange gentagende elementer, kan det være tegn på at der er en bedre løsning.

## while loop

I dette tilfælde er svaret at anvende et loop:

```javascript
var count = 1;
const countTo = 10;

while (count <= countTo) {
  console.log(count);
  count += 1;
}
```

'while', på dansk "imens", er lidt lige som en 'if' sætning. Så længe at dens condition evalueres til 'true', ville det kode inde i dens 'body', blive ved med at afvikles.

> Note: Hvis en 'while' loop, ikke er opsat korrekt, kan det betyder at den ville køre "for evigt" (til programmet går i stå).

# for loop

Det samme kode kan beskrives med et 'for' loop:

```javascript
const countTo = 10;

for (var count = 1; count <= countTo; count += 1) {
  console.log(count);
}
```

Et 'for' loop, har den fordel, at den består af 3 elementer: "Initializer", "Condition" og "Incrementer", som er adskilt ved brug af "`;`". Ser vi på det forrige eksempel er:

- `initialize: var count = 1`
- `condition:  count <= countTo`
- `increment:  count += 1`

Når et forloop afvikles, ville dens 'initialize' køres en gang, hvorefter condition bliver afviklet lige som en 'if' sætning, når dens 'body' er afviklet, ville den derefter udføre increment, for så igen at se om dens condition er sandt.

Dette frem og tilbage imellem: Condition -> Body -> Increment -> Condition ... osv.
Forsætter til dens condition resultere i false.

Loops er teknisk set også en del af control flow, da deres condition definere om dens body skal afvikles ud fra tilstanden af programmet.

---
