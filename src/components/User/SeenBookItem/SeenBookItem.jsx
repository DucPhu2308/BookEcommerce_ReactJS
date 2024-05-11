import "./SeenBookItem.css"
import PropTypes from 'prop-types';
import Reveal from "../../../components/utils/Reveal";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function SeenBookItem({ book }) {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div onClick={() => navigate(`/book/${book.id}`)} className="container_nav_2_seenBooks_item">
        <div className="container_nav_2_seenBooks_item_image">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="container_nav_2_seenBooks_item_discuss">
          <span className="title">{book.title}</span>
          <div className="container_nav_2_seenBooks_item_discuss_listChapter">
            {book.chapters.slice(0, 3).map((chapter, index) => (
              book.chapters.sort((a, b) => b.index - a.index),
              <span key={index}>Chương {chapter.index}: {chapter.title}</span>

            ))}
          </div>
        </div>
      </div>
    </Reveal>


  );
}

SeenBookItem.propTypes = {
  book: PropTypes.object.isRequired,
};



export default SeenBookItem;
