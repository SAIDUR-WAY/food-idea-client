import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Button } from 'react-bootstrap';

const DownloadPage = ({rootElementId, downloadFileName}) => {
     const downloadFileDocument = ()=>{
          const input = document.getElementById(rootElementId)
          html2canvas(input)
          .then(canvas=>{
               const imgData = canvas.toDataURL('image/png')
               const pdf = new jsPDF("p", "pt", "a3")
               pdf.addImage(imgData, "JPEG", 0, 0)
               pdf.save(`${downloadFileName}`)
          })
     }
     return (
          <div className='  my-4 text-end'>
               <Button className='text-center btn-info' onClick={downloadFileDocument}>Download Page</Button>
          </div>
     );
};

export default DownloadPage;