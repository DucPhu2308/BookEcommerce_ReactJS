import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import './BookPage.css'
import { useState, useEffect } from "react";
import BookApi from "../../../API/User/BookApi";
import Pagination from './Pagination';
import GenreApi from "../../../API/Admin/GenreApi";

const colNumber = 3;
const recordsPerPage = 15;

const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedGenreNames, setSelectedGenreNames] = useState([]);

    useEffect(() => {
        async function fetchgenre() {
            try {
                const response = await GenreApi.getAll();
                setGenres(response.data.data);
            } catch (error) {
                console.error("Error fetching genre:", error);
            }
        }

        fetchgenre();
    }, []);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleGenreChange = (event) => {
        const { value } = event.target;
        const isSelected = selectedGenres.includes(value);

        if (isSelected) {
            setSelectedGenres(selectedGenres.filter(genreId => genreId !== value));
            setSelectedGenreNames(selectedGenreNames.filter(genreName => genreName !== genres.find(genre => genre.id === parseInt(value)).name));
        }
        else {
            setSelectedGenres([...selectedGenres, value]);
            setSelectedGenreNames([...selectedGenreNames, genres.find(genre => genre.id === parseInt(value)).name]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('searchText:', searchText, ', selectedGenres:', selectedGenres);
            const response = await BookApi.AdvancedSearch(searchText, selectedGenres);
            setSearchResults(response.data.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
    };

    const renderGrid = () => {
        const numCols = 4;
        const numRows = Math.ceil(genres.length / numCols);

        const grid = [];

        for (let i = 0; i < numRows; i++) {
            const row = [];
            for (let j = 0; j < numCols; j++) {
                const index = i * numCols + j;
                if (index < genres.length) {
                    const genre = genres[index];
                    row.push(
                        <label key={genre.id}>
                            <input type="checkbox" value={genre.id} onChange={handleGenreChange} />
                            {genre.name}
                        </label>
                    );
                }
            }
            grid.push(<div className="dropdown-row" key={i}>{row}</div>);
        }

        return grid;
    };

    return (
        <>
            <DefaultLayout>
                <div className="container_body">
                    <NavigationBar />
                    <div className="container_nav_2">
                        <div className="book_page_list">
                            <div className="book_page_list_title">
                                Tìm kiếm nâng cao
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="book_page_list_search_box"
                                    type="text"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                    placeholder="Nhập từ khóa tìm kiếm"
                                />
                                <div className="book_page_list_dropdown">
                                    <button>Chọn thể loại</button>
                                    <div className="book_page_list_dropdown_content">
                                        {renderGrid()}
                                    </div>
                                </div>
                                <button type="submit">Tìm kiếm</button>
                            </form>
                            <div className="book_page_list_title">
                                Kết quả tìm kiếm
                            </div>
                            {searchResults.length === 0 ? (
                                <div className="book_page_list_notice">
                                    Không tìm thấy truyện
                                </div>
                            ) : (
                                <Pagination
                                    list={searchResults}
                                    colNumber={colNumber}
                                    recordsPerPage={recordsPerPage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

export default SearchPage;
