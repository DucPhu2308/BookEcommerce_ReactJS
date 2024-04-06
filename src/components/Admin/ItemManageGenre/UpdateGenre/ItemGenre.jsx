

const handleUpdateGenre = () => {
    setUpdateGenre(!updateGenre);
}
const handleSaveGenre = () => {
    setUpdateGenre(false);
}
const handleChangeInput = (e) => {
    setInputValue(e.target.value);
}

const ItemGenre = () => {
    const [updateGenre, setUpdateGenre] = useState(false);
    const [inputValue, setInputValue] = useState('');
    if (updateGenre) {
        return (
            <tr>
                <input type="text" value={inputValue} onChange={handleChangeInput} />
                <div className="option_content_table_btn_action">
                    <button onClick={handleSaveGenre}>
                        <i className="fas fa-save"></i>
                    </button>
                    <button onClick={handleUpdateGenre}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </tr>

        );
    }
    else {
        return (
            <tr>
                <td><span></span></td>
                <td className="option_content_table_btn_action">
                    <button onClick={handleUpdateGenre}>
                        <i className="fas fa-edit"></i>
                    </button>
                    <button>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

export default ItemGenre;