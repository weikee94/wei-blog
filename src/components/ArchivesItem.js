import React from "react";
import { NavLink } from "react-router-dom";

import InitProject from "../post/InitProject";
import Tools from "../post/Tools";
import VueLearning from "../post/VueLearning";
import JSLearning from "../post/JSLearning";
import ReactLearning from "../post/ReactLearning";
import Playground from "../post/Playground";
import WpUpdate from "../post/wpUpdate";
import ApiLearning from "../post/apiLearning";
import Performance from "../post/performance";

const ArchivesItem = props => {
  // console.log(props.match.params.id);
  let postContent;
  if (props.match.params.id == 1) {
    postContent = (
      <div className="blog-archives-items">
        {/* Archives with id of {props.match.params.id} */}
        <InitProject />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 2) {
    postContent = (
      <div className="blog-archives-items">
        {/* Archives with id of {props.match.params.id} */}
        <Tools />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 3) {
    postContent = (
      <div className="blog-archives-items">
        {/* Archives with id of {props.match.params.id} */}
        <VueLearning />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 9999) {
    postContent = (
      <div className="blog-archives-items">
        <JSLearning />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 5) {
    postContent = (
      <div className="blog-archives-items">
        <ReactLearning />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 6) {
    postContent = (
      <div className="blog-archives-items">
        <WpUpdate />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 7) {
    postContent = (
      <div className="blog-archives-items">
        <ApiLearning />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  } else if (props.match.params.id == 8) {
    postContent = (
      <div className="blog-archives-items">
        <Performance />
      </div>
    );
  } else if (props.match.params.id == 999) {
    postContent = (
      <div className="blog-archives-items">
        <Playground />
        <NavLink className="back-home" to="/archives">
          <div className="back-home_title">Go Back</div>
        </NavLink>
      </div>
    );
  }

  return <div>{postContent}</div>;
};

// class ArchivesItem extends React.Component {
//     render () {
//         let postContent;
//         console.log(this.props.match.params.id);
//         if (this.props.match.params.id == 1) {
//             postContent = (
//                 <div className="blog-archives-items">
//                 asdasdadas
//                 </div>
//             )
//         } else if (this.props.match.params.id == 2) {
//             postContent = (
//                 <div className="blog-archives-items">
//                     Archives with id of {this.props.match.params.id}

//                     <NavLink className="back-home" to="/archives">
//                         <div className="back-home_title">Go Back</div>
//                     </NavLink>
//                 </div>
//             )
//         }

//         return (
//             <div>
//                 { postContent }
//             </div>
//         )
//     }
// }

export default ArchivesItem;
