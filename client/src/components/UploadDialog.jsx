import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FileUpload from "react-material-file-upload";

import { addFiles } from "../api/files";

function UploadDialog() {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFiles([]);
  };

  const handleUpload = () => {
    const uploadDate = Date.now();
    files.forEach((file) => {
      const body = {
        filename: file.name.substr(0, file.name.lastIndexOf(".")),
        extension: file.name.substr(file.name.lastIndexOf(".") + 1),
        upload_date: uploadDate,
      };
      addFiles(body);
      setFiles([]);
      window.location.reload();
    });

    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Upload files
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Upload files</DialogTitle>
        <DialogContent>
          <FileUpload value={files} onChange={setFiles} />
        </DialogContent>
        <DialogActions>
          <Button disabled={files.length < 1} onClick={handleUpload}>
            Ok
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UploadDialog;
