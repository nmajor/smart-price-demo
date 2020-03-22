import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import FileUpload from './FileUpload';
import DataVisualizer from './DataVisualizer';

export default function App() {
  const [workbook, setWorkbook] = useState([]);

  return (
    <div className="bg-gray-100 pt-24 w-full h-full">
      <Navbar />
      <main className="flex flex-col w-full h-full items-center">
        <FileUpload setWorkbook={setWorkbook} />
        <DataVisualizer workbook={workbook} />
      </main>
    </div>
  );
}
