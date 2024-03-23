import "./RankingList.css";
import RankItem from "./RankItem";
import goldmedal from "@/assets/images/goldmedal.svg";

const RankingList = ({title, list}) => {
    return (
        <div className="card">
            <div className="card-title">
                <span>{title}</span>
            </div>
            <div className="rank-1">
                <img className="medal-icon" src={goldmedal} alt="goldmedal" />
                <img className="item-image" src={list[0].coverImage} alt={list[0].title} />
                <div className="rank-1-info">
                    <div className="item-title">{list[0].title}</div>
                    <div className="view-number">lượt xem</div>
                </div>
            </div>
            <div className="rank-list">
                {list.slice(1, 9).map((book, index) => (
                    <RankItem key={index} rank={index + 2} book={book} />
                ))}
            </div>
            
        </div>
    );
}

export default RankingList;