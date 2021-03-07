import { SourceFile, SyntaxKind } from 'ts-morph';

export function transform(sourceFile: SourceFile) {
  // sourceFile.getStatementsWithComments().forEach((node) => {
  //   if (/\/\* NOTE:|\/\/ NOTE:/.test(node.getText())) {
  //     node.remove();
  //   }
  // });
  sourceFile
    .getDescendantsOfKind(SyntaxKind.MultiLineCommentTrivia)
    .forEach((node) => {
      if (/\/\* NOTE:/.test(node.getText())) {
        node.replaceWithText('');
      }
    });
  sourceFile
    .getDescendantsOfKind(SyntaxKind.SingleLineCommentTrivia)
    .forEach((node) => {
      if (/\/\/ NOTE:/.test(node.getText())) {
        node.replaceWithText('');
      }
    });
  return sourceFile;
}
