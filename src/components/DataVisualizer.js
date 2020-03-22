import React from 'react';
import ReactJson from 'react-json-view'
import XLSX from 'xlsx';

export default function DataVisualizer({ workbook }) {
  console.log('blah hi workbook', workbook);
  const sheets = (workbook || {}).Sheets;

  return (<div>
    {sheets && Object.keys(sheets).map((sheetName) => {
      const sheet = sheets[sheetName];
      console.log('blah hi sheet', sheet);
      const jsonObj = XLSX.utils.sheet_to_json(sheet, { header:1 })
      return (<div className="background-white w-full m-6 rounded p-4 border-solid border-2 border-gray-300">
        <h3>{sheetName}</h3>
        <ReactJson src={jsonObj} />
      </div>);
    })}
  </div>);
}