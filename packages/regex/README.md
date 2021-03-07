# regex

## Run

```
npx ts-node [transpiler] [file]

# Run and output to stdout
npx ts-node packages/regex/example-1/index.ts packages/regex/example-1/fixtures/demo.ts
npx ts-node packages/regex/example-1/index.ts "packages/regex/example-1/fixtures/*.ts"
npx nodemon --exec ts-node packages/regex/example-1/index.ts packages/regex/example-1/fixtures/demo.ts

# Run and output to files
npx ts-node packages/regex/example-1/index.ts "packages/regex/example-1/fixtures/*.ts" --out

# Debug
node --inspect-brk node_modules/.bin/ts-node packages/regex/example-1/index.ts packages/regex/example-1/fixtures/demo.ts
npm run test:inspect-brk
```
