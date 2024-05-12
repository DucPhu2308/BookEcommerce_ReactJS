import React, { useState, useEffect } from 'react';
import Reveal from "../../../components/utils/Reveal";
import BookItem from "../../../components/User/BookItem/BookItem";
import { Link } from 'react-router-dom';

const Pagination = ({ list }) => {
    const colNumber = 3;
    const recordsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const calculateColNumber = () => {
        if (windowWidth < 1100) {
            return 1;
        } else if (windowWidth < 1600) {
            return 2;
        } else {
            return colNumber;
        }
    };

    const totalPages = Math.ceil(list.length / recordsPerPage);
    const records = list.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);
    const calculatedColNumber = calculateColNumber();

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
        <div className="book_page_pagination_container">
            <table>
                <tbody>
                    {records.map((book, index) => (
                        index % calculatedColNumber === 0 && (
                            <tr key={index / calculatedColNumber}>
                                {records.slice(index, index + calculatedColNumber).map((bookInRow, indexInRow) => (
                                    <td key={indexInRow}>
                                        <Link to={`/book/${bookInRow.id}`}>
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
        </div>
    );
};

export default Pagination;
