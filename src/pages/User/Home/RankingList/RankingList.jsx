import "./RankingList.css";
import RankItem from "./RankItem";
import goldmedal from "@/assets/images/goldmedal.svg";
import Reveal from "../../../../components/utils/Reveal";

import { useNavigate } from "react-router";
const RankingList = ({ title, list }) => {
    const navigate = useNavigate();

    const handleBookClick = (book) => {
        navigate(`/infoBook/${book.id}`);
    };

    return (
        <div className="card">
            <div className="card-title">
                <span>{title}</span>
            </div>
            <Reveal>
                {
                list.length > 0 &&
                <div onClick={() => handleBookClick(list[0])} className="rank-1">
                    <img className="medal-icon" src={goldmedal} alt="goldmedal" />
                    {/* TODO: change img src */}
                    <img className="item-image" src={list[0].coverImage} alt={list[0].title} />
                    <div className="rank-1-info">
                        <div className="item-title">{list[0].title}</div>
                        <div className="view-number">lượt xem</div>
                    </div>
                </div>
                }
            </Reveal>

            <div className="rank-list">
                {list.slice(1, 9).map((book, index) => (
                    <RankItem onClick={() => handleBookClick(book)} key={index} rank={index + 2} book={book} />
                ))}
            </div>

        </div>
    );
}

export default RankingList;