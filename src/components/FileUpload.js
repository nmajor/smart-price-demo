import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import XLSX from 'xlsx';

export default function FileUpload({ setWorkbook }) {
  const onDrop = useCallback(acceptedFiles => {
    console.log('blah hi acceptedFiles', acceptedFiles);
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log('blah hi reader', reader);
      
      const workbook = XLSX.read(binaryStr, {type:'array'});
      console.log();
      
      setWorkbook(workbook);
    }
    reader.readAsArrayBuffer(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="mt-6">
      <div {...getRootProps()} className="relative p-4 border-dashed border-2 border-gray-300">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    </div>
  );
}