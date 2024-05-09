import React, { useState } from 'react';
import Reveal from "../../../components/utils/Reveal";
import BookItem from "../../../components/User/BookItem/BookItem";
import { Link } from 'react-router-dom';

const Pagination = ({ list, colNumber, recordsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(list.length / recordsPerPage);
    const records = list.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <table>
                <tbody>
                {records.map((book, index) => (
                    index % colNumber === 0 && (
                        <tr key={index / colNumber}>
                            {records.slice(index, index + colNumber).map((bookInRow, indexInRow) => (
                                <td key={indexInRow}>
                                    <Link to={`/book/${book.id}`}>
                                        <Reveal>
                                            <BookItem book={bookInRow} />
                                        </Reveal>
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    )
                ))}
                </tbody>
            </table>
            <nav>
                <ul className="book_page_pagination">
                    <li className="book_page_item">
                        <button className="book_page_link" onClick={handlePrevPage}>Prev</button>
                    </li>
                    <div className="book_page_number_container">
                        {[...Array(totalPages).keys()].map((n, i) => (
                            <li className="book_page_item" key={i}>
                                <button className={`book_page_link ${currentPage === n + 1 ? "active" : ""}`} onClick={() => setCurrentPage(n + 1)}>{n + 1}</button>
                            </li>
                        ))}
                    </div>
                    <li className="book_page_item">
                        <button className="book_page_link" onClick={handleNextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
