import React from 'react';
import '../post/reactLearning.scss';
import CodeFigure from '../components/CodeFigure';
const ReactMarkdown = require('react-markdown');

const jsxCall = `
const props = {
    className: 'container',
    children: 'Hello World'
};

const element = <div {...props} />

// this can easily passing to the element if you want have ur own class
name just add behind the props then will do the tricks
`;

const reuseComponent = `
const Message = (props) => <div>{props.msg}</div>
const element = (
    <div>
        <Message msg="Hello World"/>
        <Message msg="GoodBye" />
    </div>
);
`;

const validatePropTypes = `
// method one

function SayHi(props) {
    return (
        <div>
            Hi {props.firstName}
        </div>
    )
}

SayHi.propTypes = {
    firstName: PropTypes.string
    // by default this proptypes wont throw error if didnt specify
    // use isRequired if really want the proptypes to be happened
}

// method two
class SayHi extends React.Component {
    // this is the recommended way to do when specify props types in
    // class component
    static propTypes = {
        firstName: PropTypes.string
    }
    render() {
        const {firstName} = this.props.firstName;
        return (
            <div>
                Hello {firstName}
            </div>
        )
    }
}
`;

const conditionRender = `

function Message({message}) {
    return (
        <div>
            {
                message ? (<div>{message}</div>)
                : (<div>No Message</div>)
            }
        </div>
    )
}

<Message message={null} />
`;

const styleReactComponent = `
// three way to style
// styled components, emotion, glamorous

// method one
const className = 'box'
const props = {
    className,
    style: {paddingLeft: 20}
}
const element = (
    <div>
        <div {...props}>Style</div>
    </div>
)

//method two
function Box(props) {
    return (
        <div
            className="box"
            style={{paddingLeft: 20}}
            {...props}
        />
    )
}

const element = (
    <div>
        <Box>small box</Box>
    </div>
)

// method three
function Box({style, className = '', ...rest}) {
    return (
        <div
            style={{paddingLeft: 20, ...style}}
            {...rest}
        />
    )
}

const element = (
    <div>
        <Box
            className="box--small"
            style={{ backgroundColor: 'blue' }}
        >small box</Box>
    </div>
)

`;

const eventHandler = `

`;

const useComponentState = `

`;

const memoryLeak = `

`;

const reactClassComponent = `

`;

class ReactLearning extends React.Component {
    render() {
        return (
            <div className="ReactLearning">
                <p>React Learning</p>
                <CodeFigure title="JSX Call" file="js" source={jsxCall} />
                <CodeFigure title="Reuse Component" file="js" source={reuseComponent} />
                <CodeFigure title="Validate PropTypes" file="js" source={validatePropTypes} />
                <CodeFigure title="Condition Render" file="js" source={conditionRender} />
                <CodeFigure title="Style Component" file="js" source={styleReactComponent} />
            </div>
        )
    }
}

export default ReactLearning;