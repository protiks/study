import { LinkedListNodeType } from "./LinkedListNode";

class LinkedListNode {
  value: any;
  next: LinkedListNode | null;

  constructor(value: any) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  length: number;

  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  add(value: any) {
      const node = new LinkedListNode(value);
      if (!this.head) {
          this.head = node;
          this.tail = node;
          this.length++;
          return node;
      }
      this.tail!.next = node;
      this.tail = node;
      this.length++;
      return node;
  }

  remove(value: any) {
      if (!this.head) {
          return false;
      }
      if (this.head.value === value) {
          this.head = this.head.next;
          this.length--;
          if (this.length === 0) {
              this.tail = null;
          }
          return true;
      }
      let previous = this.head;
      let current = this.head.next;
      while (current) {
          if (current.value === value) {
              previous!.next = current.next;
              this.length--;
              if (!current.next) {
                  this.tail = previous;
              }
              return true;
          }
          previous = current;
          current = current.next;
      }
      return false;
  }

  find(value: any) {
      if (!this.head) {
          return null;
      }
      let current: LinkedListNode | null = this.head;
      while (current) {
          if (current.value === value) {
              return current;
          }
          current = current.next
        }
      return null;
  }

  clear() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  forEach(callback: (node: LinkedListNode) => void) {
      let current = this.head;
      while (current) {
          callback(current);
          current = current.next;
      }
  }

  toArray() {
      const array: any[] = [];
      let current = this.head;
      while (current) {
          array.push(current.value);
          current = current.next;
      }
      return array;
  }
}

export default LinkedList;
