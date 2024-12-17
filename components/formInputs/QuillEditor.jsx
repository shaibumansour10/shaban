// import React from 'react';

// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"

// export default function QuillEditor({content,setContent,label,className}) {
   
//   const modules ={
//     toolbar:[
//         [{header:[1,2, false]}],   
//         ["bold","italic","underline","strike","blockqoute"],
//         [{list: "ordered"},{list: "bullet"}],
//         ["link","color","image"],
//         [{"code-block":true}],
//         ["clean"],
//     ],
// };
// const formats =[
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "link",
//   "indent",
//   "image",
//   "code-block",
//   "color",
// ];
//   return (
//     <div className={className}>
//       <label
//         htmlFor="content"
//         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
//       >
//        {label}
//       </label>
//       <div className="quill-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
//         <ReactQuill
//           theme="snow"
//           value={content}
//           onChange={setContent}
//           modules={modules}
//           formats={formats}
//           className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md"
//         />
//       </div>
//     </div>
//   )
// }
// import React, { useEffect, useRef, useState } from 'react';
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // import styles

// export default function QuillEditor({ content, setContent, label, className }) {
//   const editorRef = useRef(null);
//   const [editor, setEditor] = useState(null);

//   const modules = {
//     toolbar: [
//       [{ header: [1, 2, false] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       ['link', 'color', 'image'],
//       [{ 'code-block': true }],
//       ['clean'],
//     ],
//   };

//   const formats = [
//     'header',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'link',
//     'indent',
//     'image',
//     'code-block',
//     'color',
//   ];

//   useEffect(() => {
//     // Set up the editor instance if needed
//     if (editorRef.current) {
//       setEditor(editorRef.current.getEditor());
//     }
//   }, [editorRef]);

//   return (
//     <div className={className}>
//       <label
//         htmlFor="content"
//         className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50"
//       >
//         {label}
//       </label>
//       <div className="quill-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
//         <ReactQuill
//           ref={editorRef}
//           theme="snow"
//           value={content}
//           onChange={setContent}
//           modules={modules}
//           formats={formats}
//           className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-50 border border-gray-300 dark:border-gray-600 rounded-md"
//         />
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuillEditor() {
  const [content, setContent] = useState("");
//Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };
  const formats = [
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
     <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Blog Content
                </label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </div>
  )
}
