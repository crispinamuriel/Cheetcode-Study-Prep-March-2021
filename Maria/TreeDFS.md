## Binary Tree Path Sum (easy)
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

```Javascript
const has_path = function(root, sum) {
  if (root === null){
    return false
  }else if (root.left === null && root.right === null && sum === root.value){
    return true
  }else{
    return has_path(root.left,sum-root.value) || has_path(root.right,sum-root.value)
  }
};
```
> Time/Space: O(N)/O(N)

