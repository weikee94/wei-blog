import React, { Component } from "react";

class EventDemo extends Component {
  clickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("event target: ", event.target);
    console.log("event current target: ", event.currentTarget);

    // React 里的event是封装过后的，可以用__proto__.contstructor 查看
    console.log("React event: ", event);

    // 原生event 和上面的event 是不一样的
    console.log("nativeEvent: ", event.nativeEvent);
    console.log("nativeEvent target: ", event.nativeEvent.target);
    console.log(
      "nativeEvent current target: ",
      event.nativeEvent.currentTarget
    );

    // react event 是synthetic event，模拟DOM 事件所有能力
    // event.nativeEvent 是远胜事件对象
    // 所有事件都挂载在document上 和DOM 是事件不一样
  };
  render() {
    return (
      <div>
        <a href="#" style={{ color: "white" }} onClick={this.clickHandler}>
          click me
        </a>
      </div>
    );
  }
}

class StateDemo extends Component {
  constructor(props) {
    super(props);

    // 第一，state need define inside constructor
    this.state = {
      count: 0,
    };
  }
  addHandler = () => {
    const { count } = this.state;
    // this.state.count++; 这是不行的会报错
    // 因为这相当于直接修改state，这是不被允许的
    this.setState({
      count: count + 1,
    });
  };

  // =================================
  // 如果是数组

  //   const list5Copy = this.state.list5.slice()
  //   list5Copy.splice(2,0,'a') 中间插入 || 替换

  //   this.setState({
  //       list1: this.state.list1.concat(100),
  //       list2: [...this.state.list2, 100],
  //       list3: this.state.list3.slice(0,1),
  //       list4: this.state.list4.filter(item => item > 100),
  //       list5: list5Copy
  //   })

  //   注意：⚠️不能直接对this.state.list 进行 push, pop, splice等
  //   因为这些操作会直接改变原数组

  // ==================================
  // 如果是对象

  //   this.setState({
  //       obj1: Object.assign({}, this.state.obj1, {a: 100}),
  //       obj2: {...this.state.obj2, a: 100}
  //   })

  // 注意：⚠️不能直接对 this.state.obj 进行属性设置

  render() {
    return (
      <div>
        <p style={{ color: "white" }}>{this.state.count}</p>
        <button onClick={this.addHandler}>add me</button>
      </div>
    );
  }
}

const Demo = () => {
  return <div>s</div>;
};

export default StateDemo;
