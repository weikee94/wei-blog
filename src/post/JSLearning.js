import React from 'react';
import '../post/jsLearning.scss';
import CodeFigure from '../components/CodeFigure';
const ReactMarkdown = require('react-markdown');

const arraySplice =
'var arr = [ 1, 2, 3 ];\n' +
'var temp;\n' +
'temp = arr.splice(0, 1);  //1 \n';

const arrSplice = `
var arr = [[ 1, 2, 3 ]];
var temp;
temp = arr.splice(0,1); // 1
`;

class JSLearning extends React.Component {
    render() {
        return (
            <div className="JSLearning">
                <p>JS Basics</p>
                <CodeFigure title="Array Splice" file="js" source={arrSplice} />
            </div>
        )
    }
}

export default JSLearning;