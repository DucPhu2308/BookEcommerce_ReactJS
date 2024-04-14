

// eslint-disable-next-line react/prop-types
const ItemListChapter = ({list}) => {
    return (
        <ul>
            {list.map((chapter,index) => (
                <li key={index}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">{chapter.title}</span>
                        <span>{chapter.date}</span>
                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;