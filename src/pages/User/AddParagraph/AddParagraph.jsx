import { Container, TextField, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";
import "./AddParagraph.css";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import ItemParagraph from "./ItemParagraph";

var deletedParagraphs = [];

const AddParagraph = () => {
  const navigate = useNavigate();
  // get id from url
  const id = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await ChapterApi.getChapterById(id);
        setChapter(response.data.data);
      } catch (error) {
        console.log("Failed to fetch chapter: ", error);
      }
    };
    fetchChapter();

    const fetchParagraphs = async () => {
      try {
        const response = await ParagraphApi.getParagraphs(id);
        setParagraphs(response.data.data.length > 0 ? response.data.data : [{content: "", index: 0}]);
      } catch (error) {
        console.log("Failed to fetch paragraphs: ", error);
      }
    };
    fetchParagraphs();
  }, []);

  const [paragraphs, setParagraphs] = useState([]);
  const [chapter, setChapter] = useState("");
  const handleChange = (newContent, index) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index].content = newContent;
    setParagraphs(newParagraphs);
  }

  const onAddClick = () => {
    const newParagraphs = [...paragraphs, {content: "", index: paragraphs.length}];
    setParagraphs(newParagraphs);
  }
  const save = async () => {
    chapter.book = chapter.bookId;
    ChapterApi.updateChapter(chapter);
    paragraphs.forEach(async (paragraph, index) => {
      paragraph.chapter = id;
      paragraph.index = index; // re-index the paragraphs
      if (paragraph.id === undefined)
        await ParagraphApi.postParagraph(paragraph, id);
      else
        await ParagraphApi.updateParagraph(paragraph);
    });

    deletedParagraphs.forEach(async (id) => {
      await ParagraphApi.deleteParagraph(id);
    });
  }
  const quit = () => {
    navigate(`/infoBook/${chapter.bookId}`);
  }
  const handleSave = async () => {
    save().then(() => {
      toast.success("Đã lưu");
    });
  }
  const handleSaveAndQuit = async () => {
    save();
    quit();
  }
  
  const handleBtnDeleteClick = (index) => {
    const newParagraphs = paragraphs.filter((paragraph, i) => {
      if (i === index) {
        if (paragraph.id !== undefined) {
          deletedParagraphs.push(paragraph.id);
        }
        return false;
      }
      return true;
    });
    setParagraphs(newParagraphs);
  }
  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="container_add_paragraph_body">
        <div className="container_add_paragraph_taskbar">
          <ul>
            <li>
              <a href="addBook.html"> Thêm truyện</a>
            </li>
            <li>
              <div className="container_add_paragraph_taskbar_button">
                <button onClick={quit} className="white_btn_cancel">Hủy</button>
                <button onClick={handleSave} className="dark_btn_next">Lưu</button>
                <button onClick={handleSaveAndQuit} className="dark_btn_next">Lưu & Thoát</button>
              </div>
            </li>
          </ul>
        </div>
        <Box display="flex" justifyContent="center" flexDirection={"column"} alignItems={"center"}>
          <TextField
            hiddenLabel
            // center the text field
            sx={{ width: "60%"}}
            inputProps={{
              style: {
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              }
            }}
            value={chapter.title}
            onChange={(e) => setChapter({...chapter, title: e.target.value})}
            size="medium"
            placeholder="Tiêu đề chương"
            variant="standard"
          />
          {
            paragraphs.map((paragraph, index) => {
              return (
                <ItemParagraph key={index} 
                value={paragraph.content}
                onChange={(newContent) => handleChange(newContent, index)} 
                onBtnDeleteClick={() => handleBtnDeleteClick(index)}
                /> 
              )
            })
          }
          <Button sx={{marginTop: "10px"}} onClick={onAddClick} variant="contained" color="primary">Thêm đoạn</Button>
        </Box>
      </div>
    </DefaultLayout>
  );
};

export default AddParagraph;
