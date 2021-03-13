import * as babel from '@babel/core';
import { PluginObj } from '@babel/core';

export default function ({ types: t }: typeof babel): PluginObj {
  return {
    visitor: {
      BinaryExpression(path: any) {
        if (path.node.operator !== '===') {
          return;
        }
        path.node.left = t.identifier('sebmck');
        path.node.right = t.identifier('dork');
      },
      Program(path) {
        path.traverse({
          enter(path) {
            t.removeComments(path.node);
          },
        });
      },
    },
  };
}
