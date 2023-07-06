import React, { useState } from 'react';
import './Drag.css';
import {IoCloudUpload} from 'react-icons/io5';

export default function Drag() {
  const [selectedFile, setSelectedFile] = useState('');
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    setShowDeleteButton(true);
  };

  const handleDeleteFile = () => {
    setSelectedFile('');
    setShowDeleteButton(false);
  };

  return (
    <>
      <div className='dragclass'>
        <input type='file' className='upload_hide' id='upload_costum' multiple onChange={handleFileChange} />
        <label htmlFor='upload_costum' className='upload_label'>
          <div className='image'>
            <img src={selectedFile} alt='' />
          </div>          
          <button className='choose_file no-border'><IoCloudUpload className='cloudicon'/></button>
          <h3 className='drag_text'>Upload a File</h3><br/>
          <p className='drag_text1'>Drag and drop files here</p>
        </label>
        {showDeleteButton && (
          <button className='delete_file' onClick={handleDeleteFile}>
            Delete the file you uploaded
          </button>
        )}
      </div>
    </>
  );
}
