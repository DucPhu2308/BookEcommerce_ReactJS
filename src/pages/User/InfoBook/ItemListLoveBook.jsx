import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookItem from '../../../components/User/BookItem/BookItem';
import UserApi from '../../../API/User/UserApi';
const ItemListLoveBook = ({ listBook, book }) => {

    return (
        <ul>
            {listBook.map((item) => (
                book.id !== item.id && (
                    <li key={item.id}>
                        <Link to={`/book/${item.id}`}>
                            <div className="box_item_info_maybe_like">
                                <div className="box_item_info_maybe_like_image">
                                    <img src={item.coverImage} alt="book" />
                                </div>
                                <div className="box_item_info_maybe_like_title">
                                    <span className="title_bold">{item.title}</span>
                                    <span>{item.userOwn?.displayName}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            ))}
            
        </ul>
    )
}

export default ItemListLoveBook;