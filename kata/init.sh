#!/bin/bash

npm init -y
mkdir src
mkdir test

npm i typescript
npm i -D jest
npm i -D ts-jest
npm i -D ts-node
npm i -D @types/jest

echo "{
    \"compilerOptions\": {
        \"module\": \"commonjs\",
        \"noImplicitAny\": true,
        \"removeComments\": true,
        \"preserveConstEnums\": true,
        \"sourceMap\": true,
        \"target\": \"ES6\",
        \"esModuleInterop\": true,
        \"resolveJsonModule\": true,
        \"outDir\": \"dist/\"
    },
    \"include\": [\"src\",\"test\"],
    \"exclude\": [\"node_modules\"]
}" >> tsconfig.json

echo "module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
}" >> jest.config.js

echo "import price from '../src/price';

describe('price()', () => {
    it('cbd', () => {
        
        expect(price('')).toBe(0);
    });
});" >> test/price.spec.ts

echo "export default function price(items: string): number {
  return 0;
}" >> src/price.ts