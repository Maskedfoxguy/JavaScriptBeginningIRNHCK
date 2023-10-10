const greeting = 'Hello there!';
console.log(`"${greeting}" is a string and its length is ${greeting.length}.`);

/* charAt(n) shows the character on the nth position in the string but keep in mind, 
the first character is indexed with zero (0).*/

console.log(greeting.charAt(0)); // <--- H
console.log(greeting.charAt(5)); // <--- " "
console.log(greeting.charAt(1)); // <--- e
console.log(greeting.charAt(11)); // <--- !

/* We can also access characters inside of strings with square brackets and their index number.
 As we said, the index starts at 0. */


console.log(greeting[0]); // <== H
console.log(greeting[3]); // <== l
console.log(greeting[9]); // <== r
console.log(greeting[-2]); // undefined


// Finding a substring

const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf('t')); // <== 4
console.log(message.indexOf('Be')); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf('py')); // 20

const sentence = "I am on my way to become a web developer."

console.log(sentence.length);
console.log(sentence.indexOf("my"));
console.log(sentence[7]);
console.log(charAt(22));
console.log(sentence.repeat(3));

console.log(sentence.startsWith('To be'));
console.log(sentence.startsWith("I am"));

//.endsWith() method

console.log(sentence.endsWith('developer.'));
console.log(sentence.endsWith('becoming'));



 

