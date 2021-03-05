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
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
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

// ------------------------------------------------------------

function mergeLinkedLists(list1, list2) {
  //
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

// console.log(mergeLinkedLists(list, list2));
// mergeLinkedLists(list, list2)

// Happy Number

function findHappyNumber(num) {
  // create fast and slow pointers
  let fast = findSqSum(findSqSum(num));
  let slow = findSqSum(num);

  while (fast !== slow) {
    fast = findSqSum(findSqSum(fast));
    slow = findSqSum(slow);
  }

  return fast === 1
}

function findSqSum(num) {
  let sum = 0;
  while ((num > 0)) {
    digit = num % 10;
    sum += (digit * digit);
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(findHappyNumber(23));
// console.log(findHappyNumber(12));


// Palindrome LinkedList

// Time: O(N) Space: O(1)

// Rearrange a Linked List

// Time O(N) Space: O(1)

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
