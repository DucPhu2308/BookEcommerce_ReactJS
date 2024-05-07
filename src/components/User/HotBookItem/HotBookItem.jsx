import './HotBookItem.css';

import PropTypes from 'prop-types';

function HotBookItem({ book }) {
    return (
        <div className="container_nav_1_listBooks_item">
            <img src={book.coverImage} alt={book.title} />
            <div className="container_nav_1_listBooks_item_discuss">
                <h2>{book.title}</h2>
                <div className="container_nav_1_listBooks_item_discuss_chapter">
                    {book.chapters.slice(0, 3).map((chapter, index) => (
                        <span key={index}>{chapter.title}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}



export default HotBookItem;