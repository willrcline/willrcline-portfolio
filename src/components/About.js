import aboutMeSlidedeck from "../assets/about-me-slidedeck.pdf"
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function About() {

      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
    
      function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    
      return (
         <div>
            <Document
                file={aboutMeSlidedeck}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(
                new Array(numPages),
                (el, index) => (
                    <Page
                    style={{"margin": "0px"}}
                    renderTextLayer={false}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    />
                ),
                )}
            </Document>
        </div>

        // <div>
        //     file={aboutMeSlidedeck}
        //     onLoadSuccess={onDocumentLoadSuccess}
        //   >
        //     <Page renderTextLayer={false} pageNumber={pageNumber} />
        //   </Document>
        //   <p>Page {pageNumber} of {numPages}</p>
    
        //   {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>}
    
        //   {pageNumber < numPages && <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>}
        // </div> 

        // <iframe 
        // src="https://drive.google.com/file/d/1S9w6QDB9a3PSv-ijVn5FQuftec-LaO6c/preview"
        // width="100%"
        // height="100%"
        // title="about-me-slidedeck"
        // style={{border: "none"}}
        // />
      );
    }

    
export default About;