import { test } from 'node:test';
import assert from 'node:assert';
import { firstFn } from '../src/firstFn';

test(firstFn.name, () => {
  assert.strictEqual(firstFn(), undefined);
});
