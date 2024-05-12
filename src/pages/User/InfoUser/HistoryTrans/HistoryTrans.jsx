import './HistoryTrans.css';
import { useEffect, useState } from 'react';
import UserApi from '../../../../API/User/UserApi';

const HistoryTrans = () => {
    // const [listTrans, setListTrans] = useState([]);
    // useEffect(() => {
    //     const fetchListTrans = async () => {
    //         try {
    //             const response = await UserApi.getPurchaseHistory();
    //             console.log(response);
    //             setListTrans(response.data.data);
    //         } catch (error) {
    //             console.log("Failed to fetch list Trans: ", error);
    //         }
    //     };
    //     fetchListTrans();
    // }, []);
    return (
        <div>
            <div className="container_user_history_trans_title">
                <div className="container_user_history_trans_title_paga">
                    <span>Lịch sử nạp</span>
                </div>
            </div >
            <div class="container_user_history_trans_body_table">
                <table>
                    <thead>
                        <tr>
                            <th>Mã giao dịch</th>
                            <th>Số Coin</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {listTrans.map((Trans, index) => ( */}
                        <tr>
                            <td className="history_trans_col1">11111</td>
                            <td className="history_trans_col1">10.000</td>
                            <td className="history_trans_col2">1000</td>
                        </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HistoryTrans