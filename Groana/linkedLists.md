## Determine if a Linked List has a cycle
Using Fast and Slow Pointers

```Javascript
const has_cycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```


## Question #7a Reverse a Linked List
Zero To Mastery

```Javascript
const reverseLL = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
```

## Question #7b M, N Reversals (Medium)
Zero To Mastery

```Javascript

```

## Question #8 Merge Multi Level Singly Linked List (Medium)
Zero To Mastery
```Javascript

```