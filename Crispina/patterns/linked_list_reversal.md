# Linked List Reversal Pattern

## leetcode:

```
function reverseLL(head) {
  let prev = null;    // keep a previous to build new LL
  let current = head;  // keep a currentNode

  // traverse through LL
  while(current) {
    let nextTemp = current.next; // keep track of our severed LL

    // process list
    current.next = prev;  // set the new tail (point next to what our previous was)

    prev = current;  // move previous up current in order to move to next node

    current = nextTemp; // move current to the next node to process
  }

  return prev;
};
```
