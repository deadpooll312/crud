import React, { memo } from "react";

const Modal = memo(({ show, children }) => {
  if (!show) {
    return null;
  }

  return <div>{children}</div>
});

export default Modal;
