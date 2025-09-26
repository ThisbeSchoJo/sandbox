// Basic examples to get you started with different concepts

import { delay, generateId, formatDate } from '../utils/helpers';

// Example 1: Async/Await patterns
export const asyncExample = async (): Promise<string> => {
  console.log('Starting async operation...');
  await delay(1000);
  console.log('Async operation completed!');
  return 'Success!';
};

// Example 2: Array methods and functional programming
export const arrayExamples = (): void => {
  const numbers = [1, 2, 3, 4, 5];
  
  // Map
  const doubled = numbers.map(n => n * 2);
  console.log('Doubled:', doubled);
  
  // Filter
  const evens = numbers.filter(n => n % 2 === 0);
  console.log('Evens:', evens);
  
  // Reduce
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  console.log('Sum:', sum);
};

// Example 3: Object manipulation
export const objectExamples = (): void => {
  const user = {
    id: generateId(),
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date()
  };
  
  // Destructuring
  const { name, email } = user;
  console.log('Name:', name, 'Email:', email);
  
  // Spread operator
  const updatedUser = { ...user, name: 'Jane Doe' };
  console.log('Updated user:', updatedUser);
};

// Example 4: Error handling
export const errorHandlingExample = async (): Promise<void> => {
  try {
    // Simulate an operation that might fail
    const random = Math.random();
    if (random > 0.5) {
      throw new Error('Random error occurred!');
    }
    console.log('Operation succeeded!');
  } catch (error) {
    console.error('Caught error:', error instanceof Error ? error.message : error);
  }
};

// Run examples (uncomment to test)
// asyncExample();
// arrayExamples();
// objectExamples();
// errorHandlingExample();
