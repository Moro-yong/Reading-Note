 const modules = {
  toolbar:[
      [{ header: [1, 2, 3, false] }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ color: ["#f8f8f2", "#000"] }, { background: ["#f8f8f2", "#000"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["code", "code-block"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
  ],
  imageResize: {
    parchment: {
      image: {
        attributes: ["width", "height"]
      }
    },
    modules: ["Resize", "DisplaySize"]
  }
};
export default modules

// export const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "code-block",
//   "list",
//   "bullet",
//   "link",
//   "image",
//   "color",
//   "Background",
//   "size",
//   "align",
//   "code",
// ];
