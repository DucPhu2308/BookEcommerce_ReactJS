
import { Link } from "react-router-dom";
const ItemListGenre = ({ listGenre }) => {
    return (
        <ul>
            {listGenre.map((genre) => (
                <li key={genre.id}>
                    <div className="box_item_info_genre">
                        <Link to={`/search?genre=${genre.id}`}>
                            <span>{genre.name}</span>
                        </Link>
                    </div>
                </li>
            ))
            }
        </ul>

    );
};

export default ItemListGenre;