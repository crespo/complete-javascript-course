# Summary - Fundamentals Part 1

## Primitive Data Types
- Number = Floating point numbers and integers
- String = Sequence of characters between single quotes (''), double quotes ("") or backticks (``)
- Boolean = Logical, true or false
- Undefined = Value of a variable that wasn't yet defined
- Null = Empty value
- Symbol = Unique value and cannot be changed
- BigInt = Larger integer numbers

JavaScript has dynamic typing, which means that we don't define which type of value a variable will hold. Furthermore, variables don't have types, values do.

## let, const and var
- let = block-scoped, defines variables that can be mutated
- const = defines variables that cannot be mutated
- var = function-scoped, defines variables that can be mutated (legacy)

## Expressions and Operators

Source: [Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)

## Operator Precedence

Source: [Operator Precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table)

## Strings and Template Literals

As said before, we can use single quotes ('') and double quotes ("") to delimit a string, but we can also use backticks (``), and they define template literals.

Usage example: 
```
console.log(`Hello! My name is ${user.name} and I am a ${user.job}.
How can I help you?`); // Output: 'Hello! My name is Raul and I am a Software Developer.
                                   How Can I help you?'
```

## If-Else Statements

Usage example:
```
if (expression) {
} else if (expression) {
} else {
}
```

## Type Conversion and Type Coercion

- Type Conversion = When you manually convert a value from a type to another type.
- Type Coercion = When JavaScript automatically converts a type to another type.

Example Type Conversion:
```
console.log(Number('2024')); // Output: 2024
```

Example Type Coercion:
```
console.log('20' + 24); // Output: '2024'
```

## Truthy and Falsy Values

- There are 5 falsy values, them being:
- - 0
- - ''
- - undefined
- - null
- - NaN

Everything else is a truthy value, it means that if converted to boolean, they will be converted to the truth value ```true```.

## Equality Operators (== vs. ===)

- === Strict Equality Operator. Does not perform type coercion
- == Loose Equality Operator. Does perform type coercion (avoid using it)

## Basic Binary Logical Operators

- && - AND
- || - OR
- ! - NOT

## Switch Statement

Example usage:
```
const foo = 1;

switch (foo) {
    case 0:
        console.log('That is zero.');
        break;
    case 1:
        console.log('Got it!");
        break;
    default:
        console.log('You failed.');
}
```

## Statements and Expressions

- Expressions are pieces of code that produces a value
Example: ```3 + 4 or 1991 or true && false```

- Statements are bigger pieces of code that translate actions
If-Else statement is an example

## Ternary Operator

```[expression] ? [if true] : [if false]```