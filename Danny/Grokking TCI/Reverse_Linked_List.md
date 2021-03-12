# Reverse A Linked List

## Template

```js
const reverse = function(head) {
  if (!head.next) return head;
  // let's keep a ref to the prev node
  let prev = null;
  while (head) {
    // head.next is going to be the previous node
    let temp = head.next;
    // the reverse: head.next points to prev
    head.next = prev;
    // head is the current node we're looking at - make it prev
    prev = head;
    // look at temp next
    head = temp;
  }
  return prev;
};
```

## Reverse Sub List
```js
const reverse_sub_list = function(head, p, q) {
  let prev = null // this is going to be node(1)
  let cur = head
  let position = 1
  // Iterate to position p
  while (position < p) {
    prev = cur
    cur = cur.next
    position++
  }
  // Set up our temp vars
  let tempHead = cur // 2
  let tempPrev = null
  while (position < q) {
    let temp = tempHead.next // 3
    tempHead.next = tempPrev //null
    tempPrev = tempHead // 2
    tempHead = temp // 3
    position++
  }
  // Connect it all together
  if (prev !== null) {
    prev.next = tempHead // connects 1 to 4
  } else {
    head = tempHead;
  }
  let tempTail = tempHead.next //store the 5 to tempTail
  tempHead.next = tempPrev // connect 4 to 3
  cur.next = tempTail // Connect 2 to 5

  return head;
};
```

## Reverse Between
```js
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
