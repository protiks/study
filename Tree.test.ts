import Tree from './Tree';

describe('Tree', () => {
    it('should return null when a new tree.root is created', () => {
        let tree = new Tree();
        expect(tree.root).toBeNull()
    })
    it('should insert a value to the root', () => {
        let tree = new Tree()
        tree.insert('4')
        expect(tree.root?.value).toBe('4')
    })
})