import './HistoryBuy.css';
import UserApi from '../../../../API/User/UserApi';
import BookApi from '../../../../API/User/BookApi';
import { formatDateTime } from '../../../../utils/DateUtil';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HistoryBuy = () => {
    const [historyBuy, setHistoryBuy] = useState([]);
    const [book, setBook] = useState([]);

    useEffect(() => {
        UserApi.getPurchaseHistory()
            .then(res => {
                setHistoryBuy(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="container_history_buy_title">
                <div className="container_history_buy_title_paga">
                    <span>Lịch sử mua</span>
                </div>
            </div >
            <div className="container_user_history_buy_body_table">
                <table>
                    <thead>
                        <tr>
                            <th>Truyện</th>
                            <th>Chương</th>
                            <th>Giá</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyBuy?.map((item, index) => (
                            <tr key={index}>
                                <td><Link to={`/book/${item.chapter.bookId}`}>Xem truyện</Link></td>
                                <td><Link to={`/book/${item.chapter.bookId}/chapter/${item.chapter.id}`}>
                                    {item.chapter.title}</Link></td>
                                <td>{item.coin}</td>
                                <td>{formatDateTime(item.dateTime)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistoryBuy;