

class BinaryTreeNode<T> {
    value: T 
    left: BinaryTreeNode<T> | null
    right: BinaryTreeNode<T> | null
    constructor(value: T) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree<T> {
   root: BinaryTreeNode<T> | null 

   constructor() {
         this.root = null
   }
   insert(value: T){
        const new_node = new BinaryTreeNode(value)
        if(!this.root){
           this.root = new_node 
           return this.root
        }

        let curr = this.root

   }

}

export default BinaryTree;