import React from "react";

// function Jumbotron({ children }) {
//     return (
//       <div
//         style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//         className="jumbotron"
//       >
//         {children}
//       </div>
//     );
//   }
  
//   export default Jumbotron;
  

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search and Save your Favorite Books!</p>
            </div>
        </div>
    );
}

export default Jumbotron;
