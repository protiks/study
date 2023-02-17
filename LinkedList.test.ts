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

    describe('LinkedList', () => {
        let list: LinkedList<number>

        beforeEach(() => {
            list = new LinkedList();
        });

        test('it can add to the end of the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.toArray()).toEqual([1, 2, 3]);
        });

        test('it can prepend to the beginning of the list', () => {
            list.prepend(1);
            list.prepend(2);
            list.prepend(3);

            expect(list.toArray()).toEqual([3, 2, 1]);
        });

        test('it can remove from the beginning of the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            list.shift();

            expect(list.toArray()).toEqual([2, 3]);
        });

        test('it can remove from the end of the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            list.pop();

            expect(list.toArray()).toEqual([1, 2]);
        });

        test('it can insert at a specific position in the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            list.insert(1, 4);

            expect(list.toArray()).toEqual([1, 4, 2, 3]);
        });

        test('it can get the value at a specific position in the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.get(1)).toEqual(2);
        });

        test('it returns null if trying to get a value at an out of bounds position', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.get(5)).toBeNull();
        });

        test('it can delete a node with a specific value from the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            list.remove(2);

            expect(list.toArray()).toEqual([1, 3]);
        });

        test('it returns null if trying to delete a value that does not exist in the list', () => {
            list.add(1);
            list.add(2);
            list.add(3);

            expect(list.remove(5)).toBeNull();
        });

        test('it can handle an empty list', () => {
            expect(list.toArray()).toEqual([]);
            expect(list.pop()).toBeNull();
            expect(list.shift()).toBeNull();
            expect(list.get(0)).toBeNull();
            expect(list.delete(1)).toBeNull();
        });
    });

});

