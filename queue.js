class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.size = 0;
    this.arr = [];
  }

  isFull() {
    return this.size == this.capacity;
  }

  isEmpty() {
    return this.size == 0;
  }

  enqueue(item) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return;
    }

    let rear = (this.front + this.size - 1) % this.capacity;
    rear = (rear + 1) % this.capacity;
    this.arr[rear] = item;
    this.size = this.size + 1;
    console.log(item + "Equed to Queue");
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }

    let item = this.arr[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size = this.size - 1;
    return item;
  }
  //Peek
  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    return this.arr[this.front];
  }

  getRear() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }
    let rear = (this.front + this.size - 1) % this.capacity;
    return this.arr[rear];
  }
}

let queue = new Queue(4);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.dequeue() + "Dequed from queue");
console.log("Front item is " + queue.getFront());
console.log("Rear item is " + queue.getRear());
