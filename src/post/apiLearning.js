import React, { Component } from "react";

class apiLearning extends Component {
  render() {
    return (
      <div>
        api Learning
        <ul>
          <li>
            <div>Installing MongoDB and robomongo</div>
            <div>create mongo-data folder</div>
            <div>
              go to bin folder type below command (this is how you start server)
            </div>
            <div>./mongod --dbpath ~/mongo-data</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default apiLearning;
