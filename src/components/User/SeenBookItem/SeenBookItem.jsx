import "./SeenBookItem.css"

function SeenBookItem({ book }) {
  return (
    <div class="container_nav_2_seenBooks_item">
      <img src={book.image} alt={book.title} />
      <div class="container_nav_2_seenBooks_item_discuss">
        <h2>{book.title}</h2>
        <span>add text</span>
      </div>
    </div>
  );
}

export default SeenBookItem;
