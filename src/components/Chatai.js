// import React, { Component } from 'react'

// export class Chatai extends Component {

//     componentDidMount() {
//         (function (d, m) {
//             var kommunicateSettings =
//                 { "appId": "3a180715422cb9f0f3b72e0556e733401", "popupWidget": true, "automaticChatOpenOnNavigation": true };
//             var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//             // s.src = "https://code-ai-smoky.vercel.app/";
//             s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//             var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//             window.kommunicate = m; m._globals = kommunicateSettings;
//         })(document, window.kommunicate || {});
//     }

//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }

// export default Chatai

// import PropTypes from "prop-types";
 
const Chatai = () => (
  <div className="video-responsive">
    <iframe
      width="400"
      height="480"
      src={`https://code-ai-smoky.vercel.app/`}
      allow="clipboard-write;"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
 
// Chatai.propTypes = {
//   embedId: PropTypes.string.isRequired
// };
 
export default Chatai;