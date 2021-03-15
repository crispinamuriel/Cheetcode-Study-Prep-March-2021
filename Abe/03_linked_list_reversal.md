## Reverse a linked list

```python
def reverse(head):
  previous, current, next = None, head, None

  while current is not None:
    next = current.next  
    current.next = previous  
    previous = current  
    current = next  
  return previous
```