const listGenre = [
    {
        id: 1,
        name: "Thể loại 1"
    },
    {
        id: 2,
        name: "Thể loại 2"
    },
    {
        id: 3,
        name: "Thể loại 3"
    },
    {
        id: 4,
        name: "Thể loại 4"
    }
];

const ItemListGenre = () => {
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