import React from "react";
import "./header.css";

function App() {
  return (
    <div className="header-container">
      <p className="comapny-name">Company Name</p>
      <div className="propfile-pic-coontainer">
        <p className="profile-name">Rajesh</p>
        <div className="profile-pic">
          <img
            alt="profile"
            className='pic'
            src="https://images.unsplash.com/photo-1520820446914-04cb9819a6cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=836&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
