class LinkedList {
  constuctor() {
    this.head = null;
    this.tail = null;
  }

  // Set head
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this
  }
  // Set tail
  setTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this
  }
}

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const list = new LinkedList();
list.setHead( new Node(2))
list.setTail( new Node(3))
list.setTail( new Node(4))
list.setTail( new Node(8))

const list2 = new LinkedList();
list2.setHead( new Node(1))
list2.setTail( new Node(5))
list2.setTail( new Node(6))

// ------------------------------------------------------------

function mergeLinkedLists(list1, list2) {
  //
  const dummyHead = new Node(-1);
	let prev = dummyHead
  let node1 = list1.head;
  let node2 = list2.head;

	while (node1 !== null && node2 !== null) {
		if (node1.val <= node2.val) {
			prev.next = node1
			node1 = node1.next
		} else {
			prev.next = node2
			node2 = node2.next
		}
		prev = prev.next
	}
	prev.next = node1 === null ? node2 : node1

  const newList = new (LinkedList);
  newList.head = dummyHead.next;

	return newList;
}

// console.log(mergeLinkedLists(list, list2));
// mergeLinkedLists(list, list2)

// Happy Number

function findHappyNumber(num) {
  // create fast and slow pointers
  let fast = findSqSum(findSqSum(num));
  let slow = findSqSum(num);

  while (fast !== slow) {
    fast = findSqSum(findSqSum(fast));
    slow = findSqSum(slow);
  }

  return fast === 1
}

function findSqSum(num) {
  let sum = 0;
  while ((num > 0)) {
    digit = num % 10;
    sum += (digit * digit);
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(findHappyNumber(23));
// console.log(findHappyNumber(12));


// Palindrome LinkedList

// Time: O(N) Space: O(1)

// Rearrange a Linked List

// Time O(N) Space: O(1)

const reorder = function(head) {
  // Find the middle node of the list
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the middle of the LL to the end, store new head
  let second = reverseNodes(slow);
  let first = head;
  // Iterate through the LL's, inserting all the values after the head
  while (second !== null && first !== null) {
    let firstNext = first.next;
    let secondNext = second.next;
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }

  return head;
}

function reverseNodes(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// REVERSE A LINKED LIST

const reverse = function(head) {
  if (!head.next) return head;
  // let's keep a ref to the prev node
  let prev = null;
  while (head) {
    // head.next is going to be the previous node
    let temp = head.next;
    // the reverse: head.next points to prev
    head.next = prev;
    // head is the current node we're looking at - make it prev
    prev = head;
    // look at temp next
    head = temp;
  }
  return prev;
};

// Reverse A Sub-Linked List

// LL: 1 -> 2 -> 3 -> 4 -> 5

const reverse_sub_list = function(head, p, q) {
  let prev = null // this is going to be node(1)
  let cur = head
  let position = 1
  // Iterate to position p
  while (position < p) {
    prev = cur
    cur = cur.next
    position++
  }
  // Set up our temp vars
  let tempHead = cur // 2
  let tempPrev = null
  while (position < q) {
    let temp = tempHead.next // 3
    tempHead.next = tempPrev //null
    tempPrev = tempHead // 2
    tempHead = temp // 3
    position++
  }
  // Connect it all together
  if (prev !== null) {
    prev.next = tempHead // connects 1 to 4
  } else {
    head = tempHead;
  }
  let tempTail = tempHead.next //store the 5 to tempTail
  tempHead.next = tempPrev // connect 4 to 3
  cur.next = tempTail // Connect 2 to 5

  return head;
};



const backspaceCompare = function(S, T) {
  return backspaceChars(S) === backspaceChars(T)
};

const backspaceChars = function(str) {
  let i = str.length-1;
  while (i >= 0) {
      if (str[i+1] === '#' && str[i] !== '#') {
        str = str.slice(0, i) + str.slice(i+2, str.length1)
      }
      i--;
  }
  // First char is backspace
  if (str[0] === '#') return str.slice(1)
  return str;
}

// console.log(backspaceCompare('ab#c', 'ad#c')) // true
// console.log(backspaceCompare('ab##', 'c#d#')) // true
// console.log(backspaceCompare('a##c', '#a#c')) // true
// console.log(backspaceCompare('a#c', '#b')) // false

const reverseBetween = function(head, left, right) {
  let prev = null;
  let curr = head;
  while (curr !== left) {
      prev = curr;
      curr = curr.next;
  }
  let segmentTail = curr;
  let next = null;
  while (curr !== right) {
      let temp = curr.next;
      curr.next = next;
      next = curr;
      curr = temp;
  }
  segmentTail.next = curr.next;
  curr.next = next;
  prev.next = curr;
  return head;
};

const LL_HEAD = new Node(1)
LL_HEAD.next = new Node(2)
LL_HEAD.next.next = new Node(3)
LL_HEAD.next.next.next = new Node(4)
LL_HEAD.next.next.next.next = new Node(5)

// const nodes = (reverseBetween(LL_HEAD, LL_HEAD.next, LL_HEAD.next.next.next))

// console.log(nodes.val, nodes.next.val, nodes.next.next.val, nodes.next.next.next.val, nodes.next.next.next.next.val)

function reverseWordsInStr(str) {

}

function reverseStr(str, begin, end) {
  str = str.split('')
  for (i = 0; i < (end - begin) / 2; i++) {
    const left = begin+i,
      right = end-i-1;
    const temp = str[left];
    console.log(str[left], str[right])
    str[left] = str[right];
    str[right] = temp;
    console.log(str[left], str[right])
  }
  str = str.join('')
  return str
}

const str = 'the sky is blue'
// console.log(reverseWordsInStr(str));
console.log(reverseStr('reverse', 0, 7))
console.log(reverseStr('andersonpaak', 2, 8))

// Asteroid Collision, Basic Calculator II, Valid Parenth

// ASTEROID COLLISION
var asteroidCollision = function(asteroids) {
  let stack = []
  for (let i = 0; i< asteroids.length; i++){
      let element = asteroids[i]
      //check collision
      let elemInStack = stack[stack.length-1]
      if (elemInStack > 0 && element < 0){
          //which kind of collision?
          let sum = element + elemInStack
          if (sum === 0 || sum < 0 ){
              stack.pop()
          }
          if (sum < 0){
              i--
          }
      } else {
          stack.push(element)
      }
  }
  return stack
};
