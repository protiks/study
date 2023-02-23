import Tree from './Tree';

describe('Tree', () => {
    let tree: Tree<number>
    beforeEach(() => {
        tree = new Tree()
    })
    test('creates an empty tree', () => {
        expect(tree.root).toBeNull()
    })
    test('add a value to the root node', () => {
        tree.root = 5
        expect(tree.root).toBe(5)

    })
});