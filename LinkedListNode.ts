class LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  export type LinkedListNodeType = LinkedListNode<any> ;
  export default LinkedListNode;