1. What are the different data types present in javascript?

> Primitive types
> String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.

> Number - It represents a number and can be written with or without decimals.

> BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.

> Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.

> Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.

> Null - It represents a non-existent or a invalid value.

> Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.

> typeof of primitive types :
```
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol
```

Non-primitive types

> Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

> Object - Used to store collection of data. *Note- It is important to remember that any data type that is not primitive data type, is of Object type in javascript.

2. Explain Hoisting in javascript.
> Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top. This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

3. Difference between “ == “ and “ === “ operators.

> Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.

4. Explain Implicit Type Coercion in javascript.
> Implicit type coercion in javascript is automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

> String coercion
> String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

> **Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string:

> Let’s understand both the examples where we have added a number to a string,

> When JavaScript sees that the operands of the expression x + y are of different types ( one being a number type and the other being a string type ) , it converts the number type to the string type and then performs the operation. Since after conversion, both the variables are of string type, the ‘ + ‘ operator outputs the concatenated string “33” in the first example and “24Hello” in the second example.

> **Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.
