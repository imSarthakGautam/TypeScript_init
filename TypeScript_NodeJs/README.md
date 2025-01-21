# TypeScript_NodeJs

## Setup
1. Initailize a Node.js Project
    ```bash
    npm init -y
    ```
2. Install TypeScript
Unlike JavaScript, TypeScript is not native to Node.js. It needs a compiler to transpile .ts files into .js files.
    ```bash
    npm install typescript --save-dev
    ```

3. Initailize a typescript configuration file
    ```bash
    npx tsc --init
    ```


    **Key Settings:**
    - target: JS version to output, eg: ES
    - module: Module System Definitionm eg: CommonJS
    - outDir: Directory for compiled files
    - strict: Enable Strict TypeChecking

    ```js
    {
        "compilerOptions": {
            "target": "es2016",
            "module": "commonjs",
            "rootDir": "./src",
            "outDir": "./dist",
            "esModuleInterop": true,
            "forceConsistentCasingInFileNames": true,  
            "strict": true,
            "skipLibCheck": true
        }
    }
    ```

4. Install Express and @types/express @types/node
```bash
npm install express
npm install --save-dev @types/express @types/node
```
TypeScript requires type definitions for modules, while JavaScript doesn’t need them.

To use command line (optional)
```bash
npm install touch-cli -g 
```

Update package.json
```bash
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc",
  "dev": "ts-node src/index.ts"
},
```