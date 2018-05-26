import React from 'react';
import '../post/playground.scss';

// class Playground extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             eventCount: 0,
//             userName: ''
//         }
//         this.setState({eventCount: 10});

//         this.increment = () => (
//             this.setState({eventCount: this.state.eventCount + 1})
//         )

//     }

//     apps() {
//         return (
//             <div>
//                 <p>there have been {this.state.eventCount} events</p>
//                 <p><buttton onClick={() => this.increment()}>Click ME</buttton></p>
//                 <p>You typed: {this.state.userName}</p>
//                 <p><input type="text" /></p>
//             </div>
//         )
//     }

//     render() {
//         return (
//             <div>
//                 <p>Playground</p>
//                 {this.apps()}
//             </div>
//         )
//     }
// }

// const Playground = () => {
//     const state = {
//         eventCount: 0,
//         userName: ''
//     }

//     function App() {
//         return (
//             <div>
//                 <p>there have been {state.eventCount} events</p>
//                 <p><buttton onClick={increment}>Click ME</buttton></p>
//                 <p>You typed: {state.userName}</p>
//                 <p><input type="text" /></p>
//             </div>
//         )
//     }

//     function increment() {
//         setState({
//             eventCount: state.eventCount + 1,
//         })
//     }

//     function setState(newState) {
//         Object.assign(state, newState);
//     }

//     setState({userName: 'Bob'})

//     return (
//         <App />
//     )

// }

// const Playground = () => {
//     function StopWatch({lapse, running}) {
//         return (
//             <div>
//                 <label>{lapse}ms</label>
//                 <button>{running ? 'Stop' : 'Start'}</button>
//                 <button>Clear</button>
//             </div>
//         )
//     }

//     return (
//         <StopWatch lapse={10} running={false}/>
//     )
// }

// class Counter extends React.Component {
//     constructor(...props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     getClickNum () {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.getClickNum}>{this.state.count}</button>
//             </div>
//         )
//     }
// }
class Playground extends React.Component {
    // state = {lapse: 0, running: true}
    // constructor(...args) {
    //     super(...args);
    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {count: 0};

    // method one
    // handleClick = function() {
    //     this.setState(({count}) => ({count: count + 1}))
    // }.bind(this);

    // method two (prefer)
    handleClick = () => {
        this.setState(({count}) =>({
            count: count + 1,
        }))
    }

    // method three (what i do)
    // handleClick = () => {
    //     return (
    //         this.setState({count: this.state.count + 1})
    //     )
    // }

    // method four
    // handleClick() {
    //     this.setState(({count}) => ({count: count + 1}))
    // }
    render() {
        // const {lapse, running} = this.props;
        const Tools = ({lapse, running}) => {
            return (
                <div>
                    <label>{lapse}ms</label>
                    {/* <button onClick={this.handleClick()}>{ running ? 'Stop' : 'Start' }</button> */}
                    <button>Clear</button>
                </div>
            )
        }

        const myString = '01234';
        // substring(start, stop) from start till stop-1
        alert(myString.substring(1,3)); //12

        const Hello = () => (<div>Hello</div>);

        const hello = <div>hello</div>;

        const message = (props) => (
            <div>{props.msg}</div>
        )

        const NewMsg = props => <div>{props.newmsg}</div>

        const MsgChildren = props => <div>{props.children}</div>

        return (
            <div>
                <Tools lapse={10} running={true}/>
                <button onClick={this.handleClick}>
                    {this.state.count}
                </button>
                <Hello />
                <Hello />
                {hello}
                {message({msg: 'My msg'})}
                <NewMsg newmsg="New msg"/>
                <MsgChildren>New Msg Children</MsgChildren>
                {/* <Counter /> */}
            </div>
        )
    }
}


export default Playground;
