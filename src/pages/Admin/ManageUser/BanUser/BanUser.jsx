import ManageUser from '../ManageUser';
import './BanUser.css'
import { useState } from 'react';

const BanUser = () => {

    // const [isBan, setIsBan] = useState(false);
    const [cancel, setCancel] = useState(false);

    const handleCancel = () => {
        setCancel(true);
    }

    if(cancel) {
        return (<ManageUser />);
    }

    const handleBan = () => {
        // setIsBan(true);
        alert("Ban user");
    }
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
                            <button type="submit" onClick={handleBan}>Cấm</button>
                            <button type="submit" onClick={handleCancel}>Hủy</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
};

export default BanUser;