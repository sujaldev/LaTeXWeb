import React from "react";
import FileMenu from "./FileMenu";
import EditorOutputSection from "./EditorOutputSection";

export default function Sections () {
    return (
        <div className="section-container">
            <FileMenu/>
            <EditorOutputSection/>
        </div>
    )
}
