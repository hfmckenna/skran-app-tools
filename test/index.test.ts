import { test } from 'node:test';
import assert from 'node:assert';
import { firstFn } from '../src';

test(firstFn.name, () => {
  assert.strictEqual(firstFn(), undefined);
});
