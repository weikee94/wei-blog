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

          <li>deploy api to heroku</li>
          <li>
            create heroku
            <div>heroku create</div>
          </li>
          <li>
            use addons options to create mongolab
            <div>heroku addons:create mongolab:sandbox</div>
          </li>
          <li>
            find out what mongodb uri using
            <div>heroku config:get MONGODB_URI</div>
          </li>
          <li>
            email validation package
            <div>npm install validator@5.6.0 --save</div>
          </li>
          <li>
            JSON WEb token
            <div>npm i jsonwebtoken@7.1.9 --save</div>
          </li>
          <li>
            install hashing password
            <div>npm i bcryptjs@2.3.0 --save</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default apiLearning;
