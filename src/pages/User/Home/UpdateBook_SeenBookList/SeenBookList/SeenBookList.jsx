import SeenBookItem from "@/components/User/SeenBookItem/SeenBookItem";
import './SeenBookList.css';

const maxSeenBooks = 3;
const listBooks = [
    {
      id: 1,
      title: "Truyện 1",
      coverImage: "https://picsum.photos/200",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://placehold.jp/150x150.png",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
    {
      id: 2,
      title: "Truyện 2",
      coverImage: "https://i.imgur.com/0y5CnXh.jpg",
    },
  ];

const SeenBookList = () => {
    return (
        <div className="container_nav_2_seenBooks">
              <div className="container_nav_2_seenBooks_title">
                <span>Truyện đã xem</span>
              </div>

              <ul>
                {/* display to maxSeenBooks */}
                {listBooks.slice(0, maxSeenBooks).map((book) => (
                  <li key={book.id}>
                    <SeenBookItem book={book} />
                  </li>
                ))}
              </ul>
            </div>
    )
}

export default SeenBookList;