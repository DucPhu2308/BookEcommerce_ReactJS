import './Footer.css';
import logo from '@/assets/images/logo.png';

function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="footer_container">
                <ul>
                    <li>
                        <div className="footer_container_item">
                            <img src={logo} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div className="footer_container_item">
                            <span>Copyright @ 2024</span>
                        </div>
                    </li>
                    <li>
                        <div className="footer_container_item">
                            <span>Chính sách bảo mật</span>
                        </div>
                    </li>
                    <li>
                        <div className="footer_container_item">
                            <span>Liên hệ bản quyền</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="footer_container_parga">
                <p>Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên web này. 
                    Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức. 
                    Liên hệ với chúng tôi 
                    <a href="#">tại đây</a>
                </p>
            </div>
        </div>
    </footer>);
}

export default Footer;