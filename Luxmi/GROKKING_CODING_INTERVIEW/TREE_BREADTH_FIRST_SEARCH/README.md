# Tree Breadth First Search problems

## Binary level order traversal

### Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

```python

result = []

if root is None:
    return []

queue = deque()
queue.append(root)
while(queue):
    levelsize = len(queue)
    currentlevel = []
    for _ in range(levelsize):
        currentnode = queue.popleft()
        currentlevel.append(currentnode.val)
        if currentnode.left:
            queue.append(currentnode.left)
        if currentnode.right:
            queue.append(currentnode.right)
    result.append(currentlevel)
return result

```

## Reverse Level Order Traversal

### Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

```python

result = []

if root is None:
    return []

queue = deque()
queue.append(root)
while(queue):
    levelsize = len(queue)
    currentlevel = []
    for _ in range(levelsize):
        currentnode = queue.popleft()
        currentlevel.append(currentnode.val)
        if currentnode.left:
            queue.append(currentnode.left)
        if currentnode.right:
            queue.append(currentnode.right)
    result.append(currentlevel)
    result.reverse()
    return result

```

