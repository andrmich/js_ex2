/**
 * Przepisz poniższe funkcje na składnię ES6. Uwaga, funkcje muszą przechodzić testy!
 */
export function cookie() {
  return "Gimmie some cookie!";
}

export var sqr = function(x) {
  return x * x;
};

export var mathPower = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

export function formatUrl(url) {
  return "http://" + url;
}

export function shout(string) {
  return string.toUpperCase();
}

export function formatHTML(elementNumber) {
  var emphasis = "<em>" + elementNumber + " paragraphs!</em>";
  return "<p>All new content for " + emphasis + "</p>";
}

export function triple(first, second, third) {
  if (first === undefined) first = 1;
  if (second === undefined) second = 2;
  if (third === undefined) third = 3;

  return first * second * third;
}
