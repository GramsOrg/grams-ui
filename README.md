# Grams UI

A collection of UI components used across grams applications. The library uses semantic-ui as a UI framework.

## Installation

```
npm install grams-ui
```

## Usage

```
import { someFunction } from 'grams-ui';

// use someFunction
```

## Documentation

Refer to github pages for more details

## Development

### Building

To build the package, run:

```
npm run build
```

This will compile the TypeScript source code to JavaScript and place it in the dist directory.

### Testing

To run the tests, run:

```
npm test
```

### Storybook

To run the storybook, run:

```
npm run storybook
```

This will run the storybook in a new tab to inspect the UI components

### Generate Component

To generate a new component, run:

```
npm run generate <component_name>
```

Replace `<component_name>` with your preferred name. This command will generate the following

* Default component `.tsx`
* Empty `.css`
* Test file
* Default storybook
* `index.ts` file for barrel
* Update `src/index.ts` with the new component

### Release

The below commands will:
* build
* test
* lint
* format
* push a new commit and tag for the version.
* publish to NPM

To release a major version to NPM run:

```
npm run release:major
```

To release a minor version to NPM run:

```
npm run release:minor
```

To release a patch version to NPM run:

```
npm run release:patch
```

### Formatting

To format the code, run:

```
npm run format
```

This will use Prettier to format all TypeScript files in the src directory.

### Linting

To lint the code, run:

```
npm run lint
```

This will use TSLint to check the code for any style or syntax errors.

## License

This project is licensed under the Apache-2.0 License. See the LICENSE file for details.