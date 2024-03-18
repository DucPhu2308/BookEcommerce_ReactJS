function BookItem({ book }) {
    return (
        <div className="container_nav_2_listBooks_item">
            <img src={book.coverImage} alt={book.name}/>
            <div className="container_nav_2_listBooks_item_discuss">
                <h2>{book.name}</h2>
                <span>{book.description}</span>
            </div>
        </div>
    );
}

export default BookItem;