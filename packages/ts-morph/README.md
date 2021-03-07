# ts-morph

## Run

```
npx ts-node [transpiler] [file]

# Run and output to stdout
npx ts-node packages/ts-morph/example-1/index.ts packages/ts-morph/example-1/fixtures/demo.ts
npx ts-node packages/ts-morph/example-1/index.ts packages/ts-morph/example-1/fixtures/*.ts
npx nodemon --exec ts-node packages/ts-morph/example-1/index.ts packages/ts-morph/example-1/fixtures/demo.ts

# Run and output to files
npx ts-node packages/ts-morph/example-1/index.ts packages/ts-morph/example-1/fixtures/*.ts --out
```
