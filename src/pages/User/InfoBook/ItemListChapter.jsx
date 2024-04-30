import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ChapterApi from "../../../API/User/ChapterApi";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ItemListChapter = ({ list, checkEdit }) => {
    const [listChapter, setListChapter] = useState([]);
    const [edit, setEdit] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [updateChapter, setUpdateChapter] = useState(false);

    useEffect(() => {
        setListChapter(list);
    },[list]);


    const handleEditChapter = (id) => {
        console.log("edit")
        setEdit(id);
        setInputValue(list.find(item => item.id === id).title);
        setUpdateChapter(!updateChapter);
    }


    const renderEditButton = (chapter) => {
        if (edit === chapter.id) {
            return (
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            )
        }
        else {
            return (
                chapter.title
            )
        }
    }
    const handleUpdateChapter = async (id) => {
        const newChapter = {
            index: list.find(item => item.id === id).index,
            title: inputValue,
            price: list.find(item => item.id === id).price,
            book: list.find(item => item.id === id).bookId,
        }
        try {
            const response = await ChapterApi.updateChapter(newChapter, id);
            const updateList = list.map(item => {
                if (item.id === id) {
                    return response.data.data;
                }
                return item;
            });
            setListChapter(updateList);
            setUpdateChapter(!updateChapter);
            setEdit(null);
            toast.success('Cập nhật thành công');
        } catch (error) {
            console.log(error);
            toast.error('Cập nhật thất bại');
        }
    }

    const handleCancelUpdateChapter = () => {
        setEdit(null);
        setUpdateChapter(!updateChapter);
    }
    const renderButton = (chapter) => {
        if (edit === chapter.id) {
            return (
                <>
                    <button className="dark_btn_next" onClick={() => handleUpdateChapter(chapter.id)}>Update</button>
                    <button className="dark_btn_next" onClick={handleCancelUpdateChapter}>Cancel</button>

                </>

            )
        }

        if (checkEdit) {
            return (
                <>
                    <Link to={`/detail-book/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                    <Link to={`/edit-chapter/${chapter.id}`}>
                        <button className="dark_btn_next">Edit</button>
                    </Link>
                    <button className="dark_btn_next" onClick={() => handleEditChapter(chapter.id)}>Update</button>
                </>

            )
        }
        else {
            return (
                <>
                    <Link to={`/detail-book/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                </>
            )
        }
    }

    const timeCreate = document.querySelectorAll('.title_solid');
    console.log(timeCreate);

    const timeUpdate = (timeCreate,timeUpdate) => {
        if(timeCreate === timeUpdate){
            return timeCreate;
        }
        else{
            return timeUpdate;
        }
    }

    timeCreate.forEach((item) => {
        const newTime = new Date(item.textContent);
        const formatTime = newTime.toLocaleDateString();
        item.textContent = formatTime;
    });

    return (
        <ul>
            <ToastContainer />
            {listChapter.map((chapter, index) => (
                list.sort((a, b) => a.index - b.index),
                <li key={index}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">Chương {chapter.index}:

                            {renderEditButton(chapter)}

                        </span>

                        <div className="box_item_info_chapter_right">
                            {renderButton(chapter)}
                            <span className="title_solid">
                                {timeUpdate(chapter.createdAt,chapter.updatedAt)}
                            </span>
                        </div>


                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;