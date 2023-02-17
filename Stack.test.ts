import Stack from './Stack';
//write the code the pass on the first test
describe('Stack', () => {
  let stack: Stack<any>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('push()', () => {
    test('adds an item to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toBe(2);
    })

    test('increases the size of the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.size()).toBe(2);
    });
  });

  describe('pop()', () => {
    test('removes the item from the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.pop()).toBe(2);
    });

    test('decreases the size of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      expect(stack.size()).toBe(1);
    });

    test('returns undefined if the stack is empty', () => {
      expect(stack.pop()).toBeUndefined();
    });
  });

  describe('peek()', () => {
    test('returns the item from the top of the stack', () => {
      stack.push(1);
      stack.push(2);

      expect(stack.peek()).toBe(2);
    });

    test('does not remove the item from the top of the stack', () => {
      stack.push(1);
      stack.push(2);

      stack.peek();

      expect(stack.size()).toBe(2);
    });

    test('returns undefined if the stack is empty', () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe('isEmpty()', () => {
    test('returns true if the stack is empty', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    test('returns false if the stack is not empty', () => {
      stack.push(1);

      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('size()', () => {
    test('returns 0 for an empty stack', () => {
      expect(stack.size()).toBe(0);
    });

    test('returns the number of items in the stack', () => {
      stack.push(1);
      stack.push(2);

      expect(stack.size()).toBe(2);
    });
  });
});
