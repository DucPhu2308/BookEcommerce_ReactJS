import './HotBookItem.css';

import PropTypes from 'prop-types';

function HotBookItem({ book }) {
    return (
        <div className="container_nav_1_listBooks_item">
            <img src={book.coverImage} alt={book.title} />
                <div className="container_nav_1_listBooks_item_discuss">
                    <h2>{book.title}</h2>
                    <span>{book.title}</span>
                </div>
        </div>
    )
}

HotBookItem.propTypes = {
    book: PropTypes.object.isRequired
};

export default HotBookItem;