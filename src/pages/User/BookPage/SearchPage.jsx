import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import SeenBookList from "../Home/UpdateBook_SeenBookList/SeenBookList/SeenBookList";
import './BookPage.css'
import { useState, useEffect } from "react";
import BookApi from "../../../API/User/BookApi";
import Pagination from './Pagination';
import GenreApi from "../../../API/Admin/GenreApi";

const colNumber = 3;
const recordsPerPage = 15;

const SearchPage = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedGenres, setSelectedGenres] = useState('');
    const [genres, setGenres] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

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
        if (selectedGenres.includes(value)) {
            setSelectedGenres(selectedGenres.filter(genreId => genreId !== value));
        } else {
            setSelectedGenres([...selectedGenres, value]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('searchText:', searchText, ', selectedGenres:', selectedGenres);
            const response = await BookApi.AdvancedSearch(searchText, selectedGenres.length > 0 ? selectedGenres : []);
            setSearchResults(response.data.data);
        } catch (error) {
            console.error('Error searching:', error);
        }
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
                                    type="text"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                    placeholder="Nhập từ khóa tìm kiếm"
                                />
                                <select multiple value={selectedGenres} onChange={handleGenreChange}>
                                    {genres.map(genre => (
                                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                                    ))}
                                </select>
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
