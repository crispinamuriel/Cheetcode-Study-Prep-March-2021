LINKED LISTS
## Question #1 Reverse a Linked-List
``` Javascript
const reverseList = (head) =>  {
  let current = head;
  let previous = null;
  let next = null;

  while (current !== null){
    next =  current.next;
    current.next = previous;
    previous = current;
    current= next;
  }
  return previous;
}
```
## Question #2 Reverse a Sub-List (medium)
``` Javascript
const reverseSubList = (head, p, q) =>  {
  if (p === q) return head;

  let current= head;
  let previous = null;
  let i=0;

  while (current !==null && i < p - 1){
    previous= current;
    current= current.next
    i++;
  }

  let lastNodeOfFirstPart= previous;
  let lastNodeOfSubList = current;
  let next = null;

  i=0
  while(current !== null && i < q - p){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++
  }

  if (lastNodeOfFirstPart !== null) {
    lastNodeOfFirstPart.next= previous;
  } else {
    head = previous;
  }
  lastNodeOfFirstPart.next= current;
  return head;
}
```
## Question #3 Reverse every K-element Sub-list (medium)
``` Javascript
const reverseSubList = (head, k) =>  {
  if(k<=1 || head === null){
    return head;
  }

  let current = head;
  let previous = null;
  while(true){
    const lastNodeOfPreviousPart = previous;
    const lastNodeOfSubList = current;

    let next = null;
    let i=0;

    while(current !== null && i<k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++
    }

    if(lastNodeOfPreviousPart !== null){
      lastNodeOfPreviousPart.next = previous;
    } else {
      head = previous;
    }

    lastNodeOfSubList.next = current;

    if(current === null){
      break;
    }

    previous = lastNodeOfSubList;
  }
  return head;
}
```
