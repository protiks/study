class LinkedListNode<T> {
    prepend(nodeValue2: { value: number; key: string; }) {
        throw new Error('Method not implemented.');
    }
    value: T; // Declare a property 'value' with type 'any'
    next: LinkedListNode<T> | null; // Declare a property 'next' with type 'LinkedListNode | null'

    constructor(value: any) { // A constructor function that takes in a parameter 'value' of type 'any'
        this.value = value; // Set the 'value' property to the value passed in as argument
        this.next = null; // Set the 'next' property to null
    }
}

class LinkedList<T> {
    head: LinkedListNode<T> | null // Declare a property 'tail' with type 'LinkedListNode | null'
    tail: LinkedListNode<T> | null // Declare a property 'tail' with type 'LinkedListNode | null'
    length: number // Declare a property 'length' with type 'number'

    constructor() { // A constructor function that initializes all properties to null or 0
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(arg0: T) {
        const newValue = new LinkedListNode<T>(arg0);
        this.head = newValue
        if (!this.tail) {
            this.tail = newValue
        }
        this.length = this.length + 1
    }

    toString(callback?: (value: T) => string) {
        return this.toArray().map((node) => callback ? callback(node.value) : `${node.value}`).join(',');
    }
    traverse(fn: (arg0: T) => void){
        let current = this.head
        while(current !== null) {
            fn(current.value)
        }
    }
    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // If there are many nodes in linked list...
        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode?.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length = this.length - 1
        return deletedHead;
    }


    // A method 'add' that takes in a parameter 'value' of type 'any'
    add(value: T) {
        // Create a new LinkedListNode object and assign it to a constant 'node'
        const node = new LinkedListNode<T>(value);

        if (!this.head) { // If there is no head node
            this.head = node; // Set the head to the node
            this.tail = node; // Set the tail to the node
            this.length++; // Increment the length by 1
            return node; // Return the node
        }
        // If there is a tail node
        this.tail!.next = node;
        this.tail = node;
        this.length++;
        return node;
    }

    remove(value: T) {
        if (!this.head) { // Check if there is no head node, return false
            return false;
        }
        if (this.head.value === value) { // Check if the head node's value is equal to the value to be removed
            this.head = this.head.next; // Set the head to the next node
            this.length--; // Decrement the length by 1
            if (this.length === 0) { // If the length is 0
                this.tail = null; // Set the tail to null
            }
            return true; // Return true
        }

        let previous = this.head; // Create a variable 'previous' and set it to the head node
        let current = this.head.next; // Create a variable 'current' and set it to the head's next node
        while (current) { // While there is a current node
            if (current.value === value) { // If the current node's value is equal to the value to be removed
                previous!.next = current.next; // Set the previous node's next property to the current node's next property
                this.length--; // Decrement the length by 1
                if (!current.next) {// If the current node is the tail
                    this.tail = previous; // Set the tail to the previous node
                }
                return true; // Return true
            }
            previous = current; // Set the previous node to the current node
            current = current.next; // Set the current node to the current node's next node
        }
        return false; // Return false if no node with the value is found
    }


    // This is the method to find a value in a linked list
    // It takes in a value of any type as a parameter
    find(value: any) {
        if (!this.head) { // First, check if the linked list has no head node
            return null; // If it doesn't, return null as the value cannot be found
        }
        // If the linked list has a head node, set the current node to be the head node
        let current: LinkedListNode<T> | null = this.head;
        while (current) { // Use a while loop to traverse the linked list
            if (current.value === value) { // Check if the current node's value is equal to the target value 
                return current; // If it is, return the node as the target value has been found
            }
            // If the current node's value is not equal to the target value,
            // set the current node to be the next node in the linked list
            current = current.next
        }
        // If the end of the linked list has been reached and the target value
        // has not been found, return null as the value cannot be found
        return null;
    }

    clear() {
        this.head = null; // set the head of the linked list to `null`
        this.tail = null; // set the tail of the linked list to `null`
        this.length = 0; // set the length of the linked list to `0`
    }

    forEach(callback: (node: LinkedListNode<T>) => void) {
        let current = this.head; // initialize a `current` variable with the head of the linked list
        while (current) { // loop through each node in the linked list
            callback(current); // call the callback function with the current node as an argument
            current = current.next; // move the current node reference to the next node
        }
    }

    toArray() {
        const array: any[] = []; // initialize an array to store the values of each node
        let current = this.head; // initialize a `current` variable with the head of the linked list
        while (current) { // loop through each node in the linked list
            array.push(current.value); // push the value of the current node to the array
            current = current.next; // move the current node reference to the next node
        }
        return array; // return the array
    }
}

export default LinkedList;
