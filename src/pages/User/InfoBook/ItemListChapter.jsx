import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
const ItemListChapter = ({ list, checkEdit }) => {
    const [edit, setEdit] = useState(false);

    const handleEditChapter = async (id) => {
        setEdit(!edit);
    }

    const renderEditButton = (chapter) => {
        if (edit) {
            return (
                <input type="text" placeholder="Nhập tên chương" />
            )
        }
        else{
            return(
                chapter.title
            )
        }
    }

    const renderButton = (chapter) => {
        if (checkEdit) {
            return (
                <>
                    <Link to={`/detail-book/${chapter.id}`} >
                        <button className="dark_btn_next">Xem</button>
                    </Link>
                    <Link to={`/edit-chapter/${chapter.id}`}>
                        <button className="dark_btn_next">Edit</button>
                    </Link>
                    {/* <button className="dark_btn_next" onClick={()=>handleEditChapter(chapter.id)}>Update</button> */}
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

    timeCreate.forEach((item) => {
        const newTime = new Date(item.textContent);
        const formatTime = newTime.toLocaleDateString();
        item.textContent = formatTime;
    });

    return (
        <ul>
            {list.map((chapter, index) => (
                list.sort((a, b) => a.index - b.index),
                <li key={index}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">Chương {chapter.index}: 
                            
                            {renderEditButton(chapter)}
                        
                        </span>

                        <div className="box_item_info_chapter_right">
                            {renderButton(chapter)}
                            <span className="title_solid">{chapter.createdAt}</span>
                        </div>


                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;