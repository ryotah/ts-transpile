import fs from 'fs';
import { glob } from 'glob';

export function outputFile(filename: string, content: string) {
  fs.writeFile(filename, content, 'utf8', (err) => {
    if (err) {
      console.log('Failed', err);
    } else {
      console.log('Succeeded', filename);
    }
  });
}

export function normalizeArgv(argv: string[]) {
  const args = argv.slice(2);
  return {
    pattern: args[0],
    out: args.includes('--out'),
  };
}

export function getFilenames(pattern: string): Promise<string[]> {
  return new Promise((resolve) => {
    glob(pattern, (err, matches: string[]) => {
      if (err) {
        console.log(err);
        return;
      }
      resolve(matches);
    });
  });
}
