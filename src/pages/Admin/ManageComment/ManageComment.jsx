import './ManageComment.css';



const ManageComment = ()=>{
    return(
        <div className="container_admin_manage_comment">
            <div className="container_admin_manage_comment_body">
                <div className="container_admin_manage_comment_body_title">
                    <div className="container_admin_manage_comment_body_title_paga">
                        <span>Quản lý bình luận</span>
                    </div>
                </div>
                <div className="container_admin_manage_comment_body_table">
                    <table>
                        <tr>
                            <th>Truyện</th>
                            <th>Tác giả</th>
                            <th>Người bình luận</th>
                            <th>Nội dung</th>
                            <th>Thời gian</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td className="col2">Truyện 1</td>
                            <td className="col2">Tác giả 1</td>
                            <td className="col2">Người 1</td>
                            <td className="col2">Nội dung 1</td>
                            <td className="col1">Thời gian 1</td>
                            <td className="col2">
                                <button>
                                    <i className="fas fa-eye"></i>
                                </button>
                                <button>
                                    <i className="fas fa-trash"></i>
                                </button>
                                
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageComment;