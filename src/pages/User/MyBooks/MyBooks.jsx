import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout";

const MyBooks = () => {
  return (

    <DefaultLayout>
        <div class="container_mybooks_body">
          <div class="container_mybooks_taskbar">
            <ul>
              <li>
                <a href="mybooks.html">Truyện của tôi</a>
              </li>
            </ul>
          </div>
          <div class="container_mybooks_content">
            <div class="container_mybooks_content_header">
              <span>Truyện của tôi</span>
              <button>Thêm truyện mới</button>
            </div>
            <div class="container_mybooks_content_body">
              <div class="container_mybooks_content_body_title">
                <div class="container_mybooks_content_body_title_paga">
                  <span>Tất cả truyện</span>
                </div>
              </div>
              <div class="container_mybooks_content_body_box">
                <div class="container_mybooks_content_body_box_item">
                  <div class="container_mybooks_content_body_box_item_img">
                    <img src="imageBooks/anh1.jpg" alt="book1" />
                  </div>
                  <div class="container_mybooks_content_body_box_item_info">
                    <div class="container_mybooks_content_body_box_item_info_nav">
                      <div class="container_mybooks_content_body_box_item_info_nav_paga">
                        <span class="title_bigger">Truyện 1</span>
                        <span>Số chương: 3</span>
                      </div>
                      <div class="container_mybooks_content_body_box_item_action">
                        <div class="container_mybooks_content_body_box_item_action_edit">
                          <button class="body_box_item_action_edit_btn">
                            Tiếp tục viêt
                          </button>
                          <div class="container_mybooks_content_body_box_item_action_edit_icon"></div>
                        </div>
                        <button class="body_box_item_action_delete_btn">Sửa</button>
                      </div>
                    </div>
                    <div class="container_mybooks_content_body_box_item_info_nav_desc">
                      <span>Đánh giá</span>
                      <span>Lượt bình luận:200</span>
                      <span>Lượt xem: 1000</span>
                    </div>
                  </div>
                </div>
    
                <div class="container_mybooks_content_body_box_item">
                  <div class="container_mybooks_content_body_box_item_img">
                    <img src="imageBooks/anh1.jpg" alt="book1" />
                  </div>
                  <div class="container_mybooks_content_body_box_item_info">
                    <div class="container_mybooks_content_body_box_item_info_nav">
                      <div class="container_mybooks_content_body_box_item_info_nav_paga">
                        <span class="title_bigger">Truyện 1</span>
                        <span>Số chương: 3</span>
                      </div>
                      <div class="container_mybooks_content_body_box_item_action">
                        <div class="container_mybooks_content_body_box_item_action_edit">
                          <button class="body_box_item_action_edit_btn">
                            Tiếp tục viêt
                          </button>
                          <div class="container_mybooks_content_body_box_item_action_edit_icon">
                            <div></div>
                            <div class="box_action_edit_icon_hidden">
                              <div class="box_action_edit_icon_hidden_square">
                                <div class="box_action_edit_icon_hidden_square_listChapter">
                                  <ul>
                                    <li>Chương 1</li>
                                    <li>Chương 2</li>
                                    <li>Chương 3</li>
                                    <li>Chương 4</li>
                                  </ul>
                                </div>
                                <div class="box_action_edit_icon_hidden_square_add_Chapter">
                                  <button>Thêm chương</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button class="body_box_item_action_delete_btn">Sửa</button>
                      </div>
                    </div>
                    <div class="container_mybooks_content_body_box_item_info_nav_desc">
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
