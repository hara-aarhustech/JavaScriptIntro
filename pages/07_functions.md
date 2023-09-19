# Functions

At kunne genbruge sit kode flere steder i et program, ville være rigtig svært hvis ikke det var fordi at det var muligt at lave funktioner.

I JavaScript skrives en funktion således:

```javascript
function squareNumber(aNumber) {
  return aNumber * aNumber;
}

const squaredNumber = squareNumber(4);
console.log(squaredNumber);
```

I overstående eksempel, bliver en function ved navn squareNumber 'declared'.
Når man beskriver en funktions 'signatur', er der tale om:

1. Hvad hedder funktionen?
2. Hvad tager funktionen som input?
3. Hvad returnere funktionen når den er færdig.

Hvis vi tager et eksempel fra tidliger fra 'Control Flow', kan den nemt omskrives til en funktion.

```javascript
function lifeStage(age) {
  var title = "Stage: ";

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

  return title;
}

console.log(lifeStage(9));
console.log(lifeStage(19));
```

> Note: Det fede ved funktioner er at du kan bruge dem igen og igen.

D
