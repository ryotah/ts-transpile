import { Project } from 'ts-morph';
import { transform } from '../transform';
import path from 'path';

const fixture = path.resolve(__dirname, '../fixtures/demo.ts');

it('should work correctly', () => {
  const project = new Project();
  const sourceFile = project.addSourceFileAtPath(fixture);
  expect(transform(sourceFile).getText()).toMatchInlineSnapshot(`
    "function foo(m: unknown) {
      return m;
    }
    export const bar = foo({
      name: '',
    });
    "
  `);
});
