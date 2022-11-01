import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal(props) {
  if (!props.onOpenOfModal) return null;
  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div className="webpageLayoverForActiveModal" />
      <div className="modalBody">
        <div className="modalTitleText">She Done Already Done Had Herses!</div>
        <p className="modalInstructionsText">
          If you'd like to add another queen, one must get the CHOP first!
        </p>
        <div className="modalCloseButtonContainer">
          <button className="modalCloseButton" onClick={props.onCloseOfModal}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
