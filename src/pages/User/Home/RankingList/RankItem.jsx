import silvermedal from "@/assets/images/silvermedal.svg";
import bronzemedal from "@/assets/images/bronzemedal.svg";

const RankItem = ({ rank, book }) => {
  return (
    <div className="rank-item">
        {rank === 2 && <img className="medal-icon" src={silvermedal} alt="silvermedal" />}
        {rank === 3 && <img className="medal-icon" src={bronzemedal} alt="bronzemedal" />}
        {rank > 3 && <span className="rank-number">{rank}</span>}
      <span>{book.title}</span>
      <span className="view-number">lượt xem</span>
    </div>
  );
}

export default RankItem;