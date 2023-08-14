import React, { ChangeEvent } from 'react';

const FileUpload: React.FC = () => {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File chosen:', file.name);
    } else {
      console.log('No file chosen');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;