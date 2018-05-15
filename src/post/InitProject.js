import Markdown from 'markdown-to-jsx';
import React from 'react';
import '../post/initProject.scss';
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

const InitProject = () => {
    return (
        // <div>
        //     <ReactMarkdown source={input} />
        // </div>
    <div className="blog-initProject">
        <div className="babel-section">
            <h2 className="markdown-title">Babel Section</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                    yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
                    ```
                </Markdown>
            </div>
        </div>
        <div className="webpack-config">
            <h2 className="markdown-title">Webpack Config</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        - yarn add webpack@3.1.0
                        - create webpack.config.js
                    ```
                </Markdown>
            </div>
        </div>
        <div className="npm-modules">
            <h2 className="markdown-title">NPM Modules</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add react@16.0.0 react-dom@16.0.0

                    ```
                </Markdown>
            </div>
        </div>
        <div className="babel-webpack">
            <h2 className="markdown-title">Babel Webpack</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add babel-core@6.25.0 babel-loader@7.1.1

                    ```
                </Markdown>
            </div>
        </div>
        <div className="source-map-webpack">
            <h2 className="markdown-title">SourceMap Webpack</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        add devtool in webpack.config.js

                    ```
                </Markdown>
            </div>
        </div>
        <div className="webpack-dev-server">
            <h2 className="markdown-title">Webpack DevSserver</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add webpack-dev-server@2.5.1

                    ```
                </Markdown>
            </div>
        </div>
        <div className="webpack-scss">
            <h2 className="markdown-title">Webpack Scss</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add style-loader@0.18.2 css-loader@0.28.4
                        yarn add sass-loader@6.0.6 node-sass@4.5.3
                    ```
                </Markdown>
            </div>
        </div>
        <div className="react-router">
            <h2 className="markdown-title">React Router</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add react-router-dom@4.2.2
                    ```
                </Markdown>
            </div>
        </div>
        <div className="not-found-pages">
            <h2 className="markdown-title">Not Found Pages</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        using switch from react-router-dom to setup 404 page
                    ```
                </Markdown>
            </div>
        </div>
        <div className="linking-routes">
            <h2 className="markdown-title">Linking Routes</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        NavLink client site routing without refresh
                    ```
                </Markdown>
            </div>
        </div>
        <div className="organize-routes">
            <h2 className="markdown-title">Organize Routes</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        create routers folder
                    ```
                </Markdown>
            </div>
        </div>
        <div className="production-webpack">
            <h2 className="markdown-title">Production Webpack</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
                    ```
                </Markdown>
            </div>
        </div>
        <div className="webpack-express">
            <h2 className="markdown-title">Webpack Express</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add express@4.15.4
                    ```
                </Markdown>
            </div>
        </div>
        <div className="seperate-scss">
            <h2 className="markdown-title">Seperate Scss</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                        yarn add extract-text-webpack-plugin@3.0.0
                    ```
                </Markdown>
            </div>
        </div>
        <div className="deploying-heroku">
            <h2 className="markdown-title">Deploying Heroku</h2>
            <div className="markdown-sect">
                <Markdown>
                    > ```
                    - heroku login
                    - heroku create nameYouWant
                    - heroku open
                    ```
                </Markdown>
            </div>
        </div>
    </div>
    );
};

export default InitProject;