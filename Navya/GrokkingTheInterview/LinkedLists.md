#Linked List Must Knows:

##Implementing a Linked List

```JavaScript
class ListNode {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class SingleLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }
}
```

##Reverse a Linked List

```JavaScript
var reverseList = function(head) {
    let current = head
    let prev = null
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};
```

##Finding the Middle Node of a LinkedList

```JavaScript
function find_middle_of_linked_list(head) {
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
```

##Finding a cycle using fast & slow points

```JavaScript
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```

##a. Finding the length of a cyclic linkedlist

```JavaScript
function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}
```

##b. Finding the start of the cyclic linkedlist

```JavaScript
function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;
  // move pointer2 ahead 'cycle_length' nodes
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}
```
