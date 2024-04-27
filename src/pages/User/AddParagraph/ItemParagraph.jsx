import ReactQuill from "react-quill";
import { useState, useRef } from "react";
import { Button } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import "./ItemParagraph.css";

const ItemParagraph = ({value, onChange, onBtnDeleteClick}) => {
  const [showBtn, setShowBtn] = useState(false);
  const editorRef = useRef(null);
  const handleFocus = () => {
    setShowBtn(true);
    editorRef.current.classList.add("show-toolbar");
  };

  const handleBlur = () => {
    setShowBtn(false);
    editorRef.current.classList.remove("show-toolbar");
  };
  const toolbarOptions = [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <div
        style={{ width: "60%", height: "auto", marginTop: "20px", textAlign: "center"}}
        ref={editorRef}
        className="quill-container"
        // onMouseEnter={() => setShowBtn(true)}
        // onMouseLeave={() => setShowBtn(false)}
      >
        <ReactQuill
          theme="snow"
          placeholder="Nội dung chương"
          onFocus={handleFocus}
          onBlur={handleBlur}
          modules={modules}
          value={value}
          onChange={(newContent) => onChange(newContent)}
          
        />
        {showBtn && <Button onClick={onBtnDeleteClick} variant="contained" color="primary">Xóa</Button>}
      </div>
      
    </>
  );
};

export default ItemParagraph;
