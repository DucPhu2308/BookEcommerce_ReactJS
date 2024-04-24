

// eslint-disable-next-line react/prop-types
const ItemListChapter = ({list}) => {
    return (
        <ul>
            {list.map((chapter,index) => (
                <li key={index}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">Chương {chapter.index}: {chapter.title}</span>
                        <span>{chapter.createdAt}</span>
                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;