class Node {
    value: number 
    left: Node | null
    right: Node | null
    height: number
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
        this.height = 0
    }
}

class BinaryTree {
    root: Node | null
    constructor() {
        this.root = null
    }


    remove(arg0: number) {
        throw new Error('Method not implemented.')
    }
    contains(arg0: number): any {
        throw new Error('Method not implemented.')
    }

    insert(value: number) {
        let new_node = new Node(value)
        if (this.root === null) {
            this.root = new_node
        } else {
            this.insert_node(this.root, new_node)
        }
    }

    insert_node(root: Node, new_node: Node) {
        if(root.value < new_node.value) {
            if(root.right === null) {
                root.right = new_node
            } else this.insert_node(root.right, new_node)
        } else {
            if(root.left === null) {
                root.left = new_node
            } else this.insert_node(root.left, new_node)
        }
 }
}

const a = new BinaryTree()
a.insert(10)
a.insert(20)
console.log(a)
export default BinaryTree
