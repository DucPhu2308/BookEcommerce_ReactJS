import './BookItem.css';
import PropTypes from 'prop-types';
function BookItem({ book }) {
    return (
        <div className="container_nav_2_listBooks_item">
            <img src={book.coverImage} alt={book.title} />
            <div className="container_nav_2_listBooks_item_discuss">
                <h2>{book.title}</h2>
                <span>{book.description}</span>
            </div>
        </div>
    );
}

export default BookItem;