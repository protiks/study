import  LinkedList from "./LinkedList"; // import the LinkedList class to be tested
import Benchmark from "benchmark"; // import the Benchmark class from the benchmark.js library

const suite = new Benchmark.Suite(); // create a new benchmark suite

// create a test case for the 'add' method
suite.add("LinkedList.add", function () {
  const linkedList = new LinkedList<number>();
  for (let i = 0; i < 1000; i++) {
    linkedList.add(i);
  }
});

// create a test case for the 'remove' method
suite.add("LinkedList.remove", function () {
  const linkedList = new LinkedList<number>();
  for (let i = 0; i < 1000; i++) {
    linkedList.add(i);
  }
  for (let i = 0; i < 1000; i++) {
    linkedList.remove(i);
  }
});

// create a test case for the 'find' method
suite.add("LinkedList.find", function () {
  const linkedList = new LinkedList<number>();
  for (let i = 0; i < 1000; i++) {
    linkedList.add(i);
  }
  linkedList.find(500);
});

// add listeners to log the results of each test
suite
  .on("cycle", function (event: { target: any }) {
    console.log(String(event.target));
  })
  .on("complete", function (this: { filter: (fn: (name: string) => boolean) => any }) {
    console.log("Fastest is " + this.filter((name: string) => name === "fastest").map("name"));
  })
  .run({ async: true });

