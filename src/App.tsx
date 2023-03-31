import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyComponent() {
  const [value, setValue] = useState("");
  // console.log(value);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
    />
  );
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    [
      {
        color: ["#f8f8f2", "#000"],
      },
      {
        background: ["#f8f8f2", "#000"],
      },
    ],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["code", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      // { indent: "-1" },
      // { indent: "+1" },
      { align: [false, "center", "right"] },
    ],
    ["link", "image"],
    // ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "code-block",
  "list",
  "bullet",
  // "indent",
  "link",
  "image",
  "color",
  "Background",
  "size",
  "align",
  "code",
];
