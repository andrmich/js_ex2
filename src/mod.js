/**
 * Z npmjs dodaj paczki:
 *  * pad-left
 *  * is-sorted
 *  * dedupe
 *  Zaimportuj je do tego pliku.
 *  Oraz zaimplementuj funkcje!
 *
 */
let sorted = require("is-sorted");

export const isSorted = arr => sorted(arr);
// Math.random() >= 0.5
let dedupe = require("dedupe");

function compareNumbers(a, b) {
  return a - b;
}
export const deDuplicate = arr => {
  let noDuplicates = dedupe(arr);
  let sortedArr = noDuplicates.sort(compareNumbers);
  return sortedArr;
};

let pad = require("pad-left");

export const padFor = (number, pad) => String(number).padStart(pad, "0");

export const standardPad = number => {
  let result = pad(`${number}`, 8, "0");
  return `${result}`;
};
