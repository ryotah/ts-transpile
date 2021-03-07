import { SourceFile } from 'ts-morph';

export function transform(sourceFile: SourceFile) {
  // https://ts-morph.com/details/source-files#source-file-code-fixes
  sourceFile.organizeImports();
  // sourceFile.fixMissingImports();
  sourceFile.fixUnusedIdentifiers();
  return sourceFile;
}
