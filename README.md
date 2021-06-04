# Typescript practise only.
This is to practise Typescript by making blockchain with it.

# Technical note:
For npm installation of tsc(to let tsc work on terminal),
npm install typescript --save-dev
then input 'npx tsc'.

To run after setting up all package.json as follows:

# package.json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "prestart": "tsc"

  },

# tsconfig.json
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES6",
        "sourceMap": true
    },
    "include": ["index.ts"],
    "exclude": ["node_modules"]
}

'npm start' will work with no problem.

So why do this step before doing Typescript (TS)?
- Node.js cannot understand TS, so 'compile it' in JS.