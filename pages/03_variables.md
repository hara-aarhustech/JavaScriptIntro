# Variabler

Du har sikket stødt på noget lignende, som dette, hvis du har læst matematik:

```md
a = 2
b = 3

c = a + b
```

Og kan hurtiget regne ud at: '`c = 5`'.
Hvis det samme skulle skrives i JavaScript ville det se således ud:

```javascript
var a = 2;
var b = 3;

var c = a + b;

console.log(c);
```

I JavaScript ser det næsten identisk ud, den store forskel er at der står '`var`' foran 'a, b og c', og alle linjer afsluttes med en `;`.
Dette er måden man 'instantiere' en variable. Den første linje kan derfor læses som:

> "Variablen 'a' instantieres med værdien '2'"

Formålet med variabler er at værdien kan ændres igennem programmets levetid:

```javascript
//the value a is declared and assigned the value 1
var a = 1;
// the value of a is overwritten by the result of "1+1" which is 2.
a = 1 + 1;
// the value of a is once again overwritten, but this time it uses the previously assigned value 2, so it can be read as = 2 + 2.
a = a + a;

console.log(a);
```

## konstanter

Hvor elementer som er instantieret som en variable, kan ændres igennem programmes levetid, er konstanter til for hvor man har værdier der ikke bør ændres, det kunne for eksempel være tallet PI, hvor hvis man ved en fejl overskrev dens værdi, ville fremtidige beregning give det forkerte resultat.

```javascript
const a = 1;
a = 2;
console.log(a);
```

> Dette giver en "TypeError: invalid assignment to const 'a'".

Grunden til det sker er fordi 'a' er blevet erklæret som konstant, og kan værdien kan derfor ikke overskrives.

---
