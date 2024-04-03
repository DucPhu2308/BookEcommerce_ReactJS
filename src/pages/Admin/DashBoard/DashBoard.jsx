import { useEffect } from 'react'
import './DashBoard.css'

const DashBoard = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/src/pages/Admin/DashBoard/script.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [])
        
    return (
        
        <div className="container_admin_dashboard">
            <div className="container_admin_dashboard_1 boxes">
                <div className="container_admin_dashboard_1_box_item_left boxes">
                    <div className="container_admin_dashboard_1_box_item_left_title">
                        <span>Project Status</span>
                    </div>
                    <div className="container_admin_dashboard_1_box_item_left_doughnut">
                        <canvas id="myChartDashboard"></canvas>
                    </div>

                </div>

                <div className="container_admin_dashboard_1_box_item_right">
                    <div className="container_admin_dashboard_1_box_item right_up">
                        <div className="box_right">
                            <div className="box_right_icon">
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <span className="box_right_number">235235235</span>
                            <span className="box_right_content">Like</span>
                        </div>

                        <div className="box_right item_1">
                            <div className="box_right_icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <span className="box_right_number">64563247</span>
                            <span className="box_right_content">Comment</span>

                        </div>
                    </div>

                    <div className="container_admin_dashboard_1_box_item right_down">
                        <div className="box_right item_2">
                            <div className="box_right_icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <span className="box_right_number">235623462346</span>
                            <span className="box_right_content">View</span>
                        </div>

                        <div className="box_right item_3">
                            <div className="box_right_icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <span className="box_right_number">24235</span>
                            <span className="box_right_content">Content</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container_admin_dashboard_2  boxes" >
                <div className="container_admin_dashboard_2_title">
                    <span>Project Status</span>
                </div>
                <div className="container_admin_dashboard_2_chart">
                    <canvas id="myLineChart"></canvas>
                </div>   
            </div>
        </div>
    )
}

export default DashBoard