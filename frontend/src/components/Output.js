import React from "react";
import OutputToolbar from "./OutputToolbar";
import PDFViewer from "./PDFViewer";

export default function Output () {
    return (
        <div className="output-section">
            <OutputToolbar/>
            <PDFViewer/>
        </div>
    )
}
