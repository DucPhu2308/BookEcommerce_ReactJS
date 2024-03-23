import "./SeenBookItem.css"
import PropTypes from 'prop-types';

function SeenBookItem({ book }) {
  return (
    <div className="container_nav_2_seenBooks_item">
      <img src={book.coverImage} alt={book.title} />
      <div className="container_nav_2_seenBooks_item_discuss">
        <h2>{book.title}</h2>
        <span>add text</span>
      </div>
    </div>
  );
}

SeenBookItem.propTypes = {
  book: PropTypes.object.isRequired,
};



export default SeenBookItem;
