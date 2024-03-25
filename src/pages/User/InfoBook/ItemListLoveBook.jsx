const loveBook = [
    {
        id: 1,
        title: "Title",
        coverImage: "book.jpg",
        author: "Author 1"
    },
    {
        id: 2,
        title: "Title",
        coverImage: "book.jpg",
        author: "Author 2"
    },
    {
        id: 3,
        title: "Title",
        coverImage: "book.jpg",
        author: "Author 3"
    },
    {
        id: 4,
        title: "Title",
        coverImage: "book.jpg",
        author: "Author 4"
    }
];

const ItemListLoveBook = () => {
    return (
        <ul>
            {loveBook.map((book) => (
                <li key={book.id}>
                    <div className="box_item_info_maybe_like">
                        <div className="box_item_info_maybe_like_image">
                            <img src={book.coverImage} alt="book" />
                        </div>
                        <div className="box_item_info_maybe_like_title">
                            <span className="title_bold">{book.title}</span>
                            <span>{book.author}</span>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ItemListLoveBook;