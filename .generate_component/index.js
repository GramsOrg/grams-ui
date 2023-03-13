const fs = require('fs');
const { component, story, test, barrel } = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);

// insert new component into `index.ts`
fs.readFile('./src/index.ts', 'utf8', function(err, data) {
  if (err) throw err;

  // grab all components and combine them with new component
  const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g) || [];
  const newComponents = [name, ...currentComponents].sort();

  // create the import and export statements
  const importStatements = newComponents
    .map(importName => `import ${importName} from './components/${importName}';\n`)
    .join('');
  const exportStatements = `export {\n${newComponents
    .map(component => `  ${component},\n`)
    .join('')}};\n`;

  const fileContent = `${importStatements}\n${exportStatements}`;

  fs.writeFile(`./src/index.ts`, fileContent, writeFileErrorHandler);
});
