import { outputFile, getSourceFiles, normalizeArgv } from '../utils';
import { transform } from './transform';

function execute({ filenames, out }: { filenames: string[]; out: boolean }) {
  // Get source files
  const sourceFiles = getSourceFiles(filenames);
  // Transform source files
  sourceFiles.forEach((sourceFile) => transform(sourceFile));
  // Output the results
  sourceFiles.forEach((sourceFile) => {
    console.log(sourceFile.getFilePath());
    out ? outputFile(sourceFile) : console.log(sourceFile.getText());
  });
}

execute(normalizeArgv(process.argv));
