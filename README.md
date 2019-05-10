# React & Material Components starting-kit
Starting application with all configuration necessary to use: React, Google Material Components, Scss, Jest, Flow and neutrinojs

Versions used:

- react: `16`
- material-components-web-react: `0.12`
- neutrino: `9.0.1`

### Installation
All the effort for you is to, clone the repository and install dependencies

```
git clone https://github.com/ale8193/react-mdc-starting-kit.git

cd react-mdc-starting-kit

yarn install
```

##### Possible scripts

- `yarn start` to start your application in development mode
- `yarn test` to lunch your Jest test
- `yarn lint` to run linter on your src and test files, add `--fix` tag to fix your code
- `yarn build` to build your application  


### After install
After having installed the kit you can start create your wonderful react and material components application. 

For the full list of material components see: [material-components-web-react](https://github.com/material-components/material-components-web-react) and [material-components-web](https://github.com/material-components/material-components-web)

### Project layour
The project layour is very simple and familiar if you already know [neutrino project layout](https://master.neutrinojs.org/project-layout/)

- `resources` contains the html template file used to add external links like google font and the favicon file
- `src` its the core of the application and contain all the code (`js`, `jsx`, `css`, `scss`, `sass) that you want to write
- `test` contains the test files of your application
