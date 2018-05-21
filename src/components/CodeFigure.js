import React from 'react';
import '../styles/styles.scss';
const ReactMarkdown = require('react-markdown');

class CodeFigure extends React.Component {
    render() {
        return (
            <div className="blog-code-figure">
                <figure className="highlight">
                    <figcaption>
                        <span className="title">{this.props.title}</span>
                        <a className="file">{this.props.file}</a>
                    </figcaption>
                    <table>
                        <tbody><tr>
                            <td className="code">
                                <pre>
                                    <ReactMarkdown source={this.props.source} />
                                </pre>
                            </td>
                        </tr></tbody>
                    </table>
                </figure>
            </div>
        )
    }
}

export default CodeFigure;