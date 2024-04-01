import './BanUser.css'


const BanUser = () => {

    return (
        <div className="container_reason_ban">
            <div className="container_reason_ban_box">
                <div className="container_reason_ban_box_header">
                    <span>Lý do cấm</span>
                </div>
                <div className="container_reason_ban_box_body">
                    <form action="index.php" method="post">
                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>

                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>

                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>
                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>
                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>
                        <div className="box_body_input_radio">
                            <input type="radio"/>
                                <label>Text 1</label>
                        </div>

                        <div className="container_reason_ban_box_actions">
                            <button type="submit">Cấm</button>
                            <button type="submit">Hủy</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
};

export default BanUser;