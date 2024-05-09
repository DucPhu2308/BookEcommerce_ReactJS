import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../../components/User/BookItem/BookItem';
const ItemListLoveBook = ({ listBook,  book }) => {
    const [Books, setBooks] = useState([]);
    
    useEffect(() => {
        const filteredList = listBook.filter((item) => item.id !== book.id && item.userOwn.id === book.userOwn?.id);

        setBooks(filteredList);
    }, [listBook, book]);



    return (
        <ul>
            {Books.map((book) => (
                <li key={book.id}>
                    <Link to={`/book/${book.id}`}>
                        <div className="box_item_info_maybe_like">
                            <div className="box_item_info_maybe_like_image">
                                <img src={book.coverImage} alt="book" />
                            </div>
                            <div className="box_item_info_maybe_like_title">
                                <span className="title_bold">{book.title}</span>
                                <span>{book.userOwn?.displayName}</span>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ItemListLoveBook;