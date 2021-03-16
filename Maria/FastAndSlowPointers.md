## Linked List Cycle (EASY) 
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not

```Javascript
function hasCycle(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}
```
>Time/Space:O(N)/O(1)