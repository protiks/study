

class BinaryTreeNode<T> {
    item: T
    parent: T | null
    left: BinaryTreeNode<T> | null
    right: BinaryTreeNode<T> | null
    constructor(value: T) {
        this.item = value
        this.left = null
        this.right = null
        this.parent = null
    }
}

class BinaryTree<T> {
    root: BinaryTreeNode<T> | null

    constructor() {
        this.root = null
    }
    insert(value: T) {
        const new_node = new BinaryTreeNode(value)

        if (!this.root) {
            this.root = new_node
            return
        }

        let curr = this.root

        while (true) {
            if (value = curr.item) {
                return
            }
            if (value < curr.item) {
                if(!curr.left) {
                    curr.left = new_node
                    return
                }
                curr = curr.left
            } else {
                if (!curr.right) {
                    curr.right = new_node 
                    return
                }
                curr = curr.right
            }
        }

    }
    search(value: T) {

        let current = this.root

        while(current) {

            if( value === current.item) {
                return current
            } 

            if (value < current.item) {
                    current = current.left
            } else {
                current = current.right
            }
            return null
        }
    }

}

export default BinaryTree;