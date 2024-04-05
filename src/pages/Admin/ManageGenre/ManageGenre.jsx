import './ManageGenre.css'
import { useState } from 'react';

const listGenre = [
    {
        id: 1,
        name: 'Thể loại 1'
    },
    {
        id: 2,
        name: 'Thể loại 2'
    },
];

const ManageGenre = () => {
    const [updateGenre, setUpdateGenre] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [addGenre, setAddGenre] = useState(false);
    const [genre, setGenre] = useState(listGenre);
    const [editingGenre, setEditingGenre] = useState(null); 
    const [addInputValue, setAddInputValue] = useState('');

    const handleUpdateGenre = (id) => {
        setUpdateGenre(!updateGenre);
        setEditingGenre(id); 
    }

    const handleAddGenre = () => {
        setAddGenre(!addGenre);
        setAddInputValue('');
        if (addInputValue === '') {
            setAddGenre(true);
        }
        else {
            const newGenre = {
                id: genre.length + 1,
                name: addInputValue
            };
            setGenre([...genre, newGenre]);
        }

    }
    const handleChangeAddInput = (event) => {
        setAddInputValue(event.target.value);

    }
    const handleCancelAddGenre = () => {
        setAddGenre(false);
    }


    const handleSaveGenre = () => {
        const updatedGenres = genre.map(item => {
            if (item.id === editingGenre) {
                return { ...item, name: inputValue }; 
            }
            return item;
        });
        setGenre(updatedGenres); 
        setEditingGenre(null); 
        setUpdateGenre(false); 
    }
    const handleCancelSaveGenre = () => {
        setEditingGenre(null); 
        setUpdateGenre(false); 
    }

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleDeleteGenre = (id) => {
        const updatedGenres = genre.filter(item => item.id !== id);
        setGenre(updatedGenres); 
    }





    const renderAddGenre = () => {
        if (addGenre) {
            return (
                <tr>
                    <td>
                        <input type="text" placeholder="Nhập tên thể loại" value={addInputValue} onChange={handleChangeAddInput} />
                    </td>
                    <td className="option_content_table_btn_action">
                        <button onClick={handleAddGenre}>
                            <i className="fas fa-save"></i>
                        </button>
                        <button onClick={handleCancelAddGenre}>
                            <i className="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
            );
        }
    }

    return (
        <div className="container_admin_option">
            <div className="container_admin_option_body">
                <div className="container_admin_option_title">
                    <div className="container_admin_option_title_item">
                        <span>Quản lý thể loại</span>
                    </div>
                    <div className="container_admin_option_title_search">
                        <input type="text" placeholder="Tìm kiếm" />
                        <button>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="container_admin_option_content">
                    <div className="container_admin_option_content_add">
                        <button onClick={handleAddGenre}>Thêm thể loại</button>
                    </div>
                    <div className="container_admin_option_content_table">
                        <table>
                            {renderAddGenre()}
                            {genre.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        {editingGenre === item.id ? ( 
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={handleChangeInput}
                                            />
                                        ) : (
                                            <span>{item.name}</span>
                                        )}
                                    </td>
                                    <td className="option_content_table_btn_action">
                                        {editingGenre === item.id ? ( 
                                            <>
                                                <button onClick={handleSaveGenre}>
                                                    <i className="fas fa-save"></i>
                                                </button>
                                                <button onClick={handleCancelSaveGenre}>
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </>

                                        ) : (
                                            <>
                                                <button onClick={() => handleUpdateGenre(item.id)}> 
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button onClick={() => handleDeleteGenre(item.id)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </>

                                        )}

                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageGenre





