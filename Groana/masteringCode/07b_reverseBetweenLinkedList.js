class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const reverseBetween = (head, m, n) => {
  let position = 1;
  let current = head;
  let start = head;

  while (position < m) {
    start = current; // why??
    // advance current
    current = current.next;
    // increase position
    position++;
  }
  let newList = null; // how is this NOT increasing our space complexity?
  let tail = current; // why?

  while (current >= m && current <= n) {
    const next = current.next;
    current.next = newList;
    newList = current;
    current = next;
    position++;
  }

  start.next = newList;
  tail.next = current;

  return (m > 1) ? head : newList;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
console.log(reverseBetween(head, 3, 5));
