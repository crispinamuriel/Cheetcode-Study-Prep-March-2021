## What is an array?

An array is a data structure that contains a group of elements.

## How is it implemented under the hood

```javascript
Class MyArray {
  constructor() {
      this.length = 0;
      this.data = {};
}
get(index){
   return this.data[index];
}
push(item){
 this.data[this.length] = item;
 this.length++
 return this.data
}
pop(){
 const lastItem = this.data[this.length - 1]
 delete this.data[this.length-1]
 this.length--
 return this.data;
}
shift(){
 for (let i = 0; i < this.length; i++){
   this.data[i] = this.data[i + 1]
 }
 delete this.data[this.length-1]
 this.length--
}
unshift(item){
 for (let i = this.length; i >= 0; i--){
  this.data[i] = this.data[i - 1]
 }
this.data[0] = item
this.length++
}
```

## How to initiate a new array

### With the literal notation []

```javascript
Let i = [];
```

### Array() constructor

```javascript
new Array();
```

#### _Side effects_:

- Array literals should always be preferred to Array constructors.
- Array constructors are error-prone due to the way their arguments are interpreted. If more than one argument is used, the array length will be equal to the number of arguments. However, using a single argument will have one of three consequences:
- If the argument is a number and it is a natural number the length will be equal to the value of the argument.

```javascript
let arr = new Array(3); // [empty × 3]
```

If the argument is a number, but not a natural number an exception will be thrown.

```javascript
let arr = new Array(3.14); // RangeError: Invalid array length
```

Otherwise the array will have one element with the argument as its value.

```javascript
let arr = new Array("3"); // ["3"]`
```

- Note that even if you set the length of an array, it will be empty. That is, it will have the number of elements you declared, but they won't contain anything, so no callbacks will be applied to the array elements.
- For these reasons, if someone changes the code to pass 1 argument instead of 2 arguments, the array might not have the expected length. To avoid these kinds of weird cases, always use the more readable array literal initialization format.

### Examples:

#### Noncompliant Code Example

```javascript
let myArray = new Array(x1, x2, x3); // Noncompliant. Results in 3-element array.
let emptyArray = new Array(); // Noncompliant. Results in 0-element array.

let unstableArray = new Array(n); // Noncompliant. Variable in results.

let arr = new Array(3); // Noncompliant; empty array of length 3
arr.foreach((x) => alert("Hello " + x)); // callback is not executed because there's nothing in arr
let anotherArr = arr.map(() => 42); // anotherArr is also empty because callback didn't execute
```

#### Compliant Solution

```javascript
let myArray = [x1, x2, x3];
let emptyArray = [];

// if "n" is the only array element
let unstableArray = [n];
// or, if "n" is the array length (since ES 2015)
let unstableArray = Array.from({ length: n });

let arr = ["Elena", "Mike", "Sarah"];
arr.foreach((x) => alert("Hello " + x));
let anotherArr = arr.map(() => 42); // anotherArr now holds 42 in each element
```

## How to iterate through an array

- For Loops, While Loops, For of, Do While
- Built in Methods - forEach, Filter, Map

### Examples of usage

- When you want to store data/list of some sort
- When you want to Sort data - contiguous
- When is it useful to use an array vs hash map?
  - The main difference is that the Array’s index doesn’t have any relationship with the data. You have to know where your data is.

## Running times for basic functions

| Access | Search | Insertion | Deletion | Access |
| ------ | ------ | --------- | -------- | ------ |
| Array  | Θ(1)   | Θ(n)      | Θ(n)     | Θ(n)   |

## Static vs Dynamic Array

**Static**
Arrays that don't increase in size, the size is fixed by default and you can’t push you just assigned to the appropriate index; In this case there is only a certain limit of memory allocated for the array.

```c++
Int chars[14];
```

**Dynamic**
Dynamic arrays start off with a set limit. For example 2, when two items are pushed into the array, the array is at its limit so when another item is added, it must grow to be able to allow the incoming item. It ends up allocating twice the size of the array (2 \* 2 = 4) and then copies over all the items from the old array and adds the new item. This causes the time complexity to be O(n) when pushing the new item into the array.

Example in c++

```c++
vector<Int> chars;
```
