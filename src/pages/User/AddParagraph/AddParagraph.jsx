import "./AddParagraph.css";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import ItemParagraph from "./ItemParagraph";
import { Container, TextField, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";

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
        // setParagraphs(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Failed to fetch paragraphs: ", error);
      }
    };
    fetchParagraphs();
  }, []);

  const [paragraphs, setParagraphs] = useState([""]);
  const [chapter, setChapter] = useState("");
  const handleChange = (newContent, index) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = newContent;
    setParagraphs(newParagraphs);
  }

  const onAddClick = () => {
    const newParagraphs = [...paragraphs, ""];
    setParagraphs(newParagraphs);
  }

  return (
    <DefaultLayout>
      <div className="container_add_paragraph_body">
        <div className="container_add_paragraph_taskbar">
          <ul>
            <li>
              <a href="addBook.html"> Thêm truyện</a>
            </li>
            <li>
              <div className="container_add_paragraph_taskbar_button">
                <button className="white_btn_cancel">Hủy</button>
                <button onClick={() => navigate(`infoBook/${chapter.b}`)} className="dark_btn_next">Tiếp theo</button>
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
            size="medium"
            placeholder="Tiêu đề chương"
            variant="standard"
          />
          {
            paragraphs.map((paragraph, index) => {
              console.log(paragraphs);
              return (
                <ItemParagraph key={index} 
                value={paragraph}
                onChange={(newContent) => handleChange(newContent, index)} 
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
