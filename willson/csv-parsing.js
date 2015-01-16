/*
 * CSV Parsing
 *
 * Write a function that accepts a string as it's only argument. The string
 * consists of comma-separated values and all values are either an integer or a
 * string. Return an array of the parsed input string.
 *
 * f('2,6,3,2,5') => [ 2, 6, 3, 2, 5 ]
 *
 * f('"pears","apples","walnuts","grapes","cheese,cake"')
 *   => [ "pears", "apples", "walnuts", "grapes", "cheese,cake" ]
 *
 * f('1,"Que?","Kay?",2,"Si.","Sea? Kay, sea?","No, no, no. Que... ‘what’.",
 * 234,"Kay Watt?","Si, que ‘what’.","C.K. Watt?",3,"Yes!","comma,comma,
 * comma , :)"')
 *   => [ 1, "Que?", "Kay?", 2, "Si.", "Sea? Kay, sea?",
 *       "No, no, no. Que... ‘what’.", 234, "Kay Watt?", "Si, que ‘what’.",
 *       "C.K. Watt?", 3, "Yes!", "comma,comma, comma , :)" ]
*/

var csvParsing = function (string) {
   var result = [];
   var withinDoubleQuotes = false;
   var temp = '';

   string.split('').forEach(function (character) {
    if (character === '"') {
      withinDoubleQuotes = !withinDoubleQuotes;
      return;
    }

    if (character === ' ' && !withinDoubleQuotes) {
      return;
    }

    if (character === ',') {
      if (withinDoubleQuotes) {
        temp += character;
      } else {
        if (!isNaN( temp )) {
          temp = parseInt( temp, 10 );
        }
        result.push( temp );
        temp = '';
      }
      return;
    }

    temp += character;
   });

   result.push( temp );
   return result;
};

var numbers = '2,6,3,2,5';
var fruits  = '"pears","apples","walnuts","grapes","cheese,cake"';
var random  = '1,"Que?","Kay?",2,"Si.","Sea? Kay, sea?","No, no, no. Que... ‘what’.",234,"Kay Watt?","Si, que ‘what’.","C.K. Watt?",3,"Yes!","comma,comma, comma , :)"';

console.log(csvParsing(numbers));
console.log(csvParsing(fruits));
console.log(csvParsing(random));