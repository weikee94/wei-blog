// import Markdown from 'markdown-to-jsx';
import React from 'react';
const ReactMarkdown = require('react-markdown')

const input = '# This is a header\n\nAnd this is a paragraph'

const InitProject = () => {
    return (
        <div>
            <ReactMarkdown source={input} />
        </div>
    );
};

export default InitProject;