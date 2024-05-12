import silvermedal from "@/assets/images/silvermedal.svg";
import bronzemedal from "@/assets/images/bronzemedal.svg";
import Reveal from "../../../../components/utils/Reveal";
import VisibilityIcon from '@mui/icons-material/Visibility';

const RankItem = ({ rank, book, onClick }) => {
  return (
    <Reveal>
      <div onClick={onClick} className="rank-item">
        {rank === 2 && <img className="medal-icon" src={silvermedal} alt="silvermedal" />}
        {rank === 3 && <img className="medal-icon" src={bronzemedal} alt="bronzemedal" />}
        {rank > 3 && <span className="rank-number">{rank}</span>}
        <span className="item-title">{book.title}</span>
        <span className="view-number">{book.views} lượt xem</span>
      </div>
    </Reveal>

  );
}

export default RankItem;