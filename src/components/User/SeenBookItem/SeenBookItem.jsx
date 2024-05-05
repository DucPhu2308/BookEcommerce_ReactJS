import "./SeenBookItem.css"
import PropTypes from 'prop-types';
import Reveal from "../../../components/utils/Reveal";
import { useNavigate } from "react-router";
function SeenBookItem({ book }) {
  const navigate = useNavigate();
  return (
    <Reveal>
      <div onClick={() => navigate(`/infoBook/${book.id}`)} className="container_nav_2_seenBooks_item">
        <img src={book.coverImage} alt={book.title} />
        <div className="container_nav_2_seenBooks_item_discuss">
          <span className="title">{book.title}</span>
          <span>{book.description}</span>
        </div>
      </div>
    </Reveal>


  );
}

SeenBookItem.propTypes = {
  book: PropTypes.object.isRequired,
};



export default SeenBookItem;
