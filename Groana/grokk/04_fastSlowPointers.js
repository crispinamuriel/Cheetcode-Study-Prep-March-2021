class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_cycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) { // why did solution call for && fast.next !== null
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next.next; // is this overriding line 27?
console.log(`LinkedList has cycle: ${has_cycle(head)}`);