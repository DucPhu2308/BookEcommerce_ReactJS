import './ItemBoxSearchName.css'


const ItemBoxSearchName = ({ book }) => {
    return (
        <div className="header_search_keybox_item">
            <div className="header_search_keybox_item_image">
                <img src={book.coverImage} alt="image" />
            </div>
            <div className="header_search_keybox_item_info">
                <h3>{book.title}</h3>
                <span>Tác giả: {book.userOwn?.displayName}</span>
            </div>
        </div>
    )
}

export default ItemBoxSearchName