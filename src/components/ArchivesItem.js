import React from 'react';
import { NavLink } from 'react-router-dom';

import InitProject from '../post/InitProject';
import Tools from '../post/Tools';
import VueLearning from '../post/VueLearning';

const ArchivesItem = (props) => {
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
        )
    } else if (props.match.params.id == 2) {
        postContent = (
            <div className="blog-archives-items">
                {/* Archives with id of {props.match.params.id} */}
                <Tools />
                <NavLink className="back-home" to="/archives">
                    <div className="back-home_title">Go Back</div>
                </NavLink>
            </div>
        )
    } else if (props.match.params.id == 3) {
        postContent = (
            <div className="blog-archives-items">
                {/* Archives with id of {props.match.params.id} */}
                <VueLearning />
                <NavLink className="back-home" to="/archives">
                    <div className="back-home_title">Go Back</div>
                </NavLink>
            </div>
        )
    }

    return (
        <div>
           { postContent }
        </div>
    )

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