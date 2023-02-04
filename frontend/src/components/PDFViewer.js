import React, {useState, useEffect, useRef} from "react";
import {Document, Page} from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'


export default function PDFViewer() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf-container">
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
        </div>
    )
}