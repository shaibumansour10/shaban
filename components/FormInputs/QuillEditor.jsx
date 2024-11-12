import { useState } from "react";
import ReactQuill from "react-quill";
import React from "react-quill";
import "react-quill/dist/quill.swon.css"

const [content,setContent]= useState("");
//Custom Tool Bar
const modules ={
    toolbar:[
        [{header:[1,2, false]}],
        ["bold","italic","underline","strike","blockqoute"],
        [{list: "ordered"},{list: "bullet"}],
        ["link","color","image"],
        [{"code-block":true}],
        ["clean"],
    ],
};
const formats =[
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
];
{/*content */}
     <div className="sm:col-span-2">
        <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50">
            Blog content
        </label>
        <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}/>
     </div>
