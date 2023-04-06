import { useRef, useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ImageResize } from "quill-image-resize-module-ts";
import modules from "./modules";

Quill.register("modules/imageResize", ImageResize);

const EditorComponent = () => {
  const quillRef = useRef<ReactQuill>(null);
  const [contents, setContents] = useState("");

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      if(input.files) {
        const file = input.files[0];
        const range = quillRef.current?.getEditor().getSelection()?.index;
        const rangeNum = Number(range)
        const formData = new FormData();
        formData.append("image", file);

        // 이미지를 서버로 보내서 저장된 url을 반환받아야 합니다.
        // fetch에 사용되는 uri가 없으니 주석으로 해두었습니다.
        // fetch("/", { method: "post", headers: {}, body: formData})
        //   .then((res) => JSON.stringify(res))
        //   .then((json) => {
            const url = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcaT8C5%2FbtrwDO3sbDf%2Fx5Pf5TRKkbZuCpFE5sEIeK%2Fimg.png"
            
            if (range !== null || range !== undefined) {
              const quill = quillRef.current?.getEditor();
              const image = `<img src=${url} alt="이미지" width="30%"/>`
              quill?.clipboard.dangerouslyPasteHTML(rangeNum, image);
            }

        //     quillRef.current?.getEditor().deleteText(rangeNum, 1);
        //     quillRef.current?.getEditor().insertEmbed(rangeNum, "image", url);
        //     quillRef.current?.getEditor().setSelection(rangeNum, rangeNum + 1);
        //   }
        // )
        // .catch(e => quillRef.current?.getEditor().deleteText(rangeNum, 1));
      }
    };
  };

  useEffect(()=>{
    if (quillRef.current) {
      const toolbar = quillRef.current.getEditor().getModule("toolbar");
      toolbar.addHandler("image", imageHandler);
    }
  },[])

  return (
      <ReactQuill
        ref={quillRef}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
        style={{width:"80vw"}}
      />
  );
};
export default EditorComponent;
