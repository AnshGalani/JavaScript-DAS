class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/* 
Operation
Insert
->Start / Begining
->End
->In Between

Delete
->Strat/Begining
->End
->In Between

Size

*/

class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;

    if (head == null) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }
  print() {
    let current = this.head;

    while (current != null) {
      // console.log(
      //     `${current.prev==null ? null : current.prev.value} <- ${current.value} -> ${current.next==null ? null : current.next.value}`
      //     );
      console.log(current.value);
      current = current.next;
    }
  }

  //add node to last
  append(value) {
    this.length++;
    let newNode = new Node(value);

    if (this.head == null) {
      this.head == newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  }

  // Insert item at perticular index
  insertAt(position, value) {
    let newNode = new Node(value);
    if (position < 0) {
      console.log("Please Give Positive Position");
      return;
    }
    if (position == 0) {
      if (this.head == null) {
        this.head.newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position == this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;

      current.prev = newNode;
      newNode.prev = previous;
    }
    this.length++;
  }

  //  remove item at perticular index
  removeAt(position) {
    if (position < 0) {
      console.log("Please give positive position");
      return;
    }
    let current;
    if (position == 0) {
      this.head = this.head.next;
      if (this.length == 1) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if (position == this.length - 1) {
      let current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      let index = 0;
      let previous;
      current = this.head;

      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
    }

    this.length--;
    return current.value;
  }

  // Get Value From index
  getAt(index) {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if (count == index) {
        return current;
      }
      count++;
      current = current.next;
    }
    return null;
  }
  
  //Get index from element
  indexof(element) {
    let current = this.head;
    let index = -1;

    while (current != null) {
      if (element == current.value) {
        return ++index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isPresent(element) {
    return this.indexof(element) !== -1;
  }
  delete(element) {
    return this.removeAt(this.indexof(element));
  }
  deleteHead() {
    this.removeAt(0);
  }
  deleteTail() {
    this.removeAt(this.length - 1);
  }
  removeAfter(node) {
    node.next = node.next.next;
    node.next.prev = node.prev;
  }
  size() {
    return this.length;
  }
}

let node = new Node(5);
// let node2=new Node(6);
// node.next=node2;
// node2.prev=node;
// console.log(node);

let list = new DoublyLinkedList(node);

// add node last
list.append(6).append(7).append(8);
// list.print();
// console.log("------------");

// Insert item at perticular inde
// list.insertAt(2,2);
// list.print();
// console.log("-----");

// Delete item at perticular inde
// list.removeAt(3);
// list.print();

// Get Value from index
//console.log(list.getAt(1));

// Get index from value
// console.log(list.indexof(6));
