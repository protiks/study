import LinkedList from "./LinkedList";

class Stack<T> {
    data: LinkedList<T>
    constructor() {
        this.data = new LinkedList()
    }
    isEmpty(): any {
        return !this.data.head
    }
    pop(): any {
    const deletedHead = this.data.deleteHead()
    return deletedHead ? deletedHead.value : undefined 
    }
    size(): any {
        return this.data?.length
    }
    peek(): any {
        return this.data.head ? this.data.head.value : undefined;
    }

    push(item: T): void {
        this.data.prepend(item);
      }
}

export default Stack