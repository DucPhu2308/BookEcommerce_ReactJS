import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import NavigationBar from "@/components/User/NavigationBar/NavigationBar";
import './BookPage.css';
import BookApi from "../../../API/User/BookApi";
import Pagination from './Pagination';
import GenreApi from "../../../API/Admin/GenreApi";

const SearchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialGenreId = searchParams.get("genre");
    const initialSearchText = searchParams.get("title");

    const [searchText, setSearchText] = useState(initialSearchText || '');
    const [selectedGenres, setSelectedGenres] = useState(initialGenreId ? initialGenreId.split(',') : []);
    const [genres, setGenres] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedGenreNames, setSelectedGenreNames] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await GenreApi.getAll();
                setGenres(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        setSelectedGenres(initialGenreId ? initialGenreId.split(',') : []);
    }, [initialGenreId]);

    useEffect(() => {
        handleSubmit();
    }, [selectedGenres]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    // Handle search when user press Enter
    const handleSearchBoxKeyDown = (event) => {
        if (event.key === 'Enter') {

            handleSubmit();
        }
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
        if (event) {
            event.preventDefault();
        }
        try {
            const response = await BookApi.AdvancedSearch(searchText, selectedGenres);
            setSearchResults(response.data.data);
            let params = `?title=${searchText}&`;
            if (selectedGenres.length > 0) {
                params += `genre=${selectedGenres.join(',')}`;
            }
            window.history.pushState({}, '', `/search${params}`);
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
                            <input type="checkbox" value={genre.id} onChange={handleGenreChange} checked={selectedGenres.includes(String(genre.id))} />
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
        <DefaultLayout>
            <div className="container_body">
                <NavigationBar genres={genres} />
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
                                onKeyDown={handleSearchBoxKeyDown}
                                placeholder="Nhập từ khóa tìm kiếm"
                            />
                            <div className="book_page_list_dropdown">
                                <button>Chọn thể loại</button>
                                <div className="book_page_list_dropdown_content">
                                    {renderGrid()}
                                </div>
                            </div>
                        </form>
                        <div className="book_page_list_title">
                            Kết quả tìm kiếm
                        </div>
                        {searchResults.length === 0 ? (
                            <div className="book_page_list_notice">
                                Không tìm thấy truyện nào phù hợp
                            </div>
                        ) : (
                            <Pagination
                                list={searchResults}
                            />
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default SearchPage;
