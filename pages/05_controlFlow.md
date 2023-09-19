# Control Flow

Et program står ofte over for det man også kan kalde en forgrening, her, alt afhængig af programmets tilstand, kan det være at kun dele af programmet bliver afviklet.

Her benyttes 'if' sætninger, et spørgsmål hvor er svaret, true (sandt), ville programmet afvikle et segment. Er svaret derimod, false(falsk), ville koden blive ignoreret.

Det der står inde i en 'if' sætning, kaldes en 'condition'.

```javascript
var hungry = true;

if (hungry) {
  console.log("Find some food!");
}

console.log("Work Work!");
```

> Note: Prøv at ændre `true` til `false`.

En 'if' sætning består som sagt af en condition, som hvis evalueres til true, ville afvikle det kode som er beskrevet inden for de '`{ }`', som man kalder dens 'body'.

Det er også muligt at have flere udfald fra en 'if' sætning.

```javascript
var daysInYear = 365;

if (daysInYear == 366) {
  console.log("leap year");
} else {
  console.log("normal year.");
}
```

> Note: Hvad sker der hvis man erstatter 365, med 366 eller et helt andet tal?

I overstående eksempel, stemmer resultat ikke over ens hvis tallet er under 365, skal der opstilles en 'if else' sætning som man kan tilføje før den sidste 'else'.

```javascript
var age = 20;

var title = "Title: ";

if (age >= 13 && age <= 19) {
  title += "Teen ";
}

if (age >= 67) {
  title += "Retired";
} else if (age >= 18) {
  title += "Adult";
} else if (age > 3) {
  title += "Kid";
} else if (age >= 1) {
  title += "Toddler";
} else {
  title += "Baby";
}

console.log(title);
```

> Note: Prøv forskellige aldre af.

## AND - OR

Et andet udtryk der bliver introduceret i forrige eksempel er '&&', det betyder "og", og ville i nogen sprog skrives som 'AND'. En 'if' sætning med '&&' imellem to conditions, kræver at begge bliver opfyldt, så der står true && true.

Hvor der er "og" kan der også være "eller". Hvor kun den ene af de to conditions er nødt til at blive opfyldt.

```javascript
const appleColor = "green";

if (appleColor == "green" || appleColor == "red") {
  console.log("Normal colored apple.");
} else {
  console.log("What is even that?");
}
```

> Note: '||' er også kendt som 'OR' i nogle sprog.

---
