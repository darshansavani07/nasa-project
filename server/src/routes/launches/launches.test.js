describe('Test GET /launches', () => {
  test('It should respond with 200 success', () => {
    const responce = 200;
    expect(responce).toBe(200);
  });
});

describe('Test POST /launch', () => {
  test('It should respond with 200 success', () => {
    // const responce = 200;
    // expect(responce).toBe(200);
  });

  test('It should catch missing requires properties', () => {});
  test('It should catch invalid dates', () => {});
});
