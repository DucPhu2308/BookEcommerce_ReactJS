import {
  Container,
  TextField,
  Box,
  Button,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

import ParagraphApi from "../../../API/User/ParagraphApi";
import ChapterApi from "../../../API/User/ChapterApi";
import UploadApi, { UploadType } from "../../../API/User/UploadApi";
import "./AddParagraph.css";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import ItemParagraph from "./ItemParagraph";

var deletedParagraphs = [];

const AddParagraph = () => {
  const [loading, setLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);
  const [chapter, setChapter] = useState("");
  const navigate = useNavigate();
  const { idChap } = useParams();

  

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await ChapterApi.getChapterById(idChap);
        setChapter(response.data.data);
      } catch (error) {
        console.log("Failed to fetch chapter: ", error);
      }
    };
    fetchChapter();


    const fetchParagraphs = async () => {
      try {
        const response = await ParagraphApi.getParagraphs(idChap);
        setParagraphs(
          response.data.data.length > 0
            ? response.data.data
            : [{ content: "", index: 0 }]
        );
      } catch (error) {
        console.log("Failed to fetch paragraphs: ", error);
      }
    };
    fetchParagraphs();
  }, []);

  
  const handleChange = (newContent, index) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index].content = newContent;
    setParagraphs(newParagraphs);
  };

  const onAddClick = () => {
    const newParagraphs = [
      ...paragraphs,
      { content: "", index: paragraphs.length },
    ];
    setParagraphs(newParagraphs);
  };

  const getFileFromImgTag = (imgTag) => {
    // get file from img tag
    const file = imgTag.split(",")[1].slice(0, -2);
    // create file from base64
    const byteCharacters = atob(file);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    const fileData = new File([blob], "image.png", { type: "image/png" });
    return fileData;
  };
  const getImgTagBase64FromStr = (str) => {
    if (!str) return null;
    const imgRegex = /<img src="data:image\/.*;base64,.*">/g;
    const imgTags = str.match(imgRegex);
    return imgTags;
  };
  const getImgTagUrlFromStr = (str) => {
    if (!str) return null;
    const imgRegex = /<img src=".*">/g;
    const imgTags = str.match(imgRegex);
    return imgTags;
  };
  const save = async () => {
    chapter.book = chapter.bookId;
    ChapterApi.updateChapter(chapter, chapter.id);

    for (let index = 0; index < paragraphs.length; index++) {
      const paragraph = paragraphs[index];
      // check if paragraph contain img tag in base64
      const imgTags = getImgTagBase64FromStr(paragraph.content);
      if (imgTags) {
        for (const imgTag of imgTags) {
          const fileData = getFileFromImgTag(imgTag);
          // upload file
          const response = await UploadApi.uploadFile(
            fileData,
            UploadType.PARAGRAPH
          );
          const imageUrl = response.data.data;
          const newContent = `<img src="${imageUrl}">`;
          paragraph.content = paragraph.content.replace(imgTag, newContent);
        }
      }

      paragraph.chapter = idChap;
      paragraph.index = index; // re-index the paragraphs
      if (paragraph.id === undefined)
        await ParagraphApi.postParagraph(paragraph, idChap);
      else await ParagraphApi.updateParagraph(paragraph);

      const newParagraphs = [...paragraphs];
      newParagraphs[index] = paragraph;
      setParagraphs(newParagraphs);
    }

    for (const paragraph of deletedParagraphs) {
      const imgTags = getImgTagUrlFromStr(paragraph.content);
      console.log(imgTags);
      if (imgTags !== null) {
        for (const imgTag of imgTags) {
          // get file url from img tag
          const fileUrl = imgTag.split('"')[1];
          // delete file
          await UploadApi.deleteFile(fileUrl);
        }
      }
      await ParagraphApi.deleteParagraph(idChap);
    }
    deletedParagraphs = [];
  };
  const quit = () => {
    navigate(`/book/${chapter.bookId}`);
  };
  const handleSave = async () => {
    setLoading(true);
    save().then(() => {
      setLoading(false);
      toast.success("Đã lưu");
    });
  };
  const handleSaveAndQuit = async () => {
    setLoading(true);
    save().then(() => {
      setLoading(false);
      toast.success("Đã lưu");
      quit();
    });
  };

  const handleBtnDeleteClick = (index) => {
    const newParagraphs = paragraphs.filter((paragraph, i) => {
      if (i === index) {
        if (paragraph.id !== undefined) {
          deletedParagraphs.push(paragraph);
        }
        return false;
      }
      return true;
    });
    setParagraphs(newParagraphs);
  };

  return (
    <DefaultLayout>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <ToastContainer />
      <div className="container_add_paragraph_body">
        <div className="container_add_paragraph_taskbar">
          <ul>
            <li>
              <span> Viết truyện </span>
            </li>
            <li>
              <div className="container_add_paragraph_taskbar_button">
                <button onClick={quit} className="white_btn_cancel">
                  Hủy
                </button>
                <button onClick={handleSave} className="dark_btn_next">
                  Lưu
                </button>
                <button onClick={handleSaveAndQuit} className="dark_btn_next">
                  Lưu & Thoát
                </button>
              </div>
            </li>
          </ul>
        </div>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TextField
            hiddenLabel
            // center the text field
            sx={{ width: "60%" }}
            inputProps={{
              style: {
                fontWeight: "bold",
                fontSize: "20px",
                textAlign: "center",
              },
            }}
            value={chapter.title}
            onChange={(e) => setChapter({ ...chapter, title: e.target.value })}
            size="medium"
            placeholder="Tiêu đề chương"
            variant="standard"
          />
          {paragraphs.map((paragraph, index) => {
            return (
              <ItemParagraph
                key={index}
                value={paragraph.content}
                onChange={(newContent) => handleChange(newContent, index)}
                onBtnDeleteClick={() => handleBtnDeleteClick(index)}
              />
            );
          })}
          <Button
            sx={{ marginTop: "10px" }}
            onClick={onAddClick}
            variant="contained"
            color="primary"
          >
            Thêm đoạn
          </Button>
        </Box>
      </div>
    </DefaultLayout>
  );
};

export default AddParagraph;
