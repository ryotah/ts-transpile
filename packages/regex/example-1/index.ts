import fs from 'fs';
import { transform } from './transform';
import { outputFile, normalizeArgv, getFilenames } from '../utils';

async function execute({ pattern, out }: { pattern: string; out: boolean }) {
  const filenames = await getFilenames(pattern);
  filenames.forEach((filename) => {
    const content = transform(fs.readFileSync(filename, 'utf8'));
    out ? outputFile(filename, content) : console.log(content);
  });
}

execute(normalizeArgv(process.argv));
