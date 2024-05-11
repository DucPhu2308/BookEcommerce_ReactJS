import './HotBookItem.css';
import {Link} from 'react-router-dom';

function HotBookItem({ book }) {
    return (
        <div className="container_nav_1_listBooks_item_hot">
            <div className="container_nav_1_listBooks_item_hot_image">
                <img src={book.coverImage} alt={book.title} />
            </div>
            
            <div className="container_nav_1_listBooks_item_hot_discuss">
                <h2>{book.title}</h2>
                <div className="container_nav_1_listBooks_item_discuss_hot_chapter">
                    {book.chapters.slice(0, 3).map((chapter, index) => (
                        book.chapters.sort((a, b) => b.index - a.index),
                        <span key={index}>Chương {chapter.index}: {chapter.title}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default HotBookItem;