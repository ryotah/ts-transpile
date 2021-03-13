import { Node, SourceFile, SyntaxKind } from 'ts-morph';

export function transform(sourceFile: SourceFile) {
  // Find `... = actionCreatorFactory(...` and remove it
  const actionCreatorFactory = sourceFile.forEachDescendant((node) => {
    if (
      Node.isCallExpression(node) &&
      /^actionCreatorFactory\(/.test(node.getText())
    ) {
      return node;
    }
  });
  actionCreatorFactory
    ?.getFirstAncestorByKindOrThrow(SyntaxKind.VariableStatement)
    .remove();

  // Find `... = actionCreator...` and remove them
  sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((node) => {
    if (/^actionCreator[(<]/.test(node.getText())) {
      node.getFirstAncestorByKindOrThrow(SyntaxKind.VariableStatement).remove();
    }
  });

  sourceFile.organizeImports();
  sourceFile.fixUnusedIdentifiers();

  return sourceFile;
}
