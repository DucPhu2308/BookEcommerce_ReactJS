import './AddChapter.css'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ChapterApi from '../../../API/User/ChapterApi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import numeral from 'numeral'
import BookApi from '../../../API/User/BookApi'
const AddChapter = () => {
    const [addChapter, setAddChapter] = useState('')
    const [indexChapter, setIndexChapter] = useState('')
    const [priceChapter, setPriceChapter] = useState('')
    const [listBook, setListBook] = useState([])
    const [idBook, setIdBook] = useState(localStorage.getItem('idBook'))








    const handleChangeAddChapter = (e) => {
        setAddChapter(e.target.value)
    }
    const handleChangeIndexChapter = (e) => {
        setIndexChapter(e.target.value)
    }
    const handleChangePriceChapter = (e) => {
        setPriceChapter(e.target.value)
    }
    const handleChangeClick = (e) => {
        setIdBook(e.target.value)
    }


    const handleAddChapterBook = async () => {

        const user = localStorage.getItem('user')
        if (!user) {
            toast.error('Vui lòng đăng nhập để thêm chương')
            return;
        }
        if (addChapter === '' || indexChapter === '' || priceChapter === '' || idBook === null || idBook === '0') {
            // setSubmitAddChapter(false)
            toast.error('Vui lòng nhập đầy đủ thông tin')
        }

        const newChapter = {
            "title": addChapter,
            "price": priceChapter,
            "index": indexChapter,
            "book": idBook
        }

        try {
            ChapterApi.postChapter(newChapter).then((res) => {
                toast.success('Thêm chương thành công')
                setAddChapter('')
                setIndexChapter('')
                setPriceChapter('')
                window.location.href = '/book/' + idBook + '/chapter/' + res.data.data.id + '/edit'
            })

        } catch (error) {
            toast.error('Thêm chương thất bại')
        }



    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        const fetchData = async () => {
            try {
                const response = await BookApi.getBookByUserId(user.id)
                setListBook(response.data.data)
            } catch (error) {
                console.log('Failed to fetch data: ', error)
            }
        }
        fetchData()
    }, [])

    return (
        <DefaultLayout>
            <ToastContainer />
            <div className="container_add_chapter_body">
                <div className="container_add_chapter_taskbar">
                    <ul>
                        <li>

                            <span>Thêm chương</span>
                        </li>
                        <li>
                            <div className="container_add_chapter_taskbar_button">
                                <Link to="/my-books">
                                    <button className="white_btn_cancel">Quay lại</button>
                                </Link>
                                <button className="dark_btn_next" onClick={handleAddChapterBook}>Lưu</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="container_add_chapter_box_body">
                    <div className="container_add_chapter_box_form">
                        <div className="container_add_chapter_box_form_title">
                            <span>Thêm chương</span>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Tiêu đề chương</span>
                            </div>
                            <div className="container_add_chapter_box_form_input_input">
                                <input type="text" placeholder="Nhập tiêu đề chương" value={addChapter} onChange={handleChangeAddChapter} />
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Sách</span>
                            </div>
                            <div className="container_add_chapter_box_form_input_input">
                                <select name="bookType" id="bookType" onChange={handleChangeClick} value={idBook}>
                                    <option value="0" >Chọn sách</option>
                                    {listBook.map((item, index) => (
                                        <option value={item.id} key={index}>{item.title}</option>
                                    ))}

                                </select>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Chương số <input placeholder="Nhập chương" type="number" min="1" value={indexChapter} onChange={handleChangeIndexChapter} /> </span>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Nhập xu
                                    <input type="number" placeholder="Nhập xu" value={priceChapter} min="0" onChange={handleChangePriceChapter} />
                                    xu
                                </span>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </DefaultLayout>
    )
}

export default AddChapter;