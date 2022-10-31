import React from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

export default function Modal(props) {
  if (!props.open) return null;
  return (
    <div style={modalStyles} className="modalContainer">
      <div className="modal">Too Many Queens</div>
      <button onClick={props.onClose}>Close Modal</button>
    </div>
  );
}
