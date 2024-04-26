import GenreApi from '../../../API/Admin/GenreApi';
import './ManageGenre.css'
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const ManageGenre = () => {
    const [updateGenre, setUpdateGenre] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [addGenre, setAddGenre] = useState(false);
    const [genre, setGenre] = useState([]);
    const [editingGenre, setEditingGenre] = useState(null);
    const [addInputValue, setAddInputValue] = useState('');

    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response = await GenreApi.getAll();
                setGenre(response.data.data);
            } catch (error) {
                console.log(error);
                toast.error('Lấy thông tin thể loại thất bại');
            }
        }
        fetchGenre();
    }, [updateGenre]);

    const handleUpdateGenre = (id) => {
        setEditingGenre(id);
        setUpdateGenre(!updateGenre);
        setInputValue(genre.find(item => item.id === id).name);
    }
    const handleAddGenre = async (event) => {
        event.preventDefault();

        setAddGenre(!addGenre);
        setAddInputValue('');
        if (addInputValue === '') {
            setAddGenre(true);
        }
        else {
            const newGenre = {
                name: addInputValue,
                color: '#000000'
            };
            setGenre([...genre, newGenre]);
            try {
                const response = await GenreApi.addGenre(newGenre);
                toast.success('Thêm thể loại thành công');
                setGenre([...genre, response.data]);
                setAddGenre(false);
                setAddInputValue('');

            } catch (error) {
                console.log(error);
            }
        }

    }
    const handleChangeAddInput = (event) => {
        setAddInputValue(event.target.value);

    }
    const handleCancelAddGenre = () => {
        setAddGenre(false);
    }


    const handleSaveGenre = async (id) => {
        setEditingGenre(null);
        setUpdateGenre(false);
        const newGenre = {
            name: inputValue,
            color: '#000000'
        };
        try {
            const response = await GenreApi.updateGenre(id, newGenre);
            toast.success('Cập nhật thể loại thành công');
            const newGenres = genre.map((item) =>
                item.id === id ? response.data : item
            );
            setGenre(newGenres);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancelSaveGenre = () => {
        setEditingGenre(null);
        setUpdateGenre(false);
    }

    const handleChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const handleDeleteGenre = (id) => {
        const confirm = window.confirm('Bạn có chắc chắn muốn xóa thể loại này không?');
        if (!confirm) return;
        const newGenres = genre.filter((item) => item.id !== id);
        setGenre(newGenres);
        try {
            GenreApi.deleteGenre(id);
            toast.success('Xóa thể loại thành công');
        } catch (error) {
            console.log(error);
            toast.error('Xóa thể loại thất bại');
        }
    }


    const renderAddGenre = () => {
        if (addGenre) {
            return (
                <tr>
                    <td>
                        <input id="inputFilter" type="text" placeholder="Nhập tên thể loại" value={addInputValue} onChange={handleChangeAddInput} />
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

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/Admin/ManageGenre/script.jsx";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [genre]);

    return (
        <>
            <ToastContainer />
            <div className="container_admin_option">
                <div className="container_admin_option_body">
                    <div className="container_admin_option_title">
                        <div className="container_admin_option_title_item">
                            <span>Quản lý thể loại</span>
                        </div>
                        <div className="container_admin_option_title_search">
                            <input id="inputFilter" type="text" placeholder="Tìm kiếm" />
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
                                {genre.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            {editingGenre === item.id ? (
                                                <>
                                                    <input
                                                        type="text"
                                                        value={inputValue}
                                                        onChange={handleChangeInput}
                                                    />
                                                </>


                                            ) : (
                                                <span>{item.name}</span>
                                            )}
                                        </td>
                                        <td className="option_content_table_btn_action">
                                            {editingGenre === item.id ? (
                                                <>
                                                    <button onClick={() => handleSaveGenre(item.id)}>
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
        </>

    );
}

export default ManageGenre





