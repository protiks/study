import Queue from './Queue';

describe('Queue', () => {
  let queue: Queue<any>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('initially empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(3);
  });

  test('dequeue elements', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });

  test('peek at the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(2);
  });

  test('clear the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  });

  test('dequeue from an empty queue', () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test('peek at an empty queue', () => {
    expect(queue.peek()).toBeUndefined();
  });

  test('enqueue and dequeue with generic type', () => {
    queue.enqueue("Hello");
    queue.enqueue("world");
    expect(queue.dequeue()).toBe("Hello");
    expect(queue.dequeue()).toBe("world");
    expect(queue.isEmpty()).toBe(true);
  });

  test('enqueue and dequeue a mix of types', () => {
    queue.enqueue("Hello");
    queue.enqueue(123);
    queue.enqueue(false);
    expect(queue.dequeue()).toBe("Hello");
    expect(queue.dequeue()).toBe(123);
    expect(queue.dequeue()).toBe(false);
    expect(queue.isEmpty()).toBe(true);
  });

  test('queue with a large number of elements', () => {
    const numElements = 100000;
    for (let i = 0; i < numElements; i++) {
      queue.enqueue(i);
    }
    expect(queue.size()).toBe(numElements);
    for (let i = 0; i < numElements; i++) {
      expect(queue.dequeue()).toBe(i);
    }
    expect(queue.isEmpty()).toBe(true);
  });
});
