import './HistoryBuy.css';
const HistoryBuy = () => {
    return (
        <div>
            <div className="container_history_buy_title">
                <div className="container_history_buy_title_paga">
                    <span>Lịch sử mua</span>
                </div>
            </div >
            <div class="container_user_history_buy_body_table">
                <table>
                    <tr>
                        <th>Truyện</th>
                        <th>Chương</th>
                        <th>Giá</th>
                        <th>Thời gian</th>
                        <th>Xem chi tiết</th>
                    </tr>
                    <tr>
                        <td className="history_buy_col1">Truyện 1</td>
                        <td className="history_buy_col1">Chương 1</td>
                        <td className="history_buy_col2">10</td>
                        <td className="history_buy_col2">abc</td>
                        <td className="history_buy_col2">
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

export default HistoryBuy