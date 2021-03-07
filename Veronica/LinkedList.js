/*

Create a class for a linked list node AND a linked list

*/

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// {data: 4, next: null}
// {data: 6, next: null}
// {data: 8, next: null}
// {head: null, tail: null}
// {head: {data: 4, next: null}, tail: {data: 4, next: null}}
// {head: {data: 4, next: {data: 6, next: null}}, tail: {data: 6, next: null}}
// {head: {data: 4, next: {data: 6, next: {data: 8, next: null}}}, tail: {data: 8, next: null}}

class LinkedList {
  constructor(item) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(item) {
    let node = new ListNode(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
}

// create nodes
let node1 = new ListNode(5);
let node2 = new ListNode(8);
let node3 = new ListNode(11);
let node4 = new ListNode(2);
let node5 = new ListNode(4);

// connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const linked = new LinkedList();
let node6 = new ListNode(1);
let node7 = new ListNode(3);

console.log(linked.addToTail(node6));
console.log(linked.addToTail(node7));
console.log(linked.head.next.next);
// console.log("linked", linked)
// console.log("node6", node6)

// alternative
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

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`);
