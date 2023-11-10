function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let current = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + current;
    prev = current;
    current = next;
  }
  return current;
}

const testCases = [{ input: 5, output: 5 }];

for (const testCase of testCases) {
  const result = fibonacci(testCase.input);
  console.assert(
    result === testCase.output,
    `Input: [${testCase.input}], Expected: ${testCase.output}, Received: ${result}`
  );
}
