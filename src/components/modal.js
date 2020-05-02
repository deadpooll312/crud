import React, { memo } from "react";
import Dialog from "@material-ui/core/Dialog";

const Modal = memo(({ width, show, handleClose }) => {
  return <Dialog
  maxWidth={width || 'md'}
  open={show}
  onClose={handleClose}
  aria-labelledby="max-width-dialog-title"
></Dialog>
});

export default Modal;
