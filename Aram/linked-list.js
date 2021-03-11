class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
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
  removeFromTail() {
    if (!this.tail) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = temp.prev;
      this.head.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }
  forEach(callbackFunc) {
    let current = this.head;
    while (!current) {
      callbackFunc(current);
      current = current.next;
    }
    return true;
  }
}

// {data: 4, next: null}
// {data: 6, next: null}
// {data: 8, next: null}
// {head: null, tail: null}
// {head: {data: 4, next: null}, tail: {data: 4, next: null}}
// {head: {data: 4, next: {data: 6, next: null}}, tail: {data: 6, next: null}}
// {head: {data: 4, next: {data: 6, next: {data: 8, next: null}}}, tail: {data: 8, next: null}}


// create nodes
// let node1 = new ListNode(5)
// let node2 = new ListNode(8)
// let node3 = new ListNode(11)
// let node4 = new ListNode(2)
// let node5 = new ListNode(4)

// // connect nodes
// node1.next = node2
// node2.next = node3
// node3.next = node4
// node4.next = node5

// const linked = new LinkedList()
// let node6 = new ListNode(1)
// let node7 = new ListNode(3)

// console.log(linked.addToTail(node6))
// console.log(linked.addToTail(node7))
// console.log(linked.head.next.next)
// // console.log("linked", linked)
// // console.log("node6", node6)

// LinkedList {
//   head: ListNode { data: ListNode { data: 1, next: null }, next: null },
//   tail: ListNode { data: ListNode { data: 1, next: null }, next: null },
//   length: 1
// }
// LinkedList {
//   head: ListNode { data: ListNode { data: 1, next: null }, next: [Circular] },
//   tail: ListNode { data: ListNode { data: 3, next: null }, next: null },
//   length: 2
// }
// ListNode { data: ListNode { data: 1, next: null }, next: [Circular] }
// linked LinkedList {
//   head: ListNode { data: ListNode { data: 1, next: null }, next: [Circular] },
//   tail: ListNode { data: ListNode { data: 3, next: null }, next: null },
//   length: 2
// }
// node6 ListNode { data: 1, next: null }
