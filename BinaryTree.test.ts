import BinaryTree from './BinaryTree';

describe('Tree', () => {
    it('should return null when a new tree.root is created', () => {
        let tree = new BinaryTree();
        expect(tree.root?.value).toBeUndefined()
    })
    it('should add 8', () => {
        let tree = new BinaryTree();
        tree.insert(8)
        expect(tree.root?.value).toBe(8)
    })
})

describe('BinarySearchTree', () => {
  it('should create binary search tree', () => {
    const bst = new BinaryTree();
    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root?.left).toBeUndefined()
    expect(bst.root?.right).toBeUndefined();
  });

  it('should insert values', () => {
    const bst = new BinaryTree();
    const insertedNode1 = bst.insert(10);
    const insertedNode2 = bst.insert(20);
    bst.insert(5);

    // expect(bst.toString()).toBe('5,10,20');
    expect(insertedNode1).toBe(10);
    expect(insertedNode2).toBe(20);
  });

  it('should check if value exists', () => {
    const bst = new BinaryTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBe(true);
    expect(bst.contains(40)).toBe(false);
  });

  it('should remove nodes', () => {
    const bst = new BinaryTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe('5,10,20');

    const removed1 = bst.remove(5);
    expect(bst.toString()).toBe('10,20');
    expect(removed1).toBe(true);

    const removed2 = bst.remove(20);
    expect(bst.toString()).toBe('10');
    expect(removed2).toBe(true);
  });

  it('should be traversed to sorted array', () => {
    const bst = new BinaryTree();

    bst.insert(10);
    bst.insert(-10);
    bst.insert(20);
    bst.insert(-20);
    bst.insert(25);
    bst.insert(6);

    expect(bst.toString()).toBe('-20,-10,6,10,20,25');
    expect(bst.root?.height).toBe(2);

    bst.insert(4);

    expect(bst.toString()).toBe('-20,-10,4,6,10,20,25');
    expect(bst.root?.height).toBe(3);
  });
});