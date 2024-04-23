

const ItemListGenre = ({listGenre}) => {
    return (
        <ul>
            {listGenre.map((genre) => (
                <li key={genre.id}>
                    <div className="box_item_info_genre">
                        <span>{genre.name}</span>
                    </div>
                </li>
            ))
            }
        </ul>

    );
};

export default ItemListGenre;