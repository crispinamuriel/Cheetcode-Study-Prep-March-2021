## Heaps
Insertion -> O(logN)
Removal -> O(logN)


## Max Heap find parent, left, and right
```Javascript
parent = Math.floor((idx - 1)/2);
left = (idx * 2) + 1;
left = (idx * 2) + 2;
```

## Priority Queue
```Javascript
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const pq = new PriorityQueue();
pq.push(15);
pq.push(12);
pq.push(50);
pq.push(7);
pq.push(40);
pq.push(22);

while(!pq.isEmpty()) {
  console.log(pq.pop());
}
```

## Top 'K' Numbers (easy)
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

```Javascript
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_k_largest_numbers(nums, k) {
  const minHeap = new Heap([], null, ((a, b) => b - a));
  // put first 'K' numbers in the min heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  // the heap has the top 'K' numbers, return them in a list
  return minHeap.toArray();
}
```

## Kth Smallest Number (easy)
Given an unsorted array of numbers, find Kth smallest number in it.

```Javascript
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_Kth_smallest_number(nums, k) {
  let maxHeap = new Heap();

  for (i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }
  // go through the remaining numbers of the array, if the number from the array is smaller than the
  // top(biggest) number of the heap, remove the top number from heap and add the number from array
  for (i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }
  // the root of the heap has the Kth smallest number
  return maxHeap.peek();
}
```

## 'K' Closest Points to the Origin (easy)
Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.

```Javascript

```