import * as babel from '@babel/core';
import plugin from '../plugin';
import path from 'path';
import fs from 'fs';

const fixture = fs.readFileSync(
  path.resolve(__dirname, '../fixtures/demo.ts'),
  'utf8'
);

it('should work correctly', () => {
  const { code } = babel.transform(fixture, {
    plugins: [plugin, '@babel/plugin-syntax-typescript'],
    filename: 'file.ts',
    babelrc: false,
  })!;
  expect(code).toMatchInlineSnapshot(`
    "export const module = {
      bar: ''
    };
    sebmck === dork;"
  `);
});
