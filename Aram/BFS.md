# Question #1 Binary Tree Level Orde Traversal
## Time: --- Space:

###### Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const traverse = function(root) {
    result = []

    if (root === null) {
        return result
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        const level = []
        for (i = 0; i < size; i++) {
            current = queue.shift()
            level.push(current.val)
            
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.push(level)
        
    }

    return result
}
```

# Reverse Level Order Traversal
## Time: --- Space: 

###### Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
const traverse = function(root) {
    result = []

    if (root === null) {
        return result
    }
    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        const level = []
        for (i = 0; i < size; i++) {
            current = queue.shift()
            level.push(current.val)
            
            if (current.left !== null) {
                queue.push(current.left)
            }
            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.unshift(level)
        
    }
    return result
}
```
# Question #3 Zigzag Traversal
## Time: --- Space:

###### Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

```JavaScript
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const zigZagTraverse = (root) => {
    let result = []
    let isEven = true

    if (root === null) {
        return result
    }

    const queue = [root]
    while (queue.length > 0) {
        const size = queue.length
        const level = []

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            if (!isEven) {
                level.push(current.val)
            } else {
                level.unshift(current.val)
            }

            if (current.left !== null) {
                queue.push(current.left)
            }

            if (current.right !== null) {
                queue.push(current.right)
            }
        }
        result.push(level)
    }
    return result
}
```