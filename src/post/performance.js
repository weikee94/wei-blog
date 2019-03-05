import React, { Component } from "react";

class Performance extends Component {
  render() {
    return (
      <div>
        Performance (video 45)
        <div>
          HTML SECTION
          <ul>
            <li>Load style tag in the head</li>
            <li>Load script right before the body</li>
          </ul>
        </div>
        <div>
          CSS SECTION
          <ul>
            <li>Only load whatever is needed</li>
            <li>Above the fold loading</li>
            <li>Media attributes</li>
            <li>Less specifity</li>
          </ul>
        </div>
        <div>
          JS SECTION
          <ul>
            <li>Load script asynchronously</li>
            <li>Defer loading of scripts</li>
            <li>Minimize DOM manipulation</li>
            <li>Avoid long running js</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Performance;
