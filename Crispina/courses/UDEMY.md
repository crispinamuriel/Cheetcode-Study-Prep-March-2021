
# Notes on Apendix Videos:

## Appendix: Big O - Section 37:



**Personal notes please ignore**
# Udemy Z2M Course Questions
## Twosum

### STEP 1: Questions to the Interviewer
### What constraints are on my solution?
1. Are all the numbers positive or ccan there be negative integers?
2. Are there duplicate numbers in the array?
3. Will there always be a solution availible?
4. What should the function return if we recieve input that doesn't have a solution?
5. Can there be multiple pairs found in the input array that will add to the target value? (Can there be multiple solutions?)


### STEP 2: Write Out Some Test Cases

#### Best Case Test Case & others
```
  const arr = [1,3,7,9,2];
  const target = 9;

  const arr = [1,3,7,9,2];
  const target = 25;   => null

  const arr = [];
  const target = 1; => null

  const arr = [5];
  const target =  5; => null

  const arr = [1,6];
  const target = 7;
```

### STEP 3: Figure out a ssolution without code

1. Two pointer technique
- intitialize one pointer points at first value in arr
- Keep p1 pointed at 1
- initialize 2nd pointer P2 at the  next value
- P1  is the number we're testing
- P2 is the complement that we're going to move throughout the array to test the other numbers

### STEP 4: Code

```
const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++) {
    let p1 = arr[i];
    for(let j = 1; j < arr.length; j++) {
      let p2 = arr[j];
      if(p1 + p2 === target) return [i,j]
    }
  }
  return -1;
}

console.log(twoSum([1,2,3,4,5], 7));

```
### STEP 4/5 : Review and Test Cases

arrr = [1,3,7,9,2]
target = 11

Walk thorugh your code as the IDE would:

Initialize our first loop at 0, second loop at 1
the inner loop moves through the array checking to see if p1 + p2 adds to target, if it does then return the indices.


i => 0
p1 => 1
j => 1
p2 => 3

does 1 + 3 = 11? no keep going

i => 1
p1 => 3
j => 2
p2 => 7

does 3 + 7 = 11? no keep going

i => 2
p1 => 7
j => 3
p2 => 9

does 7 + 9 = 11? no keep going

i => 3
p1 => 9
j => 4
p2 => 2

does 9 + 2 = 11? YES! We can return [i, j] =>  [3, 4]

Our solution here is [3,4]



### STEP 6/7: Time / Space Complexity

this solution uses a double for loop which is O(n^2) Time complexity. Space complexity ???

#### Notes
Constant
O(1)  Constant time

Polynomial

O(LogN) - Logarrithmic
O(N) - Linear
O(NLogN) - Liearithmic
O(N^2) - Quadratic
O(N^3) - Cubic

What makes these polynomial is what we can see inside of the brackets. We can see there is a base (N) and an exponent.

Exponential
O(2^N) - Exponential
O(!N) - Factorial
O(N^N) - Exponential

The key here is that the dynamic variable is the exponent and not the base
### SPACE complexity is O(1)

### STEP 8: Can we optmize this solution? YES!

We can use a hashmap to store, or remember values we've already seen.
Hashmap Lookup is an O(1) operation.

/*
Paul Erdős was a mathematician who published over 1,500 academic papers. The collaborative distance a person is from Erdős is called an "Erdős number".

For example:
Paul Erdős has a number of 0.
Anyone who wrote a paper with Erdős has a number of 1
Anyone who wrote a paper with someone who has a number of 1 (and did not write a paper with Erdős himself) has a number of 2
and so on.

We have some data of papers and the people who collaborated on these papers and we want to be able to figure out, given a name, what their Erdős number is. How can we do that?

Example:

{
  Piranian : 1,
  Herzog: 1,
  Stewart: 2
}

Paper ID    Authors
{
000231  :    Erdős, Piranian, Herzog
010221  :    Herzog, Stewart
142918  :    Stewart
176103  :    Chan, Berne, Stewart, Asensio, Cornwell }

From just this data:
Erdős has a number of 0
Piranian and Herzog have a number of 1 (through Erdős)
Stewart has a number of 2 (through Herzog)
Chan, Berne, Asensio, Cornwell have a number of 3 (through Stewart)
*/


