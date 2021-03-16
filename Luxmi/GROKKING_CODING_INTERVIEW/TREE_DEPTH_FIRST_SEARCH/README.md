# Depth First Search

## Binary Tree Path Sum
### Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.


```python
    def hasPathSum(self, root, targetSum):
        """
        :type root: TreeNode
        :type targetSum: int
        :rtype: bool
        """

        if root is None:
            return False
        print(root.val)
        if root.left is None and root.right is None and (targetSum - root.val == 0):
            return True
        else:
            return (self.hasPathSum(root.left, targetSum - root.val)) or (self.hasPathSum(root.right, targetSum - root.val))

```


## All Paths for a Sum 
### Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.


```python
def find_paths(root, sum):
    allPaths = []
    # TODO: Write your code here
    find_paths_child(root, sum, [], allPaths)

   
    return allPaths

def find_paths_child(currentnode, target_sum, currentpath, allPaths):

    if currentnode is None:
        return

    currentpath.append(currentnode.val)

    if currentnode.val == target_sum and currentnode.left is None and currentnode.right is None:
        allPaths.append(list(currentpath))
    else:
        find_paths_child(currentnode.left, target_sum - currentnode.val, currentpath, allPaths)
        find_paths_child(currentnode.right, target_sum - currentnode.val, currentpath, allPaths)
    del currentpath[-1]

    return allPaths

```