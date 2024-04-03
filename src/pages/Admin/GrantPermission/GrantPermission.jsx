import './GrantPermission.css';


const GrantPermission = () => {
    return (
        <div className="container_admin_grant_permission">
            <div className="container_admin_grant_permission_body">
                <div className="container_admin_grant_permission_body_title">
                    <div className="container_admin_grant_permission_body_title_paga">
                        <span>Cấp quyền</span>
                    </div>
                </div>
                <div className="container_admin_grant_permission_body_item">
                    <table> 
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên tài khoản</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead> 
                        
                        <tbody className="table_body">
                            <tr>
                                <td className="col_1">1</td>
                                <td className="col_2">username</td>
                                <td className="col_1">Admin</td>
                                <td className="col_1">
                                    <button>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>username</td>
                                <td>Admin</td>
                                <td>
                                    <button>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>username</td>
                                <td>Admin</td>
                                <td>
                                    <button>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>username</td>
                                <td>Admin</td>
                                <td>
                                    <button>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>username</td>
                                <td>Admin</td>
                                <td>
                                    <button>
                                        <i className="fas fa-check"></i>
                                    </button>
                                    <button>
                                        <i className="fas fa-xmark"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
            
        </div>
    );
}

export default GrantPermission;