import './HistoryTrans.css';
const HistoryTrans = () => {
    return (
        <div>
            <div className="container_user_history_trans_title">
                <div className="container_user_history_trans_title_paga">
                    <span>Lịch sử nạp</span>
                </div>
            </div >
            <div class="container_user_history_trans_body_table">
                <table>
                    <tr>
                        <th>Mã giao dịch</th>
                        <th>Số tiền</th>
                        <th>Số Coin</th>
                        <th>Thời gian</th>
                        <th>Xem chi tiết</th>
                    </tr>
                    <tr>
                        <td className="history_trans_col1">123456</td>
                        <td className="history_trans_col1">10.000</td>
                        <td className="history_trans_col2">1000</td>
                        <td className="history_trans_col2">abc</td>
                        <td className="history_trans_col2">
                            <button>
                                <i className="fas fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default HistoryTrans