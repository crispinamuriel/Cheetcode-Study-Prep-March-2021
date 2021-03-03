class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null
        this.length = 0
    }

    addToTail(item) {
        let node = new ListNode(item)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            let temp = this.tail
            this.tail = node
            node.prev = temp
            temp.next = node
        }
        this.length++
        return this
    }
    removeFromTail() {
        if (!this.tail) return undefined;
        let temp = this.head;
        if (this.length === 1) {
          this.tail = null;
          this.head = null;
        } else {
          this.head = temp.prev;
          this.head.next = null;
          temp.prev = null;
        }
        this.length--;
        return this;
      }
      forEach(callbackFunc) {
        let current = this.head;
        while (!current) {
          callbackFunc(current);
          current = current.next;
        }
        return true;
      }
}