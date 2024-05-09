import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MonetizationOnRounded } from "@mui/icons-material";
import { Switch, FormControlLabel } from "@mui/material";
import { UserContext } from "../../../providers/UserProvider";
import UpdatePriceDialog from "./UpdatePriceDialog";
import ConfirmBuyChapterDialog from "./ConfirmBuyChapterDialog";
import NotEnoughCoinDialog from "./NotEnoughCoinDialog";

const ItemListChapter = ({ list, checkEdit, onToggleActiveChapter, onBuyChapter }) => {
    const { user } = useContext(UserContext);
    const [edit, setEdit] = useState(false);
    const [buy, setBuy] = useState(false);
    const [notEnoughCoin, setNotEnoughCoin] = useState(false);
    const [visibleItems, setVisibleItems] = useState(3);
    const { idBook } = useParams();

    const handleBtnBuyClick = (chapter) => {
        if (user.coin < chapter.price) {
            setNotEnoughCoin(chapter.price - user.coin);
        }
        else {
            setBuy(chapter);
        }
    }
    const renderButton = (chapter) => {
        if (checkEdit) { // book owner
            return (
                <>
                    <Link to={`/book/${idBook}/chapter/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                    <Link to={`chapter/${chapter.id}/edit`}>
                        <button className="dark_btn_next">Edit</button>
                    </Link>
                    <button className="dark_btn_next" onClick={() => {
                        setEdit(chapter);
                    }}>
                        <MonetizationOnRounded sx={{ fontSize: 20 }} />
                        {chapter.price}
                    </button>
                </>

            )
        }
        else { // not book owner
            if (chapter.price > 0 && !chapter.bought) { // not buy
                return (
                    <>
                        <button className="dark_btn_next" onClick={() => handleBtnBuyClick(chapter)}>
                            <MonetizationOnRounded sx={{ fontSize: 20 }} />
                            {chapter.price}
                        </button>
                    </>
                )
            }
            return ( // bought or free
                <>
                    <Link to={`/book/${idBook}/chapter/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                </>
            )
        }
    }

    const timeCreate = document.querySelectorAll('.title_solid');
    

    const timeUpdate = (timeCreate, timeUpdate) => {
        if (timeCreate === timeUpdate) {
            return timeCreate;
        }
        else {
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
            {notEnoughCoin && <NotEnoughCoinDialog onClose={() => setNotEnoughCoin(false)} coinNeeded={notEnoughCoin} />}
            {edit && <UpdatePriceDialog onClose={() => setEdit(false)} chapter={edit} />}
            {buy && <ConfirmBuyChapterDialog onClose={() => setBuy(false)} chapter={buy} />}
            {list?.slice(0, visibleItems).map((chapter, index) => (
                list.sort((a, b) => a.index - b.index),
                <li key={index}>
                    {checkEdit && <FormControlLabel
                        control={<Switch onChange={() => onToggleActiveChapter(chapter, index)} checked={chapter.active} />} label="Phát hành" />}
                    <div className="box_item_info_chapter">
                        <span className="title_bold">Chương {chapter.index}:
                            {chapter.title}
                        </span>
                        <div className="box_item_info_chapter_right">
                            {renderButton(chapter)}
                            <span className="title_solid">
                                {timeUpdate(chapter.createdAt, chapter.updatedAt)}
                            </span>
                        </div>
                    </div>
                </li>
            ))}
            {visibleItems < list.length && (
                <div className="line_btn">
                    <button onClick={() => setVisibleItems(visibleItems + 3)}>Xem thêm</button>
                </div>
            )}

        </ul>
    )
};

export default ItemListChapter;