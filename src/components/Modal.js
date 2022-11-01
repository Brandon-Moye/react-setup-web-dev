import React from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#FFF",
  padding: "50px",
};

const overlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.7)",
};

export default function Modal(props) {
  if (!props.open) return null;
  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div style={overlayStyles} />
      <div style={modalStyles}>
        <div className="modal">She Done Already Done Had Herses</div>
        <span>
          If you'd like to add another queen, sashay at least one away first
        </span>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
