import './ManageComment.css';
import { useState } from 'react';

const listComment = [
    {
        id: 1,
        story: "Truyện 1",
        author:"Tác giả 1",
        user: "Người 1",
        content: "Nội dung 1",
        time: "Thời gian 1"
    },
    {
        id: 2,
        story: "Truyện 2",
        author:"Tác giả 2",
        user: "Người 2",
        content: "Nội dung 2",
        time: "Thời gian 2"
    },
]

const ManageComment = ()=>{
    const [comment, setComment] = useState(listComment);
    const handleDeleteComment = (id) => {
        const newListComment = comment.filter(item => item.id !== id);
        setComment(newListComment);
    }
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
                        {comment.map((comment) => {
                            return (
                                <tr key={comment.id}>
                                    <td className="col2">{comment.story}</td>
                                    <td className="col2">{comment.author}</td>
                                    <td className="col2">{comment.user}</td>
                                    <td className="col2">{comment.content}</td>
                                    <td className="col1">{comment.time}</td>
                                    <td className="col2">
                                        <button>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                        <button onClick={()=>handleDeleteComment(comment.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })};
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageComment;