import './Bank.css'
import logoWeb from '../../assets/images/logo.png'
import { useEffect, useState } from 'react';
import BankApi from '../../API/User/BankApi';
import { Link } from 'react-router-dom';
const Bank = () => {
    const [bankList, setBankList] = useState([])
    const [urlNCB, setUrlNCB] = useState('')

    useEffect(() => {
        const fetchBankList = async () => {
            try {
                const paymentData= {
                    amount: localStorage.getItem('amount')*1000,
                    name: 'NCB',
                };
                const response = await BankApi.createPayment(paymentData);
                setUrlNCB(response.data.data.name);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchBankList();
    }, []);

    useEffect(() => {
        const fetchBankList = async () => {
            try {
                const response = await BankApi.getAll();
                setBankList(response.data.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchBankList();

    }, []);

    const handleBack = () => {
        window.location.href = '/buy-coins';
    }

    return (
        <div className="container_pay_page">
            <div className="container_pay_page_body">
                <div className="container_pay_page_body_nav">
                    <button onClick={handleBack}>
                        <i className="fas fa-arrow-left"></i>
                        <span>Quay lại</span>
                    </button>
                </div>
                <div className="container_pay_page_body_form">
                    <div className="container_pay_page_body_form_nav">
                        <div className="container_pay_page_body_form_nav_image">
                            <img src={logoWeb} alt="" />
                        </div>
                    </div>
                    <div className="container_pay_page_body_form_box">
                        <div className="container_pay_page_body_form_box_title">
                            <span>Chọn ngân hàng thanh toán</span>
                        </div>
                        <div className="container_pay_page_body_form_box list_bank">
                            <div className="box_list_bank">
                                {bankList.map((bank, index) => (
                                    bank.shortName === "NCB" ? (
                                        <>
                                            <Link to={urlNCB}>
                                                <div className="box_list_bank_grid" key={index}>
                                                    <div className="box_list_bank_grid_row">
                                                        <img src={bank.logo} alt={bank.name} />
                                                    </div>
                                                </div>
                                            </Link>
                                        </>

                                    ) : (
                                        <>
                                            <div className="box_list_bank_grid" key={index}>
                                                <div className="box_list_bank_grid_row">
                                                    <img src={bank.logo} alt={bank.name} />
                                                </div>
                                            </div>
                                        </>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_pay_page_body_footer">
                    <span>
                        Phát triển bởi NT2P
                        <i className="fas fa-light fa-circle-c"></i>
                        2024
                    </span>
                </div>
            </div>
        </div >
    )
}
export default Bank;