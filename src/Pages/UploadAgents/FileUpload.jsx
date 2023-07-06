import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
    const urls = fileArray.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleUpload = () => {
    // Perform upload logic here
    if (selectedFiles.length > 0) {
      console.log('Uploading files:', selectedFiles);
      // Add your file upload logic or API call here
    } else {
      console.log('No files selected');
    }
  };

  return (
    <div>
      <Input
        type="file"
        multiple
        onChange={handleFileChange}
      />

      {previewUrls.map((url) => (
        <img
          key={url}
          src={url}
          alt="Preview"
          style={{ width: '200px', marginTop: '10px', height: '200px', display: 'block' }}
        />
      ))}

      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={selectedFiles.length === 0}
      >
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;
