import Markdown from 'markdown-to-jsx';
import React from 'react';
import '../components/initProject.scss';
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
                        - yarn add react@16.0.0 react-dom@16.0.0

                    ```
                </Markdown>
            </div>
        </div>
        <div className="babel-webpack">

        </div>
        <div className="source-map-webpack">

        </div>
        <div className="webpack-dev-server">

        </div>
        <div className="webpack-scss">

        </div>
        <div className="react-router">

        </div>
        <div className="not-found-pages">

        </div>
        <div className="linking-routes">

        </div>
        <div className="production-webpack">

        </div>
        <div className="seperate-scss">

        </div>
        <div className="deploying-heroku">

        </div>
    </div>
    );
};

export default InitProject;