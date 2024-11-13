import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

export default function QuillEditor({content,setContent,label,className}) {
   
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
  return (
    <div className={className}>
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
      >
       {label}
      </label>
      <div className="quill-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md"
        />
      </div>
    </div>
  )
}
