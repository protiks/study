
class ListNode {
    value: string;
    next: ListNode | null;
    constructor(value: string, next: ListNode | null) {
        this.value = value;
        this.next = next;
    }
    setValue(value: string) {
        this.value = value
        return this;
    }
}

const a = new ListNode('1', null)
