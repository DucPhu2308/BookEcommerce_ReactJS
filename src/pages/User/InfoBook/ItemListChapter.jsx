import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ItemListChapter = ({list}) => {
    
    return (
        <ul>
            {list.map((chapter,index) => (
                list.sort((a,b) => a.index - b.index),
                <li key={index}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">Chương {chapter.index}: {chapter.title}</span>
                        
                        <span className="title_solid">{chapter.createdAt}</span>
                        <Link to={`/edit-chapter/${chapter.id}`}>
                            <button className="dark_btn_next">Edit</button>
                        </Link>
                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;