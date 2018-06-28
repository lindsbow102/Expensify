const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// Need two arguments: 1st one describes what test should do, 2nd one is code to run for the test case
// test method found in API reference/globals in docs; expect has its own page
test('should add two numbers', () => {
    const result = add(10, 12);
    expect(result).toBe(22);
});

// to run test in watch mode in CLI do this command "yarn test -- --watch"

test('greeting should say hello to name variable', () => {
    const newName = generateGreeting('Lindsey');
    expect(newName).toBe('Hello Lindsey!');
})

test('Should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello anonymous!');
})