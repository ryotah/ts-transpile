import { outputFile, getSourceFiles, normalizeArgv } from '../utils';
import { transform } from './transform';

function execute({ filenames, out }: { filenames: string[]; out: boolean }) {
  const sourceFiles = getSourceFiles(filenames);
  sourceFiles.forEach((sourceFile) => transform(sourceFile));
  sourceFiles.forEach((sourceFile) => {
    console.log(sourceFile.getFilePath());
    out ? outputFile(sourceFile) : console.log(sourceFile.getText());
  });
}

execute(normalizeArgv(process.argv));
