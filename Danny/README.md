## Mastering 1. Two Sum

```js
// Time: O(N) | Space: O(N)
const twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (dict[diff] !== undefined) {
            return [dict[diff], i]
        } else {
            dict[nums[i]] = i;
        }
    }
};
```

## Mastering 4. Backspace String Compare

```js
// Brute Force: Time: O(N^2) | Space: O(1)
const backspaceCompare = function(S, T) {
  return backspaceChars(S) === backspaceChars(T)
};

const backspaceChars = function(str) {
  let i = str.length-1;
  while (i >= 0) {
      if (str[i+1] === '#' && str[i] !== '#') {
        str = str.slice(0, i) + str.slice(i+2, str.length1)
      }
      i--;
  }
  // First char is backspace
  if (str[0] === '#') return str.slice(1)
  return str;
}

// Stack Solution: Time: O(N) | Space: O(N)
// 3 Pass O(N) Solution
const backspaceCompare = function(S, T) {
    const sStack = [];
    const tStack = [];
    createStack(S, sStack);
    createStack(T, tStack);

    if (sStack.length !== tStack.length) return false;
    for (let i = 0; i < sStack.length; i++) {
        if (sStack[i] !== tStack[i]) {
            return false
        }
    }

    return true;
}

const createStack = function(str, stack) {
        for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== '#') {
            stack.push(char)
        } else {
            stack.pop();
        }
    }
}
```

## Mastering 7. M, N Reversals

```js
// Time: O(N) | Space: O(1)
const reverseBetween = function(head, left, right) {
  let prev = null;
  let curr = head;
  while (curr !== left) {
      prev = curr;
      curr = curr.next;
  }
  let segmentTail = curr;
  let next = null;
  while (curr !== right) {
      let temp = curr.next;
      curr.next = next;
      next = curr;
      curr = temp;
  }
  segmentTail.next = curr.next;
  curr.next = next;
  prev.next = curr;
  return head;
};
```

## Linked List Construction

```js
class LinkedList {
  constuctor() {
    this.head = null;
    this.tail = null;
  }

  // Set head
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this
  }
  // Set tail
  setTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
```

## Grokking 20. Merger Two Sorted Lists

Time: O(1);
Space: O(1);

```js

// Option: Recursive
// Option: Iterative -- while loop*
// Option: No dummy head - iterative
function mergeLinkedLists(list1, list2) {

  const dummyHead = new Node(-1);
	let prev = dummyHead
  let node1 = list1.head;
  let node2 = list2.head;

	while (node1 !== null && node2 !== null) {
		if (node1.val <= node2.val) {
			prev.next = node1
			node1 = node1.next
		} else {
			prev.next = node2
			node2 = node2.next
		}
		prev = prev.next
	}
	prev.next = node1 === null ? node2 : node1

  const newList = new (LinkedList);
  newList.head = dummyHead.next;

	return newList;
}
```
## Grokking 21. Add Two Numbers

```js
// Probably not right

function addTwoNumbers(listA, listB) {
  let nodeA = listA.head;
  let nodeB = listB.head;

  let carry = 0;
  let prevNode;
  const newList = new LinkedList()

  while (nodeA !== null && nodeB !== null) {
    // Find the sum of the two nodes' vals
    let sum = nodeA.val + nodeB.val + carry;
    // reset carry
    carry = 0;
    // is there a new carry?
    if (sum > 9) {
      sum -= 10;
      carry++;
    }
    const newNode = new Node(sum)

    if (prevNode) {
      prevNode.next = newNode;
    } else {
      newList.head = newNode;
    }
    prevNode = newNode;
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  // Handle one list longer than the other;
  while (nodeA || nodeB || carry) {
    let sum = carry;
    if (nodeA) {
      sum += nodeA.val;
      nodeA = nodeA.next;
    }
    if (nodeB) {
      sum += nodeB.val;
      nodeB = nodeB.next;
    };
    carry = 0;
    if (sum > 9) {
      sum -= 10;
      carry++;
    }
    const newNode = new Node(sum)

    if (prevNode) {
      prevNode.next = newNode;
    }
    prevNode = newNode;
  }

  return newList.head;
}
```

## Grokking: Fast and Slow Pointers
## Middle Of A Linked List

```js
const find_middle_of_linked_list = function(head) {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next;
  }

  return slow;
}
```

## 1. Palindrome Linked List
Given the head of Singly Linked List, write a method to check if the LL is a palindrome or not.
- Couldn't figure this out without solution.

## 2. Rearrange a Linked List
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.
- Refered to reverse nodes function from previous problem to solve.

```js
const reorder = function(head) {
  // Find the middle node of the list
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the middle of the LL to the end, store new head
  let second = reverseNodes(slow);
  let first = head;
  // Iterate through the LL's, inserting all the values after the head
  while (second !== null && first !== null) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }

  return head;
}

function reverseNodes(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
```

# Leetcode

## 227. Basic Calculator II
```js
const calculate = function(s) {
    const operators = '+-*/';
    const stack = [];
    let currentNumber = 0;
    for (let i = 0; i < s.length; i++) {
        // Handle multi-digit numbers
        let num = ''
        while (isNaN(s[i]) === false) {
            num += s[i];
            i++
        }
        if (num) {
            currentNumber = Number(num);
            // Peek at stack operator
            const stackTop = stack[stack.length-1]
            // handle mult or div
            if (stackTop === '/' || stackTop === '*') {
                let oper = stack.pop();
                let prevNumber = stack.pop();
                stack.push(oper === '/'
                    ? prevNumber / currentNumber
                    : prevNumber * currentNumber
                )
                currentNumber = 0;
            // empty stack, add or subt -- push currentNumber to handle later
            } else {
                stack.push(currentNumber)
            }
        }
        // it's an operator -- push to stack to handle next
        if (operators.indexOf(s[i]) !== -1) {
            stack.push(s[i])
        }

    }
    // while loop to handle all lower operators
    while (stack.length > 1) {
        let num1 = stack.pop();
        let oper = stack.pop();
        let num2 = stack.pop();
        stack.push(oper === '-'
            ? num2 - num1 // subtract
            : num2 + num1 // add
        )
    }
    // return the first item
    return stack[0]
};
```
