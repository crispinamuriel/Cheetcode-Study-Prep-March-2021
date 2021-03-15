class Node {
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  const head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node (6)
  
  function reverseList(head){
      let currentNode = head
      let previous = null
      while (currentNode !== null){
        let next = currentNode.next
        currentNode.next = previous
        previous = currentNode
        currentNode = next
      }
    return previous
  }