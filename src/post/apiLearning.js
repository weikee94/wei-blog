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
          <li>
            mkdir test-api (create test api folder)
            <div>npm init (create package json file)</div>
          </li>
          <li>
            install mongodb
            <div>npm install mongodb@2.2.5 --save</div>
          </li>
          <li>install mongoose ORM (object relation mapping)</li>
          <li>npm i mongoose@4.5.9 --save</li>
          <li>
            install express and body-parser(allow us sent json to the server)
          </li>
          <li>npm i express@4.14.0 body-parser@1.15.2 --save</li>
        </ul>
      </div>
    );
  }
}

export default apiLearning;
