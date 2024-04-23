import './AddChapter.css'
import DefaultLayout from '../../../layouts/DefaultLayout/DefaultLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ChapterApi from '../../../API/User/ChapterApi'
import numeral from 'numeral'
const AddChapter = () => {
    const [addChapter, setAddChapter] = useState('')
    const [indexChapter, setIndexChapter] = useState(null)
    const [priceChapter, setPriceChapter] = useState('')
    const [listChapter, setListChapter] = useState([])
    const [submitAddChapter, setSubmitAddChapter] = useState(false)

    const handleSubmitGenre = () => {
        setSubmitAddChapter(!submitAddChapter)
        if(addChapter === '' || indexChapter === null || priceChapter === ''){
            setSubmitAddChapter(false)
        }
        else{
            const newChapter = {
                "title": addChapter,
                "price": priceChapter,
                "index": indexChapter,
                "book": 104
            }
            setListChapter([...listChapter, newChapter])

        }
    }

    const handleDeleteGenre = (index) => {
        const newListChapter = listChapter.filter((item, idx) => idx !== index)
        setListChapter(newListChapter)
    }

    const saveAddBook = localStorage.getItem('newBook')
    const newBook = saveAddBook ? JSON.parse(saveAddBook) : null
    console.log(newBook);



    const handleChangeAddChapter = (e) => {
        setAddChapter(e.target.value)
    }
    const handleChangeIndexChapter = (e) => {
        setIndexChapter(e.target.value)
    }
    const handleChangePriceChapter = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // Lọc bỏ tất cả kí tự không phải số
        rawValue.replace(/đ/gi, '');
        const formattedValue = amountCurrency(rawValue);
        setPriceChapter(formattedValue)
    }

    
    const handleAddChapterBook = async () => {
        const newChapter = {
            "title": addChapter,
            "price": priceChapter,
            "index": indexChapter,
            "book": 104
        }
        try {
            const response = await ChapterApi.postChapter(newChapter)
            console.log(response.data)
        } catch (error) {
            console.log('Failed to add chapter: ', error)
        }
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
            <div className="container_add_chapter_body">
                <div className="container_add_chapter_taskbar">
                    <ul>
                        <li>
                            <a href="addBook.html"> Thêm truyện</a>
                        </li>
                        <li>
                            <div className="container_add_chapter_taskbar_button">
                                <button className="white_btn_cancel">Hủy</button>
                                <button className="dark_btn_next" onClick={handleAddChapterBook}>Tiếp theo</button>
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
                                <input type="text" value="Thạch và những người bạn" style={{backgroundColor: '#b9b4b4e1'}} disabled/>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Chương số <input type="number" min="1" value={indexChapter} onChange={handleChangeIndexChapter} /> </span>
                            </div>
                        </div>
                        <div className="container_add_chapter_box_form_input">
                            <div className="container_add_chapter_box_form_input_name">
                                <span>Nhập giá tiền
                                    <input type="text" placeholder="Nhập giá tiền" value={priceChapter} onChange={handleChangePriceChapter} />
                                    VNĐ
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
                                            <span>Giá: {amountCurrency(item.price)} VNĐ</span>
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