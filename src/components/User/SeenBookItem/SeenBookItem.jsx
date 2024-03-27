import "./SeenBookItem.css"
import PropTypes from 'prop-types';
import Reveal from "../../../components/utils/Reveal";
function SeenBookItem({ book }) {
  return (
    <Reveal>
      <div className="container_nav_2_seenBooks_item">
        <img src={book.coverImage} alt={book.title} />
        <div className="container_nav_2_seenBooks_item_discuss">
          <h2>{book.title}</h2>
          <span>add text</span>
        </div>
      </div>
    </Reveal>


  );
}

SeenBookItem.propTypes = {
  book: PropTypes.object.isRequired,
};



export default SeenBookItem;
