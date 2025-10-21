import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.describe('A, runs in parallel with B', () => {
  test.describe.configure({ mode: 'parallel' });
  test.fixme('in order A1', async ({ page }) => { console.log('in order A1')});
  test('in order A2', async ({ page }) => { console.log('in order A2')});
});

test.describe('B, runs in parallel with A', () => {
  test.describe.configure({ mode: 'parallel' });
  test('in order B1', async ({ page }) => { console.log('in order B1')});
  test('in order B2', async ({ page }) => { console.log('in order B2')});
});