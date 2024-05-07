import { useState, useEffect } from 'react';

const ItemListLoveBook = ({listBook, userOwn}) => {
    const [Books, setBooks] = useState([]);
    useEffect(() => {
        const filteredList = listBook.filter(book => book.userOwn?.id === userOwn);
        setBooks(filteredList);
    },[listBook]);

    
        
    return (
        <ul>
            {Books.map((book) => (
                <li key={book.id}>
                    <div className="box_item_info_maybe_like">
                        <div className="box_item_info_maybe_like_image">
                            <img src={book.coverImage} alt="book" />
                        </div>
                        <div className="box_item_info_maybe_like_title">
                            <span className="title_bold">{book.title}</span>
                            <span>{book.userOwn?.displayName}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ItemListLoveBook;