import './AddChapter.css'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ChapterApi from '../../../API/User/ChapterApi'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import numeral from 'numeral'
const AddChapter = () => {
    const [addChapter, setAddChapter] = useState('')
    const [indexChapter, setIndexChapter] = useState(null)
    const [priceChapter, setPriceChapter] = useState('')
    const [listChapter, setListChapter] = useState([])
    const [submitAddChapter, setSubmitAddChapter] = useState(false)

    const nameBook = localStorage.getItem('nameBook')

    const handleSubmitGenre = () => {
        setSubmitAddChapter(!submitAddChapter)
        if(addChapter === '' || indexChapter === null || priceChapter === null){
            setSubmitAddChapter(false)
            toast.error('Vui lòng nhập đầy đủ thông tin')
        }
        else{
            const newChapter = {
                "title": addChapter,
                "price": priceChapter,
                "index": indexChapter,
                "book": localStorage.getItem('idBook')
            }
            setListChapter([...listChapter, newChapter])
            setAddChapter('')
            setIndexChapter(null)
            setPriceChapter('')
        }
    }
    
    const handleDeleteGenre = (index) => {
        const newListChapter = listChapter.filter((item, idx) => idx !== index)
        setListChapter(newListChapter)
    }

    // const saveAddBook = localStorage.getItem('newBook')
    // const newBook = saveAddBook ? JSON.parse(saveAddBook) : null
    // console.log(newBook);



    const handleChangeAddChapter = (e) => {
        setAddChapter(e.target.value)
    }
    const handleChangeIndexChapter = (e) => {
        setIndexChapter(e.target.value)
    }
    const handleChangePriceChapter = (e) => {
        setPriceChapter(e.target.value)
    }

    
    const handleAddChapterBook = async () => {
        for(let i=0; i<listChapter.length; i++){
            const newChapter = {
                "title": listChapter[i].title,
                "price": listChapter[i].price,
                "index": listChapter[i].index,
                "book": listChapter[i].book
            }
            try {
                ChapterApi.postChapter(newChapter).then((res) => {
                    console.log(res.data)
                    toast.success('Thêm chương thành công')
                })
                
            } catch (error) {
                console.log('Failed to add chapter: ', error)
                toast.error('Thêm chương thất bại')
            }
        }
        setListChapter([])
        
    }

    function amountCurrency(price){
        return numeral(price).format('0,0')
    }
    
    function checkDataListGenre(listGenre){
        if(listGenre.length === 0){
            return (
                <div >
                    <span style={{fontSize:'16px', fontFamily:'san-serif', fontWeight:'600'}}>Chưa có chương nào được thêm</span>
                </div>
            )
        }

    }

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
                                <input type="text" value={nameBook} style={{backgroundColor: '#b9b4b4e1'}} disabled/>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Chương số <input type="number" min="1" value={indexChapter} onChange={handleChangeIndexChapter} /> </span>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Nhập xu
                                    <input type="number" placeholder="Nhập xu" value={priceChapter} onChange={handleChangePriceChapter} />
                                    xu
                                </span>


                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_button">
                            <button onClick={handleSubmitGenre}>Thêm chương</button>
                        </div>
                    </div>
                    <div className="container_added_chapter_body">
                        <div className="container_added_chapter_title">
                            <span>Chương đã thêm</span>
                        </div>
                        <div className="container_added_chapter_list">
                            <div className="container_added_chapter_list_body">
                                
                                {checkDataListGenre(listChapter)}
                                {listChapter.map((item, index) => (
                                    <div className="container_added_chapter_list_body_item" key={index}>
                                        <div className="container_added_chapter_list_body_item_info">
                                            <span>Chương {item.index}: {item.title}</span>
                                            <span>Giá: {amountCurrency(item.price)} xu</span>
                                        </div>
                                        <div className="container_added_chapter_list_body_item_action">
                                            <button onClick={()=> handleDeleteGenre(index)}>xóa</button>
                                        </div>
                                    </div>
                                ))}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default AddChapter;