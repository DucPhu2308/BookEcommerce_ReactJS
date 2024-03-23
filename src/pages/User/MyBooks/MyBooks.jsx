import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";
import "./MyBooks.css";

const MyBooks = () => {
  return (

    <DefaultLayout>
        <div className="container_mybooks_body">
          <div className="container_mybooks_taskbar">
            <ul>
              <li>
                <a href="mybooks.html">Truyện của tôi</a>
              </li>
            </ul>
          </div>
          <div className="container_mybooks_content">
            <div className="container_mybooks_content_header">
              <span>Truyện của tôi</span>
              <button>Thêm truyện mới</button>
            </div>
            <div className="container_mybooks_content_body">
              <div className="container_mybooks_content_body_title">
                <div className="container_mybooks_content_body_title_paga">
                  <span>Tất cả truyện</span>
                </div>
              </div>
              <div className="container_mybooks_content_body_box">
                <div className="container_mybooks_content_body_box_item">
                  <div className="container_mybooks_content_body_box_item_img">
                    <img src="imageBooks/anh1.jpg" alt="book1" />
                  </div>
                  <div className="container_mybooks_content_body_box_item_info">
                    <div className="container_mybooks_content_body_box_item_info_nav">
                      <div className="container_mybooks_content_body_box_item_info_nav_paga">
                        <span className="title_bigger">Truyện 1</span>
                        <span>Số chương: 3</span>
                      </div>
                      <div className="container_mybooks_content_body_box_item_action">
                        <div className="container_mybooks_content_body_box_item_action_edit">
                          <button className="body_box_item_action_edit_btn">
                            Tiếp tục viêt
                          </button>
                          <div className="container_mybooks_content_body_box_item_action_edit_icon"></div>
                        </div>
                        <button className="body_box_item_action_delete_btn">Sửa</button>
                      </div>
                    </div>
                    <div className="container_mybooks_content_body_box_item_info_nav_desc">
                      <span>Đánh giá</span>
                      <span>Lượt bình luận:200</span>
                      <span>Lượt xem: 1000</span>
                    </div>
                  </div>
                </div>
    
                <div className="container_mybooks_content_body_box_item">
                  <div className="container_mybooks_content_body_box_item_img">
                    <img src="imageBooks/anh1.jpg" alt="book1" />
                  </div>
                  <div className="container_mybooks_content_body_box_item_info">
                    <div className="container_mybooks_content_body_box_item_info_nav">
                      <div className="container_mybooks_content_body_box_item_info_nav_paga">
                        <span className="title_bigger">Truyện 1</span>
                        <span>Số chương: 3</span>
                      </div>
                      <div className="container_mybooks_content_body_box_item_action">
                        <div className="container_mybooks_content_body_box_item_action_edit">
                          <button className="body_box_item_action_edit_btn">
                            Tiếp tục viêt
                          </button>
                          <div className="container_mybooks_content_body_box_item_action_edit_icon">
                            <div></div>
                            <div className="box_action_edit_icon_hidden">
                              <div className="box_action_edit_icon_hidden_square">
                                <div className="box_action_edit_icon_hidden_square_listChapter">
                                  <ul>
                                    <li>Chương 1</li>
                                    <li>Chương 2</li>
                                    <li>Chương 3</li>
                                    <li>Chương 4</li>
                                  </ul>
                                </div>
                                <div className="box_action_edit_icon_hidden_square_add_Chapter">
                                  <button>Thêm chương</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="body_box_item_action_delete_btn">Sửa</button>
                      </div>
                    </div>
                    <div className="container_mybooks_content_body_box_item_info_nav_desc">
                      <span>Đánh giá</span>
                      <span>Lượt bình luận:200</span>
                      <span>Lượt xem: 1000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </DefaultLayout>
  );
};

export default MyBooks;
