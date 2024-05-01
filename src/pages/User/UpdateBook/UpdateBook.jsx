import "../AddBook/AddBook.css";
import { Link } from "react-router-dom";
import DefaultLayout from "../../../layouts/DefaultLayout/DefaultLayout";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import BookAPI from "../../../API/User/BookApi";
import GenreAPI from "../../../API/Admin/GenreApi";
import UploadApi, { UploadType } from "../../../API/User/UploadApi";
import PlaceholderImage from "@/assets/images/placeholder-image.png";

const UpdateBook = () => {
  const idBook = window.location.pathname.split("/")[2];
  const [listGenre, setListGenre] = useState([]);
  const [updateNameBook, setUpdateNameBook] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const [listGenreAdded, setListGenreAdded] = useState([]);
  const [imgSrc, setImgSrc] = useState(PlaceholderImage);

  useEffect(() => {
    BookAPI.getBookById(idBook)
      .then((res) => {
        setUpdateNameBook(res.data.data.title);
        setUpdateDescription(res.data.data.description);
        setListGenreAdded(res.data.data.genres);
        setImgSrc(res.data.data.coverImage);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast.error("Lấy thông tin truyện thất bại");
      });
  }, [idBook]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const response = await GenreAPI.getAll();
        setListGenre(response.data.data);
      } catch (error) {
        console.log("Failed to fetch genre: ", error);
        toast.error("Lấy thông tin thể loại thất bại");
      }
    };
    fetchGenre();
  }, []);

  const handleUpdateBook = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("Vui lòng đăng nhập để cập nhật truyện");
      return;
    } else if (
      updateNameBook === "" ||
      updateDescription === "" ||
      listGenreAdded.length === 0
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    } else {
      const genres = [];
      listGenreAdded.map((genre) => {
        genres.push(genre.id);
      });

      

      const book = {
        title: updateNameBook,
        description: updateDescription,
        genresDto: genres,
      };

      // upload image
      const file = imgSrc.split(",")[1].slice(0, -2);
      const byteCharacters = atob(file);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/png" });
      const fileData = new File([blob], "image.png", { type: "image/png" });
      const res = await UploadApi.uploadFile(fileData, UploadType.BOOK)
      if (res.status === 200) {
        setImgSrc(res.data.data);
        book.coverImage = res.data.data;
      } else {
        toast.error("Upload ảnh thất bại");
        return;
      }

      BookAPI.updateBook(idBook, book)
        .then((res) => {
          console.log(res.data);
          toast.success("Cập nhật truyện thành công");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Cập nhật truyện thất bại");
        });
    }
  };

  const handleChangeClick = (e) => {
    const genreId = e.target.value;
    const genre = listGenre.find((genre) => genre.id === parseInt(genreId));
    const isExist = listGenreAdded.find(
      (genre) => genre.id === parseInt(genreId)
    );
    if (!isExist) {
      setListGenreAdded([...listGenreAdded, genre]);
    }
  };

  const handleChangeUpdateInput = (e) => {
    setUpdateNameBook(e.target.value);
  };

  const handleChangeDescriptionInput = (e) => {
    setUpdateDescription(e.target.value);
  };

  const handleDeleteGenreAdded = (id) => {
    const newListGenreAdded = listGenreAdded.filter((genre) => genre.id !== id);
    setListGenreAdded(newListGenreAdded);
  };

  const imageSelectedHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImgSrc(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <DefaultLayout>
      <ToastContainer />
      <div className="container_addBook_body">
        <div className="container_addBook_taskbar">
          <ul>
            <li>
              <span>Cập nhật truyện</span>
            </li>
            <li>
              <div className="container_addBook_taskbar_button">
                <Link to="/my-books">
                  <button className="dark">Quay lại</button>
                </Link>
                <button className="white" onClick={handleUpdateBook}>
                  Lưu
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="container_addBook_nav">
          <div className="container_addBook_nav_image">
            <div className="image_form">
                <img src={imgSrc} alt="cover" />
              <Button variant="contained" component="label">
                Upload File
                <input onChange={imageSelectedHandler} type="file" accept="image/*" hidden />
              </Button>
            </div>
          </div>
          <div className="container_addBook_nav_form">
            <div className="container_addBook_nav_form_box">
              <div className="container_addBook_nav_form_box_title">
                <div className="container_addBook_nav_form_box_paga">
                  <span>Chi tiết truyện</span>
                </div>
              </div>
              <div className="container_addBook_nav_form_box_body">
                <form action="#">
                  <div className="container_addBook_nav_form_box_body_item">
                    <div className="container_addBook_nav_form_box_body_item_name">
                      <span>Tiêu đề</span>
                    </div>
                    <div className="container_addBook_nav_form_box_body_item_input">
                      <input
                        type="text"
                        name="bookName"
                        placeholder="Nhập tiêu đề"
                        value={updateNameBook}
                        onChange={handleChangeUpdateInput}
                      />
                    </div>
                  </div>
                  <div className="container_addBook_nav_form_box_body_item">
                    <div className="container_addBook_nav_form_box_body_item_name">
                      <span>Mô tả</span>
                    </div>
                    <div className="container_addBook_nav_form_box_body_item_input">
                      <textarea
                        name="bookDescription"
                        placeholder="Nhập mô tả truyện"
                        value={updateDescription}
                        onChange={handleChangeDescriptionInput}
                      ></textarea>
                    </div>
                  </div>
                  <div className="container_addBook_nav_form_box_body_item select_option">
                    <div className="container_addBook_nav_form_box_body_item_name">
                      <span>Thể loại</span>
                    </div>
                    <div className="container_addBook_nav_form_box_body_item_input">
                      <select
                        name="bookType"
                        id="bookType"
                        onChange={handleChangeClick}
                      >
                        <option value="0" disabled>
                          Chọn thể loại
                        </option>
                        {listGenre.map((genre) => (
                          <option key={genre.id} value={genre.id}>
                            {genre.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="container_addBook_nav_form_box_body_item">
                    <div className="container_addBook_nav_form_box_body_item_name">
                      <span>Danh sách thể loại được thêm</span>
                    </div>
                    <div className="container_addBook_nav_form_box_body_item_box">
                      <ul>
                        {listGenreAdded.map((genre) => (
                          <li key={genre.id}>
                            <div className="addGenreItem_box">
                              <span>{genre.name}</span>
                              <div
                                className="item_box_close"
                                onClick={() => handleDeleteGenreAdded(genre.id)}
                              >
                                <i className="fas fa-times"></i>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default UpdateBook;
