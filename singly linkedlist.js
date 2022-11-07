class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
LinkedList operation
    ->add node
    ->insert at begining
    ->insert at end
    ->insert in between
Delete
    ->Delete from beginig
    ->Delete from end
    ->Delete in beteen
*/

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;

    if (this.head == null) {
      this.length = 0;
    } else {
      this.length = 1;
    }
  }

  //Add item to last of the list
  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Insert Begining
  insertAtBegining(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  //Print the list
  print() {
    let current = this.head;

    if (current == null) {
      console.log("List is empty");
      return;
    }
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }

  // Get value from index
  getAt(index) {
    let counter = 0;
    let current = this.head;

    while (current != null) {
      if (counter == index) {
        return current;
      }
      counter++;
      current = current.next;
    }
    return null;
  }

  // Add item at perticular index
  insertAt(value, index) {
    if (this.head == null) {
      this.head = new Node(value);
      return;
    }
    if (index == 0);
    {
      this.insertAtBegining(value);
      return;
    }

    const pervious = this.getAt(index - 1);
    let newNode = new Node(value);
    newNode.next = pervious.next;
    pervious.next = newNode;
  }

  // Delete from begining

  deleteForBegining() {
    if (this.head == null) {
      return;
    }
    this.head = this.head.next;
    return;
  }

  // Delete last item
  deleteLastNode() {
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let current = this.head.next;

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
  }

  // Delete item at perticular index
  deleteAt(index) {
    if (!this.head) {
      return;
    }
    if (index == 0) {
      this.deleteForBegining();
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
    return;
  }
}

let node = new Node(100);
let list = new LinkedList(node);
list.print();
//Insert at last------
// list.append(200);
// console.log("-----------");
// list.print();

//Insert at Begining------
// list.insertAtBegining(50);
// console.log("-----------");
// list.print();

// Get value from index-----
// console.log(list.getAt(0));

//Insert value from index-----
// list.insertAt(55,1)
// list.print();

//Delete from begining-----
// list.deleteForBegining();
// list.print();

// Delete from Last------
// list.deleteLastNode()
// console.log("----");
// list.print()

// Delete value from index-----
// list.deleteAt(1);
// list.print();
