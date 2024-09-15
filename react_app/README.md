# React Boilerplate
This directory is a self-contained React Boilerplate npm project, but it has been intergrated into the React/Express Boilerplate repository as a means of building monolithic full stack applications quickly. The sections below relate to the, documentation, configuration and operation of the project.

### Getting Started with Create React App
This project is based on React. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

### React Typescript
This project uses the React Typescript template. To learn more about React Typescript follow this link [React Typescript Documentation](https://www.typescriptlang.org/docs/handbook/react.html).

## Build execution
This project uses a special build command in order to make it more difficult to copy the application code. On some projects this has been a concern.
- react-scripts build && (del /S /Q build\\*.map 2> nul || rm -rf build/*.map) && (if exist .htaccess (copy .htaccess build\\) else (cp .htaccess build/))


