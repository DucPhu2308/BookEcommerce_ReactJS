import { useState, useEffect } from 'react'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import GenreApi from '../../../API/Admin/GenreApi'
import './AddBook.css'
import BookApi from '../../../API/User/BookApi'
const AddBook = () => {
    const [listGenre, setListGenre] = useState([]);
    const [listGenreAdded, setListGenreAdded] = useState([]);
    const [addBook, setAddBook] = useState('');
    const [addDescription, setAddDescription] = useState('');

    const handleChangeAddInput = (e) => {
        setAddBook(e.target.value);
    }
    const handleChangeDescriptionInput = (e) => {
        setAddDescription(e.target.value);
    }

    const handleAddBook = () => {
        const newBook = {
            "title": addBook,
            "description": addDescription,
            "coverImage": "image.png",
            "genresDto": listGenreAdded.map(genre => genre.id),
            "authorsDto": [1],
            "userOwn": 1
        }
        const addBookApi = async () => {
            try {
                const response = await BookApi.postBook(newBook);
                console.log(response);
            } catch (error) {
                console.log('Failed to add book: ', error);
            }
        }
        addBookApi();   
    }






    const handleDeleteGenreAdded = (genreId) => {
        const newListGenreAdded = listGenreAdded.filter(genre => genre.id !== genreId);
        setListGenreAdded(newListGenreAdded);
    }

    const handleChangeClick = (e) => {
        const genreId = e.target.value;
        const genreName = e.target.options[e.target.selectedIndex].text;
        const genre = { id: genreId, name: genreName };
        setListGenreAdded([...listGenreAdded, genre]);
    }

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await GenreApi.getAll();
                setListGenre(response.data);
            } catch (error) {
                console.log('Failed to fetch genre: ', error);
            }
        }
        fetchGenre();
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/User/AddBook/script.jsx";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])
    return (
        <DefaultLayout>
            <div className="container_addBook_body">
                <div className="container_addBook_taskbar">
                    <ul>
                        <li>
                            <a href="addBook.html">
                                <i className="fas fa-arrow-left"></i>
                                Thêm truyện</a>
                        </li>
                        <li>
                            <div className="container_addBook_taskbar_button">
                                <button className="dark">Hủy</button>
                                <button className="white" onClick={handleAddBook}>Tiếp theo</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="container_addBook_nav">
                    <div className="container_addBook_nav_image">
                        <div className="image_form">
                            <span>+ Add image</span>
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
                                            <input type="text" name="bookName" placeholder="Nhập tiêu đề" value={addBook} onChange={handleChangeAddInput} />
                                        </div>
                                    </div>
                                    <div className="container_addBook_nav_form_box_body_item">
                                        <div className="container_addBook_nav_form_box_body_item_name">
                                            <span>Mô tả</span>
                                        </div>
                                        <div className="container_addBook_nav_form_box_body_item_input">
                                            <textarea name="bookDescription" placeholder="Nhập mô tả truyện" value={addDescription} onChange={handleChangeDescriptionInput}></textarea>
                                        </div>
                                    </div>
                                    <div className="container_addBook_nav_form_box_body_item select_option">

                                        <div className="container_addBook_nav_form_box_body_item_name">
                                            <span>Thể loại</span>
                                        </div>
                                        <div className="container_addBook_nav_form_box_body_item_input">
                                            <select name="bookType" id="bookType" onChange={handleChangeClick} >
                                                {listGenre.map((genre) => (
                                                    <option key={genre.id} value={genre.id}>{genre.name}</option>
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
                                                            <div className="item_box_close" onClick={() => handleDeleteGenreAdded(genre.id)}>
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
    )
}

export default AddBook