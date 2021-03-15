const levelOrder = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;
    let currLevelVals = [];
    while (count < length) {
      const currNode = queue.shift();
      currLevelVals.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
      count++;
    }
    result.push(currLevelVals);
  }
  return result;
};
