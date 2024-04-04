import React,{useState} from "react";

const Pannel = ({ closePanel, showPanel, expandPanel, halfPanel , isFull}) => {

  return (
    <div className="panel-container">
      {/* Render the panel conditionally based on state */}
      <div className={`panel ${showPanel ? "active" : ""}`}>
        {/* Cancel icon to close panel */}
        <span className="cancel-icon" onClick={closePanel}>
          &#10006;
        </span>
        {/* Panel content goes here */}
        <h2>Panel Content</h2>
        <p>This is the content of the panel.</p>
        <button onClick={isFull? halfPanel:expandPanel}>{isFull? "half pannel button":"full pannel button"}</button>
       
      </div>
    </div>
  );
};

export default Pannel;