export function transform(content: string) {
  return (
    content
      // Remove comments which start from `// NOTE:`
      .replace(/\/\/ NOTE:.*/g, '')
      // Remove comments which start from `/* NOTE:`
      .replace(/\/\* NOTE:((?!\*\/)(\s|\S))+\*\//g, '')
  );
}
