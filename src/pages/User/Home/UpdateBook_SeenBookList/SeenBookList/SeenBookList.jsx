import SeenBookItem from "@/components/User/SeenBookItem/SeenBookItem";
import './SeenBookList.css';




const SeenBookList = ({ list, max }) => {
  if(!list) return null;
  return (
    
    <div className="container_nav_2_seenBooks">
      <div className="container_nav_2_seenBooks_title">
        <span>Truyện đã xem</span>
      </div>

      <ul>
        {/* display to maxSeenBooks */}
        {list.slice(0, max).map((book, index) => (
          <li key={index}>
            <SeenBookItem book={book.bookRead} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SeenBookList;