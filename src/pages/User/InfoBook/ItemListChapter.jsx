const chapterList = [
    {
        id: 1,
        name: "Chapter 1",
        date: "Date publish"
    },
    {
        id: 2,
        name: "Chapter 2",
        date: "Date publish"
    },
    {
        id: 3,
        name: "Chapter 3",
        date: "Date publish"
    },
    {
        id: 4,
        name: "Chapter 4",
        date: "Date publish"
    },
    {
        id: 5,
        name: "Chapter 5",
        date: "Date publish"
    }
];

const ItemListChapter = () => {
    return (
        <ul>
            {chapterList.map((chapter) => (
                <li key={chapter.id}>
                    <div className="box_item_info_chapter">
                        <span className="title_bold">{chapter.name}</span>
                        <span>{chapter.date}</span>
                    </div>
                </li>
            ))}

        </ul>
    )
};

export default ItemListChapter;