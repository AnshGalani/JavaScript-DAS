class Stack {
  constructor(capacity) {
    this.top = -1;
    this.arr = [];
    this.capacity = capacity;
  }

  push(item) {
    if (this.top == this.capacity - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.top++;
    this.arr[this.top] = item;
  }

  pop() {
    if (this.top == -1) {
      console.log("Stack is Empty");
      return;
    }
    let result = this.arr[this.top];
    this.top--;
    return result;
  }
  // Read the item in Stack
  peek() {
    if (this.top == -1) {
      console.log("Stack is Empty");
      return;
    }
    return this.arr[this.top];
  }

  size() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top == -1;
  }
}

let stack = new Stack(3);
stack.push(5);
stack.push(10);
stack.push(20);

console.log(stack.pop()); //20
console.log(stack.size()); //2
console.log(stack.peek()); //10
console.log(stack.isEmpty()); //false

// // program to implement stack data structure
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // add element to the stack
//     add(element) {
//         return this.items.push(element);
//     }

//     // remove element from the stack
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }

//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     // check if the stack is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }

//     // the size of the stack
//     size(){
//         return this.items.length;
//     }

//     // empty the stack
//     clear(){
//         this.items = [];
//     }
// }

// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);
