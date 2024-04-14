import './Notification.css';
const Notification = () => {
    return (
        <div>
            <div className="container_user_notification_title">
                <div className="container_user_notification_title_paga">
                    <span>Thông báo</span>
                </div>
            </div >
            <div class="container_user_notification_body_table">
                <table>
                    <tr>
                        <th>Nội dung</th>
                        <th>Thời gian</th>
                    </tr>
                    <tr>
                        <td className="notification_col1">ancáđâsđâsđấ</td>
                        <td className="notification_col2">abc</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Notification