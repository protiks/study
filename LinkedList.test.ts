import LinkedList from './LinkedList';

describe('linkedList', () => {
    let list: LinkedList<number>
    beforeEach(() => {
        list = new LinkedList();
    });

    describe('#add()', () => {
        it('should add an element to the linked list', () => {
            list.add(10);
            expect(list.length).toBe(1);
            expect(list.head?.value).toBe(10);
            expect(list.tail?.value).toBe(10);
        });
    });

    describe('#remove()', () => {
        it('should remove an element from the linked list', () => {
            list.add(10);
            list.add(20);
            list.remove(10);
            expect(list.length).toBe(1);
            expect(list.head?.value).toBe(20);
            expect(list.tail?.value).toBe(20);
        });

        it('should remove head node when removing first element', () => {
            list.add(10);
            list.add(20);
            list.remove(20);
            expect(list.length).toBe(1);
            expect(list.head?.value).toBe(10);
            expect(list.tail?.value).toBe(10);
        });

        it('should return false when trying to remove an element that does not exist', () => {
            list.add(10);
            const result = list.remove(20);
            expect(result).toBe(false);
            expect(list.length).toBe(1);
            expect(list.head?.value).toBe(10);
            expect(list.tail?.value).toBe(10);
        });

        it('should return true and remove the only element in the list', () => {
            list.add(10);
            const result = list.remove(10);
            expect(result).toBe(true);
            expect(list.length).toBe(0);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });
    });

    describe('#find()', () => {
        it('should find an element in the linked list', () => {
            list.add(10);
            list.add(20);
            const node = list.find(20);
            expect(node).toBeDefined();
            expect(node!.value).toBe(20);
        });

        it('should return null when trying to find an element that does not exist', () => {
            list.add(10);
            const node = list.find(20);
            expect(node).toBeNull();
        });
    });

    describe('#clear()', () => {
        it('should clear the linked list', () => {
            list.add(10);
            list.add(20);
            list.clear();
            expect(list.length).toBe(0);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });

        it('should not throw an error when clearing an empty list', () => {
            list.clear();
            expect(list.length).toBe(0);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });
    });

    describe('#forEach()', () => {
        it('should iterate over each element in the linked list', () => {
            list.add(10);
            list.add(20);
            list.add(30);
            const values: number[] = [];
            list.forEach(node => {
                values.push(node.value);
            });
            expect(values).toEqual([10, 20, 30]);
        });
    });

    describe('#toArray()', () => {
        it('should return an array representation of the linked list', () => {
            list.add(10);
            list.add(20);
            list.add(30);
            const array = list.toArray();
            expect(array).toEqual([10, 20, 30]);
        });
    });


    describe('LinkedList', () => {
        it('should create empty linked list', () => {
            const linkedList = new LinkedList();
            expect(linkedList.toString()).toBe('');
        });
    })
});

