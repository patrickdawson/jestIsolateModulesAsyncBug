import {jest} from "@jest/globals";

describe('jest isolateModulesTest', () => {
  it('should have a fresh module state in each isolateModulesAsync context', async () => {
    await jest.isolateModulesAsync(async () => {
      const { getState, incState } = await import('../src/main.js');
      expect(getState()).toBe(0);
      incState();
      expect(getState()).toBe(1);
    });
    await jest.isolateModulesAsync(async () => {
      const { getState, incState } = await import('../src/main.js');
      expect(getState()).toBe(0);
      incState();
      expect(getState()).toBe(1);
    });
  });
});
