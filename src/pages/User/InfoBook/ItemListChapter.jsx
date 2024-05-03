import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ChapterApi from "../../../API/User/ChapterApi";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MonetizationOnRounded } from "@mui/icons-material";

const ItemListChapter = ({ list, checkEdit }) => {
    const [listChapter, setListChapter] = useState([]);
    const [edit, setEdit] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setListChapter(list);
    },[list]);

    const renderButton = (chapter) => {
        if (checkEdit) { // book owner
            return (
                <>
                    <Link to={`/detail-book/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                    <Link to={`/edit-chapter/${chapter.id}`}>
                        <button className="dark_btn_next">Edit</button>
                    </Link>
                    <button className="dark_btn_next">
                        <MonetizationOnRounded sx={{ fontSize: 20 }}  />
                        {chapter.price}
                    </button>
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
    // console.log(timeCreate);

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

                            {chapter.title}

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