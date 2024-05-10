import React, { useEffect, useState, useRef } from 'react';
import './DashBoard.css';

const DashBoard = () => {
    const [numberContent, setNumberContent] = useState(0);
    const [numberView, setNumberView] = useState(0);
    const [numberComment, setNumberComment] = useState(0);
    const [numberLike, setNumberLike] = useState(0);

    const counterRef = useRef(null); // Step 1: Create a ref for the counter element
    const chartDashboardRef = useRef(null);
    const chartLineRef = useRef(null);

    useEffect(() => {
        if (chartDashboardRef.current) {
            // Step 2: Integrate script logic for pie chart using the ref
            const ctx = chartDashboardRef.current.getContext('2d');
            const data = {
                labels: ['Like', 'Comment', 'View', 'Content'],
                datasets: [{
                    label: 'Project Status',
                    data: [numberLike, numberComment, numberView, numberContent],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            };
            const options = {
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            };
            new Chart(ctx, {
                type: 'pie',
                data: data,
                options: options
            });
        }
    }, [chartDashboardRef.current, numberContent, numberView, numberComment, numberLike]);
    useEffect(() => {
        const fetchNumberContent = async () => {
            try {
                setNumberContent(100);
            } catch (error) {
                console.log("Failed to fetch number content: ", error);
            }
        }
        fetchNumberContent();

        const fetchNumberView = async () => {
            try {
                setNumberView(1000);
            } catch (error) {
                console.log("Failed to fetch number view: ", error);
            }
        }
        fetchNumberView();

        const fetchNumberComment = async () => {
            try {
                setNumberComment(100);
            } catch (error) {
                console.log("Failed to fetch number comment: ", error);
            }
        }
        fetchNumberComment();

        const fetchNumberLike = async () => {
            try {
                setNumberLike(100);
            } catch (error) {
                console.log("Failed to fetch number like: ", error);
            }
        }
        fetchNumberLike();
    }, []);

    useEffect(() => {
        if (counterRef.current) {
            // Step 2: Integrate script logic using the ref
            const counterItems = counterRef.current.querySelectorAll(".box_right_number");

            counterItems.forEach((item) => {
                var finalValue = parseInt(item.innerText.replace(/\./g, ""), 10);
                var duration = 2;
                var decimalPlaces = 0;
                var step = finalValue / (duration * 1000 / 150);

                function formatNumber(number) {
                    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                function updateCounter() {
                    var value = 0;
                    var interval = setInterval(function () {
                        value = value + step;
                        item.innerText = formatNumber(value.toFixed(decimalPlaces));
                        if (value >= finalValue) {
                            clearInterval(interval);
                            item.innerText = formatNumber(finalValue);
                        }
                    }, 50);
                }

                updateCounter();
            });
        }
    }, [counterRef.current]);

    return (
        <div className="container_admin_dashboard">
            <div className="container_admin_dashboard_1 boxes">
                <div className="container_admin_dashboard_1_box_item_left boxes">
                    <div className="container_admin_dashboard_1_box_item_left_title">
                        <span>Project Status</span>
                    </div>
                    <div className="container_admin_dashboard_1_box_item_left_doughnut">
                        <canvas id="myChartDashboard" ></canvas>
                    </div>
                </div>

                <div className="container_admin_dashboard_1_box_item_right" ref={counterRef}>
                    <div className="container_admin_dashboard_1_box_item right_up">
                        <div className="box_right">
                            <div className="box_right_icon">
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <span className="box_right_number">{numberLike}</span>
                            <span className="box_right_content">Like</span>
                        </div>

                        <div className="box_right item_1">
                            <div className="box_right_icon">
                                <i className="fas fa-comment"></i>
                            </div>
                            <span className="box_right_number">{numberComment}</span>
                            <span className="box_right_content">Comment</span>
                        </div>
                    </div>

                    <div className="container_admin_dashboard_1_box_item right_down">
                        <div className="box_right item_2">
                            <div className="box_right_icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <span className="box_right_number">{numberView}</span>
                            <span className="box_right_content">View</span>
                        </div>

                        <div className="box_right item_3">
                            <div className="box_right_icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <span className="box_right_number">{numberContent}</span>
                            <span className="box_right_content">Content</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container_admin_dashboard_2 boxes" >
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

export default DashBoard;
