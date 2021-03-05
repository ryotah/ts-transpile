import { Project, SourceFile } from 'ts-morph';

export function outputFile(sourceFile: SourceFile) {
  const name = sourceFile.getFilePath();
  sourceFile.copyImmediatelySync(name, {
    overwrite: true,
  });
}

export function normalizeArgv(argv: string[]) {
  const args = argv.slice(2);
  return {
    filenames: args.filter((arg) => arg !== '--out'),
    out: args.includes('--out'),
  };
}

export function getSourceFiles(filenames: string[]) {
  const project = new Project();
  const sourceFiles = project.addSourceFilesAtPaths(filenames);
  if (sourceFiles.length === 0) {
    throw Error('No sourcefile');
  }
  sourceFiles.forEach((sourceFile) => console.log(sourceFile.getFilePath()));
  return sourceFiles;
}
