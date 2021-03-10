# Grokking the Coding Interview: Patterns for Coding Questions




## Pattern: Sliding Window

### Average of all contiguous subarrays of size ‘K’

```javascript
function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    };
  };

  return result;
};
```

### Maximum Sum Subarray of Size K (easy)

```javascript
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    };
  };
  return maxSum;
};

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)

Space Complexity #
The algorithm runs in constant space O(1)
*/
```

### Smallest Subarray with a given sum (easy)

```javascript
/*

let sum = 0
let minLength = Infinity
let windowStart = 0

for (windowEnd < arr.length)
keep a running sum of elements
while nested loop (sum >=s)
Record length of this window as smallest so far
remove windowStart from sum
shrink the window from left once
continue until for loop ends
if(minLength === Infinity)return 0 else minLength

*/

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    };
  };

  if (minLength === Infinity) {
    return 0;
  };
  return minLength;
};

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)

Space Complexity #
The algorithm runs in constant space O(1)
*/
```











## Pattern: In-place Reversal of a LinkedList

In a lot of problems, we are asked to reverse the links between a set of nodes of a LinkedList. Often, the constraint is that we need to do this in-place, i.e., using the existing node objects and without using extra memory.

In-place Reversal of a LinkedList pattern describes an efficient way to solve the above problem. In the following chapters, we will solve a bunch of problems using this pattern.

<hr>

### Problem

Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

<hr>

### Solution

To reverse a LinkedList, we need to reverse one node at a time. We will start with a variable current which will initially point to the head of the LinkedList and a variable previous which will point to the previous node that we have processed; initially previous will point to null.

In a stepwise manner, we will reverse the current node by pointing it to the previous before moving on to the next node. Also, we will update the previous to always point to the previous node that we have processed. Here is the visual representation of our algorithm:

```javascript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = '';
    temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    return result;
  }
}

const reverse = function (head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);
```
