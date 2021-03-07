import fs from 'fs';
import path from 'path';
import { transform } from '../transform';

const fixture = path.resolve(__dirname, '../fixtures/demo.ts');

it('should work correctly', () => {
  expect(transform(fs.readFileSync(fixture, 'utf8'))).toMatchInlineSnapshot(`
    "





    // TODO: xxx

    /* TODO: xxx
      xxx
      xxx
    */

    /* TODO: xxx
      xxx
        xxx
          */
    "
  `);
});
