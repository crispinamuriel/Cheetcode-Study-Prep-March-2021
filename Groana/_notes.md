
.shift() => removes the first element of an array
.unshift(param) => adds an element to the beginning of an array;

Number() => turns a string into a number

.slice(1) => removes the first element of a string, the second optional parameter is the ending index BEFORE which to end extraction

## LinkedList Class
A Linked List with a cycle
```Javascript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
console.log(`LinkedList has cycle: ${has_cycle(head)}`); // no cycle
head.next.next.next.next.next.next = head.next.next; // creating a cycle
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
head.next.next.next.next.next.next = head.next.next.next; 
console.log(`LinkedList has cycle: ${has_cycle(head)}`);
```

## Tree Class
```Javascript
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
```

## Heap
```Javascript
const Heap = require('./collections/heap'); //http://www.collectionsjs.com
```

```Javascript
let parent = Math.floor((idx - 1)/2);
let leftChild = (idx * 2) + 1;
let rightChild = (idx * 2) + 2;
```

```Javascript
const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while(!pq.isEmpty()) {
  console.log(pq.pop());
}
```

