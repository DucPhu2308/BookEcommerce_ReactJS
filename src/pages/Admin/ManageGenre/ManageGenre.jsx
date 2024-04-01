
import './ManageGenre.css'
import { useEffect, useState } from 'react';

const ManageGenre = () => {

    const [addGenre, setAddGenre] = useState(false);
    const [saveGenre, setSaveGenre] = useState(false);

    const handleAddGenre = () => {
        setAddGenre(!addGenre);
    }

    useEffect(() => {
        if (saveGenre) {
            const input = document.querySelector('.container_admin_option_content_table table tr:first-child td input').value;
            document.querySelector('.container_admin_option_content_table table').insertAdjacentHTML('beforeend', `
                <tr>
                    <td><span>${input}</span></td>
                    <td class="option_content_table_btn_action">
                        <button>
                            <i class="fas fa-edit"></i>
                        </button>
                        <button>
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `)
        }
        setAddGenre(false);
    }
    , [saveGenre])

    useEffect(() => {

        if (addGenre) {
            document.querySelector('.container_admin_option_content_table table').insertAdjacentHTML('afterbegin', `
                <tr>
                    <td><input type="text" placeholder="Nhập tên thể loại"/></td>
                    <td class="option_content_table_btn_action">
                        <button id="saveItem">
                            <i class="fas fa-save"></i>
                        </button>
                        <button>
                            <i class="fas fa-times"></i>
                        </button>
                    </td>
                </tr>
            `)
        }
    }
    , [addGenre])

    useEffect(() => {
        const btnSaveGenre = document.getElementById('saveItem');
        if (btnSaveGenre) {
            btnSaveGenre.addEventListener('click', () => {
                setSaveGenre(true);
                
            })
            
        }
    }
    , [addGenre])

    useEffect(() => {
        if (addGenre) {
            document.querySelector('.container_admin_option_content_table table tr:first-child td input').focus();
        }
    })

    

    

    return (
        <div className="container_admin_option">
            <div className="container_admin_option_body">
                <div className="container_admin_option_title">
                    <div className="container_admin_option_title_item">
                        <span>Quản lý thể loại</span>
                    </div>
                    <div className="container_admin_option_title_search">
                        <input type="text" placeholder="Tìm kiếm"/>
                            <button>
                                <i className="fas fa-search"></i>
                            </button>
                    </div>
                </div>
                <div className="container_admin_option_content">
                    <div className="container_admin_option_content_add">
                        <button onClick={handleAddGenre}>Thêm thể loại</button>
                    </div>
                    <div className="container_admin_option_content_table">
                        <table>
                            <tr>
                                <td><span>Thể loại 1</span></td>
                                <td className="option_content_table_btn_action">
                                    <button>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Thể loại 1</span></td>
                                <td className="option_content_table_btn_action">
                                    <button>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default ManageGenre






// const [addGenre, setAddGenre] = useState(false);
//     const [saveGenre, setSaveGenre] = useState(false);

//     const input= document.querySelector('.container_admin_option_content_table table tr:first-child td input');

//     // Lưu thể loại mới
//     const btnSaveGenre = document.getElementById('saveItem');
//     if (btnSaveGenre) {
//         btnSaveGenre.addEventListener('click', () => {
//             setSaveGenre(true);
            
//         })
//     }


//     useEffect(() => {
//         if (saveGenre) {
//             // Lấy giá trị input
//             const input = document.querySelector('.container_admin_option_content_table table tr:first-child td input').value;
//             // Thêm thể loại mới vào bảng
//             document.querySelector('.container_admin_option_content_table table').insertAdjacentHTML('beforeend', `
//                 <tr>
//                     <td><span>${input}</span></td>
//                     <td class="option_content_table_btn_action">
//                         <button>
//                             <i class="fas fa-edit"></i>
//                         </button>
//                         <button>
//                             <i class="fas fa-trash-alt"></i>
//                         </button>
//                     </td>
//                 </tr>
//             `)
//         }
//     }, [saveGenre])




//     // Thêm cột thêm thể loại ở đầu bảng 
//     const handleAddGenre = () => {
//         setAddGenre(!addGenre);
//     }

//     useEffect(() => {
//         if (addGenre) {
//             document.querySelector('.container_admin_option_content_table table').insertAdjacentHTML('afterbegin', `
//             <tr>
//             <td><input type="text" placeholder="Nhập tên thể loại"/></td>
//             <td class="option_content_table_btn_action">
//                 <button id="saveItem">
//                     <i class="fas fa-save"></i>
//                 </button>
//                 <button>
//                     <i class="fas fa-times"></i>
//                 </button>
//             </td>
//         </tr>
//             `)
//         }
//     })