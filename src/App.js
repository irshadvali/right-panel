import React, { useState } from "react";
import "./App.css";
import Pannel from "./component/Pannel";

const Popup = () => {
  // State to control popup visibility
  const [showPopup, setShowPopup] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isFull, setFull] =useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  // Function to close panel
  const closePanel = () => {
    setShowPanel(false);
    setFull(false)
  };

  const expandPanel = () => {
    const panelElement = document.querySelector(".panel");
    panelElement.style.width = "100%";
    setFull(true)
  };
  const halfPanel = () => {
    const panelElement = document.querySelector(".panel");
    panelElement.style.width = "50%";
    setFull(false)
  };

  return (
    <div className="popup-container">
      <div className="reports-wrap">
        <div className="wrap-left">
          <button onClick={togglePopup} className="button-icon">
            <img src="icon.png" alt="Icon" />
          </button>
          <div className="heading-wrap">
            <div className="text-heading">Loreum Ipsum</div>
            <span>Loreum Ipsum</span>
            <p>Loreum Ipsum</p>
          </div>
        </div>
        <div className="wrap-right">
          <button onClick={togglePanel}>
            <img src="icon.png" alt="Icon" />
          </button>
          <button>
            <img src="icon.png" alt="Icon" />
          </button>
          <button>
            <img src="icon.png" alt="Icon" />
          </button>
        </div>
      </div>

      {/* Render the popup conditionally based on state */}
      {showPopup && (
        <div className="popup">
          {/* Popup content goes here */}
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
        </div>
      )}
      {showPanel && (
        <Pannel
          closePanel={closePanel}
          showPanel={showPanel}
          expandPanel={expandPanel}
          halfPanel={halfPanel}
          isFull={isFull}
        />
      )}
    </div>
  );
};

export default Popup;