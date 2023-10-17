

# React Library Template

A React template for creating your components library


## Features

- Minimal folder structure and configurations
- Easy startup with scripts in package.json
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) and [Rollup](https://rollupjs.org/) configurations for production builds
- [Prettier](https://prettier.io/) for code formatting
- [Husky](https://typicode.github.io/husky/) pre-commit hook
- [Lint Staged](https://github.com/okonet/lint-staged) to run Prettier on staged Git files.
- Included [Storybook](https://storybook.js.org/) for documentation (with minimal examples)

## Use template

### With GitHub

If you have an GitHub account, you can create a new repository with this template by click on **Use this template** > **Create a new repository**.
![Use this template button](https://s3.eu-west-1.amazonaws.com/lorenzobonatti.github/use-this-template-btn.png)

### Manually

Clone the project

```bash
  git  clone  https://github.com/lorenzo-bonatti/react-library-template.git  my-project
```

Remove current `.git` folder to delete history and create you *Initial commit*

## Run Locally

Go to the project directory

```bash
  cd  my-project
```

Install dependencies

```bash
  npm  install
```
or with Yarn
```
  yarn install
```

>  **Yarn 2+**
> If you are using Yarn 2+ you need to run `yarn husky install` manually.
> This because Yarn 2+ not support *prepare* script automatically after install like npm or yarn v1 [Read docs](https://yarnpkg.com/advanced/lifecycle-scripts).


## Build your library

This template builds your library with Vite.
You can find the configurations in **vite.configs.ts** file at the root.

```bash
npm run build
```

## Running Tests

To run tests one time, run the following command

```bash
  npm  run  test
```

or you can run test watching changes

```bash
  npm  run  test:watch
```

### No tests? : (

If your project doesn't already have tests, you need to comment out the `npm run test` command in the `.husky > pre-commit` file.

![Husky Pre Commit Script](https://s3.eu-west-1.amazonaws.com/lorenzobonatti.github/hucky-pre-commit.png)

This is because, without tests, the command returns **1**, suspending the lint-staged script and your commit. You won't be able to commit your changes.

## Scripts

This is the list of all scripts that you can run with npm o yarn:

-  `test`: run test one time only
-  `test:watch`: run test watching changes
-  `build`: build your package
-  `storybook`: run Storybook
-  `build-storybook`: build your Storybook

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [Lorenzo Bonatti](https://github.com/lorenzo-bonatti)
