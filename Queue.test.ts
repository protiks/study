import Queue from './Queue';

describe('Queue', () => {
  let queue: { data: any[]; enqueue: (arg0: number) => void; dequeue: () => any; peek: () => any; size: () => any; isEmpty: () => any; };

  beforeEach(() => {
    queue = new Queue();
  });

  test('initializes with an empty array', () => {
    // const queue = new Queue();
    expect(queue.data).toEqual([]);
  });

  test('enqueues an item', () => {
    queue.enqueue(1)
  });

  test('dequeues an item', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    const item = queue.dequeue();
    expect(item).toBe(1);
    expect(queue.data).toEqual([2])
  });

  test('returns undefined when dequeueing from an empty queue', () => {
    const item = queue.dequeue();
    expect(item).toBeUndefined();
  });

  test('returns the item at the front of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const item = queue.peek();
    expect(item).toBe(1);
    expect(queue.data).toEqual([1, 2]);
  });

  test('returns undefined when peeking at an empty queue', () => {
    const item = queue.peek();
    expect(item).toBeUndefined();
  });

  test('returns the correct size of the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  test('returns true when the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('returns false when the queue is not empty', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
