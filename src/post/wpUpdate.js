import React, { Component } from "react";

class wpUpdate extends Component {
  render() {
    return (
      <div>
        Webpack from v3 to v4
        <div>
          <ul>
            <li>npm install -g webpack</li>
            <li>npm install --save-dev webpack-cli</li>
            <li>by default web will read webpack-config.js</li>
            <li>npm install -g npx</li>
            <li>
              use babel to compile es6 code to es5 support old browser version
            </li>
            <li>npm install --save-dev @babel/core @babel/cli</li>
            <li>use loader to preprocessor files such as js css image etcs</li>
            <li>npm install -D babel-loader</li>
            <li>those options can write in babelrc</li>
            <li>use babel preset env instead keep adding plugin</li>
            <li>npm install --save-dev @babel/preset-env</li>
            <li>in order to support react</li>
            <li>npm install --save-dev @babel/preset-react</li>
            <li>
              can modify the devtools options to make the code more readable
            </li>
            <li>
              install babel polyfill (support old browser able execute newest
              methods like Promise object)
            </li>
            <li>npm install --save @babel/polyfill</li>
            <li>
              since babel polyfill is using global 赋值 so it might 污染 global
            </li>
            <li>so we can install babel/runtime to resolve</li>
            <li>npm install --save @babel/runtime</li>
            <li>npm install --save-dev @babel/plugin-transform-runtime</li>
            <li>npm install --save @babel/runtime-corejs2</li>
            <li>html webpack plugin</li>
            <li>npm i --save-dev html-webpack-plugin</li>
            <li>css loader</li>
            <li>npm install style-loader --save-dev</li>
            <li>mini css extract plugin</li>
            <li>npm install --save-dev mini-css-extract-plugin</li>
            <li>clean webpack plugin</li>
            <li>npm i clean-webpack-plugin --save-dev</li>
            <li>url loader for handling image those assets</li>
            <li>compress images</li>
            <li>npm install file-loader --save-dev</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default wpUpdate;
