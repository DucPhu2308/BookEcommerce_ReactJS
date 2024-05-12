import './HistoryTrans.css';
import BankApi from '../../../../API/User/BankApi';
import { useEffect, useState } from 'react';
const HistoryTrans = () => {
    const [historyTrans, setHistoryTrans] = useState([]);
    const userId = JSON.parse(localStorage.getItem('user')).id;
    useEffect(() => {
        const fetchHistoryTrans = async () => {
            try {
                const response = await BankApi.getAllPaymentByUser(userId);
                // lọc nếu amount == null thì không hiển thị
                const data = response.data.data.filter(item => item.amount !== null);
                setHistoryTrans(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchHistoryTrans();
    }, [userId]);

    const convertDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleString();
    }
    return (
        <div>
            <div className="container_user_history_trans_title">
                <div className="container_user_history_trans_title_paga">
                    <span>Lịch sử nạp</span>
                </div>
            </div >
            <div className="container_user_history_trans_body_table">
                <table>
                    <thead>
                        <tr>
                            <th>Mã giao dịch</th>
                            <th>Số tiền</th>
                            <th>Số Coin</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyTrans.map((item, index) => (
                            <tr key={index}>
                                <td className="history_trans_col1">{item.id}</td>
                                <td className="history_trans_col1">{item.amount}</td>
                                <td className="history_trans_col2">{item.coin}</td>
                                <td className="history_trans_col2">{convertDateTime(item.dateTime)}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default HistoryTrans