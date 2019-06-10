/**
 * Przepisz poniższe funkcje na składnię ES6. Uwaga, funkcje muszą przechodzić testy!
 */
export const cookie = () => "Gimmie some cookie!";

export const sqr = x => x * x;

export const mathPower = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

export const formatUrl = url => {
  return `http://${url}`;
};

export const shout = string => {
  return string.toUpperCase();
};

export const formatHTML = elementNumber => {
  let emphasis = "<em>" + elementNumber + " paragraphs!</em>";
  return "<p>All new content for " + emphasis + "</p>";
};

export function triple(first = 1, second = 2, third = 3) {
  return first * second * third;
}
