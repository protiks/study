class TreeNote<T> {
    value: T
    children: T[]
    constructor(value: T){
        this.value = value
        this.children = [];
    }
}
class Tree<T> {
    root: T | null
    constructor() {
        this.root = null
    }
    size(): number {
        return 0
    }
}

export default Tree;