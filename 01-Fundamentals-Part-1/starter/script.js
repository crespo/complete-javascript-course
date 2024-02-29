// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// let firstName = "Lua";
// console.log(firstName);

// let myFirstJob = "Admin";
// let myCurrentJob = "Unemployed";
// console.log(myCurrentJob);

/**
 * let 1example; - Can't start with number
 * Characters allowed: numbers, letters, underscore or dollar sign
 * Constants should be wrote all in uppercase
 * 
 * Primitive Data Types:
 * Number === Floating point numbers, decimals and integers.
 * String === Sequence of characters, text, between single or double quotes.
 * Boolean === Logical type, true or false.
 * Undefined === Value taken by a variable that 
 *               is not yet defined ('empty value')
 * Null === Means ('empty value')
 * Symbol (ES2015) === Value that is unique and cannot be changed
 * BigInt (ES2020) === Larger integers
 * 
 * JavaScript has dynamic typing
 * 
 * Value that holds a type, not the variable. Variable just stores the value.
 * Testing
 */


// console.log(typeof 'Raul');
// console.log(typeof true);
// console.log(typeof 24);
// console.log(typeof "Raul");

// let javascriptIsFun;
// console.log(typeof javascriptIsFun);
// javascriptIsFun = 23;
// console.log(typeof javascriptIsFun);
// javascriptIsFun = 'raul';
// console.log(typeof javascriptIsFun);

/**
 * let, const and var
 * 
 * let & const (ES6)
 * var (old)
 * 
 * let = to declare variables that can change it's value later
 * const = a variable that cannot be changed/mutated (cannot be empty)
 * var = legacy trash bitch
 * 
 * let = block-scoped
 * var = function-scoped
 */

// let age = 23;
// age = 24; // An example of reassignment of the variable or mutation

// const birthYear = 2000; // immutable

// lastName = 'Crespo'; // dont fucking do something stupid like this.
//                      // it's created as a property, globally
// console.log(lastName);

/**
 * basic operators
 * 
 * Plus (+) Operator can concatenate strings and sum numbers
 */

// // Math operators
// const now = 2037;
// const ageRaul = now-2000;
// const ageMiguel = now-2015;
// console.log(ageRaul, ageMiguel);
// console.log(ageRaul * 2, ageRaul / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 === 2 * 2 * 2

// const firstName = "raul";
// const lastName = "crespo";
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 === 25
// x *= 4; // x = x * 4 === 100
// x++; // x = x + 1 === 101
// x--; // x = x - 1 === 100

// console.log(x);

// console.clear();
// // Comparison operators (outputs boolean values)

// console.log(ageRaul > ageMiguel); // is x greater than y
// console.log(ageRaul < ageMiguel); // is x less than y
// console.log(ageRaul >= ageMiguel); // is x greater or equal y
// console.log(ageRaul <= ageMiguel); // is x less or equal y

/**
 * operator precedence (see mdn docs for full table)
 * 
 */

// console.log(25 - 10 - 5); // left-to-right behavior

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y); // right-to-left behavior

// const now = 2024;
// const ageRaul = now - 2000;
// const ageLua = now - 1996;

// const averageAge = (ageRaul + ageLua) / 2;

// console.log(averageAge);

// /**
//  * Challenge #1
//  * 
//  */

// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

// // BMI = mass / (height * height)
// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// let markHigherBMI;

// markHigherBMI = true ? BMIMark > BMIJohn : markHigherBMI = false;

// // we can simplify it by making:
// // let markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// /**
//  * Strings and template literals
//  */
// const firstName = 'Raul';
// const job = 'Software Developer';
// const birthYear = 2000;
// const year = 2024;

// const raul = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(raul);

// // Below is an example of Template Strings / Template Literals
// const raulNew = `I'm ${firstName}, a ${(year - birthYear)} years old ${job}!`;
// console.log(raulNew);

// console.log(`String
// multiple
// lines`);

// /**
//  * if/else statements (control structure)
//  */

// const age = 15;

// if (age >= 18) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years =)`);
// }


// const birthYear = 2001;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(`You were born in the ${century} century`)

// /**
//  * Code Challenge #2
//  * 
//  */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIJohn > BMIMark) {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
// } else {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// }

// /**
//  * Type conversion and Type coercion
//  */

// // Type Conversion = when you convert a type to another one

// const inputYear = Number('2000');

// console.log(inputYear + 18);

// console.log(Number('raul'));
// // conversion above returns a NaN (Not a Number [Invalid number])

// console.log(typeof NaN);
// // still a number, tho

// console.log(String(23), 23);

// // Type Coercion = when javascript automatically converts a type implicitly

// console.log("I am " + 24 + " years old");
// // plus operator converts number to string

// console.log('23' - '10' - 3);
// // minus operator converts string to number

// let n = '1' + 1; // results in 11
// n = n - 1; // results in 11 - 1, which is 10

// console.log(n); // should log 10

/**
 * Truthy and Falsy values
 */

/**
 * There is 5 falsy values:
 * 0 - Zero
 * '' - Empty String
 * undefined -
 * null -
 * NaN - Not a Number
 */

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('raul')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// const money = 0;

// if (money) {
//     console.log("Don't spend it all ;)");
// } else {
//     console.log("You should get a job bro.");
// }

// let height = 0;

// if (height) {
//     console.log('yay height is defined');
// } else if (height === 0) {
//     console.log("well, height is zero");
// } else {
//     console.log('well, height is undefined');
// }

// /**
//  * Equality Operators (== vs. ===)
//  */

// const age = 18;

// // === strict equality operator, does not perform type coercion
// if (age === 18) console.log(`You just became an adult`);

// // == loose equality operator, does perform type coercion (avoid it)
// if (age == '18') console.log('You just became an adult');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);

// if (favourite == 23) { // '23' == 23
//     console.log('Cool! 23 is an amazing number.');
// }

// if (favourite === 23) { // 23 === 23
//     console.log('Cool! 23 is an amazing number.');
// } else if (favourite === 7) {
//     console.log('7 is also a cool number');
// } else {
//     console.log(`${favourite} is not a cool number, okay?`)
// }

// if(favourite !== 23) console.log('Why not 23? :)');

// /**
//  * Boolean Logic (Logical Operators)
//  * (AND, OR & NOT operators)
//  */

// let age = 16;
// const statementA = age >= 20;
// const statementB = age < 30;

// console.log(!statementA);
// console.log(statementA && statementB);
// console.log(statementA || statementB);
// console.log(!statementA && statementB);
// console.log(statementA || !statementB);

/**
 * Coding Challenge #3
 */

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}
