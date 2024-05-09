import './BookItem.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MonetizationOnRounded } from '@mui/icons-material';
import ConfirmBuyChapterDialog from '../../../pages/User/InfoBook/ConfirmBuyChapterDialog';
function BookItem({ book }) {
    
    return (
        <div className="container_nav_2_listBooks_item">
            <div className="container_nav_2_listBooks_item_image">
                <img src={book.coverImage} alt={book.title} />
            </div>
            <div className="container_nav_2_listBooks_item_discuss">
                <h2>{book.title}</h2>
                <div className="container_nav_2_listBooks_item_discuss_chapter">
                    {book.chapters.slice(0, 3).map((chapter, index) => (
                        book.chapters.sort((a, b) => b.index - a.index),
                        <span key={index}>Chương:{chapter.index} {chapter.title}</span>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default BookItem;