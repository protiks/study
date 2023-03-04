import Benchmark from "benchmark";
import LinkedList from "./LinkedList";
import BinaryTree from "./Tree";

function runBenchmarks() {
  const suite = new Benchmark.Suite();

  suite.add("LinkedList.add", function () {
    const linkedList = new LinkedList<number>();
    for (let i = 0; i < 1000; i++) {
      linkedList.add(i);
    }
  });

  suite.add("LinkedList.find", function () {
    const linkedList = new LinkedList<number>();
    for (let i = 0; i < 1000; i++) {
      linkedList.add(i);
    }
    linkedList.find(500);
  });

  suite.add("BinaryTree.insert", function () {
    const binary_tree = new BinaryTree<number>();
    for (let i = 0; i < 1000; i++) {
      binary_tree.insert(i);
    }
  });

  suite.add("BinaryTree.search", function () {
    const binary_tree = new BinaryTree<number>();
    for (let i = 0; i < 1000; i++) {
      binary_tree.insert(i);
    }
    binary_tree.search(500);
  });

  // add listeners to log the results of each test
  suite
    .on("cycle", function (event: { target: any }) {
      console.log(String(event.target));
    })
    .on("complete", function (this: Benchmark.Suite) {
      // This line finds the fastest benchmark by filtering the list of benchmarks and comparing the hertz value of each
      // benchmark to the hertz value of the benchmark that has the fastest hertz value. Then, it returns an array of the 
      // names of the benchmarks that have the same hertz value as the fastest benchmark.
      const fastest = this.filter((bench: { hz: any; }) => bench.hz === this.filter("fastest").map("hz")[0]).map("name");
      console.log(`Fastest is ${fastest}`);
    })
    .run({ async: true });
}

runBenchmarks();
