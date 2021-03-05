# Chapter 3: Linked Lists

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

const list = new LinkedList();
list.setHead( new Node(2))
list.setTail( new Node(3))
list.setTail( new Node(4))
list.setTail( new Node(8))

const list2 = new LinkedList();
list2.setHead( new Node(1))
list2.setTail( new Node(5))
list2.setTail( new Node(6))

```

## 20. Merger Two Sorted Lists

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
## 21. Add Two Numbers

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

## GTCI: Fast and Slow Pointers
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
