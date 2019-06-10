# PnK 3

## Informacje wstępne

Jeśli przeszkadza ci obecne formatowanie tekstu, pobierz PDF: https://transfer.grupazpr.pl/download?di=XqobBqEqKRfvlyXeJQK5Ai5HQ7FJpK06OKNsxrftvj4&key=87c19231d03e47f6bc70e6f5d7431538

Zakładam, że każdy się już zapoznał z IDE, podobnie ma się sprawa zmiennych oraz modułów. 
Możemy więc zatem przejść dalej. 

Dziś zajmiemy się:

* Template strings
* Używaniem zewnętrznych modułów
* Array functions

1. Każdy z was zapewne miał do czynienia z formatowaniem tekstu w JS i doskonale wie,
że jest to dość ciężki i nieprzyjemny proces, szczególnie jeśli wynikiem końcowym ma być
HTML.

W końcu nie ma nic gorszego niż: 

```
var hello = "Hello";

var htmlString = "<ul><li>";

htmlString = htmlString + hello + "<li></ul>";

console.log(htmlString);
```

ES6 przychodzi nam jednak na ratunek! Dzięki nowej składni, jesteśmy w stanie w sposób
czytelny i łatwy formatować nawet najbardziej wredne HTMLowe konstrukcje. 

Template string składa się zawsze z dwóch elementów: 

"`" - tyldy która rozpoczyna i kończy blok tekstu.

"${nazwa_zmiennej}" - specjalnej składni pozwalającej wstrzyknąć string do template stringa.

Przykład:

```
let hello = "Hello";

console.log(`<ul>
  <li>
    ${hello}
  </li>
</ul>`);
```

2. Pisanie w JS bez używania paczek jest w chwili obecnej porównywalne z pisaniem stron w PHP
bez używania bibliotek/frameworków. Jak się chce, to można, ale po co, skoro może nam to ułatwić robotę?

Repozytorium pakietów (https://www.npmjs.com/) zawiera w swojej bazie ponad 800tys bibliotek.
Od IoT, ORMy, po budowanie interfejsów, kończąc na helperach do zarządzania czasu.

Jak zatem używać udostępnionych bibliotek? 

- Przechodzimy do folderu z projektem.
- Jeśli nie istnieje plik `package.json`, należy go utworzyć poleceniem `npm init`.
- Następnie należy wydać polecenie `npm install [nazwa-paczki] --save` (paczki tylko pod development dodajemy z flagą --save-dev) 
- W pliku `package.json` powinna pojawić nam się zainstalowana paczka w sekcji `dependencies:` bądź `devDependencies:`.
- Jeśli wpis się pojawił, możemy już spokojnie zaimportować dany moduł bądź konkretne funkcje w naszych plikach źródłowych. 

UWAGA: W CodeSanbox'ie nie ma dostępu do konsoli systemowej, 
w celu instalacji paczek należy używać interfejsu File Editor > Dependencies.
Po doinstalowaniu paczki, zalecam odświeżyć okno przeglądarki.

3. Tworzenie kodu to przede wszystkim implementacja logiki biznesowej. 
Logikę możemy implementować za pomocą funkcji oraz klas. Klasy przedstawię wam w 
późniejszym PnK, dziś jednak skupimy się na funkcjach. 

Funkcje w ES6 przeszły mały lifting wyglądu w celu poprawienia czytelności. 
Oczywiście stary schemat `function (args) {}` nadal jest poprawny, jednak 
znajomość nowego formatu wpłynie na rozumienie kodu źródłowego oraz umiejętność
pisania kodu zgodnego z Functional Programming.

Z dodatków: 

- w końcu można podawać defaultowe zmienne przy argumentach funkcji
- obsługa rest parameter

Stary schemat:

```
// Funkcja bezargumentowa. Zgodna z ES6
function hello() {
  return 'World';
}

// Funkcja z dwoma argumentami. Zgodna z ES6
function sum(a, b) {
  return a + b;
}

// Funkcja przypisana do zmiennej z 1 argumentem
var formatMe = function formatter(string) {
  return string + ' !';
}

// Funkcja używająca jako argumentu funkcji prywatnej
var odds  = evens.map(function (v) { 
  return v + 1; 
});

// Funkcja z domyślnymi argumentami
// Wywołanie: f(1) === 50
function f (x, y, z) { 
  if (y === undefined) y = 7; 
  if (z === undefined) z = 42; 
  
  return x + y + z; 
};

// Funkcja pobierająca wiele zmiennych. 
// Wywołanie: f(1, 2, "hello", true, 7) === 9
function fr (x, y) { 
  var a = Array.prototype.slice.call(arguments, 2); 
  
  return (x + y) * a.length; 
};
```


Nowy schemat:

```
const hello = () => {
  return 'World';
}
// Alternatywny zapis dla powyższego zapisu.
const hello = () => 'World';

const sum = (a, b) => { 
  return a + b 
};
// Alternatywny zapis dla powyższego zapisu.
const sum = (a, b) => a + b;

const formatMe = string => {
  return `${string} !`;
}

const odds  = evens.map(v => v + 1);

function f (x, y = 7, z = 42) { 
  return x + y + z 
}

function fr (x, y, ...a) { 
  return (x + y) * a.length 
}
```

Czytelniejsze, prawda? Teoria za nami, zapraszam do ćwiczeń.