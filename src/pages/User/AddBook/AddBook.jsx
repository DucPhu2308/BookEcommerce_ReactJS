import { useState, useEffect } from 'react'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import GenreApi from '../../../API/Admin/GenreApi'
import './AddBook.css'
import BookApi from '../../../API/User/BookApi'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AddBook = () => {
    const [listGenre, setListGenre] = useState([]);
    const [listGenreAdded, setListGenreAdded] = useState([]);
    const [addBook, setAddBook] = useState('');
    const [addDescription, setAddDescription] = useState('');
    const [addImage, setAddImage] = useState('');

    const handleChangeAddInput = (e) => {
        setAddBook(e.target.value);
    }
    const handleChangeDescriptionInput = (e) => {
        setAddDescription(e.target.value);
    }
    const handleImage = (e) => {
        setAddImage(e.target.value);
    }

    const handleAddBook = () => {
        const user = localStorage.getItem('user');
        if (!user) {
            toast.error('Vui lòng đăng nhập để thêm truyện');
            return;
        }
        else if (addBook === '' || addDescription === '' || listGenreAdded.length === 0 ) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        else {
            const genres = []
            listGenreAdded.map((genre) => {
                genres.push(genre.id)
            })
            const book = {
                title: addBook,
                description: addDescription,
                coverImage: addImage,
                genresDto: genres,
            }
            BookApi.postBook(book)
                .then((res) => {
                    setAddBook('');
                    setAddDescription('');
                    setListGenreAdded([]);
                    console.log(res.data);
                    toast.success('Thêm truyện thành công');
                })
                .catch((err) => {
                    console.log(err.response.data.message);
                    toast.error('Thêm truyện thất bại');
                });
        }



    }






    const handleDeleteGenreAdded = (genreId) => {
        const newListGenreAdded = listGenreAdded.filter(genre => genre.id !== genreId);
        setListGenreAdded(newListGenreAdded);
    }

    const handleChangeClick = (e) => {
        const genreId = parseInt(e.target.value);
        const genre = listGenre.find(genre => genre.id === genreId);
        const isExist = listGenreAdded.find(genre => genre.id === genreId);
        if (!isExist) {
            setListGenreAdded([...listGenreAdded, genre]);
        }
    }

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await GenreApi.getAll();
                setListGenre(response.data.data);
            } catch (error) {
                console.log('Failed to fetch genre: ', error);
                toast.error('Lỗi khi lấy dữ liệu thể loại');
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
            <ToastContainer />
            {listGenre.length === 0 ? (
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            ) : null}
            <div className="container_addBook_body">
                <div className="container_addBook_taskbar">
                    <ul>
                        <li>
                            <span>Thêm truyện</span>
                        </li>
                        <li>
                            <div className="container_addBook_taskbar_button">
                                <Link to="/my-books">
                                    <button className="dark">Quay lại</button>
                                </Link>
                                <button className="white" onClick={handleAddBook}>Lưu</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="container_addBook_nav">
                    <div className="container_addBook_nav_image">
                        <div className="image_form">
                            {/* <span>+ Add image</span> */}
                            <img src="#" alt="" id="imageInput" />
                        </div>
                        <input type="file" name="image" id="imageFile" accept="image/*" value={addImage} onChange={handleImage}/>

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
                                                <option value="0">Chọn thể loại</option>
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