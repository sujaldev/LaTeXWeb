import React from "react";
import Editor from "./Editor";
import Output from "./Output";

export default function EditorOutputSection() {
    return (
        <div className="editor-output-section">
            <Editor/>
            <Output/>
        </div>
    );
}
