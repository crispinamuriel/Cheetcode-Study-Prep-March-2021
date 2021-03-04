
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
function twoSum = (arr, target) => {
  let p1 = arr[0];
  let p2 =  arr[1];

}

```

